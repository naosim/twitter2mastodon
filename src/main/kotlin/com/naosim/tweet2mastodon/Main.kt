package com.naosim.tweet2mastodon

import com.naosim.gaskotlin.*
import com.naosim.tweet2mastodon.domain.*
import com.naosim.tweet2mastodon.infra.*

@JsName("main")
fun run(
        userName: String,
        mastodonConfig: MastodonConfig,
        properties: Properties = js("PropertiesService.getScriptProperties()"),
        urlFetchApp: UrlFetchApp = js("UrlFetchApp")
) {
    val urlFetchAppWrapper = UrlFetchAppWrapper(urlFetchApp)

    val mastodonRepository = MastodonRepositoryImpl(
            HostName(mastodonConfig.hostName),
            AccessToken(mastodonConfig.accessToken),
            urlFetchAppWrapper
    )

    Logger.log("setup TwitterTimelineRepositoryImpl")
    val twitterTimelineRepository = TwitterTimelineRepositoryImpl(
            urlFetchAppWrapper,
            UserName(userName)
    )

    Logger.log("setup CacheRepositoryImpl")
    val cacheRepository = CacheRepositoryImpl(
            properties
    )

    Logger.log("run MainService")
    MainService(
            twitterTimelineRepository,
            cacheRepository,
            mastodonRepository
    ).run()
}

class MainService(
        private val twitterTimelineRepository: TwitterTimelineRepository,
        private val cacheRepository: CacheRepository,
        private val mastodonRepository: MastodonRepository
) {

    fun run() {
        val list = twitterTimelineRepository.get()

        try {
            list
                    .reversed()
                    .filter { cacheRepository.notHave(it.id) }
                    .forEach {
                        mastodonRepository.post(TootBody(it.body.value))
                        cacheRepository.push(it.id, it.timestamp)
                    }
        } finally {
            cacheRepository.save()
        }
        cacheRepository.deleteBefore(list.last().timestamp)
        cacheRepository.save()
    }
}


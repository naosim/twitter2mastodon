package com.naosim.tweet2mastodon.infra

import com.naosim.gaskotlin.Logger
import com.naosim.gaskotlin.UrlFetchApp
import com.naosim.gaskotlin.UrlFetchAppWrapper
import com.naosim.tweet2mastodon.domain.MastodonRepository
import com.naosim.tweet2mastodon.domain.TootBody
import kotlin.js.json


external class MastodonConfig {
    val hostName: String
    val accessToken: String
}
data class HostName(val value: String)
data class AccessToken(val value: String)

class MastodonRepositoryImpl(
        private val hostName: HostName,
        private val accessToken: AccessToken,
        private val urlFetchAppWrapper: UrlFetchAppWrapper
): MastodonRepository {
    override fun post(tootBody: TootBody) {
        Logger.log("post ${tootBody}")
        urlFetchAppWrapper.getContentText(
                "https://${this.hostName.value}/api/v1/statuses",
                json(
                        "method" to "post",
                        "headers" to json("Authorization" to "Bearer ${this.accessToken.value}"),
                        "payload" to json("status" to tootBody.value)
                )
        )
    }

}
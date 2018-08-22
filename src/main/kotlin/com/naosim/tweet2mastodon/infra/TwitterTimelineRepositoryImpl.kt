package com.naosim.tweet2mastodon.infra

import com.naosim.gaskotlin.Logger
import com.naosim.gaskotlin.UrlFetchAppWrapper
import com.naosim.tweet2mastodon.domain.*
import kotlin.js.Json

class TwitterTimelineRepositoryImpl (
        private val urlFetchAppWrapper: UrlFetchAppWrapper,
        private val userName: UserName
): TwitterTimelineRepository {

    override fun get(): List<Tweet> {
        Logger.log("get")
        val ary = JSON.parse<Array<Json>>(urlFetchAppWrapper.getContentText("http://naosim.sakura.ne.jp/app/tweetjson/?username=${userName.value}"))
        Logger.log("after get")
        return ary.map {
            val timestamp = it["timestamp"] as Int
            Logger.log("after timestamp")
            Tweet(
                    TweetId(it["guid"] as String),
                    Body(it["description"] as String),
                    PubDate(it["pubDate"] as String),
                    TweetTimestamp(it["timestamp"] as Int)
            )
        }
    }


}
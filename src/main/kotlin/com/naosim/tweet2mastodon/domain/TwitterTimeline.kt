package com.naosim.tweet2mastodon.domain

import com.naosim.tweet2mastodon.lib.Entity
import com.naosim.tweet2mastodon.lib.Id
import com.naosim.tweet2mastodon.lib.Timestamp

data class TweetId(override val value: String): Id
data class UserName(val value:String)
data class Body(val value: String)
data class PubDate(val value: String)
data class TweetTimestamp(override val value: Int): Timestamp
data class Tweet(
        override val id: TweetId,
        val body: Body,
        val pubDate: PubDate,
        override val timestamp: TweetTimestamp
): Entity;

interface TwitterTimelineRepository {
    fun get(): List<Tweet>
}


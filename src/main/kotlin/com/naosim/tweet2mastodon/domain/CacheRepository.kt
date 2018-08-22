package com.naosim.tweet2mastodon.domain

import com.naosim.tweet2mastodon.lib.EntityRaw
import com.naosim.tweet2mastodon.lib.Id
import com.naosim.tweet2mastodon.lib.Timestamp

interface CacheRepository {
    fun has(id: Id): Boolean
    fun notHave(id: Id): Boolean
    fun push(entityRaw: EntityRaw)
    fun push(id: Id, timestamp: Timestamp)
    fun save()
    fun deleteBefore(timestamp: Timestamp)
}


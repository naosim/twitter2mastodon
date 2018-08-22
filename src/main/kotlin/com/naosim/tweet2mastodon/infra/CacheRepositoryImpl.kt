package com.naosim.tweet2mastodon.infra

import com.naosim.gaskotlin.Properties
import com.naosim.gaskotlin.PropertiesWrapper
import com.naosim.tweet2mastodon.domain.CacheRepository
import com.naosim.tweet2mastodon.lib.EntityRaw
import com.naosim.tweet2mastodon.lib.Id
import com.naosim.tweet2mastodon.lib.Timestamp
import kotlin.js.Json
import kotlin.js.json

data class EntityRawId(override val value: String): Id
data class EntityRawTimestamp(override val value: Int): Timestamp

class CacheRepositoryImpl: CacheRepository {
    private val propertiesWrapper: PropertiesWrapper
    private var list: List<EntityRaw>
    private val map: Map<String, Int>

    constructor(properties: Properties, key: String = "cache") {
        this.propertiesWrapper = PropertiesWrapper(properties, key)
        val ary: Array<Json> = propertiesWrapper.getAsJsonArray()
        list = ary.map {
            EntityRaw(EntityRawId(it["id"] as String), EntityRawTimestamp(it["timestamp"] as Int))
        }.toList()
        val map: MutableMap<String, Int> = mutableMapOf()
        list.forEach { map[it.id.value] = it.timestamp.value }
        this.map = map.toMap()
    }

    override fun has(id: Id): Boolean {
        return map.containsKey(id.value)
    }

    override fun notHave(id: Id): Boolean {
        return !this.has(id)
    }

    override fun push(entityRaw: EntityRaw) {
        this.list = this.list.plus(entityRaw)
    }

    override fun push(id: Id, timestamp: Timestamp) {
        this.push(EntityRaw(id, timestamp))
    }

    override fun save() {
        val ary = list.map { json("id" to it.id.value, "timestamp" to it.timestamp.value) }.toTypedArray()
        propertiesWrapper.save(ary)
    }

    override fun deleteBefore(timestamp: Timestamp) {
        if(this.list.isEmpty()) {
            return
        }
        this.list = this.list.filter { it.timestamp >= timestamp }
    }
}
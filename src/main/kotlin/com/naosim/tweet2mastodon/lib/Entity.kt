package com.naosim.tweet2mastodon.lib

interface Id {
    val value: String
}
interface Timestamp: Comparable<Timestamp> {
    val value: Int
    override fun compareTo(other: Timestamp): Int {
        return value - other.value
    }
}

data class EntityRaw (
        override val id: Id,
        override val timestamp: Timestamp
): Entity

interface Entity {
    val id: Id
    val timestamp: Timestamp
}
package com.naosim.tweet2mastodon.domain

data class TootBody(val value: String)

interface MastodonRepository {
    fun post(tootBody: TootBody)
}
package com.naosim.gaskotlin

import kotlin.js.Json

external class UrlFetchApp {
    fun fetch(url: String): HTTPResponse
    fun fetch(url: String, params: Json): HTTPResponse
}

external class HTTPResponse {
    fun getContentText(): String
    fun getContentText(charset: String): String
    fun getResponseCode(): Int
}

class UrlFetchAppWrapper(val urlFetchApp: UrlFetchApp) {
    fun getContentText(url: String): String {
        val res = urlFetchApp.fetch(url)
        if(res.getResponseCode() >= 400) {
            throw Error("bat status code: ${res.getResponseCode()}")
        }
        return res.getContentText()
    }

    fun getContentText(url: String, params: Json): String {
        val res = urlFetchApp.fetch(url, params)
        if(res.getResponseCode() >= 400) {
            throw Error("bat status code: ${res.getResponseCode()}")
        }
        return res.getContentText()
    }
}
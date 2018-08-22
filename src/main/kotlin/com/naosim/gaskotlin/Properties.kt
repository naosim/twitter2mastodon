package com.naosim.gaskotlin

import kotlin.js.Json
import kotlin.js.json

external class Properties {
    fun getProperty(key: String): String?
    fun setProperty(key: String, value: String)

    fun deleteAllProperties(): Properties
    fun deleteProperty(key: String): Properties
    fun getKeys(): Array<String>
}

class PropertiesWrapper(
        private val properties: Properties,
        private val key: String
) {

    fun getAsString():String? {
        return properties.getProperty(key)
    }

    @Suppress("UNCHECKED_CAST")
    fun  getAsJsonArray():Array<Json> {
        val text = properties.getProperty(key)
        return if(text == null) {
            emptyArray()
        } else {
            return JSON.parse(text)
        }
    }

    @Suppress("UNCHECKED_CAST_TO_EXTERNAL_INTERFACE")
    fun getAsJson():Json {
        val text = properties.getProperty(key)
        return if(text == null) {
            json()
        } else {
            JSON.parse(text) as Json
        }
    }

    fun save(value: Any) {
        val text = JSON.stringify(value)
        saveAsString(text)
    }

    fun saveAsString(value: String) {
        properties.setProperty(key, value)
    }

    fun deleteProperty() {
        properties.deleteProperty(key)
    }
}
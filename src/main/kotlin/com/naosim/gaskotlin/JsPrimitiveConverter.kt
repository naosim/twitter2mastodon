package com.naosim.gaskotlin

import kotlin.js.Json
import kotlin.js.json

class JsPrimitiveConverter {
    companion object {
        private fun toPrimitiveFromMap(map:Map<*, *>): Json {
            var result = json()
            map.entries.forEach {

                result[it.key.toString()] = if(it.value is List<*>) {
                    (it.value as List<Any?>).toTypedArray()
                } else {
                    it.value
                }
            }
            return result
        }

        private fun toPrimitiveFromObject(obj: Any): Any {
            return JSON.parse(JSON.stringify(obj))
        }

        private fun toPrimitiveFromAry(ary:Array<*>): Array<Any?> {
            return ary.map {
                toPrimitive(it)
            }.toTypedArray()
        }

        fun toPrimitive(it:Any?): Any? {
            if(it == null) {
                return null
            }
            return if(it is String || it is Boolean || it is Number) {
                it
            } else if(it is Array<*>) {
                toPrimitiveFromAry(it)
            } else if(it is Map<*, *>) {
                toPrimitiveFromMap(it)
            } else if(it is Collection<*>) {
                toPrimitiveFromAry(it.toTypedArray())
            } else {
                toPrimitiveFromObject(it)
            }
        }
    }
}
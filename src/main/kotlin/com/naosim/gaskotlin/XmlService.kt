package com.naosim.gaskotlin

external class XmlService {
    companion object {
        fun parse(text:String): Document
    }
}

external class Document {
    fun getRootElement(): Element
}

external class Element {
    fun getChildren(name:String): Array<Element>
    fun getChildText(name:String):String?
    fun getAllContent(): Array<Content>
    fun getContent(): String
    fun getAttribute(name:String):Attribute?
    fun getValue():String
}

external class Attribute {
    fun getName():String
    fun getValue():String
}

external class Content {
    fun getType(): String
    fun asText(): String
    fun asElement(): Element
}
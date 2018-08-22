if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'output'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'output'.");
}
var output = function (_, Kotlin) {
  'use strict';
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var List = Kotlin.kotlin.collections.List;
  var throwCCE = Kotlin.throwCCE;
  var toString = Kotlin.toString;
  var Map = Kotlin.kotlin.collections.Map;
  var Collection = Kotlin.kotlin.collections.Collection;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var toMap = Kotlin.kotlin.collections.toMap_abgq59$;
  var Comparable = Kotlin.kotlin.Comparable;
  function JsPrimitiveConverter() {
    JsPrimitiveConverter$Companion_getInstance();
  }
  function JsPrimitiveConverter$Companion() {
    JsPrimitiveConverter$Companion_instance = this;
  }
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  JsPrimitiveConverter$Companion.prototype.toPrimitiveFromMap_0 = function (map) {
    var result = {v: json([])};
    var tmp$;
    tmp$ = map.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0, tmp$_1, tmp$_2;
      tmp$_2 = toString(element.key);
      if (Kotlin.isType(element.value, List)) {
        tmp$_1 = copyToArray(Kotlin.isType(tmp$_0 = element.value, List) ? tmp$_0 : throwCCE());
      }
       else {
        tmp$_1 = element.value;
      }
      result.v[tmp$_2] = tmp$_1;
    }
    return result.v;
  };
  JsPrimitiveConverter$Companion.prototype.toPrimitiveFromObject_0 = function (obj) {
    return JSON.parse(JSON.stringify(obj));
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  JsPrimitiveConverter$Companion.prototype.toPrimitiveFromAry_0 = function (ary) {
    var destination = ArrayList_init(ary.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== ary.length; ++tmp$) {
      var item = ary[tmp$];
      destination.add_11rb$(this.toPrimitive_s8jyv4$(item));
    }
    return copyToArray(destination);
  };
  JsPrimitiveConverter$Companion.prototype.toPrimitive_s8jyv4$ = function (it) {
    var tmp$;
    if (it == null) {
      return null;
    }
    if (typeof it === 'string' || typeof it === 'boolean' || Kotlin.isNumber(it)) {
      tmp$ = it;
    }
     else if (Kotlin.isArray(it)) {
      tmp$ = this.toPrimitiveFromAry_0(it);
    }
     else if (Kotlin.isType(it, Map)) {
      tmp$ = this.toPrimitiveFromMap_0(it);
    }
     else if (Kotlin.isType(it, Collection)) {
      tmp$ = this.toPrimitiveFromAry_0(copyToArray(it));
    }
     else {
      tmp$ = this.toPrimitiveFromObject_0(it);
    }
    return tmp$;
  };
  JsPrimitiveConverter$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JsPrimitiveConverter$Companion_instance = null;
  function JsPrimitiveConverter$Companion_getInstance() {
    if (JsPrimitiveConverter$Companion_instance === null) {
      new JsPrimitiveConverter$Companion();
    }
    return JsPrimitiveConverter$Companion_instance;
  }
  JsPrimitiveConverter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsPrimitiveConverter',
    interfaces: []
  };
  function PropertiesWrapper(properties, key) {
    this.properties_0 = properties;
    this.key_0 = key;
  }
  PropertiesWrapper.prototype.getAsString = function () {
    return this.properties_0.getProperty(this.key_0);
  };
  PropertiesWrapper.prototype.getAsJsonArray = function () {
    var tmp$;
    var text = this.properties_0.getProperty(this.key_0);
    if (text == null) {
      tmp$ = [];
    }
     else {
      return JSON.parse(text);
    }
    return tmp$;
  };
  PropertiesWrapper.prototype.getAsJson = function () {
    var tmp$, tmp$_0;
    var text = this.properties_0.getProperty(this.key_0);
    if (text == null) {
      tmp$_0 = json([]);
    }
     else {
      tmp$_0 = Kotlin.isType(tmp$ = JSON.parse(text), Object) ? tmp$ : throwCCE();
    }
    return tmp$_0;
  };
  PropertiesWrapper.prototype.save_za3rmp$ = function (value) {
    var text = JSON.stringify(value);
    this.saveAsString_61zpoe$(text);
  };
  PropertiesWrapper.prototype.saveAsString_61zpoe$ = function (value) {
    this.properties_0.setProperty(this.key_0, value);
  };
  PropertiesWrapper.prototype.deleteProperty = function () {
    this.properties_0.deleteProperty(this.key_0);
  };
  PropertiesWrapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PropertiesWrapper',
    interfaces: []
  };
  function UrlFetchAppWrapper(urlFetchApp) {
    this.urlFetchApp = urlFetchApp;
  }
  UrlFetchAppWrapper.prototype.getContentText_61zpoe$ = function (url) {
    var res = this.urlFetchApp.fetch(url);
    if (res.getResponseCode() >= 400) {
      throw Error_init('bat status code: ' + res.getResponseCode());
    }
    return res.getContentText();
  };
  UrlFetchAppWrapper.prototype.getContentText_uvq6m$ = function (url, params) {
    var res = this.urlFetchApp.fetch(url, params);
    if (res.getResponseCode() >= 400) {
      throw Error_init('bat status code: ' + res.getResponseCode());
    }
    return res.getContentText();
  };
  UrlFetchAppWrapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UrlFetchAppWrapper',
    interfaces: []
  };
  function run(userName, mastodonConfig, properties, urlFetchApp) {
    if (properties === void 0)
      properties = PropertiesService.getScriptProperties();
    if (urlFetchApp === void 0)
      urlFetchApp = UrlFetchApp;
    var urlFetchAppWrapper = new UrlFetchAppWrapper(urlFetchApp);
    var mastodonRepository = new MastodonRepositoryImpl(new HostName(mastodonConfig.hostName), new AccessToken(mastodonConfig.accessToken), urlFetchAppWrapper);
    Logger.log('setup TwitterTimelineRepositoryImpl');
    var twitterTimelineRepository = new TwitterTimelineRepositoryImpl(urlFetchAppWrapper, new UserName(userName));
    Logger.log('setup CacheRepositoryImpl');
    var cacheRepository = CacheRepositoryImpl_init(properties);
    Logger.log('run MainService');
    (new MainService(twitterTimelineRepository, cacheRepository, mastodonRepository)).run();
  }
  function MainService(twitterTimelineRepository, cacheRepository, mastodonRepository) {
    this.twitterTimelineRepository_0 = twitterTimelineRepository;
    this.cacheRepository_0 = cacheRepository;
    this.mastodonRepository_0 = mastodonRepository;
  }
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  MainService.prototype.run = function () {
    var list = this.twitterTimelineRepository_0.get();
    try {
      var $receiver = reversed(list);
      var destination = ArrayList_init_0();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (this.cacheRepository_0.notHave_i3b3ya$(element.id))
          destination.add_11rb$(element);
      }
      var tmp$_0;
      tmp$_0 = destination.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        this.mastodonRepository_0.post_pz5vte$(new TootBody(element_0.body.value));
        this.cacheRepository_0.push_wcjzob$(element_0.id, element_0.timestamp);
      }
    }
    finally {
      this.cacheRepository_0.save();
    }
    this.cacheRepository_0.deleteBefore_616xlb$(last(list).timestamp);
    this.cacheRepository_0.save();
  };
  MainService.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MainService',
    interfaces: []
  };
  function CacheRepository() {
  }
  CacheRepository.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CacheRepository',
    interfaces: []
  };
  function TootBody(value) {
    this.value = value;
  }
  TootBody.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TootBody',
    interfaces: []
  };
  TootBody.prototype.component1 = function () {
    return this.value;
  };
  TootBody.prototype.copy_61zpoe$ = function (value) {
    return new TootBody(value === void 0 ? this.value : value);
  };
  TootBody.prototype.toString = function () {
    return 'TootBody(value=' + Kotlin.toString(this.value) + ')';
  };
  TootBody.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  TootBody.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function MastodonRepository() {
  }
  MastodonRepository.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MastodonRepository',
    interfaces: []
  };
  function TweetId(value) {
    this.value_r1i39l$_0 = value;
  }
  Object.defineProperty(TweetId.prototype, 'value', {
    get: function () {
      return this.value_r1i39l$_0;
    }
  });
  TweetId.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TweetId',
    interfaces: [Id]
  };
  TweetId.prototype.component1 = function () {
    return this.value;
  };
  TweetId.prototype.copy_61zpoe$ = function (value) {
    return new TweetId(value === void 0 ? this.value : value);
  };
  TweetId.prototype.toString = function () {
    return 'TweetId(value=' + Kotlin.toString(this.value) + ')';
  };
  TweetId.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  TweetId.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function UserName(value) {
    this.value = value;
  }
  UserName.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserName',
    interfaces: []
  };
  UserName.prototype.component1 = function () {
    return this.value;
  };
  UserName.prototype.copy_61zpoe$ = function (value) {
    return new UserName(value === void 0 ? this.value : value);
  };
  UserName.prototype.toString = function () {
    return 'UserName(value=' + Kotlin.toString(this.value) + ')';
  };
  UserName.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  UserName.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function Body(value) {
    this.value = value;
  }
  Body.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Body',
    interfaces: []
  };
  Body.prototype.component1 = function () {
    return this.value;
  };
  Body.prototype.copy_61zpoe$ = function (value) {
    return new Body(value === void 0 ? this.value : value);
  };
  Body.prototype.toString = function () {
    return 'Body(value=' + Kotlin.toString(this.value) + ')';
  };
  Body.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Body.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function PubDate(value) {
    this.value = value;
  }
  PubDate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PubDate',
    interfaces: []
  };
  PubDate.prototype.component1 = function () {
    return this.value;
  };
  PubDate.prototype.copy_61zpoe$ = function (value) {
    return new PubDate(value === void 0 ? this.value : value);
  };
  PubDate.prototype.toString = function () {
    return 'PubDate(value=' + Kotlin.toString(this.value) + ')';
  };
  PubDate.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  PubDate.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function TweetTimestamp(value) {
    this.value_m01r46$_0 = value;
  }
  Object.defineProperty(TweetTimestamp.prototype, 'value', {
    get: function () {
      return this.value_m01r46$_0;
    }
  });
  TweetTimestamp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TweetTimestamp',
    interfaces: [Timestamp]
  };
  TweetTimestamp.prototype.component1 = function () {
    return this.value;
  };
  TweetTimestamp.prototype.copy_za3lpa$ = function (value) {
    return new TweetTimestamp(value === void 0 ? this.value : value);
  };
  TweetTimestamp.prototype.toString = function () {
    return 'TweetTimestamp(value=' + Kotlin.toString(this.value) + ')';
  };
  TweetTimestamp.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  TweetTimestamp.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function Tweet(id, body, pubDate, timestamp) {
    this.id_hj8xfu$_0 = id;
    this.body = body;
    this.pubDate = pubDate;
    this.timestamp_73ih8t$_0 = timestamp;
  }
  Object.defineProperty(Tweet.prototype, 'id', {
    get: function () {
      return this.id_hj8xfu$_0;
    }
  });
  Object.defineProperty(Tweet.prototype, 'timestamp', {
    get: function () {
      return this.timestamp_73ih8t$_0;
    }
  });
  Tweet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tweet',
    interfaces: [Entity]
  };
  Tweet.prototype.component1 = function () {
    return this.id;
  };
  Tweet.prototype.component2 = function () {
    return this.body;
  };
  Tweet.prototype.component3 = function () {
    return this.pubDate;
  };
  Tweet.prototype.component4 = function () {
    return this.timestamp;
  };
  Tweet.prototype.copy_c7x6by$ = function (id, body, pubDate, timestamp) {
    return new Tweet(id === void 0 ? this.id : id, body === void 0 ? this.body : body, pubDate === void 0 ? this.pubDate : pubDate, timestamp === void 0 ? this.timestamp : timestamp);
  };
  Tweet.prototype.toString = function () {
    return 'Tweet(id=' + Kotlin.toString(this.id) + (', body=' + Kotlin.toString(this.body)) + (', pubDate=' + Kotlin.toString(this.pubDate)) + (', timestamp=' + Kotlin.toString(this.timestamp)) + ')';
  };
  Tweet.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.body) | 0;
    result = result * 31 + Kotlin.hashCode(this.pubDate) | 0;
    result = result * 31 + Kotlin.hashCode(this.timestamp) | 0;
    return result;
  };
  Tweet.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.body, other.body) && Kotlin.equals(this.pubDate, other.pubDate) && Kotlin.equals(this.timestamp, other.timestamp)))));
  };
  function TwitterTimelineRepository() {
  }
  TwitterTimelineRepository.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TwitterTimelineRepository',
    interfaces: []
  };
  function EntityRawId(value) {
    this.value_qb4jhp$_0 = value;
  }
  Object.defineProperty(EntityRawId.prototype, 'value', {
    get: function () {
      return this.value_qb4jhp$_0;
    }
  });
  EntityRawId.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EntityRawId',
    interfaces: [Id]
  };
  EntityRawId.prototype.component1 = function () {
    return this.value;
  };
  EntityRawId.prototype.copy_61zpoe$ = function (value) {
    return new EntityRawId(value === void 0 ? this.value : value);
  };
  EntityRawId.prototype.toString = function () {
    return 'EntityRawId(value=' + Kotlin.toString(this.value) + ')';
  };
  EntityRawId.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  EntityRawId.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function EntityRawTimestamp(value) {
    this.value_hqabvu$_0 = value;
  }
  Object.defineProperty(EntityRawTimestamp.prototype, 'value', {
    get: function () {
      return this.value_hqabvu$_0;
    }
  });
  EntityRawTimestamp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EntityRawTimestamp',
    interfaces: [Timestamp]
  };
  EntityRawTimestamp.prototype.component1 = function () {
    return this.value;
  };
  EntityRawTimestamp.prototype.copy_za3lpa$ = function (value) {
    return new EntityRawTimestamp(value === void 0 ? this.value : value);
  };
  EntityRawTimestamp.prototype.toString = function () {
    return 'EntityRawTimestamp(value=' + Kotlin.toString(this.value) + ')';
  };
  EntityRawTimestamp.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  EntityRawTimestamp.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function CacheRepositoryImpl() {
    this.propertiesWrapper_0 = null;
    this.list_0 = null;
    this.map_0 = null;
  }
  CacheRepositoryImpl.prototype.has_i3b3ya$ = function (id) {
    return this.map_0.containsKey_11rb$(id.value);
  };
  CacheRepositoryImpl.prototype.notHave_i3b3ya$ = function (id) {
    return !this.has_i3b3ya$(id);
  };
  CacheRepositoryImpl.prototype.push_74jrr6$ = function (entityRaw) {
    this.list_0 = plus(this.list_0, entityRaw);
  };
  CacheRepositoryImpl.prototype.push_wcjzob$ = function (id, timestamp) {
    this.push_74jrr6$(new EntityRaw(id, timestamp));
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  CacheRepositoryImpl.prototype.save = function () {
    var $receiver = this.list_0;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(json([to('id', item.id.value), to('timestamp', item.timestamp.value)]));
    }
    var ary = copyToArray(destination);
    this.propertiesWrapper_0.save_za3rmp$(ary);
  };
  CacheRepositoryImpl.prototype.deleteBefore_616xlb$ = function (timestamp) {
    if (this.list_0.isEmpty()) {
      return;
    }
    var $receiver = this.list_0;
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.timestamp.compareTo_11rb$(timestamp) >= 0)
        destination.add_11rb$(element);
    }
    this.list_0 = destination;
  };
  CacheRepositoryImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CacheRepositoryImpl',
    interfaces: [CacheRepository]
  };
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function CacheRepositoryImpl_init(properties, key, $this) {
    if (key === void 0)
      key = 'cache';
    $this = $this || Object.create(CacheRepositoryImpl.prototype);
    CacheRepositoryImpl.call($this);
    $this.propertiesWrapper_0 = new PropertiesWrapper(properties, key);
    var ary = $this.propertiesWrapper_0.getAsJsonArray();
    var destination = ArrayList_init(ary.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== ary.length; ++tmp$) {
      var item = ary[tmp$];
      var tmp$_0, tmp$_1;
      destination.add_11rb$(new EntityRaw(new EntityRawId(typeof (tmp$_0 = item['id']) === 'string' ? tmp$_0 : throwCCE()), new EntityRawTimestamp(typeof (tmp$_1 = item['timestamp']) === 'number' ? tmp$_1 : throwCCE())));
    }
    $this.list_0 = toList(destination);
    var map = LinkedHashMap_init();
    var tmp$_2;
    tmp$_2 = $this.list_0.iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      var key_0 = element.id.value;
      var value = element.timestamp.value;
      map.put_xwzc9p$(key_0, value);
    }
    $this.map_0 = toMap(map);
    return $this;
  }
  function HostName(value) {
    this.value = value;
  }
  HostName.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HostName',
    interfaces: []
  };
  HostName.prototype.component1 = function () {
    return this.value;
  };
  HostName.prototype.copy_61zpoe$ = function (value) {
    return new HostName(value === void 0 ? this.value : value);
  };
  HostName.prototype.toString = function () {
    return 'HostName(value=' + Kotlin.toString(this.value) + ')';
  };
  HostName.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  HostName.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function AccessToken(value) {
    this.value = value;
  }
  AccessToken.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AccessToken',
    interfaces: []
  };
  AccessToken.prototype.component1 = function () {
    return this.value;
  };
  AccessToken.prototype.copy_61zpoe$ = function (value) {
    return new AccessToken(value === void 0 ? this.value : value);
  };
  AccessToken.prototype.toString = function () {
    return 'AccessToken(value=' + Kotlin.toString(this.value) + ')';
  };
  AccessToken.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  AccessToken.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function MastodonRepositoryImpl(hostName, accessToken, urlFetchAppWrapper) {
    this.hostName_0 = hostName;
    this.accessToken_0 = accessToken;
    this.urlFetchAppWrapper_0 = urlFetchAppWrapper;
  }
  MastodonRepositoryImpl.prototype.post_pz5vte$ = function (tootBody) {
    Logger.log('post ' + tootBody);
    this.urlFetchAppWrapper_0.getContentText_uvq6m$('https://' + this.hostName_0.value + '/api/v1/statuses', json([to('method', 'post'), to('headers', json([to('Authorization', 'Bearer ' + this.accessToken_0.value)])), to('payload', json([to('status', tootBody.value)]))]));
  };
  MastodonRepositoryImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MastodonRepositoryImpl',
    interfaces: [MastodonRepository]
  };
  function TwitterTimelineRepositoryImpl(urlFetchAppWrapper, userName) {
    this.urlFetchAppWrapper_0 = urlFetchAppWrapper;
    this.userName_0 = userName;
  }
  TwitterTimelineRepositoryImpl.prototype.get = function () {
    Logger.log('get');
    var ary = JSON.parse(this.urlFetchAppWrapper_0.getContentText_61zpoe$('http://naosim.sakura.ne.jp/app/tweetjson/?username=' + this.userName_0.value));
    Logger.log('after get');
    var destination = ArrayList_init(ary.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== ary.length; ++tmp$) {
      var item = ary[tmp$];
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
      var timestamp = typeof (tmp$_1 = item['timestamp']) === 'number' ? tmp$_1 : throwCCE();
      Logger.log('after timestamp');
      tmp$_0.call(destination, new Tweet(new TweetId(typeof (tmp$_2 = item['guid']) === 'string' ? tmp$_2 : throwCCE()), new Body(typeof (tmp$_3 = item['description']) === 'string' ? tmp$_3 : throwCCE()), new PubDate(typeof (tmp$_4 = item['pubDate']) === 'string' ? tmp$_4 : throwCCE()), new TweetTimestamp(typeof (tmp$_5 = item['timestamp']) === 'number' ? tmp$_5 : throwCCE())));
    }
    return destination;
  };
  TwitterTimelineRepositoryImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TwitterTimelineRepositoryImpl',
    interfaces: [TwitterTimelineRepository]
  };
  function Id() {
  }
  Id.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Id',
    interfaces: []
  };
  function Timestamp() {
  }
  Timestamp.prototype.compareTo_11rb$ = function (other) {
    return this.value - other.value | 0;
  };
  Timestamp.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Timestamp',
    interfaces: [Comparable]
  };
  function EntityRaw(id, timestamp) {
    this.id_jkh0lr$_0 = id;
    this.timestamp_o5mkmk$_0 = timestamp;
  }
  Object.defineProperty(EntityRaw.prototype, 'id', {
    get: function () {
      return this.id_jkh0lr$_0;
    }
  });
  Object.defineProperty(EntityRaw.prototype, 'timestamp', {
    get: function () {
      return this.timestamp_o5mkmk$_0;
    }
  });
  EntityRaw.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EntityRaw',
    interfaces: [Entity]
  };
  EntityRaw.prototype.component1 = function () {
    return this.id;
  };
  EntityRaw.prototype.component2 = function () {
    return this.timestamp;
  };
  EntityRaw.prototype.copy_wcjzob$ = function (id, timestamp) {
    return new EntityRaw(id === void 0 ? this.id : id, timestamp === void 0 ? this.timestamp : timestamp);
  };
  EntityRaw.prototype.toString = function () {
    return 'EntityRaw(id=' + Kotlin.toString(this.id) + (', timestamp=' + Kotlin.toString(this.timestamp)) + ')';
  };
  EntityRaw.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.timestamp) | 0;
    return result;
  };
  EntityRaw.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.timestamp, other.timestamp)))));
  };
  function Entity() {
  }
  Entity.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Entity',
    interfaces: []
  };
  Object.defineProperty(JsPrimitiveConverter, 'Companion', {
    get: JsPrimitiveConverter$Companion_getInstance
  });
  var package$com = _.com || (_.com = {});
  var package$naosim = package$com.naosim || (package$com.naosim = {});
  var package$gaskotlin = package$naosim.gaskotlin || (package$naosim.gaskotlin = {});
  package$gaskotlin.JsPrimitiveConverter = JsPrimitiveConverter;
  package$gaskotlin.PropertiesWrapper = PropertiesWrapper;
  package$gaskotlin.UrlFetchAppWrapper = UrlFetchAppWrapper;
  var package$tweet2mastodon = package$naosim.tweet2mastodon || (package$naosim.tweet2mastodon = {});
  package$tweet2mastodon.main = run;
  package$tweet2mastodon.MainService = MainService;
  var package$domain = package$tweet2mastodon.domain || (package$tweet2mastodon.domain = {});
  package$domain.CacheRepository = CacheRepository;
  package$domain.TootBody = TootBody;
  package$domain.MastodonRepository = MastodonRepository;
  package$domain.TweetId = TweetId;
  package$domain.UserName = UserName;
  package$domain.Body = Body;
  package$domain.PubDate = PubDate;
  package$domain.TweetTimestamp = TweetTimestamp;
  package$domain.Tweet = Tweet;
  package$domain.TwitterTimelineRepository = TwitterTimelineRepository;
  var package$infra = package$tweet2mastodon.infra || (package$tweet2mastodon.infra = {});
  package$infra.EntityRawId = EntityRawId;
  package$infra.EntityRawTimestamp = EntityRawTimestamp;
  package$infra.CacheRepositoryImpl_init_y6pn8f$ = CacheRepositoryImpl_init;
  package$infra.CacheRepositoryImpl = CacheRepositoryImpl;
  package$infra.HostName = HostName;
  package$infra.AccessToken = AccessToken;
  package$infra.MastodonRepositoryImpl = MastodonRepositoryImpl;
  package$infra.TwitterTimelineRepositoryImpl = TwitterTimelineRepositoryImpl;
  var package$lib = package$tweet2mastodon.lib || (package$tweet2mastodon.lib = {});
  package$lib.Id = Id;
  package$lib.Timestamp = Timestamp;
  package$lib.EntityRaw = EntityRaw;
  package$lib.Entity = Entity;
  TweetTimestamp.prototype.compareTo_11rb$ = Timestamp.prototype.compareTo_11rb$;
  EntityRawTimestamp.prototype.compareTo_11rb$ = Timestamp.prototype.compareTo_11rb$;
  Kotlin.defineModule('output', _);
  return _;
}(typeof output === 'undefined' ? {} : output, kotlin);

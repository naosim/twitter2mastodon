# twitter2mastodon
twitterからmastodonへの同期をするGAS用スクリプトです  
jsはkotlinで作成しています  

## latest
kotlin.js  
https://naosim.github.io/twitter2mastodon/1.0/kotlin.js

output.js  
https://naosim.github.io/twitter2mastodon/1.0/output.js

## 使い方
### コードを作る
```javascript
function tweet2mastodon() {
  output.com.naosim.tweet2mastodon.main(
    'your twitter account name',
    { hostName: "your mastodon instance host name", accessToken: "your mstodon access token" }
  )
}

// kotlin.jsの中身をコピペ

// output.jsの中身をコピペ
```

#### 例
```javascript
function tweet2mastodon() {
  output.com.naosim.tweet2mastodon.main(
    'naosim_',
    { hostName: "qiitadon.com", accessToken: "xxxx" }
  )
}

// kotlin.jsの中身をコピペ

// output.jsの中身をコピペ
```

### 実行
tweet2mastodon()を実行する
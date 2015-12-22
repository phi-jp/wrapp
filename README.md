# wrapp
wrapp


## install

```
$ npm install -g cordova
$ npm install -g ios-sim
$ npm install -g ios-deploy

$ brew install ImageMagick
$ npm install -g cordova-icon
$ npm install -g cordova-splash
```

## setup

```
$ cordova platform add ios
$ cordova platform add android
```

## plugins

```
# デバイス
$ cordova plugin add cordova-plugin-device
# ステータスバー消す
$ cordova plugin add cordova-plugin-statusbar
# 広告(Nend)
$ cordova plugin add https://github.com/TakayukiSakai/cordova-plugin-nend.git
# ゲームセンター
$ cordova plugin add cordova-plugin-game-center
# レビュー
$ cordova plugin add cordova-launch-review
# ソーシャルメッセージ
$ cordova plugin add cordova-plugin-social-message
# crosswalk
$ cordova plugin add cordova-plugin-crosswalk-webview


// なぜかエラー出る
// # 広告
// $ cordova plugin add cordova-plugin-admobpro

```

## build

```
$ cordova build ios
```

## emulate

```
$ cordova emulate ios --target='iPhone-5s'
```

## icon & splash

```
$ cordova-icon icon.png
$ cordova-splash splash.png
```

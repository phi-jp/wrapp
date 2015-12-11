# wrapp
wrapp


## install

```
$ npm install -g cordova
$ npm install -g ios-sim

$ brew install ImageMagick
$ npm install -g cordova-icon
$ npm install -g cordova-splash
```

## plugins

```
# ステータスバー消す
$ cordova plugin add cordova-plugin-statusbar
# 広告
$ cordova plugin add cordova-plugin-admobpro
# ゲームセンター
$ cordova plugin add cordova-plugin-game-center

"uk.co.ilee.socialmessage": {
    "PACKAGE_NAME": "jp.phi.wrapp"
},
```

## setup

```
$ cordova platform add ios
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

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
        "com.google.cordova.admob": {
            "PACKAGE_NAME": "jp.phi.wrapp"
        },
        "uk.co.ilee.socialmessage": {
            "PACKAGE_NAME": "jp.phi.wrapp"
        },
        "uk.co.ilee.gamecenter": {
            "PACKAGE_NAME": "jp.phi.wrapp"
        },
        "org.apache.cordova.statusbar": {
            "PACKAGE_NAME": "jp.phi.FlickArrow"
        }
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

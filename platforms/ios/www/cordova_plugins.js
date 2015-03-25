cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.google.cordova.admob/www/AdMob.js",
        "id": "com.google.cordova.admob.AdMob",
        "clobbers": [
            "window.AdMob"
        ]
    },
    {
        "file": "plugins/uk.co.ilee.socialmessage/www/socialmessage.js",
        "id": "uk.co.ilee.socialmessage.SocialMessage",
        "clobbers": [
            "socialmessage"
        ]
    },
    {
        "file": "plugins/uk.co.ilee.gamecenter/www/gamecenter.js",
        "id": "uk.co.ilee.gamecenter.GameCenter",
        "clobbers": [
            "gamecenter"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.statusbar/www/statusbar.js",
        "id": "org.apache.cordova.statusbar.statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.google.cordova.admob": "2.7.4",
    "uk.co.ilee.socialmessage": "0.2.6",
    "uk.co.ilee.gamecenter": "0.3.1",
    "org.apache.cordova.statusbar": "0.1.10",
    "com.rjfun.cordova.extension": "1.0.6"
}
// BOTTOM OF METADATA
});
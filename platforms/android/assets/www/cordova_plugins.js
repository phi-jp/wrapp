cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.google.cordova.admob/www/AdMob.js",
        "id": "com.google.cordova.admob.AdMob",
        "clobbers": [
            "window.AdMob"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.google.cordova.admob": "2.7.4",
    "com.rjfun.cordova.extension": "1.0.6",
    "com.google.playservices": "19.0.0"
}
// BOTTOM OF METADATA
});
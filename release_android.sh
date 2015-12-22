
# var
## zipalign へのパス
zipalign=~/Library/Android/sdk/build-tools/23.0.2/zipalign
## key store ファイル
keystore=.keystore
## apk 出力先
apk_path=./platforms/android/build/outputs/apk
## x86, armv7 それぞれのファイルパス
apk_x86=${apk_path}/android-x86-release-unsigned.apk
apk_armv7=${apk_path}/android-armv7-release-unsigned.apk

# build
cordova build android --release

# 署名
jarsigner -verbose -keystore .keystore ${apk_x86} wrapp
jarsigner -verbose -keystore .keystore ${apk_armv7} wrapp

# 最適化
mkdir release
${zipalign} -v 4 ${apk_x86} release/x86.apk
${zipalign} -v 4 ${apk_x86} release/armv7.apk

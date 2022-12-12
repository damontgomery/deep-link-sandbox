A small web server to test deep linking functionality on React Native apps.

Deep linking on iOS is called Universal Links and on Android is called App Links. Both are a way to open a specific screen in your app from a link in a web page or email.

This project is a small web server that can be used to test deep linking on your React Native app. It is a simple Express server that serves a few simple pages and redirects. When you click on the link, it will open your app and navigate to the screen you want.

## Install

`nvm use`

`yarn install`

edit `/etc/hosts`

```
# Deep link sandbox
127.0.0.1 deep-link-sandbox.local
127.0.0.1 deep-link-sandbox-intercept.local
# End of deep link sandbox
```

edit `app.js` to set `hostedDomain`.

edit `public/index.html` to set the hostedDomains.

## How to use

`DEBUG=deep-link-sandbox:& yarn start`

open [http://deep-link-sandbox.local](deep-link-sandbox.local)

## Adding verification file for iOS

It seems like the iOS `.well-known/apple-app-site-association` file needs to be served over a secure connection.

So, you'll need to create this file and upload it to a server that supports HTTPS. This should be the same domain as used in `app.js` and `public/index.html`.

You also need to go to the Apple developer website [https://developer.apple.com](https://developer.apple.com) and make sure the app supports `Associated Domains`.

Lastly, you need to configure your local app in XCode to support the domain. Go to `Signing & Capabilities` and add the domain to `Associated Domains`.

## Adding verification file for Android

Similar to iOS, you need to create a `.well-known/assetlinks.json` file and upload it to a server that supports HTTPS. This should be the same domain as used in `app.js` and `public/index.html`.

Use `keytool -list -v -keystore android/app/debug.keystore` to get the SHA256 fingerprint used in `assetlinks.json`.

You may be able to edit the Android hosts file with something like the following, but I didn't have luck with getting the file to not revert on reboot.

```
emulator -writable-system @Pixel_3a_API_33_x86_64

adb root
adb shell avbctl disable-verification 
adb reboot
adb root
adb remount
adb pull /etc/hosts
# edit and set any 127.0.0.1 to 10.0.2.2
adb push ./local.file /remote-location
adb reboot
```

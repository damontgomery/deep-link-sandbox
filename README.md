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
# End of deep link sandbox
```

## How to use

`DEBUG=deep-link-sandbox:& yarn start`

open [http://deep-link-sandbox.local](deep-link-sandbox.local)

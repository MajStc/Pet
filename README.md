### Setting up th app

1. `yarn`
2. `npx pod-install`

### To start the app run:

`yarn start` This command also cleans watchman cache which usually just results in deprecated warnings, so we get rid of it.

`yarn ios | yarn android`

The app is currently working with default flipper sdk which is

- 0.182.0 on android
- 0.182.0 on iOS

This flipper SDK works with flipper desktop app with version of 0.225.0 (latter not tested)

### Adding new endpoints

in `src/api/enpdoints` start adding new endpoint based on the path as:
`this/is/__parameter/path` results in call to-> `baseUrl/this/is/<your parameter>/path`

This pattern is used to prevent creating the same enpoint many times, te path has to be hardcoded anyway. The result should look like:

in `endpoints/example/url`

```
return useQuery({
   queryFn: () => request({url: 'example/url', method: 'GET'})
})
```

# Releasing

### iOS

This project uses match to orchestrate certificates and provisioning profiles workflow

When setting up new machine all you need to do is `fastlane match <env> --readonly`

Whenever something gets messed up you can just **nuke** the certs.

### Android

To release new testflight version go to android directory and run `fastlane betaAndroid`

Keep in mind releasing new versionName requires manual change at the momet

## Testflight and testing lanes

Run `yarn release`

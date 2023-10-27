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

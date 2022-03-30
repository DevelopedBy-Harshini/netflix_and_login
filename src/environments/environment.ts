// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //api:'42902c617052f9be239fcbfb9c665e98'
  //api: '9357268c262a35e41df4cb3774d28301',
  API_USER: 'http://localhost:3000/Users',
  api: 'f4da42263cee6bb7b4d913ab8fbae012',
  API_MOVIES_DISCOVER:'https://api.themoviedb.org/3/discover/movie',
 API_MOVIES:'https://api.themoviedb.org/3/movie'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

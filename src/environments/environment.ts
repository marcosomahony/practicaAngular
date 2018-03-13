// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAFuUAe0gWZf6YYCcJwqJ3lGD2N0WbblZU',
    authDomain: 'bbl-practicaangular.firebaseapp.com',
    databaseURL: 'https://bbl-practicaangular.firebaseio.com',
    projectId: 'bbl-practicaangular',
    storageBucket: 'bbl-practicaangular.appspot.com',
    messagingSenderId: '137094542422'
  }
};

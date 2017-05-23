// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  // angular can optimize some part of his code
  // (make more or less checks) according to an environment
  production: false,

  // your backend URL
  // you can then use it for example in a service
  // `${environment.urlBackend}/some/resource`
  urlBackend: '/api',

  // automatically detect browser language and set it
  // as the default one
  // if this language isn't available in the app, the
  // default language specified in src/app/core/core.module.ts
  // will be used
  useBrowserLanguageAsDefault: true,

  // should you keep mocks when building the app
  // or hit the real API
  mock: true,

  // in ms
  // when using mocked data, you can use that
  // variable with `.delay` to simulate a network latency
  httpDelay: 500,

  // should the URL be
  // http://some-domain#/your/app/routes (true)
  // or
  // http://some-domain/your/app/routes (false)
  hashLocationStrategy: false,

  // wether to display debug informations or not
  // TIP : Use console.debug, console.warn and console.error
  // console.log should be used only in dev and never commited
  // this way you can find every console.log very easily
  debug: true
};

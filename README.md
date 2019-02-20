# rest-server-electron
REST API Server UI Destop NodeJS Electron VueJS

## DEV steps
### Install Vue CLI
```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

## Pre install Cypress
Installing cypress by npm may not be working behind corporate firewall, here is a workaround:
Download Cypress zip file from https://docs.cypress.io/guides/getting-started/installing-cypress.html#Direct-download to local folder, let put itin folder 'C:\test\tool\'

```bash
#open a command prompt
setx CYPRESS_INSTALL_BINARY "C:\test\tool\cypress.zip"
#then open another comand prompt to continue the next 'vue create' commmad
```
## Pre install Electron
refer:
 - https://electronjs.org/docs/tutorial/installation

Installing Eletron by npm may not be working behind corporate firewall, here is a workaround:
Download need files into AppData\Local\electron\Cache
Do not forget to append the verion at the end of SHASUMS256.txt 

```
 Directory of C:\Users\xxxxx\AppData\Local\electron\Cache

2019-02-15  05:33 PM    <DIR>          .
2019-02-15  05:33 PM    <DIR>          ..
2019-02-15  05:17 PM        60,696,452 electron-v4.0.5-win32-x64.zip
2019-02-15  05:11 PM             4,741 SHASUMS256.txt-4.0.5
```

## Create project
```bash
vue create rest-server-electron

? Please pick a preset:
> vuejsTypesJest (vue-router, vuex, sass, babel, typescript, pwa, eslint, unit-jest, e2e-cypress)

? Pick the package manager to use when installing dependencies:
  Use Yarn
> Use NPM
```

## add electron-builder and vuetify by plugin
```
vue add electron-builder
vue add vuetify
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
npm run electron:serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

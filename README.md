# deleste-rumor

## Site link
https://deleste-rumor.web.app/

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### /src/plugins/firebase.ts

```TypeScript
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/analytics'

export const firebaseConfig = {
  apiKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  authDomain: 'XXXXX.firebaseapp.com',
  databaseURL: 'https://XXXXXX.firebaseio.com',
  projectId: 'XXXXXX',
  storageBucket: 'XXXXXX.appspot.com',
  messagingSenderId: 'XXXXXXXXXXXXX',
  appId: '1:XXXXXXXXXXXXX:web:XXXXXXXXXXXXXXXXXXXXXX',
  measurementId: 'X-XXXXXXXXXX',
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()
```

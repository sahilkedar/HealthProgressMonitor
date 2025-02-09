import * as Realm from 'realm-web'

const APP_ID = process.env.REACT_APP_APPLICATION_ID as string;

// Add your App ID
const app = new Realm.App({ id: APP_ID })

export { app }
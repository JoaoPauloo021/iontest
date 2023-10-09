export const environment = {
  production: true,

  // Configurações do aplicativo.
  appName: 'Ionic Test',
  appSlogan: 'Lorem, ipsum dolor!',

  // Tipo de login. ['redirect' ou 'popup'].
  signInMethod: 'redirect',

  // Coleção de contatos do Firestore.
  contactCollection: 'contacts',

  // Coleção principal do Firebase.
  dbCollection: 'things',

  // Altere estas chaves conforme seu próprio projeto no Firebase.com.
  firebase: {
    apiKey: "AIzaSyD5npM7FZyps1xr5B2UQP4QPGsVFw38BmU",
    authDomain: "projetoapp-c7db0.firebaseapp.com",
    projectId: "projetoapp-c7db0",
    storageBucket: "projetoapp-c7db0.appspot.com",
    messagingSenderId: "1092590113436",
    appId: "1:1092590113436:web:0a7910ba5114f08ddf1359"
  }
};

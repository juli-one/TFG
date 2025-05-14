# CONFIGURACIÓN INICIAL
Esta conectado a una base de datos de FireBase, para que funcione tienes que añadir un archivo llamado "firebase-config.js" que tenga esta estructura:

const firebaseConfig = {
  apiKey: "YOUR DATA",
  authDomain: "YOUR DATA",
  projectId: "YOUR DATA",
  storageBucket: "YOUR DATA",
  messagingSenderId: "YOUR DATA",
  appId: "YOUR DATA",
  measurementId: "YOUR DATA"
};

firebase.initializeApp(firebaseConfig);

Puedes encontrar estos datos en la configuración de aplicación web de tu proyecto en FireBase.

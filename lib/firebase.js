import firebase from "firebase-admin";

if (!firebase.apps.length) {
  firebase.initializeApp({
    credential: firebase.credential.cert({
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      project_id: "oganisyan-com",
    }),
    databaseURL: "https://oganisyan-com-default-rtdb.firebaseio.com/",
  });
}

export default firebase.database();

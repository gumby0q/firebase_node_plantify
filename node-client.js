const admin = require("firebase-admin");
const serviceAccount = require('./MySuperIoTProject-b64c63bc809b.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mysuperiotproject.firebaseio.com"
});

let query = admin.database().ref("ESP32_Test").orderByKey();

query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
      const key = childSnapshot.key;
      // childData will be the actual contents of the child
      const childData = childSnapshot.val();
      console.log('data childData', childData);
  });
});

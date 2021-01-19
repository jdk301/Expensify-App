import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBlI7ooP8MWiqNmB7JLvtoQOd24ijW4u-s",
  authDomain: "expensify-63b1d.firebaseapp.com",
  databaseURL: "https://expensify-63b1d-default-rtdb.firebaseio.com",
  projectId: "expensify-63b1d",
  storageBucket: "expensify-63b1d.appspot.com",
  messagingSenderId: "870672654365",
  appId: "1:870672654365:web:d3e1fa392e7de37a6266f4",
  measurementId: "G-VKEPG8H0P2",
};

firebase.initializeApp(config);

const database = firebase.database();

// child_removed
database.ref("expenses").on("child_removed", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref("expenses").on("child_changed", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref("expenses").on("child_added", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });

//     console.log(expenses);
//   })

// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });

//   console.log(expenses);
// });

database.ref("expenses").push({
  description: "Rent",
  note: "My rent note",
  amount: 1200,
  createdAt: 97564561586,
});

//database.ref("notes/-MQmQXfd1wF1QyRBDZQq").remove();

// database.ref("notes").push({
//   title: "Course Topics",
//   body: "React Native, Angular, Python",
// });

// database.ref().on("value", (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });

// database
//   .ref("location/city")
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("Error fetching data", e);
//   });

// database
//   .ref()
//   .set({
//     name: "Justin Kim",
//     age: 25,
//     stressLevel: 10,
//     job: {
//       title: "Software Developer",
//       company: "Google",
//     },
//     location: {
//       city: "Washington, DC",
//       country: "United States",
//     },
//   })
//   .then(() => {
//     console.log("Data is saved!");
//   })
//   .catch((e) => {
//     console.log("This failed.", e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle",
// });

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log("Data was removed.");
//   })
//   .catch((e) => {
//     console.log("Did not remove data", e);
//   });

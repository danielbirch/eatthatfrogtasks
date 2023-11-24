# Rocket Tasks 🚀

A to do app that helps you complete your most important tasks first.

## Development Checklist 💻

- [ ] Make app responsive and mobile friendly
- [ ] Setup 'Forgot password' functionality
- [ ] Consolidate all Firebase code into /js/ with three separate files:
  - firebase.js | to initialize Firestore and Auth
  - db.js | to define helper functions related to Firestore such as getDoc, addDoc, updateDoc, deleteDoc etc.
  - auth.js | to define helper functions related to Firebase Authentication such as createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged etc.
- [ ] Update app to use these helper functions instead of having the Firebase code spread throughout the app
- [ ] EditModal select element, fix so it changes colour when a new option is selected (on change)
- [ ] Install pinia-plugin-persistedstate (https://github.com/prazdevs/pinia-plugin-persistedstate) and apply `persist` to authStore.user.id
- [ ] Change the way the date is formatted and handled. Store the date as `Date.now()` and after fetching the data, use a function to format the date in a human readable format
- [ ] After the date storage and formatting task has been completed, redo the `sortTasks()` function. Currently it sorts by completed status only and compares the task you click on to the first task in the list, this is not correct. I may also need to sort by creation date. So it would sort by creation date and then by completed status.

## Changelog 🪵

#### 24-11-2023 - Title Here...

Type here...

## Credits 👤

Built by [Daniel Birch](https://danielbirch.dev/)
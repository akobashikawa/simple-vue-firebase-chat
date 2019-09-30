import firebaseConfig from './_firebaseConfig.js';

const init = function () {
    console.log('firebase.initializeApp');
    firebase.initializeApp(firebaseConfig);
};

export default init;
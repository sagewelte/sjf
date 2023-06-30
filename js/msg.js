// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
    apiKey: "AIzaSyCNhVoFiPq9U95jCmuqrgrEEwJbNszGJEc",
    authDomain: "dev-contact-form-81abf.firebaseapp.com",
    projectId: "dev-contact-form-81abf",
    storageBucket: "dev-contact-form-81abf.appspot.com",
    messagingSenderId: "734469817589",
    appId: "1:734469817589:web:7f2ec6b4901c43975bb1bc"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  

const msg_ref = firebase.database().ref('msgs');

document.getElementById('form-message').addEventListener('submit', submitMsg)

function submitMsg(e) {
    e.preventDefault();

    //Get the values from the form
    var fname = getInputVal('f_fname')
    var lname = getInputVal('f_lname')
    var email = getInputVal('f_email')
    var org = getInputVal('f_org')
    var msg = getInputVal('f_msg')

    //Send the message
    saveMessage(fname, lname, email, org, msg)
}

function getInputVal(id) {
    return document.getElementById(id).value
}

function saveMessage(fname, lname, email, org, msg) {
    var newMessageRef = msg_ref.push();
    newMessageRef.set({
        fname: fname,
        lname: lname,
        email: email,
        org: org,
        msg: msg,
    })
}
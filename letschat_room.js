
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBv-Jf4rLllyADZvNZuwQfUQG3E27nuACg",
      authDomain: "kwitter-e86ae.firebaseapp.com",
      databaseURL: "https://kwitter-e86ae.firebaseio.com",
      projectId: "kwitter-e86ae",
      storageBucket: "kwitter-e86ae.appspot.com",
      messagingSenderId: "722153799277",
      appId: "1:722153799277:web:e01d1baa6c74855e3dc964"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");

document.getElementById("username").innerHTML = "Welcome : "+ username;

function addRoom(){
roomname = document.getElementById("roomname").value;
firebase.database().ref("/").child(roomname).update({purpose : "adding room name"});
localStorage.setItem("roomname",roomname);
window.location = "lets_chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("roomname",name);
window.location = "lets_chat_page.html";
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location = "index.html";
}

var firebaseConfig = {
      apiKey: "AIzaSyC_AbiI-qZ1YOz1ykHAQVGaWr5sfkOOmaw",
      authDomain: "kwitter-dd9cf.firebaseapp.com",
      databaseURL: "https://kwitter-dd9cf-default-rtdb.firebaseio.com",
      projectId: "kwitter-dd9cf",
      storageBucket: "kwitter-dd9cf.appspot.com",
      messagingSenderId: "967401307728",
      appId: "1:967401307728:web:c32823c1330c44b1cadb55",
      measurementId: "G-XXYW2YFS9R"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "WELCOME" + user_name +"!";
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      })

      localStorage.setItem("room_name" , room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#" +Room_names + "</div><hr>";
document.getElementById("output").innerHTML +=row;
 

//End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
    
}


function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}


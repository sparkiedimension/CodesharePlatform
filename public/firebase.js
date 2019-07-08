// firebase config file

var firebaseConfig = {
    apiKey: "AIzaSyAG-XmCzB2fkvdJyDNh6fw6gk6H1E2mrec",
    authDomain: "fir-86603.firebaseapp.com",
    databaseURL: "https://fir-86603.firebaseio.com",
    projectId: "fir-86603",
    storageBucket: "fir-86603.appspot.com",
    messagingSenderId: "86408378885",
    appId: "1:86408378885:web:3cf615b3372a0660"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //firebase database variable refering to root node
var db=firebase.database();

// var db = new firebase("fir-86603.firebaseapp.com"+content);
//ace editor initialization
var editor = ace.edit("editor");







// var editoref=db.ref("Editor");
// db.ref('Editor/'+content).on("value",snap=>{
//   var temp=snap.val();
//   editor.setValue(temp);
// }
// );


// function update(){

// // var curdata=document.getElementById('txt').value;
 // var curdata=editor.getValue();





// var foo={};
// var con="newsdd";
// foo[con]=curdata;
// // editoref.set({[content]:curdata});
// editoref.push(foo);

// }


/*pref.on('value',function(snap){
  snap.forEach(function(snap){
    console.log("snap key"+snap.key+"  snap value"+snap.val());
  })
})*/
var ans="";
var flag=0;

var content=sessionStorage.getItem("msg");
sessionStorage.setItem("msg","WELCOME");
content=content.slice(1);
content=content|| " WELCOME";

// console.log(content);

db.ref("Editor").on('value',function(snap){
  snap.forEach(function(snap){
    snap.forEach(function(snap){
    
    if(snap.key==content)
    {
      // console.log(snap.val()+"match");
      ans=snap.val();
     
      editor.setValue(ans);
      flag=1;
      
    }
  })
  })
});


function update(){

 var foo={};
  foo[content]=editor.getValue();

  db.ref("Editor").push(foo);
}


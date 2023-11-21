
function first(){
    let a = document.getElementById("ip1").value;
   
   document.getElementById("ip1").value="";
   
 var para = "";
   
 var t =[];
 var d = a;
  t.push(d);
//   console.log(t);     
 var node = document.createElement("p"); 
 var btn = document.createElement("button");
 btn.setAttribute("id" , "remzbtn");  
 btn.addEventListener("click" , trash);
 var insbtn = document.createElement("i");
 insbtn.setAttribute("class" , "fa fa-trash onez");
//   console.log(insbtn);
 btn.appendChild(insbtn);
 var c = document.createTextNode(t);
 
 node.appendChild(btn);
node.appendChild(c) ;
// dynamic css styles.
node.style.backgroundColor="#fff";
node.style.padding = "20px";
node.style.fontSize = "20px";
node.style.margin="10px 10px";
node.style.borderBottom="1px solid";
node.style.borderBottomColor="#f1f1f1";
node.style.overflow="hidden";
insbtn.style.fontSize="19px";
btn.style.marginRight="24px ";
btn.style.overflow="hidden";


document.getElementById("one").append(node);   

function trash(){
 var rtm = document.getElementsByName(c);
//   console.log(rtm);
 node.remove(rtm);   //it will remove the which btn clicked.
}
}
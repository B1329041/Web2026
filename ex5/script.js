var count = 1;
function addfunction() {
 var btn=document.createElement("BUTTON");
 btn.innerHTML = "CLICK ME (" + count + ")";
 btn.setAttribute("id", "btn_" + count);
 btn.setAttribute("class", "btn btn-outline-danger m-1");
 document.body.appendChild(btn);
 console.log("Added:", btn);
 count++;
}
function delfunction() {
 if (count > 1) {
   count--;
   var btn = document.getElementById("btn_" + count);
   if (btn) {
     document.body.removeChild(btn);
     console.log("Deleted ID: btn_" + count);
   }
 } else {
   console.log("沒有按鈕可以刪除了！");
 }
}
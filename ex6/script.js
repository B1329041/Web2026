const container = document.getElementById("container");
function generateRandomChars(length) {
   let result = '';
   const chars = 'abcdefghijklmnopqrstuvwxyz';
   for (let i = 0; i < length; i++) {
       result += chars.charAt(Math.floor(Math.random() * chars.length));
   }
   return result;
}
window.onload = function() {
   const initialChars = generateRandomChars(Math.floor(Math.random() * 3));
   container.innerHTML = initialChars;
   container.focus();
};
window.addEventListener("keyup", function(e) {
   console.log("按下的鍵:", e.key);
   let currentText = container.innerHTML;
   // 檢查第一個字元是否和按下的鍵相等
   if (currentText.length > 0 && e.key === currentText.charAt(0)) {
       currentText = currentText.substring(1);
       const newChars = generateRandomChars(Math.floor(Math.random() * 3) + 1);
       currentText += newChars;
       container.innerHTML = currentText;
   }
});
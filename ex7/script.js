const container = document.getElementById("container");
let mistakeCount = 0;
function generateRandomChars(length) {
   let result = '';
   const chars = 'abcdefghijklmnopqrstuvwxyz';
   for (let i = 0; i < length; i++) {
       result += chars.charAt(Math.floor(Math.random() * chars.length));
   }
   return result;
}
window.onload = function() {
   const initialChars = generateRandomChars(Math.floor(Math.random() * 3) + 1);
   container.textContent = initialChars;
   container.focus();
};
window.addEventListener("keyup", function(e) {
   console.log("按下的鍵:", e.key);
   let currentText = container.textContent;
   if (currentText.length > 0) {
       if (e.key === currentText.charAt(0)) {
           mistakeCount = 0;
           currentText = currentText.substring(1);
           const newChars = generateRandomChars(Math.floor(Math.random() * 3) + 1);
           currentText += newChars;
       } else {
           mistakeCount++;
           currentText += e.key;
           if (mistakeCount >= 3) {
               const extraPenaltyChars = generateRandomChars(3);
               currentText += extraPenaltyChars;
               mistakeCount = 0;
           }
       }
       container.textContent = currentText;
   }
});
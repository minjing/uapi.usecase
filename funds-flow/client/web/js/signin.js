// var mask = document.getElementById('mask');
// var loginWin = document.getElementById('login');
// var bt = document.getElementById('bt');
// var closeBt = document.getElementById('close');

// bt.onclick = function() {
//     mask.style.display = 'block';
//     loginWin.style.display = 'block';
// }

// closeBt.onclick = function() {
//     mask.style.display = 'none';
//     loginWin.style.display = 'none';
// }

/**
 * 1. Send request to server to fetch user information.
 * 2. Show sign in window if user information is empty.
 * 3. Clear main area and show default window when user sign in success.
 * 4. Clear main area and show sign up window if user select sign up action.
 */

var request = new XMLHttpRequest();

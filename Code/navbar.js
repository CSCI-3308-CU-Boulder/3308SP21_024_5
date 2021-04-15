
//Add these lines to html page in header
// <<link href="navbar.css" rel="stylesheet">
// <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&amp;display=swap" rel="stylesheet">
// <script src="https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js"></script>
// <script src="https://www.gstatic.com/firebasejs/8.2.7/firebase-auth.js"></script>
// <script src="https://www.gstatic.com/firebasejs/8.2.7/firebase-database.js"></script>
// <script src=navbar.js ></script>



//Add these lines to body
// <div id="bg"></div>
// 		<div id="navbar">
// 			<div id="logo" onclick="linkHome()">S</div>
// 			<div class="option" onclick="linkHome()">Home</div>
// 			<div class="option" onclick="linkWatch()">Watchlist</div>
// 			<div class="option" onclick="linkPort()">Portfolio</div>
// 			<div class="option" onclick="linkGame()">Games</div>
// 			<div class="option" onclick="linkDash()">Dashboard</div>
// 			<div class="option sign" onclick="signIn()">Sign In</div>
// </div>




			var firebaseConfig = {
				apiKey: "AIzaSyDlzAoiTs11V-ujyslFbrwTA2J_eEtp9ns",
				authDomain: "stonks-app-f9c3e.firebaseapp.com",
				databaseURL: "https://stonks-app-f9c3e-default-rtdb.firebaseio.com",
				projectId: "stonks-app-f9c3e",
				storageBucket: "stonks-app-f9c3e.appspot.com",
				messagingSenderId: "100026423595",
				appId: "1:100026423595:web:0f7ef98980ef4019930d6e",
				measurementId: "G-B76TGRT1K9"
			};

			firebase.initializeApp(firebaseConfig);

			var database = firebase.database();
			var auth = firebase.auth();

			var thisUser = undefined;

			auth.onAuthStateChanged(user => {
				thisUser = user;
				//console.log(thisUser);
			});

			function linkHome(){
				window.location.href = "landing_page.html";
			}

			function linkWatch(){
				if(thisUser === undefined)
					return;
				if(thisUser === null){
					signIn();
					return;
				}
				window.location.href = "watchlist.html";
			}

			function linkPort(){
				if(thisUser === undefined)
					return;
				if(thisUser === null){
					signIn();
					return;
				}
				window.location.href = "portfolio.html";
			}

			function linkGame(){
				if(thisUser === undefined)
					return;
				if(thisUser === null){
					signIn();
					return;
				}
				window.location.href = "game.html";
			}

			function linkDash(){
				if(thisUser === undefined)
					return;
				if(thisUser === null){
					signIn();
					return;
				}
				window.location.href = "dashboardREAL.html";
			}

			function linkSearch(q){
				if(thisUser === undefined)
					return;
				if(thisUser === null){
					signIn();
					return;
				}
				window.location.href = "search.html" + (q ? "?symbol=" + q : "");
			}

			function signIn(){
				window.location.href = "sign in/google_auth.html";
			}

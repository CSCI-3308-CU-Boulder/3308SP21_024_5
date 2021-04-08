





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
				console.log(thisUser);
			});

			function linkHome(){
				window.location.href = "";
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

			function signIn(){
				window.location.href = "sign in/google_auth.html";
			}

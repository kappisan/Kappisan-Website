// CONTROLLERS
app.controller('BlockchainCtrl', ['$scope', '$http', '$location', function($s, $http, $location) {

	console.log("blockchain controller");


			let mouseX = 0, mouseY = 0,
				windowHalfX = window.innerWidth / 2,
				windowHalfY = window.innerHeight / 2,
				SEPARATION = 200, AMOUNTX = 10, AMOUNTY = 10,
				camera, scene, renderer, controls;

			init();
			animate();

			function shuffle(array) {
				let currentIndex = array.length, temporaryValue, randomIndex;

				// While there remain elements to shuffle...
				while (0 !== currentIndex) {

					// Pick a remaining element...
					randomIndex = Math.floor(Math.random() * currentIndex);
					currentIndex -= 1;

					// And swap it with the current element.
					temporaryValue = array[currentIndex];
					array[currentIndex] = array[randomIndex];
					array[randomIndex] = temporaryValue;
				}

				return array;
			}

			function init() {

				let container, separation = 100, amountX = 150, amountY = 50,
				particles, particle;

				container = document.getElementById("nodes-animation");
				document.body.appendChild(container);

				camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.z = 100;
				camera.position.x = 5000;

				scene = new THREE.Scene();

				renderer = new THREE.CanvasRenderer();
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight - 24 );
				container.appendChild( renderer.domElement );

				controls = new THREE.OrbitControls( camera, renderer.domElement );
				//controls.addEventListener( 'change', render );

				controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
				controls.dampingFactor = 0.25;

				controls.screenSpacePanning = false;

				controls.minDistance = 100;
				controls.maxDistance = 800

				controls.maxPolarAngle = Math.PI / 2;

				// particles aka. orbs

				let PI2 = Math.PI * 2;
				let material = new THREE.SpriteCanvasMaterial({
					color: 0xdddddd,
					program: function ( context ) {
						context.beginPath();
						context.arc( 0, 0, 0.4, 0, PI2, true );
						context.fill();
					}
				});

				let points = [];

				for ( let i = 0; i < 80; i ++ ) {

					particle = new THREE.Sprite( material );
					particle.position.x = Math.random() * 2 - 1;
					particle.position.y = Math.random() * 2 - 1;
					particle.position.z = Math.random() * 2 - 1;
					particle.position.normalize();
					particle.position.multiplyScalar( Math.random() * 10 + 450 );
					particle.scale.x = particle.scale.y = 10;
					scene.add( particle );

					points.push( particle.position );
				}

				console.log("points", points);

				// lines
				for(let i = 0; i < 3; i++) {
					points = shuffle(points);
					let geometry = new THREE.BufferGeometry().setFromPoints( points );

					let line = new THREE.Line( geometry, new THREE.LineBasicMaterial({ color: 0xaa0000, opacity: 0.5 }));
					scene.add( line );
				}

				document.addEventListener('mousemove', onDocumentMouseMove, false);
				document.addEventListener('touchstart', onDocumentTouchStart, false);
				document.addEventListener('touchmove', onDocumentTouchMove, false);

				window.addEventListener( 'resize', onWindowResize, false );
			}

			function onWindowResize() {

				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );
			}

			function onDocumentMouseMove(event) {

				mouseX = event.clientX - windowHalfX;
				mouseY = event.clientY - windowHalfY;
			}

			function onDocumentTouchStart( event ) {

				if ( event.touches.length > 1 ) {
					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;
				}
			}

			function onDocumentTouchMove( event ) {

				if ( event.touches.length == 1 ) {
					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;
				}
			}

			function animate() {
				requestAnimationFrame( animate );
				controls.update();
				render();
			}

			function render() {

				// camera.position.z += 5;
				// camera.position.x += 5;
				scene.rotation.x += 0.002;
				scene.rotation.y += 0.0015;
				scene.rotation.z += 0.001;

				console.log("render camera.position.z", camera.position.z);
				//camera.position.z += ( - mouseY - camera.position.y ) * .01;
				camera.lookAt( scene.position );

				renderer.render( scene, camera );
			}


}]);

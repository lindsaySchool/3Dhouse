import './style.css'
import * as THREE from 'three';
//Import orbit controls
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
//Import axis helper from Three
import { AxesHelper } from 'three';
//Import texture loader
import { TextureLoader } from 'three';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//add orbit controls
const controls = new OrbitControls( camera, renderer.domElement );

//add axis helper
const axesHelper = new AxesHelper( 5 );
//scene.add( axesHelper );

//add texture loader from public folder
const textureLoader = new TextureLoader();
const texture = textureLoader.load('/textures/grass.jpeg');
const logo = textureLoader.load('/textures/logo.png');

//make a plane as a green grass field for the cube to sit on
const planeGeometry = new THREE.PlaneGeometry( 10, 10);
const planeMaterial = new THREE.MeshBasicMaterial( { map: texture } );
const plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.rotation.x = -Math.PI / 2; // horizontal
plane.position.y = -2;
scene.add( plane );

//floor of the house
const planeGeometry2 = new THREE.PlaneGeometry( 5, 5);
const planeMaterial2 = new THREE.MeshBasicMaterial( { color: 0x654321, side: THREE.DoubleSide} );
const plane2 = new THREE.Mesh( planeGeometry2, planeMaterial2 );
plane2.rotation.x = -Math.PI / 2; // horizontal
plane2.position.y = -1.99;
scene.add( plane2 );

//wall behind
const geometry2 = new THREE.BoxGeometry( 5, 3.5, 0.2 );
const material2 = new THREE.MeshBasicMaterial( { color: 0xf0b56d } );
const cube2 = new THREE.Mesh( geometry2, material2 );
cube2.position.y = -0.3;
cube2.position.z = -2.5;
scene.add( cube2 );

//wall left
const geometry3 = new THREE.BoxGeometry( 0.2, 3.5, 5.2 );
const material3 = new THREE.MeshBasicMaterial( { color: 0xf0b56d } );
const cube3 = new THREE.Mesh( geometry3, material3 );
cube3.position.x = -2.5;
cube3.position.y = -0.3;
scene.add( cube3 );

//wall right
const geometry4 = new THREE.BoxGeometry( 0.2, 3.5, 5.2 );
const material4 = new THREE.MeshBasicMaterial( { color: 0xf0b56d } );
const cube4 = new THREE.Mesh( geometry4, material4 );
cube4.position.x = 2.5;
cube4.position.y = -0.3;
scene.add( cube4 );

//wall front above door
const geometry5 = new THREE.BoxGeometry( 5, 1.75, 0.2 );
const material5 = new THREE.MeshBasicMaterial( { color: 0xf0b56d } );
const cube5 = new THREE.Mesh( geometry5, material5 );
cube5.position.y = 0.58;
cube5.position.z = 2.5;
scene.add( cube5 );

//wall front left door
const geometry6 = new THREE.BoxGeometry( 2, 1.79, 0.2 );
const material6 = new THREE.MeshBasicMaterial( { color: 0xf0b56d } );
const cube6 = new THREE.Mesh( geometry6, material6 );
cube6.position.x = -1.5;
cube6.position.y = -1.19;
cube6.position.z = 2.5;
scene.add( cube6 );

//wall front right door
const geometry7 = new THREE.BoxGeometry( 2, 1.79, 0.2 );
const material7 = new THREE.MeshBasicMaterial( { color: 0xf0b56d } );
const cube7 = new THREE.Mesh( geometry7, material7 );
cube7.position.x = 1.5;
cube7.position.y = -1.19;
cube7.position.z = 2.5;
scene.add( cube7 );

//ceiling
const geometry8 = new THREE.BoxGeometry( 5, 0.2, 5 );
const material8 = new THREE.MeshBasicMaterial( { color: 0xb26a55 } );
const cube8 = new THREE.Mesh( geometry8, material8 );
cube8.position.y = 1.36;
scene.add( cube8 );

//roof -> cone on top of the box
const geometry9 = new THREE.ConeGeometry( 4, 2.2, 4 );
const material9 = new THREE.MeshBasicMaterial( { color: 0x654321 } );
const cone = new THREE.Mesh( geometry9, material9 );
cone.position.y = 2.5;
cone.rotation.y = Math.PI / 4;
scene.add( cone );

//wallpaper inside the house
const geometry10 = new THREE.BoxGeometry( 5, 3.5, 0.2 );
const material10 = new THREE.MeshBasicMaterial( { color: 0x2d8485 } );
const cube10 = new THREE.Mesh( geometry10, material10 );
cube10.position.y = -0.3;
cube10.position.z = -2.2;
scene.add( cube10 );

//add a plate to the wall left inside the house
const geometry11 = new THREE.BoxGeometry( 0, 3.5, 5.2 );
const material11 = new THREE.MeshBasicMaterial( { color: 0x2d8485} );
const cube11 = new THREE.Mesh( geometry11, material11 );
cube11.position.x = -2.3;
cube11.position.y = -0.3;
scene.add( cube11 );

//add a plate to the wall right inside the house
const geometry12 = new THREE.BoxGeometry( 0, 3.5, 5.2 );
const material12 = new THREE.MeshBasicMaterial( { color: 0x2d8485 } );
const cube12 = new THREE.Mesh( geometry12, material12 );
cube12.position.x = 2.3;
cube12.position.y = -0.3;
scene.add( cube12 );

//picture
const geometry13 = new THREE.BoxGeometry( 1, 1, 0.25 );
const material13 = new THREE.MeshBasicMaterial({map: logo, transparent: true, opacity: 1.5});
const cube13 = new THREE.Mesh( geometry13, material13 );
cube13.position.y = 0.35;
cube13.position.z = -2.2;
scene.add( cube13 );


camera.position.z = 8;
camera.position.y = 2;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
	controls.update();
}

animate();
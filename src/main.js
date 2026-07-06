// Importing whats needed to create a 3D scene and render it to the screen. This includes the Three.js library and a CSS file for styling.

import './style.css';
import * as THREE from 'three'; 

// Creates an empty 3D world (scene) that will hold every object, light, and camera in our application.
const scene = new THREE.Scene();

// create a camera with 75 fov browser sizer viewport near and far clipping distance.

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    50
)

// create a new renderer screen and set its size and add it to body of the html
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement)

// added a cube geometry
const geometry = new THREE.BoxGeometry(5,1,2);

//added a material
const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });

//added the geometry and material to the cube mesh
const cube = new THREE.Mesh(geometry, material);

// add the cube to the scene to be rendered
scene.add(cube);

//rotate it a lil bit
cube.rotation.y = Math.PI / 4;

// created a clock for the delta thingy
const clock = new THREE.Clock();

// added a directional light to the scene to illuminate the cube. acts as a sun
const light = new THREE.DirectionalLight(0xffffff, 3);

// set light position cause it was inside the cube so no light ofc
light.position.set(5, 5, 5);

// added the light source to the scene
scene.add(light);

//diff camera position so its not sitting insdie the cube
camera.position.z = 5;


//ANIMATE FUNCTION
function animate() {

  // for per frame update
  requestAnimationFrame(animate);

  // for the delta value to normalize the rotation on all types of fps on the clients side
  const delta = clock.getDelta();

  // set the speed of the rotation
  const speed = 0.2;

  // rotate the cube based on speed and delta
  cube.rotation.y += speed * delta;

  // render the scene
  renderer.render(scene, camera);
}

// call the animate function
animate();

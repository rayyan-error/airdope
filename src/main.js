// Imports
import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Scene
const scene = new THREE.Scene();

const mrngSky = new THREE.Color(0x87ceeb);
const nightSky = new THREE.Color(0x000033);

let currentSky = mrngSky;

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  50
);

// Input state
const keys = {
  w: false,
  a: false,
  s: false,
  d: false,
};

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Geometry
const planeGeometry = new THREE.PlaneGeometry(10, 10);
const cubeGeometry1 = new THREE.BoxGeometry(1, 1, 1);
const cubeGeometry2 = new THREE.BoxGeometry(1, 1, 1);
const cubeGeometry3 = new THREE.BoxGeometry(1, 1, 1);


// Materials
const red = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const green = new THREE.MeshStandardMaterial({ color: 0x00ff00 });

// Create the meshes
const ground = new THREE.Mesh(planeGeometry, red);
const cube1 = new THREE.Mesh(cubeGeometry1, green);
const cube2 = new THREE.Mesh(cubeGeometry2, green);
const cube3 = new THREE.Mesh(cubeGeometry3, green);

// Add them to the scene
scene.add(ground);
scene.add(cube1);
scene.add(cube2);
scene.add(cube3);

// Set their rotations
ground.rotation.x = -Math.PI / 2;

// Set their positions
cube1.position.y = 0.5;
cube2.position.y = 0.5;
cube2.position.x = 2;
cube3.position.y = 0.5;
cube3.position.x = -2;

// up&down movement
const minHeight = 0.5;
const maxHeight = 4;

let goingUp = true;

// Clock
const clock = new THREE.Clock();

// Light
const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(5, 5, 5);
scene.add(light);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);

// Camera position
camera.position.z = 5;

// Shadows
renderer.shadowMap.enabled = true;
light.castShadow = true;
cube1.castShadow = true;
cube2.castShadow = true;
cube3.castShadow = true;
ground.receiveShadow = true;

// Animate
function animate() {
  requestAnimationFrame(animate);

  const delta = clock.getDelta();
  const elapsedTime = clock.getElapsedTime();
  controls.update();

  scene.background = currentSky;

  let daytime = Math.floor(elapsedTime) % 20;

  if (daytime < 10) {
    currentSky = mrngSky;
  } else {
    currentSky = nightSky;
  }

  cube2.rotation.z += delta;

  if (goingUp) {
    cube3.position.y += delta;
    if (cube3.position.y >= maxHeight) {
      cube3.position.y = maxHeight;
      goingUp = false;
    }
  } else {
    cube3.position.y -= delta;
    if (cube3.position.y <= minHeight) {
      cube3.position.y = minHeight;
      goingUp = true;
    }
  }

  renderer.render(scene, camera);
}

animate();

// Imports
import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Scene
const scene = new THREE.Scene();

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


// Materials
const red = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const green = new THREE.MeshStandardMaterial({ color: 0x00ff00 });

// Meshes
const ground = new THREE.Mesh(planeGeometry, red);
const cube1 = new THREE.Mesh(cubeGeometry1, green);
const cube2 = new THREE.Mesh(cubeGeometry2, green);
scene.add(ground);
scene.add(cube1);
scene.add(cube2);
ground.rotation.x = -Math.PI / 2;
cube1.position.y = 0.5;
cube2.position.y = 0.5;
cube2.position.x = 2

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
ground.receiveShadow = true;

// Animate
function animate() {
  requestAnimationFrame(animate);

  const delta = clock.getDelta();
  controls.update();

  cube2.rotation.z += delta;

  renderer.render(scene, camera);
}

animate();

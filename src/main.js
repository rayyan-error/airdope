// Importing whats needed to create a 3D scene and render it to the screen. This includes the Three.js library and a CSS file for styling.

import './style.css';
import * as THREE from 'three'; 

// Creates an empty 3D world (scene) that will hold every object, light, and camera in our application.
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    50
)

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry(5,1,2);

const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

cube.rotation.y = Math.PI / 4;

const light = new THREE.DirectionalLight(0xffffff, 3);

light.position.set(5, 5, 5);

scene.add(light);

camera.position.z = 5;

function animate() {
}
// Importing whats needed to create a 3D scene and render it to the screen. This includes the Three.js library and a CSS file for styling.

import './style.css';
import * as THREE from 'three'; 

// Creates an empty 3D world (scene) that will hold every object, light, and camera in our application.
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry();

const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

renderer.render(scene, camera);

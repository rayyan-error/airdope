// Importing whats needed to create a 3D scene and render it to the screen. This includes the Three.js library and a CSS file for styling.

import './style.css';
import * as THREE from 'three';

// This creates a fresh new empty world or workspace for us to add objects, lights, and cameras to. It is the root of the scene graph.
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
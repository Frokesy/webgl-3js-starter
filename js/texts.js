import * as THREE from 'three';
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const textRenderer = new CSS2DRenderer();
textRenderer.setSize(window.innerWidth, window.innerHeight);
textRenderer.domElement.style.position = 'absolute';
textRenderer.domElement.style.top = '0px';
document.body.appendChild(textRenderer.domElement);

const textContainer = document.createElement('div');
textContainer.className = 'text-container';
textContainer.textContent = 'Hello World!';
document.body.appendChild(textContainer);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(25, 50, 25);
camera.add(pointLight);
scene.add(camera);




camera.position.z = 5;

const animate = function() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
    textRenderer.render(scene, camera);
}

animate();
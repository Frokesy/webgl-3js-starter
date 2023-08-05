import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

//triangle
const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));
points.push(new THREE.Vector3(-20, 0, -100));

//square
const squaredPoints = [];
squaredPoints.push(new THREE.Vector3(-10, 10, 0));
squaredPoints.push(new THREE.Vector3(10, 10, 0));
squaredPoints.push(new THREE.Vector3(10, -10, 0));
squaredPoints.push(new THREE.Vector3(-10, -10, 0));
squaredPoints.push(new THREE.Vector3(-10, 10, 0));

//pentagon
const polygonalPoints = [];
polygonalPoints.push(new THREE.Vector3(0, 10, 0));
polygonalPoints.push(new THREE.Vector3(10, 5, 0));
polygonalPoints.push(new THREE.Vector3(8, -5, 0));
polygonalPoints.push(new THREE.Vector3(-8, -5, 0));
polygonalPoints.push(new THREE.Vector3(-10, 5, 0));
polygonalPoints.push(new THREE.Vector3(0, 10, 0));





const geometry = new THREE.BufferGeometry().setFromPoints(polygonalPoints);
const line = new THREE.Line(geometry, material);

scene.add(line);
renderer.render(scene, camera);
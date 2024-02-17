// Stephanie Pearl F. Virtudazo
// CGC Module 3 Quiz 1

import * as THREE from './three.module.js';
import { OrbitControls } from './OrbitControls.js';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set( 1, 7, 30 );

const renderer = new THREE.WebGLRenderer();
const controls = new OrbitControls( camera, renderer.domElement );
renderer.setClearColor(0x000);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

controls.update();

const textureLoader = new THREE.TextureLoader();

// Base
const baseTexture = textureLoader.load('./assets/textures/base.png'); 
const basecubeMaterial = new THREE.MeshStandardMaterial({ map: baseTexture });
const basecubeGeometry = new THREE.BoxGeometry(12, 0.5, 12);
const baseCube = new THREE.Mesh(basecubeGeometry, basecubeMaterial);
scene.add(baseCube);

baseCube.position.set(0, -1, 0.5);

// Floor
const floorTexture = textureLoader.load('./assets/textures/floor.png'); 
const floorCubeMaterial = new THREE.MeshStandardMaterial({ map: floorTexture });
const floorCubeGeometry = new THREE.BoxGeometry(10, 0.5, 7);
const floorCube = new THREE.Mesh(floorCubeGeometry, floorCubeMaterial);
scene.add(floorCube);

floorCube.position.set(0, -0.7, 0.1);

// Walls
// Back Wall
const backWallTexture = textureLoader.load('./assets/textures/backWall.png'); 
const backWallMaterial = new THREE.MeshStandardMaterial({ map: backWallTexture });
const backWallGeometry = new THREE.BoxGeometry(10, 7, 0.5);
const backWall = new THREE.Mesh(backWallGeometry, backWallMaterial);
scene.add(backWall);

backWall.position.set(0, 2.5, -3.4);

// Side Walls
const sideWallTexture = textureLoader.load('./assets/textures/backWall.png'); 
const sideWallMaterial = new THREE.MeshStandardMaterial({ map: sideWallTexture });
const sidekWallGeometry = new THREE.BoxGeometry(0.5, 7, 7);
const sideWall1 = new THREE.Mesh(sidekWallGeometry, sideWallMaterial);
const sideWall2 = new THREE.Mesh(sidekWallGeometry, sideWallMaterial);
scene.add(sideWall1);
scene.add(sideWall2);

sideWall1.position.set(-4.8, 2.5, 0);
sideWall2.position.set(4.8, 2.5, 0);

// Windows
const windowTexture = textureLoader.load('./assets/textures/windows.png'); 
const windowMaterial = new THREE.MeshStandardMaterial({ map: windowTexture });
const windowGeometry = new THREE.BoxGeometry(3.6, 2.3, 0.6);
const window1 = new THREE.Mesh(windowGeometry, windowMaterial);
const window2 = new THREE.Mesh(windowGeometry, windowMaterial);
scene.add(window1);
scene.add(window2);

window1.position.set(-2, 3, -3.4);
window2.position.set(2, 3, -3.4);

// Front Wall
const frontWall1Texture = textureLoader.load('./assets/textures/backWall.png'); 
const frontWall1Material = new THREE.MeshStandardMaterial({ map: frontWall1Texture });
const frontWall1Geometry = new THREE.BoxGeometry(6, 2.6, 0.5);
const frontWall1 = new THREE.Mesh(frontWall1Geometry, frontWall1Material);
scene.add(frontWall1);

frontWall1.position.set(-2, 0.5, 3.4);

const frontWall2Material = new THREE.MeshStandardMaterial({ map: frontWall1Texture });
const frontWall2Geometry = new THREE.BoxGeometry(1, 4.5, 0.5);
const frontWall2 = new THREE.Mesh(frontWall2Geometry, frontWall2Material);
scene.add(frontWall2);

frontWall2.position.set(-4.5, 4, 3.4);

const frontWall3Material = new THREE.MeshStandardMaterial({ map: frontWall1Texture });
const frontWall3Geometry = new THREE.BoxGeometry(6, 1.5, 0.5);
const frontWall3 = new THREE.Mesh(frontWall3Geometry, frontWall3Material);
scene.add(frontWall3);

frontWall3.position.set(-2, 5.5, 3.4);

const frontWall4Material = new THREE.MeshStandardMaterial({ map: frontWall1Texture });
const frontWall4Geometry = new THREE.BoxGeometry(1, 7, 0.5);
const frontWall4 = new THREE.Mesh(frontWall4Geometry, frontWall4Material);
scene.add(frontWall4);

frontWall4.position.set(1, 2.5, 3.4);

const frontWall5Material = new THREE.MeshStandardMaterial({ map: frontWall1Texture });
const frontWall5Geometry = new THREE.BoxGeometry(3, 2.5, 0.5);
const frontWall5 = new THREE.Mesh(frontWall5Geometry, frontWall5Material);
scene.add(frontWall5);

frontWall5.position.set(3, 5, 3.4);

const frontWall6Material = new THREE.MeshStandardMaterial({ map: frontWall1Texture });
const frontWall6Geometry = new THREE.BoxGeometry(1, 7, 0.5);
const frontWall6 = new THREE.Mesh(frontWall6Geometry, frontWall6Material);
scene.add(frontWall6);

frontWall6.position.set(4.5, 2.5, 3.4);

// Table
const tableTexture = textureLoader.load('./assets/textures/table.png'); 
const tableMaterial = new THREE.MeshStandardMaterial({ map: tableTexture });
const tabeleGeometry = new THREE.BoxGeometry(4.5, 2, 0.5);
const table = new THREE.Mesh(tabeleGeometry, tableMaterial);
scene.add(table);

table.position.set(-1.7, 2, 3.4);
table.rotation.set(Math.PI/2, Math.PI, Math.PI);

// Roof
const roofTexture = textureLoader.load('./assets/textures/roof.png'); 
const roofMaterial = new THREE.MeshStandardMaterial({ map: roofTexture });
const roofGeometry = new THREE.BoxGeometry(10, 6, 0.5);
const roof1 = new THREE.Mesh(roofGeometry, roofMaterial);
const roof2 = new THREE.Mesh(roofGeometry, roofMaterial);
scene.add(roof1);
scene.add(roof2);

roof1.position.set(0, 7.8, -2);
roof1.rotation.set(Math.PI/4, Math.PI, Math.PI);

roof2.position.set(0, 7.8, 2);
roof2.rotation.set(-Math.PI/4, Math.PI, Math.PI);

// Fill in gaps between the wall and roof
const fillTexture = textureLoader.load('./assets/textures/backWall.png'); 
const fillMaterial = new THREE.MeshStandardMaterial({ map: fillTexture });
const fillGeometry = new THREE.BoxGeometry(0.4, 5, 5);
const fill1 = new THREE.Mesh(fillGeometry, fillMaterial);
const fill2 = new THREE.Mesh(fillGeometry, fillMaterial);
scene.add(fill1);
scene.add(fill2);

fill1.position.set(-4.8, 6, 0);
fill1.rotation.set(Math.PI/4, Math.PI, Math.PI);

fill2.position.set(4.8, 6, 0);
fill2.rotation.set(Math.PI/4, Math.PI, Math.PI);

// Ceiling Light
// Tubing
const ceilingLightTubingTexture = textureLoader.load('./assets/textures/backWall.png'); 
const ceilingLightTubingCubeMaterial = new THREE.MeshStandardMaterial({ map: ceilingLightTubingTexture });
const cceilingLightTubingCubeGeometry = new THREE.BoxGeometry(0.5, 3, 0.5);
const ceilingLightTubing = new THREE.Mesh(cceilingLightTubingCubeGeometry, ceilingLightTubingCubeMaterial);
scene.add(ceilingLightTubing);

ceilingLightTubing.position.set(0, 8, 0.1);

// Ceiling Light
const ceilingLightGeometry = new THREE.CylinderGeometry( 1, 1, 0.5, 32 ); 
const ceilingLightMaterial = new THREE.MeshBasicMaterial( {color: 0xe0e6d5} ); 
const ceilingLight = new THREE.Mesh( ceilingLightGeometry, ceilingLightMaterial ); 
scene.add( ceilingLight );

ceilingLight.position.set(0, 6, 0.1);

const indoorLight = new THREE.PointLight(0xdced95, 3);
indoorLight.position.set(0, 4, 0.1);
scene.add(indoorLight);

// Lamp Posts
// Lamp Post 
const lampStandTexture = textureLoader.load('./assets/textures/lamp.jpg'); 
const lampStandMaterial = new THREE.MeshStandardMaterial({ map: lampStandTexture });
const lampStandGeometry = new THREE.BoxGeometry(0.3, 8, 0.3);
const lampStand1 = new THREE.Mesh(lampStandGeometry, lampStandMaterial);
scene.add(lampStand1);

lampStand1.position.set(5, 3, 6);

// Lamp Light 
const lampLightGeometry = new THREE.CylinderGeometry( 0.5, 1, 1.5, 32 ); 
const lampLightMaterial = new THREE.MeshBasicMaterial( {color: 0xe0e6d5} ); 
const lampLight = new THREE.Mesh( lampLightGeometry, lampLightMaterial ); 
scene.add( lampLight );

lampLight.position.set(5, 7, 6);

const lampLights = new THREE.PointLight(0xdced95, 3);
lampLights.position.set(5, 7, 6);
scene.add(lampLights);

// Moon
const moonTexture = textureLoader.load('./assets/textures/moon.jpg'); 
const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
const moonGeometry = new THREE.SphereGeometry( 5, 32, 16 ); 
const moon = new THREE.Mesh( moonGeometry, moonMaterial ); 
scene.add( moon );

moon.position.set(-5, 20, -3);

const moonLight = new THREE.DirectionalLight(0xfcfeda, 0.5); 
moonLight.position.set(-5, 25, -3); 
scene.add(moonLight);

// Tarpulin
const tarpulinTexture = textureLoader.load('./assets/textures/tarpulin.png'); 
const tarpulinMaterial = new THREE.MeshToonMaterial({ map: tarpulinTexture });
const tarpulinlGeometry = new THREE.BoxGeometry(0.2, 2.5, 1.9);
const tarpulin = new THREE.Mesh(tarpulinlGeometry, tarpulinMaterial);
scene.add(tarpulin);

tarpulin.position.set(-5, 2.5, 2);


// Ambient Light
const ambientLight = new THREE.AmbientLight(0x808080, 0.5);
scene.add(ambientLight);

// Animation 
function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
    controls.update();
}
animate();
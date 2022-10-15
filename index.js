import { 
    Scene, 
    BoxGeometry, 
    MeshBasicMaterial, 
    Mesh, 
    PerspectiveCamera, 
    WebGLRenderer } from 'three';
    
    // 1 The scene
    const scene = new Scene()
    
    // 2 The Object
    const geometry = new BoxGeometry(0.5, 0.5, 0.5);
    const material1 = new MeshBasicMaterial( {color: 'orange'} );
    const material2 = new MeshBasicMaterial( {color: 'blue'});
    const material3 = new MeshBasicMaterial( {color: 'red'});
    
    
    const cubeMesh1 = new Mesh( geometry, material1 );
    const cubeMesh2 = new Mesh( geometry, material2 );
    const cubeMesh3 = new Mesh( geometry, material3 );

cubeMesh1.position.x = 1;
cubeMesh2.position.x = -1;

    scene.add( cubeMesh1 );
    scene.add( cubeMesh2 );
    scene.add( cubeMesh3 );
    
    // 3 The Camera
    const sizes = {
        width: 800,
        height: 600,
    }
    
    

    const canvas = document.getElementById('three-canvas');
    const camera = new PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight);
    camera.position.z = 3;
    scene.add( camera );
const renderer = new WebGLRenderer({ canvas: canvas,});
renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);


renderer.render(scene, camera);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

window.addEventListener('resize', () => {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
});

function animate() {
    cubeMesh1.rotation.x += 0.01;
    cubeMesh1.rotation.z += 0.01;

    
    

    cubeMesh2.rotation.x += 0.01;
    cubeMesh2.rotation.z += 0.01;

    cubeMesh3.rotation.x += 0.01;
    cubeMesh3.rotation.z += 0.01;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
 }
 
 animate();



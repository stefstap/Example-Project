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
    
    const camera = new PerspectiveCamera(75, sizes.width/ sizes.height);
    camera.position.z = 2;
    scene.add( camera );

    const canvas = document.getElementById('three-canvas');
const renderer = new WebGLRenderer({
    canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);



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



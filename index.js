import {
    Scene,
    BoxGeometry,
    MeshBasicMaterial,
    Mesh,
    PerspectiveCamera,
    WebGLRenderer,
    MOUSE,
    Vector2,
    Vector3,
    Vector4,
    Quaternion,
    Matrix4,
    Spherical,
    Box3,
    Sphere,
    Raycaster,
    MathUtils,
    Clock
} from 'three';
import CameraControls from 'camera-controls';

const subsetOfTHREE = {
    MOUSE,
    Vector2,
    Vector3,
    Vector4,
    Quaternion,
    Matrix4,
    Spherical,
    Box3,
    Sphere,
    Raycaster,
    MathUtils: {
      DEG2RAD: MathUtils.DEG2RAD,
      clamp: MathUtils.clamp
    }
  };


    
    // 1 The scene
    const scene = new Scene()
    
    // 2 The Object
    const geometry = new BoxGeometry(1, 1, 1);
    const material1 = new MeshBasicMaterial( {color: 'orange'} );
    const material2 = new MeshBasicMaterial( {color: 'white'});
    const material3 = new MeshBasicMaterial( {color: 'red'});
    
    
    const cubeMesh1 = new Mesh( geometry, material1 );
    const cubeMesh2 = new Mesh( geometry, material2 );
    const cubeMesh3 = new Mesh( geometry, material3 );

cubeMesh1.position.x = 2;
cubeMesh2.position.x = -2;

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


   // Controls
   CameraControls.install( { THREE: subsetOfTHREE } );
   const clock = new Clock();
   const cameraControls = new CameraControls(camera, canvas);
cameraControls.dollyToCursor= true;

function animate() {
    const delta = clock.getDelta();
      cameraControls.update( delta );
      renderer.render( scene, camera );
    requestAnimationFrame(animate);
  }
 
 animate();



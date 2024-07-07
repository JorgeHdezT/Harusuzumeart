// scripts/3D_Object.js

// Crear la escena
var scene = new THREE.Scene();

// Crear la cámara
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

// Crear el renderizador
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff); // Configurar el color de fondo a blanco

document.getElementById('3d-model-container').appendChild(renderer.domElement);

// Añadir una luz
var light = new THREE.DirectionalLight(0xfffff, 1);
light.position.set(4, 2, 1).normalize();
scene.add(light);

// Variable para almacenar el objeto cargado
var object3D;

// Cargar el modelo .obj
var loader = new THREE.OBJLoader();
loader.load(
    '../media/3D_Objects/penguin_child.obj', // Reemplaza con la ruta a tu archivo .obj
    function (object) {
        object3D = object;
        object3D.scale.set(0.1, 0.1, 0.1); // Escalar el objeto
        scene.add(object3D);
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% cargado');
    },
    function (error) {
        console.error('Ocurrió un error al cargar el modelo');
    }
);

// Función de animación
var animate = function () {
    requestAnimationFrame(animate);
    
    // Rotar el objeto si está cargado
    if (object3D) {
        object3D.rotation.x += 0.000;
        object3D.rotation.y += 0.005;
    }

    renderer.render(scene, camera);
};

animate();



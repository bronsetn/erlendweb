<template>
  <v-container
    fluid
    class="pa-0 ma-0"
  >
    <div id="container">
    </div>
  </v-container>
</template>


<script>
//Documentation? https://threejs.org/docs/#manual/en/introduction/Loading-3D-models

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// npm install --save three
import * as Three from 'three'

export default {
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      cube: null
    }
  },

  mounted() {
    this.init();
  },

  created() {
    window.addEventListener('resize', () => { this.onWindowResize() })
  },

  methods: {
    init() {
      let container = document.getElementById('container');

      this.scene = new Three.Scene();

      this.camera = new Three.PerspectiveCamera(75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000);

      this.camera.position.z = 5;

      this.scene.background = new Three.Color("rgb(212, 230, 241)")
      this.hlight = new Three.AmbientLight(0x404040, 100);

      this.scene.add(this.hlight);


      const loader = new GLTFLoader()
      loader.load(
        '.../assets/3d/lamp.gltf',
        function (gltf) {
          this.scene.add(gltf.scene);
        },
        (xhr) => {
          console.log((xhr.loaded / xhr.total * 100) + '% loaded')
        },
        (error) => {
          console.log(error);
        }
      );

      this.renderer = new Three.WebGLRenderer({ antialias: true });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(this.renderer.domElement);
    },

    onWindowResize() {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix()
    }
  }
}
</script>

<style scoped>
    #container {
      overflow-x: hidden; 
      }
</style>
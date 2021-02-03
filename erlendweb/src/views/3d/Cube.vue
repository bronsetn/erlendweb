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
//Tips from https://stackoverflow.com/questions/47849626/import-and-use-three-js-library-in-vue-component

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
    this.animate();
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

      this.camera.position.z = 3;

      this.scene.background = new Three.Color("rgb(8, 14, 33)")
      this.hlight = new Three.AmbientLight(0x404040, 100);

      let geometry = new Three.BoxGeometry(1, 1, 1);
      let material = new Three.MeshNormalMaterial();
      this.cube = new Three.Mesh(geometry, material);

      this.scene.add(this.cube, this.hlight);

      this.renderer = new Three.WebGLRenderer({ antialias: true });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(this.renderer.domElement);
    },

    animate() {
      requestAnimationFrame(this.animate);
      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;
      this.renderer.render(this.scene, this.camera);
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
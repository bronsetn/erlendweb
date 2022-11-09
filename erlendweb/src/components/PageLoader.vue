<template>
  <div
    class="page-loader"
    v-if="!isLoaded"
  >
    <v-row class="center wrapper">
      <div
        cols="12"
        class="welcome"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          width="250"
          class="coffeecup"
        >
          <g>
            <path
              d="M400.14,261.67c-1.78,0-3.55.08-5.3.22a26.94,26.94,0,0,0-26.91-25H87a27,27,0,0,0-27,26.91v87.38c0,61,49.59,110.51,110.77,110.51H284.16a110.77,110.77,0,0,0,103.73-71.72,64.73,64.73,0,1,0,12.25-128.26Zm-6.65,107.17a109.81,109.81,0,0,0,1.43-17.7V284a42.48,42.48,0,0,1-1.43,84.87Zm-138.91-132c31.76-39.7,23.91-61.68,13.75-72.61-13.11-14.11-58.61-28.61-52.69-64.78,6.82-41.74,47.2-47.2,47.2-47.2l-8.76,9.93c-19.42,26.35,5.23,47.74,17.27,59.33,9.92,9.55,28.9,25.17,35.23,47,8.91,30.75-51.1,67.75-52,68.3m-82.2,0c27-33.77,20.35-52.47,11.7-61.76-11.14-12-49.85-24.34-44.81-55.11,5.79-35.5,40.13-40.14,40.13-40.14L172,88.28c-16.52,22.42,4.45,40.61,14.69,50.47,8.43,8.11,24.58,21.41,30,40,7.63,26.34-44.23,58.09-44.23,58.09"
              transform="translate(20 -30)"
            />
          </g>
          Sorry, your browser does not support inline SVG.
        </svg>
        <h2>{{ $t('misc.welcome') }}</h2>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoaded: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 2000);
  }
}
</script>

<style scoped>
.page-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background-color: var(--v-background-base);
}

.welcome {
  opacity: 0;
  transform: translateY(1rem);
  animation: scale-in-center 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s both;
}

@keyframes scale-in-center {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.coffeecup {
  height: 50px;
}
.coffeecup path {
  stroke: var(--v-tertiary-base);
  fill: var(--v-tertiary-base);
}

h2 {
  color: var(--v-tertiary-base);
  font-size: 1.5rem;
  letter-spacing: 2px;
  line-height: 1;
}
</style>
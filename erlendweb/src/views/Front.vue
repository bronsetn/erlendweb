<template>
  <div>
    <v-parallax
      class="frontImage"
      height="600"
      src="../assets/images/front.jpg"
    >
      <v-row no-gutters align="center">
        <v-col xs="12" sm="12" md="2" lg="2" xl="1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
            width="200"
          >
            <g id="drawing">
              <circle
                cx="170.07"
                cy="122.44"
                r="59.72"
                transform="translate(35 20)"
              />
              <path
                d="M412.7,189.8A170.12,170.12,0,1,0,182.62,409.46c2.36,1.14,4.76,2.21,7.18,3.24a170.58,170.58,0,0,0,132.4,0c2.42-1,4.82-2.1,7.18-3.24A170.24,170.24,0,0,0,412.7,189.8ZM245.18,326.21l5.8-40.33h10l5.8,40.33L256,336ZM345.45,385c-.79-57.69-7.33-102-61.45-112.67a50.22,50.22,0,0,1-56,0c-54.12,10.66-60.66,55-61.45,112.67A157,157,0,0,1,99,256c0-86.59,70.44-157,157-157s157,70.44,157,157A157,157,0,0,1,345.45,385Z"
                transform="translate(-50 -50)"
              />
            </g>
            Sorry, your browser does not support inline SVG.
          </svg>
        </v-col>
        <v-col xs="12" sm="12" md="4" lg="4" xl="3">
          <v-container class="mt-10">
            <h1>Erlend Brønseth</h1>
            <h4>Junior front-end utvikler</h4>
            <v-row justify="center">
              <v-icon large>mdi-vuejs</v-icon>
              <v-icon large>mdi-vuetify</v-icon>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
#drawing {
  stroke: hsl(0, 0%, 96%);
  fill: hsl(0, 0%, 96%);

  stroke-miterlimit: 10;
  stroke-width: 5px;

  stroke-dasharray: 1500;
  stroke-dashoffset: 0;
  animation: drawing 2s ease-in-out alternate;
}

@keyframes drawing {
  from {
    stroke-dashoffset: 1500;
    fill: hsla(0, 0%, 100%, 0.01);
  }
  to {
    stroke-dashoffset: 0;
    fill: hsl(0, 0%, 96%);
  }
}

.frontImage {
  width: 100%;
  height: 500px;
}
</style>
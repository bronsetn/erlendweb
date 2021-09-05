<template>
  <div class="front">
    <img src="../assets/front-illustration.svg" />
    <v-row
      no-gutters
      align="end"
    >
      <v-col cols="12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 400"
        >
          <g id="drawing">
            <filter
              id="shadow"
              width="200%"
              height="200%"
            >
              <feOffset
                result="offOut"
                in="SourceAlpha"
                dx="2"
                dy="2"
              />
              <feGaussianBlur
                result="blurOut"
                in="offOut"
                stdDeviation="2"
              />
              <feBlend
                in="SourceGraphic"
                in2="blurOut"
                mode="normal"
              />
            </filter>
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
        </svg>

        <h1>
          Erlend Brønseth
        </h1>
        <p class="subtitle">frontend</p>

      </v-col>
    </v-row>

    <v-icon
      v-if="$vuetify.breakpoint.smAndUp"
      color="tertiary"
      disabled
    >mdi-chevron-double-down</v-icon>

  </div>
</template>

<style scoped>
* {
  text-align: center;
  line-height: 1;
}

.front {
  position: relative;
}

.front img {
  object-fit: cover;
  height: 800px;
  width: 100%;
}

.front .row {
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translate(-50%, -50%);
}

.v-icon.v-icon {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#drawing {
  stroke: #222535;
  fill: #222535;
}

svg {
  width: 100px;
}

h1,
p {
  color: #222535;
}

h1 {
  font-size: 2.5rem;
  line-height: 1;
  white-space: nowrap;
}

.subtitle {
  font-size: 1.25rem;
}

@media only screen and (max-width: 1600px) {
  h1 {
    font-size: 2rem;
  }
}
@media only screen and (max-width: 1200px) {
}
@media only screen and (max-width: 991px) {
}
@media only screen and (max-width: 767px) {
  .v-icon.v-icon {
    display: none;
  }
}
@media only screen and (max-width: 575px) {
}
</style>
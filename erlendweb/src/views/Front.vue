<template>
  <div class="front">
    <img src="../assets/front-illustration.svg" />
    <v-row
      no-gutters
      align="end"
    >
      <v-col cols="12">
        <svg
          class="logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 400"
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
        </svg>

        <h1>
          Erlend Brønseth
        </h1>
        <p class="subtitle">frontend</p>

      </v-col>
    </v-row>

    <v-icon
      color="tertiary"
      disabled
    >mdi-chevron-double-down</v-icon>

    <div class="divider">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path d="M0,224L48,202.7C96,181,192,139,288,138.7C384,139,480,181,576,202.7C672,224,768,224,864,202.7C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>

  </div>
</template>

<style scoped>
* {
  text-align: center;
  line-height: 1;
}

.front {
  position: relative;
  isolation: isolate;
  max-width: 2000px;
  margin: 0 auto;
}

.front img {
  object-fit: cover;
  height: 100vh;
  min-height: 650px;
  width: 100%;
}

.front .divider {
  position: absolute;
  width: 100%;
  bottom: -1px;
}
.front .divider svg path {
  fill-opacity: 1;
  fill: var(--v-primary-base);
}

.front .row {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.v-icon.v-icon {
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.logo g {
  stroke: #222535;
  fill: #222535;
}

svg.logo {
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
  font-size: 1.5rem;
}

/* Min-width */
@media only screen and (min-width: 1600px) {
  .front .divider {
    bottom: -50px;
  }
}

/* Max-width */
@media only screen and (max-width: 1600px) {
}
@media only screen and (max-width: 1200px) {
}
@media only screen and (max-width: 991px) {
  h1 {
    font-size: 2rem;
  }
  .subtitle {
    font-size: 1.25rem;
  }
}
@media only screen and (max-width: 767px) {
}
@media only screen and (max-width: 575px) {
}
</style>
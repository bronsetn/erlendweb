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
              filter="url(#shadow)"
            />
            <path
              filter="url(#shadow)"
              d="M412.7,189.8A170.12,170.12,0,1,0,182.62,409.46c2.36,1.14,4.76,2.21,7.18,3.24a170.58,170.58,0,0,0,132.4,0c2.42-1,4.82-2.1,7.18-3.24A170.24,170.24,0,0,0,412.7,189.8ZM245.18,326.21l5.8-40.33h10l5.8,40.33L256,336ZM345.45,385c-.79-57.69-7.33-102-61.45-112.67a50.22,50.22,0,0,1-56,0c-54.12,10.66-60.66,55-61.45,112.67A157,157,0,0,1,99,256c0-86.59,70.44-157,157-157s157,70.44,157,157A157,157,0,0,1,345.45,385Z"
              transform="translate(-50 -50)"
            />
          </g>
        </svg>

        <h1>
          Erlend Brønseth
        </h1>
        <h3>frontend</h3>

      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
#drawing {
  stroke:#f5f5f5;
  fill:#f5f5f5;

  border: 10px solid black;

  stroke-miterlimit: 10;
  stroke-width: 5px;

  stroke-dasharray: 1500;
  stroke-dashoffset: 0;
  animation: drawing 2s ease-in-out alternate;
}

* {
  text-align: center;
  line-height: 1;
}

.front {
  position: relative;
}

.front .row {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h1, h3 {
  color: #f5f5f5;
}

h1 {
  font-size: 5rem;
  line-height: 1.5;
  text-shadow: 1px 1px 2px black;
}

h3 {
  font-size: 2.5rem;
  opacity: 0.9;
  text-shadow: 0.7px 0.7px 1px black;
}

svg {
    width: 200px;
}

@keyframes drawing {
  from {
    stroke-dashoffset: 1500;
    fill: hsla(0, 0%, 100%, 0.01);
  }
  to {
    stroke-dashoffset: 0;
    fill: #f5f5f5;
  }
}

@media only screen and (max-width: 1600px) {
  h1 {
    font-size: 3rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  .front .row {
    top: 50%;
  }
  svg {
    width: 150px;
  }
}

@media only screen and (max-width: 1200px) {
  svg {
    width: 140px;
  }
}

@media only screen and (max-width: 991px) {
    svg {
      width: 120px;
  }
}

@media only screen and (max-width: 768px) {
  .front .row {
    position: relative;
    top: auto;
    left: auto;
    transform: none;
    margin: -2% auto 50px auto;
  }
    svg {
      width: 100px;
  }
  
  h1, h3 {
    color: var(--v-tertiary-base);
    text-shadow: none;
  }

  #drawing {
    stroke: var(--v-tertiary-base);
    fill: var(--v-tertiary-base);

    border: none;
  }
}

@media only screen and (max-width: 575px) {
  h1 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.2rem;
  }
}

@media only screen and (max-width: 350px) {
   h1 {
    font-size: 2.2rem;
  }
}

</style>
<template>
  <v-col
    cols="12"
    sm="12"
    md="6"
    lg="4"
    xl="4"
  >
    <v-card
      color="secondary"
      elevation="5"
      height="400"
      style="overflow-y: scroll"
    >
      <v-card-title>{{ $t('other.typography') }}<v-spacer></v-spacer>
        <v-icon color="tertiary">mdi-language-css3</v-icon>
      </v-card-title>
      <v-container fluid>

        <v-container>
          <p class="parrallax pt-8">Simple<br>Parrallax<br>Effect</p>

          <v-btn
            icon
            class="ma-4"
            color="accent"
            title="Codepen link"
            target="_blank"
            rel="noopener"
            href="https://codepen.io/bronsetn/pen/VwmMXyV"
          >
            <v-icon x-large>mdi-codepen</v-icon>
          </v-btn>
        </v-container>

        <v-container>
          <p class="calligraphy">Welcome to</p>
          <div class="bold">
            <p>Hot</p>
            <p class="xl">Coffee</p>
            <p>Café</p>
          </div>
          <p class="calligraphy">Your local coffehouse</p>

          <v-btn
            icon
            class="ma-4"
            color="accent"
            title="Codepen link"
            target="_blank"
            rel="noopener"
            href="https://codepen.io/bronsetn/pen/oNYGdjO"
          >
            <v-icon x-large>mdi-codepen</v-icon>
          </v-btn>

        </v-container>

      </v-container>
    </v-card>
  </v-col>
</template>

<style scoped>
* {
  text-align: center;
}

p {
  margin: 0;
}

/* Parrallax */
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap");

* {
  --glitch-color-red: rgb(225, 32, 10);
  --glitch-color-blue: rgb(75, 188, 213);
}

.parrallax {
  font-family: "Raleway", sans-serif;
  font-style: italic;
  font-size: 3em;
  letter-spacing: 0.15em;

  text-shadow: 0.15rem 0.15rem 0.15vw var(--glitch-color-blue),
    0.25rem 0.25rem 0.8vw var(--glitch-color-blue),
    -0.15rem -0.15rem 0.15vw var(--glitch-color-red),
    -0.25rem -0.25rem 0.8vw var(--glitch-color-red);

  color: var(--v-tertiary-base);
}

@media (max-width: 960px) and (max-height: 960px) {
  .parrallax {
    font-size: 2em;
  }
}

/* Cafe */

/* Cookie */
@import url("https://fonts.googleapis.com/css2?family=Cookie&display=swap");

/* Ultra */
@import url("https://fonts.googleapis.com/css2?family=Ultra&display=swap");

* {
  --bold-shadow: #8ba0e4;
}

.calligraphy {
  font-family: "Cookie", cursive;
  font-size: 2em;
  line-height: 1;
  color: var(--v-tertiary-base);
  padding-top: 20px;

  /* Grid for lines on either side */
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 20px 0;
  grid-gap: 20px;
}

.calligraphy::before,
.calligraphy::after {
  content: "";
  display: block;
  border-bottom: 2px solid var(--v-tertiary-base);
}

.bold p {
  font-family: "Ultra", serif;
  font-weight: bold;
  letter-spacing: 0.2em;
  line-height: 1.2;
  font-size: 2.5em;
  color: var(--v-tertiary-base);

  text-shadow: 1px 1px var(--bold-shadow), 1px 2px var(--bold-shadow),
    1px 3px var(--bold-shadow), 1px 4px var(--bold-shadow),
    1px 5px var(--bold-shadow), 1px 6px var(--bold-shadow),
    1px 7px var(--bold-shadow), 1px 8px var(--bold-shadow),
    1px 9px var(--bold-shadow), 1px 10px var(--bold-shadow);
}

.bold p:nth-child(2) {
  font-size: 3em;
}

@media (max-width: 960px) and (max-height: 960px) {
  .calligraphy {
    font-size: 2em;
  }

  .bold p {
    font-size: 1.5em;
  }

  .bold p:nth-child(2) {
    font-size: 2em;
  }
}
</style>
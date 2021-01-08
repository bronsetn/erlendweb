
<template>
  <body>
    <v-container>
      <v-container class="justify-center">
        <p class="font-weight-light ma-1 pa-0">&#8546;</p>
        <h1>Ta kontakt</h1>
      </v-container>

      <v-row class="d-flex justify-center">
        <v-col>
          <v-card elevation="5" color="secondary">
            <v-card-text>
              <form
                @submit.prevent="handleSubmit"
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                <p class="hidden" style="display: none">
                  <label
                    >Don't fill this out if youre human <input name="bot-field"
                  /></label>
                </p>

                <v-text-field
                  class="ma-2"
                  v-model="form.subject"
                  type="text"
                  name="subject"
                  label="Tema"
                ></v-text-field>
                <v-text-field
                  class="ma-2"
                  v-model="form.name"
                  type="text"
                  name="name"
                  label="Navn"
                ></v-text-field>
                <v-text-field
                  class="ma-2"
                  v-model="form.email"
                  type="email"
                  name="email"
                  label="Epost"
                ></v-text-field>
                <v-textarea
                  class="ma-2"
                  auto-grow
                  v-model="form.message"
                  name="message"
                  label="Meldingstekst"
                ></v-textarea>
                <p>
                  Beskjeder herfra sendes direkte til bronsetherlend@gmail.com
                </p>

                <v-btn outlined color="tertiary" type="submit"
                  >Send <v-icon>mdi-telegram</v-icon></v-btn
                >
              </form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </body>
</template>

<script>
export default {
  data() {
    return {
      form: {
        subject: "",
        name: "",
        email: "",
        message: "",
      },
    };
  },

  methods: {
    // Tutorial showing how to set up the form:
    // https://www.youtube.com/watch?v=omoYqKfvdfQ

    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },

    handleSubmit() {
      fetch("/", {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: this.encode({
          "form-name": "contact",
          ...this.form,
        }),
      })
        .then(() => console.log("Stuff sent"))
        .catch((e) => console.error(e));
    },
  },
};
</script>
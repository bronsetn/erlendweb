
<template>
  <body>
    <v-container>
      <v-container class="justify-center">
        <p class="font-weight-light ma-1 pa-0">&#8546;</p>
        <h2>Ta kontakt</h2>
      </v-container>

      <v-row class="d-flex justify-center">
        <v-col>
          <v-card elevation="5" color="primary">
            <v-container>
              <!-- Netlify contact form -->
              <!-- <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />

                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="Name"
                  counter
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  counter
                ></v-text-field>
                <v-textarea
                  v-model="message"
                  :rules="messageRules"
                  counter
                  maxlength="1000"
                ></v-textarea>

                <v-btn type="submit" :disabled="invalid"
                  >Send<v-icon>mdi-telegram</v-icon></v-btn
                >
              </form> -->

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
                  v-model="form.name"
                  type="text"
                  name="name"
                  label="Name"
                ></v-text-field>
                <v-text-field
                  v-model="form.email"
                  type="email"
                  name="email"
                  label="Email"
                ></v-text-field>
                <v-textarea
                  v-model="form.message"
                  name="message"
                  label="Message"
                ></v-textarea>
                <v-btn type="submit">Send <v-icon>mdi-telegram</v-icon></v-btn>
              </form>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </body>
</template>

<script>
export default {
  data: () => ({
    form: {
      name: "",
      email: "",
      message: "",
    },
  }),

  // data() {
  //   return {
  // name: "",
  // nameRules: [
  //   (v) => !!v || "Name is required",
  //   (v) => (v && v.length <= 30) || "Name must be less than 50 characters",
  // ],
  // email: "",
  // emailRules: [
  //   (v) => !!v || "E-mail is required",
  //   (v) => (v && v.length <= 30) || "Email must be less than 50 characters",
  //   (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  // ],
  // message: "",
  // messageRules: [
  //   (v) => !!v || "Name is required",
  //   (v) =>
  //     (v && v.length <= 1000) ||
  //     "Message must be less than 1000 characters",
  // ],
  //   };
  // },

  methods: {
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
          "Content-Type": "application/x-www-urlencoded",
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

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
  // data: () => ({
  //   form: {
  //     name: "",
  //     email: "",
  //     message: "",
  //   },
  // }),

  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },

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
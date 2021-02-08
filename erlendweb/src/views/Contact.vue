
<template>

  <body>
    <v-container>
      <v-container class="justify-center">
        <div class="serif">III</div>
        <h1>{{ $t('header.contact') }}</h1>
      </v-container>

      <v-row class="d-flex justify-center">
        <v-col
          cols="12"
          sm="12"
          md="10"
          lg="10"
          xl="8"
        >
          <v-card
            elevation="5"
            color="secondary"
          >
            <p class="pt-6 pb-2 text--secondary">{{ $t('contact.description') }} </p>

            <v-form
              ref="form"
              v-model="validate"
              @submit.prevent="handleSubmit"
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <p
                class="hidden"
                style="display: none"
              >
                <label>Don't fill this out if youre human <input name="bot-field" /></label>
              </p>
              <v-text-field
                class="ma-2 pa-2"
                v-model="form.email"
                type="email"
                name="email"
                label="Email"
                :rules="rules.email"
              ></v-text-field>
              <v-textarea
                counter="800"
                class="ma-2 pa-2"
                auto-grow
                backround-color="tertiary"
                v-model="form.message"
                name="message"
                label="Message"
                :rules="rules.message"
              ></v-textarea>
              <v-row justify="center">
                <v-col cols=12>
                  <v-btn
                    title="Submit"
                    outlined
                    color="tertiary"
                    type="submit"
                    :disabled="!validate || submitted"
                  >
                    <v-icon>mdi-send</v-icon>
                  </v-btn>
                </v-col>
                <v-col cols=12>
                  <v-alert
                    outlined
                    class="mr-4 ml-4"
                    transition="scale-transition"
                    :type="alert.type"
                    :color="alert.color"
                    :value="alert.value"
                  >{{ alert.text }}
                  </v-alert>
                </v-col>
              </v-row>
            </v-form>
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
        email: null,
        message: null,
      },

      validate: false,
      submitted: false,

      alert: {
        value: true,
        color: "warning",
        type: "warning",
        text: "Something went wrong",
      },

      rules: {
        email: [(v) => /.+@.+\..+/.test(v) || "The email must be formated correctly", (v) => (v && v.length <= 50) || "Must be less than 50 characters"],
        message: [(v) => !!v || "This field is required", (v) => (v && v.length <= 800) || 'Message must be less than 800 characters'],

      },
    };
  },

  methods: {
    // Tutorial showing how to set up the netlify form:
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
        .then(() => {
          this.alert.value = true;
          this.alert.type = "success";
          this.alert.color = "success";
          this.alert.text = "Message was sent";

          console.log("Message sent");
          this.submitted = true;
        })
        .catch((error) => {
          console.log(error.message);
          this.alert.value = true;
          this.alert.type = "warning";
          this.alert.color = "warning";
          this.alert.text = error.message;
        });
    },
  },
};
</script>

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
            <v-card-text>
              <p class="pt-4">{{ $t('contact.description') }} </p>

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
                  class="ma-2"
                  v-model="form.name"
                  type="text"
                  name="name"
                  label="Name"
                  :rules="rules.required"
                ></v-text-field>
                <v-text-field
                  class="ma-2"
                  v-model="form.email"
                  type="email"
                  name="email"
                  label="Email"
                  :rules="rules.required && rules.email"
                ></v-text-field>
                <v-text-field
                  class="ma-2"
                  v-model="form.subject"
                  type="text"
                  name="subject"
                  label="Subject"
                ></v-text-field>
                <v-textarea
                  counter="500"
                  class="ma-2"
                  auto-grow
                  v-model="form.message"
                  name="message"
                  label="Message"
                  :rules="rules.required"
                ></v-textarea>

                <v-btn
                  title="Submit"
                  outlined
                  color="tertiary"
                  type="submit"
                  :disabled="!validate  || submitted"
                >
                  <v-icon>mdi-send</v-icon>
                </v-btn>
                <v-alert
                  text
                  class="mt-4 ma-0 pa-1"
                  transition="scale-transition"
                  :type="alert.type"
                  :value="alert.value"
                >{{ alert.text }}
                </v-alert>
              </v-form>
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
        name: null,
        email: null,
        subject: null,
        message: null,
      },

      validate: false,
      submitted: false,

      alert: {
        value: false,
        type: "success",
        text: "",
      },

      rules: {
        required: [(v) => !!v || "This field is required"],
        email: [(v) => /.+@.+\..+/.test(v) || "The email must be formated correctly"],
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
          this.alert.type = "info";
          this.alert.text = "Message was sent";

          console.log("Message sent");
          this.submitted = true;
        })
        .catch((error) => {
          console.log(error.message);
          this.alert.value = true;
          this.alert.type = "warning";
          this.alert.text = error.message;
        });
    },
  },
};
</script>
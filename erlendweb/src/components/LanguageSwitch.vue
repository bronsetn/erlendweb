<template>
  <div>
    <v-menu
      offset-y
      left
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-avatar size="24">
            <v-img
              :src="`/flag_${$i18n.locale}.svg`"
              alt="Site language flag"
            ></v-img>
          </v-avatar>
        </v-btn>
      </template>

      <v-list
        color="secondary"
        dense
        nav
      >
        <v-list-item-group color="tertiary">
          <v-list-item @click.prevent="setLocale('no')">
            <v-list-item-content>
              NO
            </v-list-item-content>
            <v-list-item-avatar size="25">
              <img
                src="/flag_no.svg"
                alt="Norway's flag - Set language to norwegian"
              >
            </v-list-item-avatar>

          </v-list-item>
          <v-list-item @click.prevent="setLocale('en')">
            <v-list-item-content>
              EN
            </v-list-item-content>
            <v-list-item-avatar size="25">
              <img
                src="/flag_en.svg"
                alt="English flag - Set language to english"
              >
            </v-list-item-avatar>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>


<script>

export default {
  data() {
    return {
      renderComponent: true,

    };
  },

  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale
      this.$router.push({ params: { lang: locale } })
      location.reload();
    }
  },
}
</script>
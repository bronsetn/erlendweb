<template>
  <div class="pr-2">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          icon
          small
        >
          <v-avatar size="28">
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
      >
        <v-list-item @click.prevent="setLocale('no')">
          <v-list-item-content>
            NO
          </v-list-item-content>
          <v-list-item-avatar size="30">
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
          <v-list-item-avatar size="30">
            <img
              src="/flag_en.svg"
              alt="English flag - Set language to english"
            >
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>

</template>


<script>
export default {
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale
      this.$router.push({
        params: { lang: locale }
      })
    }
  },
}
</script>

<style>

</style>
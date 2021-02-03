<template>
  <div>
    <v-app-bar
      hide-on-scroll
      fixed
      flat
      color="secondary"
    >
      <v-row
        no-gutters
        align="center"
        justify="space-between"
      >
        <v-col
          cols="auto"
          md="2"
          class="d-flex justify-start"
          v-if="$vuetify.breakpoint.mobile"
        >
          <v-app-bar-nav-icon
            top
            left
            color="tertiary"
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
        </v-col>

        <v-col
          cols="auto"
          md="2"
          class="d-flex justify-start"
          v-if="!$vuetify.breakpoint.mobile"
        >
          <v-btn
            top
            left
            icon
            v-if="!$vuetify.theme.dark"
            :to="{hash: 'home'}"
          >
            <v-img
              src="../assets/icons/logo-light.svg"
              height="40px"
              width="40px"
              contain
            ></v-img>
          </v-btn>
          <v-btn
            icon
            v-if="$vuetify.theme.dark"
            :to="{hash: 'home'}"
          >
            <v-img
              src="../assets/icons/logo-dark.svg"
              height="40px"
              width="40px"
              contain
            ></v-img>
          </v-btn>
        </v-col>

        <v-col
          cols="auto"
          md="8"
        >
          <v-row
            v-if="!$vuetify.breakpoint.mobile"
            class="d-flex justify-center"
          >
            <v-btn
              :to="{
              hash: 'projects'
            }"
              color="tertiary"
              text
            >
              <div class="serif">I</div>
              <div class="pl-1">{{ $t('header.projects') }}</div>
            </v-btn>

            <v-btn
              :to="{
                hash: 'about'
               }"
              color="tertiary"
              text
            >
              <div class="serif">II</div>
              <div class="pl-1">{{ $t('header.about') }}</div>
            </v-btn>

            <v-btn
              :to="{
                hash: 'contact'
               }"
              color="tertiary"
              text
            >
              <div class="serif">III</div>
              <div class="pl-1">{{ $t('header.contact') }}</div>
            </v-btn>
            <v-btn
              :to="{
                hash: 'other'
               }"
              color="tertiary"
              text
            >
              <div class="serif">IV</div>
              <div class="pl-1">{{ $t('header.other') }}</div>
            </v-btn>
          </v-row>
        </v-col>

        <v-col
          cols="auto"
          md="2"
        >
          <v-row class="d-flex justify-end">

            <div>
              <LanguageSwitch></LanguageSwitch>
            </div>

            <div>
              <v-btn
                color="accent"
                icon
                v-if="$vuetify.theme.dark"
                @click="$vuetify.theme.dark = !$vuetify.theme.dark"
              >
                <v-icon>mdi-weather-night</v-icon>
              </v-btn>
              <v-btn
                icon
                v-else
                @click="$vuetify.theme.dark = !$vuetify.theme.dark"
              >
                <v-icon>mdi-weather-night</v-icon>
              </v-btn>
            </div>
          </v-row>

        </v-col>
      </v-row>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      color="secondary"
    >
      <v-list-item></v-list-item>
      <v-list
        transparent
        class="pl-4"
      >
        <v-list-item :to="{
              hash: 'projects'
            }">
          <v-list-item-icon class="serif">I</v-list-item-icon>
          <v-list-item-content>
            {{ $t('header.projects') }}
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{
                hash: 'about'
               }">
          <v-list-item-icon class="serif">II</v-list-item-icon>
          <v-list-item-content>
            {{ $t('header.about') }}
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{
                hash: 'contact'
               }">
          <v-list-item-icon class="serif">III</v-list-item-icon>
          <v-list-item-content>
            {{ $t('header.contact') }}
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{
                hash: 'other'
               }">
          <v-list-item-icon class="serif">IV</v-list-item-icon>
          <v-list-item-content>
            {{ $t('header.other') }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import LanguageSwitch from "./LanguageSwitch.vue";

export default {
  components: {
    LanguageSwitch,
  },

  data() {
    return {
      drawer: null,
    };
  },
};
</script>
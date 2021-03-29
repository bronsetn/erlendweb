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
            icon
            v-if="!$vuetify.theme.dark"
            :to="{ name: 'Home'}"
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
            :to="{ name: 'Home'}"
          >
            <v-img
              src="../assets/icons/logo-dark.svg"
              height="40px"
              width="40px"
              contain
            ></v-img>
          </v-btn>
        </v-col>

        <!-- Navigation links -->
        <v-col
          cols="auto"
          md="8"
        >
          <!-- If desktop and user is on the homepage -->
          <v-row
            v-if="!$vuetify.breakpoint.mobile && ['Home'].includes($route.name)"
            class="d-flex justify-center"
          >
            <v-btn
              :to="{ hash: 'projects'}"
              color="tertiary"
              text
            >
              <div class="serif">I</div>
              <div class="pl-1">{{ $t('header.projects') }}</div>
            </v-btn>

            <v-btn
              :to="{ hash: 'about'}"
              color="tertiary"
              text
            >
              <div class="serif">II</div>
              <div class="pl-1">{{ $t('header.about') }}</div>
            </v-btn>

            <v-btn
              :to="{ hash: 'contact'}"
              color="tertiary"
              text
            >
              <div class="serif">III</div>
              <div class="pl-1">{{ $t('header.contact') }}</div>
            </v-btn>

            <v-btn
              :to="{ name: 'Other'}"
              color="tertiary"
              text
            >
              <div class="serif">IV</div>
              <div class="pl-1">{{ $t('header.other') }}</div>
            </v-btn>
          </v-row>

          <!-- When on other pages than the homepage, header uses these links -->
          <v-row
            v-if="!$vuetify.breakpoint.mobile && !['Home'].includes($route.name)"
            class="d-flex justify-center"
          >
            <v-btn
              @click="$router.push(`/${$i18n.locale}/#projects`)"
              color="tertiary"
              text
            >
              <div class="serif">I</div>
              <div class="pl-1">{{ $t('header.projects') }}</div>
            </v-btn>

            <v-btn
              @click="$router.push(`/${$i18n.locale}/#about`)"
              color="tertiary"
              text
            >
              <div class="serif">II</div>
              <div class="pl-1">{{ $t('header.about') }}</div>
            </v-btn>

            <v-btn
              @click="$router.push(`/${$i18n.locale}/#contact`)"
              color="tertiary"
              text
            >
              <div class="serif">III</div>
              <div class="pl-1">{{ $t('header.contact') }}</div>
            </v-btn>

            <v-btn
              :to="{ name: 'Other'}"
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
                @click="$vuetify.theme.dark = !$vuetify.theme.dark"
              >
                <v-icon>{{ $vuetify.theme.dark ? "mdi-weather-night" : "mdi-white-balance-sunny" }}</v-icon>
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
      <v-row
        class="mt-10 mb-10 justify-center"
        no-gutters
      >
        <v-btn
          icon
          v-if="!$vuetify.theme.dark"
          :to="{ name: 'Home'}"
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
          :to="{ name: 'Home'}"
        >
          <v-img
            src="../assets/icons/logo-dark.svg"
            height="40px"
            width="40px"
            contain
          ></v-img>
        </v-btn>
      </v-row>

      <v-list
        transparent
        class="pl-4"
        v-if="['Home'].includes($route.name)"
      >
        <v-list-item :to="{ hash: 'projects'  }">
          <v-list-item-icon class="serif">I</v-list-item-icon>
          <v-list-item-content>
            {{ $t('header.projects') }}
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{ hash: 'about' }">
          <v-list-item-icon class="serif">II</v-list-item-icon>
          <v-list-item-content>
            {{ $t('header.about') }}
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{ hash: 'contact'  }">
          <v-list-item-icon class="serif">III</v-list-item-icon>
          <v-list-item-content>
            {{ $t('header.contact') }}
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{  name: 'Other'  }">
          <v-list-item-icon class="serif">IV</v-list-item-icon>
          <v-list-item-content>
            {{ $t('header.other') }}
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <!-- When on other pages than the homepage, nav-bar uses these links -->
      <v-list
        transparent
        class="pl-4"
        v-if="!['Home'].includes($route.name)"
      >
        <v-list-item @click="$router.push(`/${$i18n.locale}/#projects`)">
          <v-list-item-icon class="serif">I</v-list-item-icon>
          <v-list-item-content>
            {{ $t('header.projects') }}
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$router.push(`/${$i18n.locale}/#about`)">
          <v-list-item-icon class="serif">II</v-list-item-icon>
          <v-list-item-content>
            {{ $t('header.about') }}
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$router.push(`/${$i18n.locale}/#contact`)">
          <v-list-item-icon class="serif">III</v-list-item-icon>
          <v-list-item-content>
            {{ $t('header.contact') }}
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{  name: 'Other'  }">
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
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          {{ content.navBar }}
        </q-toolbar-title>

        <div>{{ content.credit }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      language: 'pt-br'
    }
  },
  computed: {
    ...mapGetters(['content'])
  }
}
</script>

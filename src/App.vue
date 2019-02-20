<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
  <!-- <v-app dark>
    <v-toolbar app dark color="primary">
        <v-icon>{{app_icon}}</v-icon>
        <v-toolbar-title>{{title}}</v-toolbar-title>
        <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
        <HelloWorld v-bind:msg="body_message"/>
    </v-content>
    <v-footer app>
        <v-spacer></v-spacer>
        <span class="surface--text">
            {{footer_message}} ⏱ {{time}}
        </span>
        <v-spacer></v-spacer>
    </v-footer>
 </v-app> -->
</template>

<script>
import HelloWorld from './components/HelloWorld'
import {appData} from "./main";
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      appData
    }
  }
}
</script>

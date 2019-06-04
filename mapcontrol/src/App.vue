<template>  
  <div id="app">      
    <v-app id="inspire">           
      <v-navigation-drawer fixed v-model="drawer" right app>
        <v-list dense>
          <v-list-tile  :to="{name:'home'}">
            <v-list-tile-action>
              <v-icon color="#2E7D32">home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile  :to="{name:'RegistroConductor'}">
            <v-list-tile-action>
              <v-icon>contact_mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Registrar Conductor</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>       
      </v-navigation-drawer>
      <v-toolbar color="#2E7D32" dark fixed app>
        <v-spacer></v-spacer>
        <v-toolbar-title>Chachas Control de Ubicaciones</v-toolbar-title>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      </v-toolbar>
      <v-content>
          <v-container fluid fill-height>
            <v-slide-y-transition mode="out-in">
            </v-slide-y-transition> 
            <router-view/>
          </v-container>
        </v-content>
      <v-footer color="#2E7D32" app>
        <v-spacer></v-spacer>
        <span class="white--text">&copy; 2019</span>
      </v-footer>
    </v-app>
  </div>
</template>


<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      drawer: null
    }
  }
}
</script>

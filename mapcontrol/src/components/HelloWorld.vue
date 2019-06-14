<template>
  <div id="app">
  <v-app id="inspire">
    <v-card>
      <v-card-text>
        <v-container fluid>
          <v-layout row wrap>
            <h1>Administrador de proyectos</h1>
            <v-flex xs12>
              
              <v-radio-group label="Porcentaje de avance" v-model="color" row>
                <v-radio
                  v-for="(colorValue, i) in ['50%', '60%', '80%', '100%']"
                  :key="i"
                  :color="success"
                  :label="colorValue"
                  :value="colorValue"
                ></v-radio>
              </v-radio-group>
            </v-flex>
  
            <v-flex xs12 sm3>
              <v-checkbox
                v-model="mode"
                label="Con Fallas"
                value="multi-line"
              ></v-checkbox>
            </v-flex>
  
            <v-flex xs12 sm3>
              <v-checkbox
                v-model="mode"
                label="Sin Fallas"
                value="vertical"
              ></v-checkbox>
            </v-flex>
  
            <v-flex xs12 sm4 offset-sm4>
              <v-text-field
                v-model="text"
                label="Titulo"
                type="text"
              ></v-text-field>
              </v-flex>
              <v-flex xs12 sm4 offset-sm4>
              <v-text-field
                v-model="text1"
                label="Plataforma"
                type="text"
              ></v-text-field>
              </v-flex>
              <v-flex xs12 sm4 offset-sm4>
              <v-text-field
                v-model="text2"
                label="Tipo"
                type="text"
              ></v-text-field>
            </v-flex>
  
            <v-flex xs12 sm4>
              <v-text-field
                v-model.number="timeout"
                label="Horas Trabajadas"
                type="Puntos"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
  
        <v-btn
          block
          color="primary"
          dark
          @click="snackbar = true"
        >
          Guardar Cambios
        </v-btn>
      </v-card-text>
      <v-snackbar
        v-model="snackbar"
        :color="color"
        :multi-line="mode === 'multi-line'"
        :timeout="2000"
        :vertical="mode === 'vertical'"
      >
        {{ text }}
         Cambios guardados con exito
        <v-btn
          dark
          flat
          @click="snackbar = false"
        >
          Cerrar
        </v-btn>
      </v-snackbar>
    </v-card>
  </v-app>
</div>
</template>

<script>
import db from '../db'
  
  export default {
    name: 'HelloWorld', 
   data () {
    return {
      snackbar: false,
      color: 'succes',
      mode: '',
      timeout: 0,
      text: 'Control de Ubicaciones'
    }
  } 
}
</script>



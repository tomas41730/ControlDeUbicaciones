<template>
     <v-layout align-start> 
          <v-flex>
               <v-toolbar flat color="white">
                         <v-toolbar-title>Lista de Conductores</v-toolbar-title>
                              <v-divider
                                class="mx-2"
                                inset
                                vertical
                              ></v-divider>
                              <v-spacer></v-spacer>
                              <v-dialog v-model="dialog" max-width="500px">
                                <template v-slot:activator="{ on }">
                                  <v-btn color="primary" dark class="mb-2" v-on="on">Nuevo</v-btn>
                                </template>
                                <v-card>
                                  <v-card-title>
                                    <span class="headline">{{ formTitle }}</span>
                                  </v-card-title>
                        
                                  <v-card-text>
                                    <v-container grid-list-md>
                                      <v-layout wrap>
                                        <v-flex xs12 sm6 md4>
                                          <v-text-field v-model="editedItem.codigo" label="Codigo"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                          <v-text-field v-model="editedItem.nombre" label="Nombre"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                          <v-text-field v-model="editedItem.apellido" label="Apellido"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                          <v-text-field v-model="editedItem.email" label="E-mail"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                          <v-text-field v-model="editedItem.celular" label="Celular"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                          <v-text-field v-model="editedItem.placa" label="Placa"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                          <v-text-field v-model="editedItem.edad" label="Edad"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                          <v-text-field v-model="editedItem.disponible" label="Disponible"></v-text-field>
                                        </v-flex>
                                      </v-layout>
                                    </v-container>
                                  </v-card-text>
                        
                                  <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                                    <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
                                  </v-card-actions>
                                </v-card>
                              </v-dialog>
                         </v-toolbar>
                         <v-data-table
                              :headers="headers"
                              :items="conductores"
                              class="elevation-1"
                            >
                              <template v-slot:items="props">
                                <td>{{ props.item.codigo }}</td>
                                <td class="text-xs-right">{{ props.item.nombre }}</td>
                                <td class="text-xs-right">{{ props.item.apellido }}</td>
                                <td class="text-xs-right">{{ props.item.email }}</td>
                                <td class="text-xs-right">{{ props.item.celular }}</td>
                                <td class="text-xs-right">{{ props.item.placa }}</td>
                                <td class="text-xs-right">{{ props.item.edad }}</td>
                                <td class="text-xs-right">{{ props.item.disponible }}</td>
                                <td class="justify-center layout px-0">
                                  <v-icon
                                    small
                                    class="mr-2"
                                    @click="editItem(props.item)"
                                  >
                                    edit
                                  </v-icon>
                                  <v-icon
                                    small
                                    @click="deleteItem(props.item)"
                                  >
                                    delete
                                  </v-icon>
                                </td>
                              </template>
                              <template v-slot:no-data>
                                <h1 color="primary" @click="getConductores">Sin Datos</h1>
                              </template>
             </v-data-table>          
          </v-flex>
     </v-layout>                
</template>
<script>
import db from '../db'

     export default {
          data(){
               return {
                    dialog: false,
                    headers: [
                         {
                         text: 'Codigo',
                         align: 'center',
                         sortable: true,
                         value: 'codigo'
                         },
                         { text: 'Nombre', value: 'nombre' },
                         { text: 'Apellido', value: 'apellido' },
                         { text: 'E-mail', align: 'center', value: 'email' },
                         { text: 'Celular', value: 'celular' },
                         { text: 'Placa', value: 'placa'},
                         { text: 'Edad', align: 'center', value: 'edad'}, 
                         { text: 'Disponible', align: 'center', value: 'disponible'},
                         { text: 'Acciones', value: 'nombre',
                         sortable: false }
                    ],
                    conductores: [],
                    editedIndex: -1, //---->si borramos esto desaparece el crud
                    editedItem: {
                         codigo: '',
                         nombre: '',
                         apellido: '',
                         email: '',
                         celular: '',
                         placa: '',
                         edad: '',
                         disponible: true
                                },
                    updateItem: {
                         nombre: '',
                         apellido: '',
                         email: '',
                         celular: '',
                         placa: '',
                         edad: '',
                         disponible: true
                                },
                      editId: '',
                    defaultItem: {
                         nombre: '',
                         apellido: '',
                         email: '',
                         celular: '',
                         placa: '',
                         edad: '',
                         disponible: true
                                    }
                          }
          },
  
          computed: {
          formTitle () {
               return this.editedIndex === -1 ? 'Nuevo' : 'Editar'
          }
          },

          watch: {
          dialog (val) {
               val || this.close()
          }
          },

          created () {
          this.getConductores()
          },
          methods:{
               getConductores () {
                db.collection('Conductor').get().then(
                  querySnapshot => {
                  const conductores = []

                  querySnapshot.forEach(element => {
                  conductores.push(element.data())
              })
              this.conductores = conductores
            })
          },

          editItem (item) {
               this.editedIndex = this.conductores.indexOf(item)
               this.editedItem = Object.assign({}, item)
               this.dialog = true  
          },

          deleteItem (item) {
               const index = this.conductores.indexOf(item)
               confirm('Esta seguro que desea eliminarlo?') && this.conductores.splice(index, 1)
          },

          close () {
               this.dialog = false
               setTimeout(() => {
               this.editedItem = Object.assign({}, this.defaultItem)
               this.editedIndex = -1
               }, 300)
          },

          save () {
               if (this.editedIndex > -1) {
               Object.assign(this.conductores[this.editedIndex], this.editedItem)
               } else {
               
               db.collection('Conductor').add(this.
               editedItem).then(this.getConductores)
               firebase.auth().createUserWithEmailAndPassword(editedItem.email, 'Password123')
               }
               this.close()
               }    
          }
     }
</script>
//db.collection('Conductor'.add(this.
  //            editItem).then(this.getConductores))


  db.collection('Conductor')
                 .where('codigo', '==', this.editId).get()
                 .then(querySnapshot => {
                   querySnapshot.forEach(doc => {
                     doc.ref.set({
                       codigo: this.codigo,
                       nombre: this.nombre,
                       apellido: this.apellido,
                       email: this.email,
                       celular: this.celular,
                       placa: this.placa,
                       edad: this.edad
                     }).then(this.getConductores)
                   })
                   this.close()
                 })
                   this.editId = item.codigo
               this.editedItem.nombre = item.nombre
               this.editedItem.apellido = item.apellido
               this.editedItem.email = item.email
               this.editedItem.celular = item.celular
               this.editedItem.placa = item.placa
               this.editedItem.edad = item.edad
<template>
  <div>
    <h1>Conductores</h1>
    <div 
      v-for="conductor in conductores"
      v-bind:key="conductor.codigo"
      class="collection"
    >
      <div class="collection-item conductores__list-item">
        <div>{{conductor.codigo}}</div>
        <div>{{conductor.nombre}}</div>
        <div>{{conductor.apellido}}</div>
      </div>
    </div> 
  </div>
</template>

<script>
import db from '../db'
  
  export default {
    name: 'HelloWorld', 
    data() {
      return {
      conductores: []
      }
    },
    created() {
     db.collection('Conductor').get().then(querySnapshot => {
       querySnapshot.forEach(element => {
         this.conductores.push(element.data())
       })
     })
    
  },
   
  }
</script>

<style scoped>
.conductores__list-item {
  align-items: center;
  display: flex;
  justify-content: space-between;
  background: white;
  border-color: rgb(0, 0, 0);
}
</style>


<template>
    <main>
      <div class="card">
        <h2>Carreras</h2>
        <button class="button" @click.prevent="$router.push({name: enumRouteNames.CREATE_CAREER})"> Agregar una carrera </button>
        <div class="table-container">
            <Table
                :rows="rows" 
                :columns="careerColumns"
                :is-action="false"
            > 
        </Table>
        </div>
      </div>
    </main>
  </template>
  
<script setup lang="ts">
import { ref } from 'vue';
import Table from '@/components/molecules/Table.vue';
import enumRouteNames from '@/enums/enumRouteNames';
import careerColumns from '@/composables/careerColumns';
import { useRouter } from 'vue-router';
import careerService from '@/service/careerService';

export interface Career {
    id:         number;
    name:       string;
    duration:   number;
}

const router = useRouter()
const rows = ref<Career>()

const getCareer = async() => {
    const response = await careerService.career()
    rows.value = response.map((el)=>{
        return {
            id: el.id,
            name: el.name,
            duration: el.duration,
        }
    })
}
getCareer()


</script>

<style scoped>
.card { 
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
background-color: white;
border-radius: 10px;
box-shadow: 1px 1px rgba(0,0,0,0.2);
padding: 20px;
}

h2  {
margin-top: 20px;
width: 100%;
}
.table-container {
margin-top: 20px;
width: 100%;
}
.button {
  background-color:greenyellow;
  border: none;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 500;
  width: 200px;
  height: 30px;
  margin-top: 20px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
}
</style>
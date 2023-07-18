<template>
    <main>
     <form @submit.prevent="createCareer" method="post">
         <div class="card">
             <h2>Alta de carreras</h2>
             <label 
                 class="space"
                 for="name"
             > 
                 Nombre
             </label>
             <input 
                class="input input-space"
                 type="text" 
                 id="name" 
                 name="name"
                 v-model="career.name"
             >
         
             <label 
                 class="space"
                 for="duration"
             > 
                 Duración (Semestres)
             </label>
             <input 
                class="input input-space"
                 type="number" 
                 id="duration" 
                 name="duration"
                 v-model="career.duration"
             >
             <div class="container">
                <input 
                    class="button"
                    type="submit" 
                    value="Enviar"
                 />
             </div>
         </div>
     </form>
    </main>
 </template>
 
<script setup lang="ts">
import {ref, watch} from 'vue'
import careerService from '@/service/careerService'
import { useRouter } from 'vue-router';
import enumRouteNames from '@/enums/enumRouteNames';

export interface Career {
    id:        number;
    name:      string;
    duration:  number;
}

const router = useRouter()
const career = ref<Career>({
    name: '',
    duration: '',
})


const createCareer = async() => {
    if(career.value.name != '' && career.value.duration != ''){
        await careerService.createCareer(career.value)
        router.push({name: enumRouteNames.VIEW_CAREER})
    } else {
        alert('Llena todos los campos')
    }
}
 
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

label {
    font-weight: bold;
    margin-right: 0;
    margin-left: 0;
}
.space {
    margin-top: 20px;
}
.label-space {
    margin-top: 10px;
}
.input {
    border: 1px solid lightgray;
    border-radius: 5px;
    height: 34px;
}
.container {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
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
<template>
   <main>
    <form @submit.prevent="createUser" method="post">
        <div class="card">
            <h2>Alta Alumno</h2>
            <label 
                class="space"
                for="name"
            > 
                Nombre(s) 
            </label>
            <input 
                class="input input-space"
                type="text" 
                id="name" 
                name="name"
                v-model="user.name"
            >

            <label 
                class="space"
                for="careerSelector"
            > 
                Carrera 
            </label>
            <VueSelect
                v-model="careerSelected"
                :options="careerOptions"
                id="careerSelector"
            >
            </VueSelect>
        
            <label 
                class="space"
                for="age"
            > 
                Edad
            </label>
            <input 
                class="input input-space"
                type="number" 
                id="age" 
                name="age"
                v-model="user.age"
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
import VueSelect from 'vue-select';
import careerService from '@/service/careerService'
import userService from '@/service/userService';
import { useRouter } from 'vue-router';
import enumRouteNames from '@/enums/enumRouteNames';

export interface User {
    id:         number;
    name:       string;
    careerId:   number;
    age:        number;
}

export interface Selector {
    value:      number;
    label:      string | number;
}

const router = useRouter()
const user = ref<User>({
    name: '',
    age: ''
})
const careerSelected = ref<Selector>()
const careerOptions = ref<Selector[]>()

const getCareers = async() => {
    const response = await careerService.career()
    careerOptions.value = response.map((el)=>{
        return { 
            value: el.id,
            label: el.name,
        }
    })
}
getCareers()

const createUser = async() => {
    if(user.value.name != '' && user.value.age != '' && careerSelected != null){
        await userService.createUser(user.value)
        router.push({name: enumRouteNames.VIEW_USER})
    } else {
        alert('Llena todos los campos')
    }
}

 

watch(()=>careerSelected.value, ()=>{
    user.value.careerId = careerSelected.value?.value
})



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
  font-weight: bold;
  width: 100%;
}
.space {
    margin-top: 20px;
}

label {
    font-weight: bold;
    margin-right: 0;
    margin-left: 0;
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
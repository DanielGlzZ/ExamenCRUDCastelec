
<template>
  <main>
    <div class="card">
      <h2>Alumnos</h2>
      <button class="button" @click.prevent="$router.push({name: enumRouteNames.CREATE_USER})"> Agregar un alumno </button>
      <div class="table-container">
        <Table
        :rows="rows" 
        :columns="columns"
        :is-actions="true"
        @delete="deleteUser"
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
import columns from '@/composables/columns';
import userRows from '@/composables/rows';
import { useRouter } from 'vue-router';
import userService from '@/service/userService'
import Swal from 'sweetalert2'

export interface User {
    id:     number;
    name:   string;
    career: string
    age:    number;
}

const router = useRouter()
const rows = ref<User>()

const getUsers = async() => {
  const response = await userService.user()
  rows.value = response.map((el)=>{
    return {
      id: el.id,
      name: el.name,
      career: el.career.name,
      age: el.age,
    }
  })
}
getUsers()

const deleteUser = (id: number) => {
  Swal.fire({
    title: 'Estas seguro que deseas borrar el usuario?',
    text: "No se pueden revertir los cambios una vez aceptados!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Confirmar!'
  })
    .then(async(result) => {
      if (result.isConfirmed) {
        await userService.deleteUser(id)
        getUsers()
        Swal.fire(
          'Borrado!',
          'El usuario ha sido borrado.',
          'success'
        )
      }
    })
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
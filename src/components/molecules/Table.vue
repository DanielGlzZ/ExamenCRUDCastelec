<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th v-for="(column, index) in columns" :key="index">
                        {{ column.label }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in rows" :key="index">
                    <td v-for="(value, columnIndex) in row" :key="columnIndex">
                        {{ value }}
                    </td>
                    <td v-if="isActions">
                        <button class="space button-edit" @click.prevent="$router.push({name: enumRouteNames.UPDATE_USER, params: {id: row.id}})"> Editar </button>
                        <button class="space button-delete" @click.prevent="deleteRow(row.id)"> Eliminar </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import enumRouteNames from '@/enums/enumRouteNames';

export interface Column {
    label: string;
}

export interface Row {
    id:     string;
    name:   string;
    career: string;
    age:    string;   
}

export interface Props {
    columns: Column[]
    rows:   Row[];
    isActions:  boolean;
}

const emit = defineEmits(['delete'])

const deleteRow = (id: number) => {
    emit('delete', id)
}

const props = defineProps<Props>()

</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    padding: 8px;
    text-align: center;
    border-bottom: 1px solid #71DC00;
}

th {
    font-weight: bold;
}
.space {
    margin-right: 10px;
    margin-left: 10px;
}
.button-delete {
  background-color:tomato;
  border: none;
  border-radius: 20px;
  font-weight: 500;
  font-size: 15px;
  color: white;
  height: 30px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
}
.button-edit {
  background-color:deepskyblue;
  border: none;
  border-radius: 20px;
  font-weight: 500;
  font-size: 15px;
  color: white;
  height: 30px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
}

</style>
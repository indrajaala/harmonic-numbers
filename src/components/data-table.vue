<script setup>

import {ref} from 'vue'
import { useStore } from '../store/store.js'
const store = useStore();
const filter = ref('');
const separator = ref('cell');
</script>

<template>
  <div v-if="store.harmonicNumbers" class="table q-pa-md q-mx-auto">
    <q-table
        title="Harmonic Numbers"
        :rows="store.harmonicNumbers"
        row-key="name"
        :filter="filter"
        :separator="separator"
        :loading="store.loading"
    >
      <template v-slot:body-cell-1="props">
        <q-td :props="props">
          <div>
            <q-badge class="col-header"  :label="props.value" />
          </div>
          <div class="my-table-details">
            {{ props.col.details }}
          </div>
        </q-td>
      </template>


      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
              class="row-header text-blue text-bold"
          >
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:loading>
        <q-inner-loading showing color="primary" />
      </template>
      <template v-slot:top>
        <q-space />
        <q-input borderless dense debounce="300" color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div>
</template>

<style scoped>
.table {
  width: 70vw;
}

@media only screen and (max-width: 480px) {
 .table{ width: 100vw
 }
 }

.row{
  border: 1px solid black;
}
.col{
border-right: 1px solid black;
}

.row-header{
  font-weight: bold;
}
.col-header{
  background-color: transparent!important;
  color: #2196f3;
  font-weight: bold;
  padding: 0;
}
</style>
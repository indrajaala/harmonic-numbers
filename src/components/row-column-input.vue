<script setup>
import {ref} from 'vue'
import { useStore } from '../store/store.js'
const store = useStore();

const rows = ref(0);
const columns = ref(0);
const rowsRef = ref(null);
const columnsRef = ref(null);

const rowsRules = [
  val => (val !== null && val !== '') || 'Please type no of rows',
  val => (val > 1 && val <= 100) || 'value should be between 1 and 100'
]

const columnsRules = [
  val => (val !== null && val !== '') || 'Please type no of columns',
  val => (val > 1 && val <= 100) || 'value should be between 1 and 100'
]

const onSubmit = () => {
  rowsRef.value.validate()
  columnsRef.value.validate()
  if (rowsRef.value.hasError || columnsRef.value.hasError) {
    // form has error
  }else {
    store.getHarmonicNumbers(rows.value, columns.value - 1);
  }
}
defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <div class="text-center q-mx-auto q-pa-md" style="max-width: 300px">
    <p class="q-py-sm">select number of rows and column</p>
    <form @submit.prevent.stop="onSubmit" class="q-gutter-md">
    <q-input
        ref="rowsRef"
        filled
        type="number"
        v-model="rows"
        label="rows *"
        lazy-rules
        :rules="rowsRules"
    />
    <q-input
        ref="columnsRef"
        filled
        type="number"
        v-model="columns"
        label="columns *"
        lazy-rules
        :rules="columnsRules"
    />
    <div>
      <q-btn label="Submit" type="submit" color="primary" />
    </div>
  </form>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

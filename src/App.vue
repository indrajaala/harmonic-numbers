<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import RowColumnInput from "./components/row-column-input.vue";
import DataTable from "./components/data-table.vue";
</script>

<template>
  <div class="container bg-amber-1">
  <div class="text-center">
    <h1 class="text-blue-7 text-bold">Harmonic Numbers</h1>
  </div>
  <row-column-input msg="Vite + Vue" />
  <data-table/>
  </div>
</template>

<style scoped>

.container{
  /*height: 100vh;*/
  padding-top: 1px;
  padding-bottom: 50vh;

}

h1{
  font-size: 4rem;
}

@media only screen and (max-width: 480px) {
  h1{
    font-size: 2.3rem;
  }
}
</style>

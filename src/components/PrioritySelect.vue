<template>
  <div>
    <select
      name="priority"
      id="priority"
      :class="taskStore.pc"
      v-model="taskStore.pc"
    >
      <option value="High">High</option>
      <option value="Normal">Normal</option>
      <option value="Low" >Low</option>
    </select>
  </div>
</template>

<script setup>
/*
  imports
*/

import { useTaskStore } from '@/stores/taskStore.js';

/*
  store
*/

const taskStore = useTaskStore()


</script>

<style>
select, option {
  appearance: none !important;
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}

select#priority {
  font-family: 'Arial', sans-serif;
  color: #fff;
  border: none;
  padding: 0px 20px;
  border-radius: 10px;
  height: 60px;
  outline: none;
  cursor: pointer;
}

.High {
  background-color: #E2435C;
}

.Normal {
  background-color: #FDAB3D;
}

.Low {
  background-color: #4b82c0;
}

</style>
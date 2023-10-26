<template>
  <div class="modal-overlay">
    <div class="wrapper-main" id="edit-modal">
      <span class="close-modal" @click="taskStore.toggleEditModal"></span>

      <div class="edit-fields-1">
        <div class="edit-select-date">
          <VueDatePicker
          v-model="taskStore.dateOutput"
          time-picker-inline
          :is-24="false"
          :enable-time-picker="false"
          :format="format"
          ></VueDatePicker>
        </div>
        <PrioritySelect class="edit-select-priority" @change="focusAfterPriority"/>
      </div>
      <div class="edit-fields-2">
        <input
          placeholder="Add a new task..."
          class="edit-task-input"
          type="text"
          name="new-entry-input"
          @keydown.enter="taskStore.addTask"
          v-model="taskStore.sortedTasks[index].title"
          ref="taskInput"
          autofocus
        />
        <button class="save">Save</button>
      </div>

    </div>
  </div>
</template>

<!-- Line 25 above, how to get index working? That may be the final part. -->

<script setup>
/*
  imports
*/

import { defineProps } from 'vue'
import { useTaskStore } from '@/stores/taskStore.js'
import PrioritySelect from '@/components/PrioritySelect.vue'

/*
  store
*/

const taskStore = useTaskStore()

/*
  props
*/

const props = defineProps(['format', 'date'])

/*
  load edit task details
*/

// get the item clicked on
// v-model to populate the date, priority & input fields from Pinia (taskStore.tasks)


</script>

<style>
.modal-overlay {
  background-color: rgb(0 0 0 / 40%);
  width: 100%;
  height: 100%;
  display: block;
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 0;
}

#edit-modal {
  width: 600px;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  z-index: 999;
  padding: 50px;
  box-shadow: 0 1px 0.625rem 0 hsla(210, 7%, 22%, .06), 0 0.125rem 0.25rem 0 hsla(210, 7%, 22%, .08);
}

.close-modal:after {
  position: absolute;
  right: 7px;
  top: 0;
  font-family: 'Font Awesome 5 Free';
  content: '\f057';
  font-weight: 600;
  font-size: 26px;
  color: #36726b;
  cursor: pointer;
}

.edit-fields-1, .edit-fields-2 {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
}

.edit-fields-2 {
  flex-direction: column;
}

.edit-select-date {
  display: flex;
  flex-grow: 1;
  margin-right: 1em;
}

.edit-task-input {
  display: flex;
  width: 100%;
  border-radius: 10px;
  border: none;
  font-size: 24px;
  line-height: 1em;
  height: 60px;
  padding: 10px 15px;
  font-family: 'Arial', sans-serif;
  color: #686d6d;
}

.edit-select-priority {
  display: flex;
  align-items: end;
}

.save {
  padding: 15px;
  margin: 1.5em 0 1em 0;
  color: #fff;
  background-color: #36726b;
  border: none;
  border-radius: 0.5em;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
}
</style>
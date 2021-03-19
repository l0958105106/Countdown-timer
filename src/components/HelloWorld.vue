<template>
  <h1>{{ msg }}</h1>
  <p>{{ time.hour }} : {{ time.minute }} : {{ time.second }}</p>
  <div class="p-field p-col-12 p-md-3">
    <InputNumber
      v-model="item.value"
      mode="decimal"
      showButtons
      buttonLayout="vertical"
      style="width: 4rem"
      :min="0"
      :max="59"
      decrementButtonClass="p-button-secondary"
      incrementButtonClass="p-button-secondary"
      incrementButtonIcon="pi pi-plus"
      decrementButtonIcon="pi pi-minus"
    />
  </div>
</template>

<script setup>
import { defineProps, reactive, ref } from "vue";
defineProps({
  msg: String,
});

// const state = ref(0);
const state = reactive({
  times: [
    { name: "hour", value: 0 },
    { name: "min", value: 0 },
    { name: "hour", value: 0 },
  ],
});
</script>

<style scoped>
a {
  color: #42b983;
}
.btn {
  margin: 0 2em;
}
</style>
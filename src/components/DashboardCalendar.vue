<template>
  <div class="calendar">
    <h1>Selecione uma data para relaizar apesquisa</h1>
    <date-picker v-model="time3" range></date-picker>
    <b-button @click="obterUsuarios" size="lg" variant="success" class="ml-2">Pesquisar</b-button>
    <hr />
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  components: { DatePicker },
  data() {
    return {
      time1: null,
      time2: null,
      time3: null
    };
  }
};
</script> 

<style>
.calendar {
  text-align: center;
  margin: 150px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 8px 6px -6px rgb(161, 161, 161);
}
</style>
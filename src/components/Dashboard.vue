<template>
  <div class="dashboard">
    <h1>Relatório semanal de taxa de aglomerações</h1>
    <line-chart :data="chartData"></line-chart>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  props: {
    msg: String
  },
  data() {
    return {
      chartData: {
        'domingo': 7,
        'segunda': 2,
        'terça': 5,
        'quarta': 4,
        'quinta': 7,
        'sexta': 8,
        'sábado': 9
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard{
  text-align: center;
  margin: 150px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 8px 6px -6px rgb(161, 161, 161);
  }


</style>

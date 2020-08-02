<template>
    <div id="app">
      <Dashboard />
      <div id="box-b">
        <DashBoxTotal />
        <DashBoxSafe />
        <DashBoxAlert />
      </div>
      <DashboardCalendar/>
      <DashboardCadastro />
    </div>
</template>

<script>
import Dashboard from "./components/Dashboard.vue";
import DashBoxTotal from "./components/DashBox_total.vue";
import DashBoxAlert from "./components/DashBox_alert.vue";
import DashBoxSafe from "./components/DashBox_safe.vue";
import DashboardCadastro from "./components/DashboardCadastro.vue";
import DashboardCalendar from "./components/DashboardCalendar";


export default {
  name: "App",
  components: {
    Dashboard,
    DashBoxTotal,
    DashBoxAlert,
    DashBoxSafe,
    DashboardCadastro,
    DashboardCalendar
  },
};
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#box-b {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin: 150px;
}
</style>

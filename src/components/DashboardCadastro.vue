<template>
  <div id="app" class="container">
    <h1>Registrar ocorrência</h1>
    <b-card>
      <b-form-group label="Quantidade">
        <b-form-input type="text" size="lg" v-model="usuario.quantidade" placeholder="Informe a quantidade"></b-form-input>
      </b-form-group>
      <b-form-group label="Risco baixo">
        <b-form-input type="email" size="lg" v-model="usuario.baixo" placeholder="Risco baixo"></b-form-input>
      </b-form-group>
      <b-form-group label="Risco alto">
        <b-form-input type="email" size="lg" v-model="usuario.alto" placeholder="Risco alto"></b-form-input>
      </b-form-group>
      <b-form-group label="Horário">
        <b-form-input type="email" size="lg" v-model="usuario.horario" placeholder="Informe o horário"></b-form-input>
      </b-form-group>
      <b-form-group label="Data">
        <b-form-input type="email" size="lg" v-model="usuario.data" placeholder="Informe a data"></b-form-input>
      </b-form-group>
      <hr />
      <b-button @click="salvar" size="lg" variant="primary">Salvar</b-button>
      <b-button @click="obterUsuarios" size="lg" variant="success" class="ml-2">Obter Dados</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuarios: [],
      usuario: {
        quantidade: "",
        baixo: "",
        alto: "",
        horario: "",
        data: "",
      },
    };
  },
  methods: {
    salvar() {
      this.$http.post("usuarios.json", this.usuario).then((resp) => {
        (this.usuario.nome = ""), (this.usuario.email = "");
      });
    },
    obterUsuarios() {
      this.$http("usuarios.json").then((res) => {
        this.usuarios = res.data;
        console.log(this.usuarios);
      });
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>

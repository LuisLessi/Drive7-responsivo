<template>
  <div class="body"> 
    <Navbar />
    <div class="d-flex align-items-center">
      <div class="ml-3">
        <h1 class="mt-4" style="width: 200px;">Novo passageiro</h1>
      </div>
      <div class="row mt-5" style="flex-grow: 1;">
        <span class="col dados"><router-link to="/novo-motorista/dados"
                        style="text-decoration: none; color: inherit;">Dados</router-link></span>
                <span class="col documentos"><router-link to="/novo-motorista/documentos"
                        style="text-decoration: none; color: inherit;">Documentos</router-link></span>
                <span class="col veiculos"><router-link to="/novo-motorista/veiculo"
                        style="text-decoration: none; color: inherit;">Veículos</router-link></span>
                <span class="col saldo"><router-link to="/novo-motorista/saldo"
                        style="text-decoration: none; color: inherit;">Saldo e histórico</router-link></span>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
</script>

<style lang="scss" scoped>
.body {
  background-color: #151515;
  height: 43em;
}

h1 {
  height: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 20px;
  margin-left: 1.5rem !important;
  color: #FFFFFF;
  white-space: nowrap;
  display: inline-block;
}

.dados {
    width: 6px;
    height: 20px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    /* identical to box height, or 83% */

    display: flex;
    align-items: center;
    text-decoration: underline red;
    text-underline-offset: 0.7rem;
    cursor: pointer;

    line-height: 40px;
    color: rgba(255, 255, 255, 0.502)
}

.documentos {
    width: 136px;
    height: 20px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    /* identical to box height, or 83% */
    cursor: pointer;

    display: flex;
    align-items: center;

    color: rgba(255, 255, 255, 0.5);
}

.veiculos {
    width: 92px;
    height: 20px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    /* identical to box height, or 83% */

    display: flex;
    align-items: center;

    color: rgba(255, 255, 255, 0.5);
}

.saldo {
    width: 191px;
    height: 20px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    /* identical to box height, or 83% */

    display: flex;
    align-items: center;

    color: rgba(255, 255, 255, 0.5);
}

.col {
    margin-top: 10px;
    margin-bottom: 10px;
}



.row {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  border: 1px solid #202020;
  border-radius: 5px;
  margin-left: -15%;
  margin-right: 3%;
  margin-bottom: -5%;
}

@media screen and (max-width: 768px) {
  .row {
    margin-right: 0;
  }
}
</style>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { ref } from 'vue'
import { useDisplay } from 'vuetify/lib/framework.mjs'
import Check from './icons/Check.vue'
import Clock from './icons/Clock.vue'
import Alert from './icons/Alert.vue'
import TesteTest from './Teste.test.vue'

const { height } = useDisplay()
const store = useCounterStore()
</script>

<template>
  <v-card
    elevation="3"
    class="mx-4 my-4 w-100 d-flex"
    :style="`max-height: ${height - 80}px !important;`"
    style="border-radius: 0; background-color: transparent; flex-wrap: wrap; color: #555555"
  >
    <div class="header-prototype pa-1 pl-4">
      <img src="../assets/logo-uni.png" alt="Uni Exemplo" height="90%" style="user-select: none" />
      <v-spacer></v-spacer>
      <v-btn class="text-none" text="Nova inscrição" color="white" variant="outlined"></v-btn>
      <v-list-item class="ml-4 d-flex" style="color: white">
        <template v-slot:prepend>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mr-2"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.01443 5.73533C4.01443 2.98584 6.25051 0.749756 9 0.749756C11.7495 0.749756 13.9856 2.98584 13.9856 5.73533C13.9856 7.116 13.4214 8.36642 12.5134 9.26918C13.3651 9.67031 14.1494 10.2198 14.8336 10.904C16.3911 12.4616 17.25 14.535 17.25 16.7377C17.25 17.0205 17.0207 17.2498 16.7379 17.2498H15.5289C15.246 17.2498 15.0168 17.0205 15.0168 16.7377C15.0168 13.4205 12.3172 10.7209 9 10.7209C5.68279 10.7209 2.98323 13.4205 2.98323 16.7377C2.98323 17.0205 2.75396 17.2498 2.47114 17.2498H1.26209C0.979271 17.2498 0.75 17.0205 0.75 16.7377C0.75 14.535 1.60885 12.4616 3.16638 10.904C3.85059 10.2198 4.63494 9.67032 5.48666 9.26918C4.57865 8.36642 4.01443 7.116 4.01443 5.73533ZM9 2.98299C7.48282 2.98299 6.24766 4.21812 6.24766 5.73533C6.24766 7.25253 7.48282 8.48767 9 8.48767C10.5172 8.48767 11.7523 7.25253 11.7523 5.73533C11.7523 4.21812 10.5172 2.98299 9 2.98299Z"
              fill="#F5F5F5"
            />
          </svg>
        </template>
        <template v-slot:title>
          <p class="d-flex align-center">Lucas <v-icon class="ml-1">mdi-menu-down</v-icon></p>
        </template>
      </v-list-item>
    </div>

    <div
      class="main-prototype-portal"
      :style="`height: ${height - 80 - 65}px !important; max-height: ${height - 80 - 65}px !important; `"
    >
      <v-row dense>
        <!-- Info Portal -->
        <v-col class="px-8 pt-10" cols="6">
          <v-select
            theme="light"
            class="mx-auto"
            label="Processos Abertos"
            model-value="Graduação Presencial"
            :items="['Graduação Presencial']"
            variant="underlined"
            style="max-width: 600px"
          ></v-select>
          <v-card class="pa-6 d-flex flex-column mx-auto mb-16" theme="myLightTheme" style="max-width: 600px">
            <p class="mx-auto d-flex">
              Detalhes da inscrição <v-icon class="ml-1">mdi-menu-down</v-icon>
            </p>
            <v-divider class="mt-2 mb-5"></v-divider>
            <div class="d-flex mb-5">
              <p>Dados</p>
              <v-spacer></v-spacer>
              <v-btn
                class="text-none px-3"
                prepend-icon="mdi-pencil"
                text="Editar"
                variant="outlined"
                color="#000047"
              ></v-btn>
            </div>
            <v-text-field
              class="border mb-3"
              label="Curso"
              model-value="Administração"
              hide-details
              disabled
              style="overflow: hidden; border-radius: 8px"
            ></v-text-field>
            <v-text-field
              class="border mb-3"
              label="Modalidade"
              model-value="Presencial"
              hide-details
              disabled
              style="overflow: hidden; border-radius: 8px"
            ></v-text-field>
            <v-text-field
              class="border mb-3"
              label="Local de Oferta"
              model-value="Muriaé-MG"
              hide-details
              disabled
              style="overflow: hidden; border-radius: 8px"
            ></v-text-field>
            <v-text-field
              class="border"
              label="Unidade"
              model-value="UNIDADE EXEMPLO"
              hide-details
              disabled
              style="overflow: hidden; border-radius: 8px"
            ></v-text-field>
          </v-card>
        </v-col>

        <v-col class="px-8 pt-10" cols="6">
          <v-card class="pa-0 d-flex flex-column mx-auto mt-5 mb-15" color="#000047" style="max-width: 600px">
            <p class="mx-auto my-5 d-flex">Acompanhe aqui sua inscrição</p>
            <v-divider class="mt-2 mb-1"></v-divider>

            <!-- Etapas -->
            <v-list class="py-0" style="background-color: transparent">
              <v-list-item class="px-5 py-4">
                <template v-slot:prepend>
                  <Check class="opacity-100 mr-3" style="height: 40px" />
                </template>
                <template v-slot:title>
                  <h3 style="font-weight: 400; font-size: 18px">Dados de inscrição</h3>
                </template>
                <template v-slot:subtitle>
                  <div style="font-style: italic; font-weight: 500">Concluído</div>
                </template>
                <template v-if="false" v-slot:append>
                  <v-btn variant="outlined" class="text-none px-3" text="Acessar"></v-btn>
                </template>
              </v-list-item>

              <v-list-item class="px-5 py-4" style="background-color: white; color: #000047">
                <template v-slot:prepend>
                  <Check class="opacity-100 mr-3" color="#000047" style="height: 40px" />
                </template>
                <template v-slot:title>
                  <h3 style="font-weight: 400; font-size: 18px">Dados de inscrição</h3>
                </template>
                <template v-slot:subtitle>
                  <div style="font-style: italic; font-weight: 500">Pendente</div>
                </template>
                <template v-slot:append>
                  <v-btn variant="outlined" class="text-none px-3" text="Acessar"></v-btn>
                </template>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<style scoped>
.header-prototype {
  display: flex;
  background-color: #000047;
  height: 60px;
  width: 100%;
  align-items: center;
}

.main-prototype-portal {
  display: flex;
  background-image: url('../assets/bg-school.png');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  width: 30%;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
}

.main-prototype-portal::-webkit-scrollbar {
  width: 5px;
}

.main-prototype-portal::-webkit-scrollbar-track {
  background-color: white;
}

.main-prototype-portal::-webkit-scrollbar-thumb {
  background-color: #707070;
}

:deep(.v-select) {
  color: white;
}
</style>

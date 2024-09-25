<script setup>
import { useCounterStore } from '@/stores/counter'
import { ref } from 'vue'
import { useDisplay } from 'vuetify/lib/framework.mjs'
import Check from './icons/Check.vue'
import Clock from './icons/Clock.vue'
import Alert from './icons/Alert.vue'
import TesteTest from './Teste.vue'

const { height } = useDisplay()
const store = useCounterStore()

const teste = ref('<h1>Teste</h1>')
</script>

<template>
  <v-card
    elevation="3"
    class="mx-4 my-4 w-100 d-flex"
    :style="`max-height: ${height - 80}px !important;`"
    style="border-radius: 0; background-color: transparent; flex-wrap: wrap; color: #555555"
  >
    <div class="header-prototype pa-1 px-4">
      <img src="../assets/logo-uni.png" alt="Uni Exemplo" height="90%" style="user-select: none" />
      <v-spacer></v-spacer>
      <v-btn class="px-0" density="comfortable" text="Login" color="white"></v-btn>
    </div>

    <div
      class="aside-prototype justify-space-around"
      :style="`height: ${height - 80 - 65}px !important;`"
    >
      <v-timeline
        class="h-auto py-5"
        align="start"
        theme="dark"
        truncate-line="both"
        density="comfortable"
        icon-color="transparent"
      >
        <v-timeline-item size="50" style="color: white" dot-color="transparent">
          <template v-slot:icon>
            <Check />
          </template>
          <h3 class="opacity-30" style="font-weight: 400">Dados básicos</h3>
          <div class="text-caption opacity-30" style="font-style: italic; font-weight: 300">
            Concluído
          </div>
        </v-timeline-item>

        <v-timeline-item size="50" style="color: white" dot-color="transparent">
          <template v-slot:icon>
            <Alert />
          </template>
          <h3 style="font-weight: 400">Dados do curso</h3>
          <div class="text-caption" style="font-style: italic; font-weight: 300">
            Aguardando conclusão
          </div>
        </v-timeline-item>

        <v-timeline-item size="50" style="color: white" dot-color="transparent">
          <template v-slot:icon>
            <Clock />
          </template>
          <h3 class="opacity-30" style="font-weight: 400">Dados adicionais</h3>
          <div class="text-caption opacity-30" style="font-style: italic; font-weight: 300">
            Pendente
          </div>
        </v-timeline-item>
      </v-timeline>

      <v-spacer></v-spacer>
    </div>

    <div
      :class="store.isDrag ? 'enter' : 'leave'"
      class="main-prototype pa-1"
      @dragover="store.allowDropTool($event)"
      @drop="store.dropTool($event, $route)"
      :style="`height: ${height - 80 - 65}px !important; max-height: ${height - 80 - 65}px !important; `"
    >
      <TesteTest />

      <p
        v-if="store.isDrag"
        style="
          display: flex;
          position: fixed;
          align-self: center;
          align-items: center;
          font-size: 22px;
          font-weight: 600;
          z-index: 9999999;
          color: #555555;
          background-color: transparent !important;
        "
        :style="`height: ${height - 80 - 65 - 24}px !important;`"
      >
        + Solte Aqui
      </p>
    </div>
  </v-card>
</template>

<style scoped>
.header-prototype {
  display: flex;
  background-color: rgb(0, 0, 71);
  height: 60px;
  width: 100%;
  align-items: center;
}

.aside-prototype {
  display: flex;
  background-image: url('../assets/bg-school.png');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  width: 30%;
  flex-direction: column;
  /* height: 100%; */
  /* flex-grow: 1; */
}

.main-prototype {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 0.1s ease-in-out;
  background-color: white;
  position: relative;
}

.main-prototype::-webkit-scrollbar {
  width: 5px;
}

.main-prototype::-webkit-scrollbar-track {
  background-color: white;
}

.main-prototype::-webkit-scrollbar-thumb {
  background-color: #707070;
}

.enter {
  border: 3px #34ee00;
  border-style: dashed;
  opacity: 0.7;
}

.enter * {
  background-color: rgba(255, 255, 255, 0.568);
}
</style>

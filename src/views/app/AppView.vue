<script setup>
import { useCounterStore } from '@/stores/counter'
import { ref } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'

const store = useCounterStore();
const router = useRouter();


const itemsPrototype = ref([
  {
    id: '01',
    title: 'Inscrições e Matrículas',
    description: 'Criar protótipo de ficha de Inscrições e Matrículas Rubeus',
    routeName: 'imApp',
    icon: 'mdi-form-select'
  },
  {
    id: '02',
    title: 'ChatBot',
    description: 'Criar fluxo de ChatsBots Infobip',
    routeName: 'imApp',
    icon: 'mdi-robot-angry'
  },
]);

function redirect(routeName) {
  setTimeout(() => {
    router.push({ name: routeName })
  }, 400);
}
</script>

<template>
  <v-app :theme="store.theme">
    <v-app-bar class="border-b px-1" flat density="comfortable">
      <v-icon class="ml-3" size="40" color="var(--primary-color)"
        >mdi-progress-star-four-points</v-icon
      >
      <h2 class="ml-3 d-flex" :style="`color: var(--text-color-${store.theme});`">Prototype</h2>
      <v-spacer></v-spacer>
      <!-- <v-btn
        class="text-none h-100 d-flex align-center"
        style="border-radius: 0; font-size: medium; font-weight: 700"
      >
        <v-icon class="d-flex mr-1">mdi-open-in-new</v-icon>
        <p class="d-flex">Docs</p>
      </v-btn> -->
      <p class="mr-3" style="display: flex; align-items: center; font-size: 15px; color: var(--second-color); cursor: pointer;">
        <v-icon class="d-flex mr-1" size="20">mdi-open-in-new</v-icon>
        Docs
      </p>
    </v-app-bar>
    <v-main>
      <v-row class="pa-4" dense>
        <v-col class="mb-16" cols="12">
          <h1 :style="`color: var(--text-color-${store.theme});`" class="text-center mt-16">
            Bem-vindo ao Prototype!
          </h1>
          <p
            class="text-center mt-2"
            style="color: var(--primary-color); font-size: large; font-weight: 500"
          >
            Seu construtor de protótipo dinâmico
          </p>
        </v-col>

        <v-col
          v-for="(item, index) in itemsPrototype"
          :key="item.id"
          :class="
            itemsPrototype.length === 1
              ? 'mx-auto'
              : index == 0
                ? 'ml-auto'
                : index == itemsPrototype.length - 1
                  ? 'mr-auto'
                  : ''
          "
          cols="12"
          sm="12"
          md="6"
          lg="4"
          xl="3"
          xxl="2"
        >
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-card
                @click="redirect(item.routeName)"
                v-bind:="props"
                cursor="pointer"
                :elevation="isHovering ? '3' : '0'"
                :style="isHovering ? 'cursor:pointer;' : ''"
                class="d-flex flex-column border rounded-lg py-10 px-8 h-100"
                v-ripple
              >
                <v-icon class="mx-auto" color="var(--second-color)" size="60">{{
                  item.icon
                }}</v-icon>
                <h2 :style="`color: var(--text-color-${store.theme});`" class="text-center mt-4">
                  {{ item.title }}
                </h2>
                <p
                  class="text-center mt-4"
                  style="color: var(--second-color); font-size: medium; font-weight: 400"
                >
                  {{ item.description }}
                </p>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<style scoped></style>

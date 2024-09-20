<script setup>
import { useCounterStore } from '@/stores/counter';
import { ref } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';

const store = useCounterStore();

const { height } = useDisplay()

const items = ref([
  {
    key: '01',
    title: 'Protótipos',
    icon: 'mdi-form-select'
  },
  {
    key: '02',
    title: 'Downloads',
    icon: 'mdi-robot-angry'
  },
]);

</script>

<template>
  <v-app :theme="store.theme">
    <v-app-bar class="border-b px-1" flat density="comfortable">
      <v-icon class="ml-3" size="37" color="var(--primary-color)"
        >mdi-progress-star-four-points</v-icon
      >
      <h2 class="ml-3 d-flex" :style="`color: var(--text-color-${store.theme});`">Prototype</h2>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer permanent>
      <v-list>
        <v-list-item v-for="item in items" :key="item.key" @click="">
          <template v-slot:prepend>
            <v-icon>{{ item.icon }}</v-icon>
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <v-list>
        <v-list-item @click="">
          <template v-slot:prepend>
            <v-icon>mdi-cog</v-icon>
          </template>
          <v-list-item-title>Configurações</v-list-item-title>
        </v-list-item>
      </v-list>
      </template>
    </v-navigation-drawer>

    <v-main>
      <!-- {{ store.localData }} -->
    </v-main>
  </v-app>
</template>

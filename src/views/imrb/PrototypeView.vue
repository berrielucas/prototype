<script setup>
import { useCounterStore } from '@/stores/counter';
import { ref } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';

const store = useCounterStore();

const { height } = useDisplay()

const items = ref([
  {
    key: '01',
    title: 'Etapa 01',
    icon: 'mdi-circle-medium'
  },
  {
    key: '02',
    title: 'Etapa 02',
    icon: 'mdi-circle-medium'
  },
]);

const menuTools = ref(true);

</script>

<template>
  <v-app :theme="store.theme">
    
    <v-navigation-drawer permanent>
      <p class="ml-5 mt-3">ETAPAS</p>
      <v-list>
        <v-list-item v-for="item in items" :key="item.key" density="compact" @click="">
          <template v-slot:prepend>
            <v-icon>mdi-dots-grid</v-icon>
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
    
    <v-navigation-drawer v-model="menuTools" permanent location="right">
      <v-list>
        <v-list-item v-for="item in items" :key="item.key" density="compact" @click="">
          <template v-slot:prepend>
            <v-icon>mdi-dots-grid</v-icon>
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
    
    <v-app-bar class="border-b px-1" flat density="comfortable">
      <v-icon class="ml-3" size="37" color="var(--primary-color)"
        >mdi-progress-star-four-points</v-icon
      >
      <h2 class="ml-3 d-flex" :style="`color: var(--text-color-${store.theme});`">Prototype</h2>
      <v-spacer></v-spacer>
      <template v-slot:append>
          <v-btn-toggle class="border mr-2" v-model="store.theme" style="border-radius: 10px">
            <v-btn v-for="t in store.themesList" :key="t.id" :value="t.name" :icon="t.icon" class="text-none" size="46" variant="text" :style="`color: var(--text-color-${store.theme});`"  density="compact"></v-btn>
          </v-btn-toggle>
          <v-btn @click="menuTools=!menuTools" class="mr-2 border" size="46" :icon="!menuTools ? 'mdi-view-grid-plus' : 'mdi-chevron-double-right'" variant="text" :style="`color: var(--text-color-${store.theme});`" style="border-radius: 10px"></v-btn>
      </template>
    </v-app-bar>


    <v-main>
      <!-- :style="`max-height: ${height}px !important;`" -->
      <!-- {{ store.localData }} -->
        <v-row class="h-100 d-flex" dense>

          <v-card elevation="3" class="mx-4 my-4 w-100 d-flex" :style="`max-height: ${height-80}px !important;`" style="border-radius: 0; background-color: white; flex-wrap: wrap;">

            <div class="header-prototype pa-1 px-4">
              <img src="../../assets/logo-uni.png" alt="Uni Exemplo" height="90%">
              <v-spacer></v-spacer>
              <v-btn class="px-0" density="comfortable" text="Login" color="white"></v-btn>
            </div>
            
            <div class="aside-prototype" :style="`height: ${height-80-60}px !important;`"></div>
            
          </v-card>
        </v-row>
    </v-main>
  </v-app>
</template>

<style scoped>

.header-prototype{
  display: flex;
  background-color: rgb(0, 0, 71);
  height: 60px;
  width: 100%;
  align-items: center;
}

.aside-prototype{
  display: flex;
  background-image: url("../../assets/bg-school.png");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  width: 30%;
  height: 100%;
  /* flex-grow: 1; */
}

</style>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { ref, onBeforeMount } from 'vue'
import { useDisplay } from 'vuetify/lib/framework.mjs'
import Tool from '@/components/Tool.vue'
import Step from '@/components/Step.vue'
import Portal from '@/components/Portal.vue'
import { useRoute } from 'vue-router'

const store = useCounterStore()
const { mobile } = useDisplay()
const route = useRoute()

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
  }
])

const menuTools = ref(true)

onBeforeMount(() => {
  menuTools.value = mobile.value || !route.params.idPhase ? false : true
})
</script>

<template>
  <v-app :theme="store.theme">
    <!-- Navigation Phases -->
    <v-navigation-drawer permanent>
      <p class="ml-5 mt-3" style="font-size: smaller; font-weight: 600">ETAPAS</p>
      <v-list>
        <v-list-item v-for="item in items" :key="item.key" density="compact" @click="">
          <template v-slot:prepend>
            <v-icon>mdi-drag</v-icon>
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

    <!-- Navigation Tools -->
    <v-navigation-drawer
      v-if="$route.params.idPhase ? true : false"
      v-model="menuTools"
      location="right"
    >
      <p class="ml-5 mt-3" style="font-size: smaller; font-weight: 600">FERRAMENTAS</p>
      <v-row dense class="pa-3">
        <v-col v-for="tool in store.CONFIG.fieldsType" :key="tool.type" cols="6">
          <Tool
            @dragstart="mobile ? (menuTools = false) : (menuTools = true)"
            @click=""
            :icon-tool="tool.icon"
            :title-tool="tool.title"
            :type-tool="tool.type"
          />
        </v-col>
      </v-row>
    </v-navigation-drawer>

    <!-- App Bar -->
    <v-app-bar class="border-b px-1" flat density="comfortable">
      <v-icon class="ml-3" size="37" color="var(--primary-color)"
        >mdi-progress-star-four-points</v-icon
      >
      <h2 class="ml-3 d-flex" :style="`color: var(--text-color-${store.theme});`">Prototype</h2>
      <v-spacer></v-spacer>
      <template v-slot:append>
        <!-- <v-btn-toggle class="border mr-2" v-model="store.theme" style="border-radius: 10px">
          <v-btn
            v-for="t in store.themesList"
            :key="t.id"
            :value="t.name"
            :icon="t.icon"
            class="text-none"
            size="46"
            variant="text"
            :style="`color: var(--text-color-${store.theme});`"
            density="compact"
          ></v-btn>
        </v-btn-toggle> -->
        <v-btn
          v-if="$route.params.idPhase"
          @click="menuTools = !menuTools"
          class="mr-2 border"
          size="46"
          :icon="!menuTools ? 'mdi-view-grid-plus-outline' : 'mdi-chevron-double-right'"
          variant="text"
          :style="`color: var(--text-color-${store.theme});`"
          style="border-radius: 10px"
        ></v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <!-- :style="`max-height: ${height}px !important;`" -->
      <!-- {{ store.localData }} -->
      <v-row class="h-100 d-flex" dense>
        <Step v-if="$route.params.idPhase" />
        <Portal v-else />
      </v-row>
    </v-main>
  </v-app>
</template>

<style scoped></style>

<script setup>
import { ref, reactive } from 'vue'

// import type { Breakpoint, Layout } from 'grid-layout-plus'
import { useDisplay } from 'vuetify/lib/framework.mjs';

const { mobile } = useDisplay();

const layout = ref([
    { x: 0, y: 0, w: 12, h: 3, i: '0', 'min-h': 3, 'min-w': 3, static: false },
    { x: 0, y: 3, w: 12, h: 3, i: '1', 'min-h': 3, 'min-w': 3, static: false },
  ])

function selectComponent(id) {
  console.log(id);
  
}
</script>

<template>
  <div>
    <GridLayout
    style="min-height: 100%;"
      v-model:layout="layout"
      :row-height="30"
      :responsive="mobile"
    >
      <template #item="{ item }">
        <v-row class="" dense @click="selectComponent(item.i)">
          <v-col class="px-2" >
            <!-- <v-list-item></v-list-item> -->
            <p class="mb-3" >Nome Completo *</p>
            <v-select theme="light" :items="['teste 01', 'teste 02']" clearable></v-select>
          </v-col>
        </v-row>
      </template>
    </GridLayout>
  </div>
</template>

<style scoped>
.vgl-layout {
  background-color: transparent;
  /* border: dashed 1px #999999; */
}


:deep(.vgl-item:not(.vgl-item--placeholder)) {
  background-color: white;
  border: none;
}

:deep(.vgl-item:not(.vgl-item--static):not(.vgl-item--placeholder)) {
  background-color: white;
  border: dashed 1px rgb(185, 185, 185);
}

:deep(.vgl-item--resizing) {
  opacity: 90%;
}

</style>
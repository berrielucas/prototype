<script setup>
import { useCounterStore } from '@/stores/counter'

const props = defineProps({
  iconTool: {
    type: String,
    required: true
  },
  titleTool: {
    type: String,
    required: true
  },
  typeTool: {
    type: String,
    required: true
  }
})

const store = useCounterStore()
</script>

<template>
  <v-card
    :id="typeTool"
    draggable="true"
    @dragend="store.isDrag = false"
    @dragstart="store.dragTool($event)"
    class="tool border d-flex flex-column rounded-lg pa-3 ga-1"
    elevation="0"
  >
    <v-icon class="mx-auto">{{ iconTool }}</v-icon>
    <p class="mx-auto text-center" style="user-select: none">{{ titleTool }}</p>
  </v-card>
</template>

<style scoped>
.tool:hover {
  cursor: grab !important;
}

.tool:active {
  cursor: grabbing !important;
  opacity: 0.3;
}
</style>

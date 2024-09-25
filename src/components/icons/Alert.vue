<script setup>
const props = defineProps({
  color: {
    type: String,
    required: false
  }
})
</script>
<template>
  <svg
    :class="true ? '' : 'opacity-30'"
    width="50"
    height="50"
    viewBox="0 0 38 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19 0.730957C8.52991 0.730957 0 9.33955 0 19.9062C0 30.4728 8.52991 39.0814 19 39.0814C29.47 39.0814 37.9999 30.4728 37.9999 19.9062C38.0334 9.33955 29.5034 0.730957 19 0.730957ZM19 37.1909C9.56688 37.1909 1.90669 29.4263 1.90669 19.9062C1.90669 10.3861 9.60033 2.62147 19.0334 2.62147C28.4665 2.62147 36.1601 10.3861 36.1601 19.9062C36.1267 29.4263 28.433 37.1909 19 37.1909Z"
      :fill="!color ? 'white' : color"
    />
    <path d="M20.6702 10.3186H17.5928V23.1471H20.6702V10.3186Z" :fill="!color ? 'white' : color" />
    <path d="M20.6702 26.5566H17.5928V29.5274H20.6702V26.5566Z" :fill="!color ? 'white' : color" />
  </svg>
</template>

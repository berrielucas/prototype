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
    :class="false ? '' : 'opacity-30'"
    width="50"
    height="50"
    viewBox="0 0 38 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d="M19 38.9061C8.52991 38.9061 0 30.3837 0 19.8894C0 9.42856 8.52991 0.906128 19 0.906128C29.47 0.906128 37.9999 9.42856 37.9999 19.8894C38.0334 30.3837 29.5034 38.9061 19 38.9061ZM19 2.81114C9.56688 2.81114 1.87323 10.498 1.87323 19.9228C1.87323 29.3476 9.56688 37.0345 19 37.0345C28.433 37.0011 36.1267 29.3142 36.1267 19.8894C36.1267 10.4646 28.433 2.81114 19 2.81114Z"
        :fill="!color ? 'white' : color"
      />
    </g>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M27.0603 23.0645V20.0232H20.5374V10.3978H17.46V20.0232V23.0645H20.5374H27.0603Z"
      :fill="!color ? 'white' : color"
    />
  </svg>
</template>

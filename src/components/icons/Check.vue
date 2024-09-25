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
    viewBox="0 0 38 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d="M19 38.1656C8.52991 38.1656 0 29.6433 0 19.1491C0 8.68844 8.52991 0.166138 19 0.166138C29.47 0.166138 37.9999 8.68844 37.9999 19.1491C38.0334 29.6433 29.5034 38.1656 19 38.1656ZM19 2.07112C9.56688 2.07112 1.87323 9.7579 1.87323 19.1826C1.87323 28.6072 9.56688 36.294 19 36.294C28.433 36.2606 36.1267 28.5738 36.1267 19.1491C36.1267 9.72448 28.433 2.07112 19 2.07112Z"
        :fill="!color ? 'white' : color"
      />
    </g>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.4545 23.4611L10.8048 18.8156L9.26611 20.3864L15.4545 26.5693L28.7678 13.3011L27.1956 11.7637L15.4545 23.4611Z"
      :fill="!color ? 'white' : color"
    />
  </svg>
</template>

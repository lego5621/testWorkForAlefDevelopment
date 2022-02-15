<template>
  <label
    class="absolute top-0 left-0 px-4 py-4 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
  >
    {{ this.label }}
  </label>
</template>

<script>
export default {
  props: ["label"],
};
</script>

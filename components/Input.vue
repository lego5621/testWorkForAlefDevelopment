<template>
  <div class="floating-input relative">
    <input
      :type="this.type"
      class="border border-gray-200 focus:outline-none rounded-md focus:shadow-sm w-full px-4 pb-1.5 h-14 text-sm"
      :placeholder="this.placeholder"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />

    <InputLabel :label="this.label" />
  </div>
</template>

<script>
export default {
  props: ["value", "type", "placeholder", "label"],
};
</script>

<style scoped>
.floating-input label {
  color: rgba(17, 17, 17, 0.48);
}

.floating-input > input::placeholder {
  color: transparent;
}

.floating-input > input:focus,
.floating-input > input:not(:placeholder-shown) {
  @apply pt-8;
}

.floating-input > input:focus ~ label,
.floating-input > input:not(:placeholder-shown) ~ label {
  @apply opacity-75 scale-75 -translate-y-3 translate-x-1;
}
</style>

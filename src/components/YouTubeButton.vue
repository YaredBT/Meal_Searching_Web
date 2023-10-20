<template>
  <button>
    <a
      :href="to"
      target="_blank"
      class="p-2 border border-red-600 mt-4 hover:bg-red-600 hover:text-white transition-all"
      type="button"
      >YouTube</a
    >
  </button>
</template>

<script setup>
const { to } = defineProps({
  to: {
    type: String,
    required: true
  }
})
</script>

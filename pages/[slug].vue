<script setup lang="ts">
const route = useRoute();
const { slug } = route.params;
</script>

<template>
  <div>
    <!-- Conteúdo usando o slug -->
    {{ slug }}
  </div>
</template>
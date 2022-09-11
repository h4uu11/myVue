<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav class="q-pa-md">
    <RouterLink to="/">
      <q-btn color="primary" label="Home" />
    </RouterLink>
    <RouterLink to="/views/board/List" class="q-ml-sm">
      <q-btn color="primary" label="Board" />
    </RouterLink>
    <RouterLink to="/views/board/Create" class="q-ml-sm">
      <q-btn color="primary" label="Create" />
    </RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped></style>

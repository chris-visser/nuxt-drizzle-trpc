
<template>
  <div class="bg-slate-500 min-h-screen">
    <header class="flex items-center justify-center border-b-2">
      <nav class="flex justify-center gap-8">
        <nuxt-link to="/" class="p-2">
          Authors
        </nuxt-link>
        <nuxt-link to="/books" class="p-2">
          Books
        </nuxt-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>
<script setup lang="ts">
</script>
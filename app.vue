<template>

  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang='ts'>
useHead({
  title: 'u.u zZ',
  meta: [
    { charset: 'utf-8' },
    { name: 'theme-color', content: '#1C1E1E' },
    { name: 'og:description', content: 'TypeScript & Rust Dev' },
    { name: 'description', content: 'TypeScript & Rust Dev' },
    { name: 'og:url', content: 'https://uvvu.pw' },
  ],
  script: [
    { src: '/anim.js', async: true }
  ]
})
</script>
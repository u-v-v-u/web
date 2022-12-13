<script setup lang='ts'>
import '@/styles/main.css'

let { data: uwu } = await useFetch('/uwu.txt')
</script>

<template>
  <div class='prose prose-zinc lg:prose-xl'>
    <div class='flex flex-col justify-center items-center h-screen w-screen'>
      <pre class='text-xl min-h-60'>{{ uwu }}</pre>
    </div>
  </div>

</template>

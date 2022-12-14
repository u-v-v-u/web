<script setup lang='ts'>
import '@/styles/main.css'

let uwuText = useState('uwuText', () => '')

try {
  let res = await $fetch<string>('/uwu.txt')

  if (!res) throw null

  uwuText.value = res
} catch {
  uwuText.value = ''
}

</script>

<template>
  <div class='prose prose-zinc lg:prose-xl'>
    <div class='flex flex-col justify-center items-center h-screen w-screen'>
      <pre id='fade-in' class='text-xl min-h-60 min-w-60' style='opacity: 0; transition: opacity 5s ease-in;'>{{ uwuText }}</pre>
    </div>
  </div>
</template>

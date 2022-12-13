<script setup lang='ts'>
import '@/styles/main.css'

const counter = useState('counter', () => 0)
</script>

<template>
  <div class='prose prose-zinc lg:prose-xl'>
    <div class='flex flex-col justify-center items-center h-screen w-screen'>
      <p v-if='counter > 0'>
        <Icon name='uil:github' /> Clicks registered: {{ counter }}
      </p>

      <p v-else>
        There are no clicks...
      </p>

      <button @click='counter++'>
        Click me!
      </button>
    </div>
  </div>

</template>

<script setup lang='ts'>
import '@/styles/main.css'

const { $umami } = useNuxtApp()
const trackButtonClick = (sort: string): void => $umami(`${sort} | Clicked`)

let uwuText = useState('uwuText', () => '')

try {
  let res = await $fetch<string>('/uwu.txt')

  if (!res) throw null

  uwuText.value = `${res}\n\t\tRust & TypeScript Development`
} catch {
  uwuText.value = ''
}
</script>

<template>
  <div class='prose prose-zinc'>
    <div class='w-screen h-screen flex flex-col '>
      <!--  Nav, Buttons-->
      <div class='flex justify-start items-start'>
        <nav class='text-[1.3rem] flex flex-col justify-start pt-3 pl-4 m-0'>
          <div class='flex items-center'>
            <a @click="trackButtonClick('mailto')" href='mailto:uwu@uvvu.pw' class='nav-button text-white'>
              <Icon name='eva:email-outline' /> Email
            </a>
            <a @click="trackButtonClick('github')" href='https://github.com/u-v-v-u' class='nav-button text-white'>
              <Icon name='mdi:github-box' /> Github
            </a>
          </div>
        </nav>
      </div>

      <!--  Center, UwU ascii art-->
      <div id='fade-in' class='flex flex-col justify-center items-center h-screen'
        style='opacity: 0; transition: opacity 5s ease;'>
        <Script type='text/partytown' src='/anim.js' defer/>
        <pre class='text-[0.875rem] md:text-xl  min-h-60 p-0 m-0'>{{ uwuText }}</pre>
      </div>
    </div>
  </div>
</template>

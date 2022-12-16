<script lang="ts">
  import { onMount } from 'svelte';

  let uwuText: string;

  async function fetchUwU() {
    try {
      let res = await fetch('/uwu.txt');
      if (!res) throw null;

      let text = await res.text();
      uwuText = `${text}\n\t\tRust & TypeScript Development`;
    } catch {
      uwuText = '';
    }
  }

  const fadeIn = () => {
    const el = document.getElementById('fade-in')!;

    el.style.opacity = '1';
  };

  onMount(() => {
    async function init() {
      await fetchUwU();
      fadeIn();
    }

    init();

    return () => console.debug('Ok');
  });
</script>

<div class="w-screen h-screen flex flex-col ">
  <!--  Nav, Buttons-->
  <div class="flex justify-start items-start">
    <nav class="text-[1.3rem] flex flex-col justify-start pt-3 pl-4 m-0">
      <div class="flex items-center">
        <a href="mailto:uwu@uvvu.pw" class="nav-button text-white"> Email </a>
        <a href="https://github.com/u-v-v-u" class="nav-button text-white"> Github </a>
      </div>
    </nav>
  </div>

  <!--  Center, UwU ascii art-->
  <div
    id="fade-in"
    class="flex flex-col justify-center items-center h-screen"
    style="opacity: 0; transition: opacity 5s ease;"
  >
    <pre class="text-[0.875rem] md:text-xl  min-h-60 p-0 m-0">{uwuText ?? ''}</pre>
  </div>
</div>

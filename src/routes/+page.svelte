<script lang="ts">
  import { onMount, tick } from 'svelte';

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

  onMount(async () => {
    await tick();

    await fetchUwU();
    fadeIn();

    return () => console.debug('Ok');
  });
</script>

<!--  Center, UwU ascii art-->
<div
  id="fade-in"
  class="flex flex-col justify-center items-center h-screen"
  style="opacity: 0; transition: opacity 2.5s ease-in-out;"
>
  <pre class="text-[0.875rem] md:text-xl  min-h-60 p-0 m-0">{uwuText ?? ''}</pre>
</div>

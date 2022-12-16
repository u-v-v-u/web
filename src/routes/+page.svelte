<script lang="ts">
  import Icon from '@iconify/svelte';
  import { onMount, tick } from 'svelte';

  let uwuText: string;

  const trackButton = (button: string) => {
    // @ts-ignore
    umami.trackEvent(`${button} | Clicked`);
  };

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

<div class="w-screen h-screen flex flex-col ">
  <!--  Nav, Buttons-->
  <div class="flex justify-start items-start">
    <nav class="text-[1.3rem] flex flex-col justify-start pt-3 pl-4 m-0">
      <div class="flex">
        <a on:click={() => trackButton('Mail To')} href="mailto:uwu@uvvu.pw" class="nav-button">
          Email <Icon icon="eva:email-outline" />
        </a>
        <a
          on:click={() => trackButton('Github')}
          href="https://github.com/u-v-v-u"
          class="nav-button"
        >
          Github <Icon icon="mdi:github-box" />
        </a>
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

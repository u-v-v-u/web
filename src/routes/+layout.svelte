<script lang="ts">
  import { page } from '$app/stores';
  import Icon from '@iconify/svelte';
  import '../app.scss';

  const trackButton = (button: string) => {
    // @ts-ignore
    umami.trackEvent(`${button} | Clicked`);
  };
</script>

<svelte:head>
  <script
    async
    defer
    data-website-id="9b863ab0-e9c3-4739-9413-98da88d84e92"
    src="https://analytics.uvvu.pw/umami.js"
  ></script>
</svelte:head>

<div class="prose prose-zinc">
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
          {#if $page.url.pathname != '/projects'}
            <a on:click={() => trackButton('Projects')} href="/projects" class="nav-button"
              >Projects <Icon icon="mdi:microsoft-visual-studio-code" /></a
            >
          {/if}
        </div>
      </nav>
    </div>

    <slot />
  </div>
</div>

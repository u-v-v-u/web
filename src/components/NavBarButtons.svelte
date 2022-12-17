<script lang="ts">
  import { page } from '$app/stores';
  import Icon from '@iconify/svelte';
  import '../app.scss';

  const trackButton = (button: string) => {
    // @ts-ignore
    umami.trackEvent(`${button} | Clicked`);
  };
</script>

<a on:click={() => trackButton('Mail To')} href="mailto:uwu@uvvu.pw" class="nav-button">
  Email <Icon icon="eva:email-outline" />
</a>
<a on:click={() => trackButton('Github')} href="https://github.com/u-v-v-u" class="nav-button">
  Github <Icon icon="mdi:github-box" />
</a>
{#if $page.url.pathname != '/projects'}
  <a on:click={() => trackButton('Projects')} href="/projects" class="nav-button"
    >Projects <Icon icon="mdi:microsoft-visual-studio-code" /></a
  >
{:else}
  <a on:click={() => trackButton('Home')} href="/" class="nav-button"
    >Home <Icon icon="mdi:home" /></a
  >
{/if}

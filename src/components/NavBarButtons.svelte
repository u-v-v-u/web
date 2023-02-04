<script lang="ts">
  import { page } from '$app/stores';
  import Icon from '@iconify/svelte';
  import '../app.scss';
</script>

<div class="flex">
  <a href="mailto:uwu@uvvu.pw" class="nav-button plausible-event-name=Mailto+Button">
    Email <Icon icon="eva:email-outline" />
  </a>
  <a href="https://github.com/u-v-v-u" class="nav-button plausible-event-name=Github+Button">
    Github <Icon icon="mdi:github-box" />
  </a>

  {#if $page.url.pathname != '/profiles'}
    <a href="/profiles" class="nav-button plausible-event-name=Project+Button"
      >Profiles <Icon icon="mdi:microsoft-visual-studio-code" /></a
    >
  {/if}

  {#if $page.url.pathname != '/projects'}
    <a href="/projects" class="nav-button plausible-event-name=Project+Button"
      >Projects <Icon icon="mdi:microsoft-visual-studio-code" /></a
    >
  {/if}

  <!-- svelte-ignore empty-block -->
  <!-- eslint-disable empty-block -->
  {#if ($page.url.pathname = '/')}{:else}
    <a href="/" class="nav-button plausible-event-name=Home+Button">Home <Icon icon="mdi:home" /></a
    >
  {/if}
</div>

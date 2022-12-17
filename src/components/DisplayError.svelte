<script lang="ts">
  export let code: number;
</script>

{#if code == 404}
  <h1 class="title">404 Not Found</h1>
{:else}
  <h1 class="title">Code: {code}</h1>
{/if}

<button class="button" on:click={() => history.back()}>Return</button>

<style>
  h1 {
    font-family: 'Unbounded';
  }

  .title {
    @apply font-bold text-white text-[6rem] mb-[2rem];
  }

  .button {
    @apply bg-transparent hover:bg-white hover:text-black text-white font-bold py-2 px-5 border border-white rounded text-2xl;
  }
</style>

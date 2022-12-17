<script lang="ts">
  import { onMount } from 'svelte';

  let projects: { name: string; description: string; url: string }[] = [];

  async function fetchProjects() {
    try {
      let res = await fetch('/projects.json');
      if (!res) throw null;

      let data = await res.json();
      projects = data;
    } catch {
      throw null;
    }
  }

  onMount(async () => {
    await fetchProjects();
  });
</script>

{#if projects.length > 0}
  <ul class="flex flex-col justify-start items-center pt-10">
    {#each projects as project}
      <a href={project.url}
        ><li class="project flex flex-col justify-start">
          <h1 class="project-title">{project.name}</h1>
          <p>{project.description}</p>
        </li></a
      >
    {/each}
  </ul>
{:else}
  <div class="flex flex-col justify-center items-center h-screen">
    <h1 class="text-white">Fetching Projects...</h1>
  </div>
{/if}

<style type="scss">
  .project {
    border-color: white;
    border-width: 5px;
    width: 420px;
    height: 130px;
    list-style-type: none;

    transition: ease-in-out 1s;

    @apply text-white;
  }

  .project:hover {
    opacity: 0.7;
  }

  .project-title {
    font-family: 'Unbounded';

    @apply font-extrabold text-white pl-2 pt-2 underline mb-[1.5rem];
  }
  p {
    font-family: 'Unbounded';
    margin: 0;

    @apply pl-2 pb-2;
  }
</style>

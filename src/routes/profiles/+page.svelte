<script lang="ts">
  import { onMount, tick } from 'svelte';

  type MemberMetadata = {
    name: string;
    about: string;
    avatarURL: string;
    redirect: string;
  };

  let members: MemberMetadata[] = [];

  async function fetchMembers() {
    try {
      let res = await fetch('/members.json');

      if (!res) throw null;

      let text: MemberMetadata[] = await res.json();

      return text;
    } catch {
      throw null;
    }
  }

  onMount(async () => {
    await tick();

    members = await fetchMembers();
  });
</script>

{#if members.length > 0}
  <ul class="flex flex-col justify-start items-center p-0 pt-10 w-screen">
    {#each members as member}
      <a href={member.redirect}>
        <li class="member-block flex flex-row justify-start w-[70vw] md:w-[85vw]">
          <img src={member.avatarURL} alt="Avatar" height="256" width="256" />

          <div class="ml-3 md:ml-7 flex flex-col">
            <h1 class="member-title">{member.name}</h1>
            <p>{member.about}</p>
          </div>
        </li>
      </a>
    {/each}
  </ul>
{:else}
  <div class="flex flex-col justify-center items-center h-screen">
    <h1 class="text-white">Fetching Projects...</h1>
  </div>
{/if}

<style type="scss">
  .member-block {
    border-color: white;
    border-width: 5px;
    height: 135px;
    list-style-type: none;

    transition: ease-in-out 1s opacity;
  }

  .member-block:hover {
    opacity: 0.7;
  }

  .member-title {
    font-family: 'Unbounded';

    @apply font-extrabold text-white pl-2 pt-2 mb-[1.5rem];
  }

  p {
    font-family: 'Unbounded';
    margin: 0;

    @apply pl-2 mb-[0.5rem];
  }

  img {
    all: revert;
  }
</style>

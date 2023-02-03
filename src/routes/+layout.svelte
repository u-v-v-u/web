<script>
  import { NavBarButtons } from '@components';
  import '../app.scss';
</script>

<svelte:head>
  <script defer data-domain="uvvu.pw" src="https://analytics.uvvu.pw/js/script.tagged-events.js"></script>
</svelte:head>

<div class="prose prose-zinc">
  <div class="w-screen h-screen flex flex-col ">
    <!--  Nav, Buttons-->
    <div class="flex justify-start items-start">
      <nav class="text-[1.3rem] flex flex-col justify-start pt-3 pl-4 m-0">
        <NavBarButtons />
      </nav>
    </div>

    <slot />
  </div>
</div>

<script>
  import { NavBarButtons } from '@components';
  import '../app.scss';
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
          <NavBarButtons />
      </nav>
    </div>

    <slot />
  </div>
</div>

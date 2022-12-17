<script>
  import { page } from '$app/stores';
  import { DisplayError } from '@components';
</script>

<div class="flex">
  <div class="flex flex-col h-screen justify-center items-center">
    <DisplayError code={$page.status} />
  </div>
</div>

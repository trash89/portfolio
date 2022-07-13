<script context="module">
  export const prerender = true;
</script>

<script>
  import { page } from "$app/stores";
</script>

<header>
  <nav>
    <ol>
      <li class="home">
        <span class="text"><a sveltekit:prefetch href="/" class={$page.url.pathname === "/" ? "active" : ""}>@trash89</a></span>
      </li>
      <li>
        <span class="text"><a sveltekit:prefetch href="/activity" class={$page.url.pathname === "/activity" ? "active" : ""}>Activity</a></span>
      </li>
      <li>
        <span class="text"><a sveltekit:prefetch href="/resume" class={$page.url.pathname === "/resume" ? "active" : ""}>Résumé</a></span>
      </li>
    </ol>
  </nav>
</header>

<style>
  .home {
    flex: 1;
  }
</style>

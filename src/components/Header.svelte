<script>
  import { page } from "$app/stores";
</script>

<header>
  <nav>
    <ol>
      <li class="home">
        <span class="text"
          ><a href="/" class={$page.url.pathname === "/" ? "active" : ""}
            >@trash89</a
          ></span
        >
      </li>
      <li>
        <span class="text"
          ><a
            href="/activity"
            class={$page.url.pathname === "/activity" ? "active" : ""}
            >activity</a
          ></span
        >
      </li>
      <li>
        <span class="text"
          ><a
            href="/resume"
            class={$page.url.pathname === "/resume" ? "active" : ""}>résumé</a
          ></span
        >
      </li>
      <li>
        <span class="text"
          ><a
            href="/thanks"
            class={$page.url.pathname === "/thanks" ? "active" : ""}>thanks</a
          ></span
        >
      </li>
    </ol>
  </nav>
</header>

<style>
  .home {
    flex: 1;
  }
</style>

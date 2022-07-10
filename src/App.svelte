<script>
  import logo from "./assets/logo.png";
</script>

<header>
  <nav>
    <ol>
      <li class="home">
        <span class="text"><a href="/" class="active">@trash89</a></span>
      </li>
      <li class="activity">
        <span class="text"><a href="/activity">activity</a></span>
      </li>
      <li class="thanks">
        <span class="text"><a href="/thanks">thanks</a></span>
      </li>
    </ol>
  </nav>
</header>
<main>
  <h1><span class="text">Hi, I’m Marius</span></h1>
  <p>
    <span class="text">Here are a couple of places you can find me online:</span
    >
  </p>
  <ul>
    <li>
      <a href="https://github.com/trash89"
        ><span class="text">github.com/trash89</span></a
      >
    </li>
    <li>
      <a href="https://twitter.com/trash894"
        ><span class="text">twitter.com/trash894</span></a
      >
    </li>
    <li>
      <a href="mailto:mariusraicu@laposte.net"
        ><span class="text">mariusraicu@laposte.net</span></a
      >
    </li>
  </ul>
  <p>
    <span class="text">...or view <a href="/resume">my résumé.</a></span>
  </p>
</main>

<style>
  nav .home {
    flex: 1;
  }
  nav li {
    margin: 1.5rem;
  }
  a.active,
  a:hover {
    background-color: #000;
    color: #fff;
  }
  nav ol {
    display: flex;
    list-style-type: none;
    padding: 0;
  }
  main {
    margin: 1.5rem;
  }
  h1 {
    font-size: 4rem;
    margin-bottom: 0.375rem;
    margin-top: 0.375rem;
  }
  p,
  header {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .text {
    background-color: #fff;
    padding: 0.125rem;
  }
  ul {
    list-style-type: square;
    padding-left: 1.5rem;
  }
  a {
    color: inherit;
  }
</style>

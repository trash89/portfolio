<script>
  export let links;
  export let infos;
</script>

<main>
  <h1><span class="text">Hi, I'm Marius</span></h1>
  {#each infos as info}
    <p key={info.text}><span class="text">{info.text}</span></p>
  {/each}
  <p>
    <span class="text">Here are a couple of places you can find me online :</span>
  </p>
  <ul>
    {#each links as link}
      <li key={link.link}>
        <span class="text"><a href={link.link}>{link.text}</a></span>
      </li>
    {/each}
  </ul>
  <br />
  <p>
    <span class="text">...or view <a href="/resume">my résumé.</a></span>
  </p>
</main>

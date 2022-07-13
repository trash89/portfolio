<script context="module">
  export const prerender = true;
</script>

<script>
  import { fade } from "svelte/transition";
  export let links;
  export let infos;
</script>

<svelte:head>
  <title>trash89's Portfolio</title>
</svelte:head>

<main>
  <h1><span class="text">Hi, I'm Marius</span></h1>
  {#each infos as info}
    <p key={info.text} in:fade><span class="text">{info.text}</span></p>
  {/each}
  <p>
    <span class="text">Here are a couple of places you can find me online :</span>
  </p>
  <ul>
    {#each links as link}
      <li key={link.link} in:fade>
        <span class="text"><a href={link.link} target="_blank">{link.text}</a></span>
      </li>
    {/each}
  </ul>
  <br />
  <p in:fade>
    <span class="text">...or view <a href="/resume">my résumé.</a></span>
  </p>
</main>

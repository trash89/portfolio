<script context="module">
  export const prerender = true;
</script>

<script>
  import { fade } from "svelte/transition";
  export const page = "";
  export let webapplinks;
  export let blockchainapps;
</script>

<svelte:head>
  <title>trash89's Activity</title>
</svelte:head>

<main>
  <h1><span class="text">Activity</span></h1>

  <p>
    <span class="text">Here are some applications I have developped while training in web technologies :</span>
  </p>
  <ul>
    {#each webapplinks as link}
      <li key={link.link} in:fade>
        <span class="text"><a href={link.link} target="_blank">{link.title}</a></span>
        <p><span class="text">{link.text1}</span></p>
        <p><span class="text">{link.text2}</span></p>
      </li>
    {/each}
  </ul>
  <hr />
  <br />
  <p>
    <span class="text">Fullstack Ethereum blockchain applications, developped with Solidity/Hardhat/Material-UI/Wagmi/RainbowKit :</span>
  </p>
  <ul>
    {#each blockchainapps as app}
      <li key={app.link} in:fade>
        <span class="text"><a href={app.link} target="_blank">{app.title}</a></span>
        <p>
          <span class="text">{app.text1}</span>
        </p>
      </li>
    {/each}
  </ul>
  <br />
</main>

<style>
  li p {
    margin-top: 0;
    margin-bottom: 0.3rem;
  }
</style>

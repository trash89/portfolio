<script context="module">
  export const prerender = true;
</script>

<script>
  export const page = "";
  export let articles;
  export let trainings;
</script>

<svelte:head>
  <title>trash89's Résumé</title>
</svelte:head>

<main>
  <h1><span class="text">Résumé</span></h1>

  {#each articles as article}
    <article key={article.id}>
      <h4><span class="text">{article.h4}</span></h4>
      {#if article.h5}
        <h5><span class="text">{article.h5}</span></h5>
      {/if}
      {#if article.div1}
        <div><span class="text">{article.div1}</span></div>
      {/if}
      {#if article.div2}
        <div><span class="text">{article.div2}</span></div>
      {/if}
      {#if article.div3}
        <div><span class="text">{article.div3}</span></div>
      {/if}
      {#if article.div4}
        <div><span class="text">{article.div4}</span></div>
      {/if}
    </article>
  {/each}
  <hr />
  <article>
    <h3><span class="text">Training and certifications</span></h3>
    <ul>
      {#each trainings as training}
        <li key={training.id}><span class="text">{training.text}</span></li>
      {/each}
    </ul>
  </article>
  <hr />
  <article>
    <h3><span class="text">Education</span></h3>
    <h4>
      <span class="text"
        >September 1992 to June 1997 - Academy of Economic Studies, Bucharest, Romania (5 years), Faculty of Accounting and Management Information Systems</span
      >
    </h4>
    <div><span class="text">Bs in Accounting and Management Information Systems.</span></div>
  </article>
  <hr />
  <article>
    <h3><span class="text">Language Proficiency</span></h3>
    <ul>
      <li><span class="text">English : fluent in spoken and written form</span></li>
      <li><span class="text">French : fluent in spoken and written form</span></li>
      <li><span class="text">Romanian : Mother Tongue</span></li>
    </ul>
  </article>
  <hr />
  <article>
    <h3><span class="text">Interests & Leisure Activities</span></h3>
    <div><span class="text">Fishing, reading, bee-keeping.</span></div>
  </article>
  <br />
</main>

<style>
  article {
    margin-bottom: 1rem;
  }
</style>

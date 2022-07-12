<script>
  export const page = "";
  export let articles;
  export let trainings;
</script>

<main>
  <h1><span class="text">Résumé</span></h1>

  {#each articles as article}
    <article key={article.id}>
      <h3>{article.h3}</h3>
      {#if article.h4}
        <h4>{article.h4}</h4>
      {/if}
      {#if article.div1}
        <div>{article.div1}</div>
      {/if}
      {#if article.div2}
        <div>{article.div2}</div>
      {/if}
      {#if article.div3}
        <div>{article.div3}</div>
      {/if}
      {#if article.div4}
        <div>{article.div4}</div>
      {/if}
    </article>
  {/each}
  <hr />
  <article>
    <h3>Training and certifications</h3>
    <ul>
      {#each trainings as training}
        <li key={training.id}>{training.text}</li>
      {/each}
    </ul>
  </article>
  <hr />
  <article>
    <h3>Education</h3>
    <h4>September 1992 to June 1997 - Academy of Economic Studies (5 years), Faculty of Accounting and Management Information Systems</h4>
    <div>Bs in Accounting and Management Information Systems.</div>
  </article>
  <hr />
  <article>
    <h3>Language Proficiency</h3>
    <ul>
      <li>English : fluent in spoken and written form</li>
      <li>French : fluent in spoken and written form</li>
      <li>Romanian : Mother Tongue</li>
    </ul>
  </article>
  <hr />
  <article>
    <h3>Interests & Leisure Activities</h3>
    <div>Fishing, reading, bee-keeping.</div>
  </article>
</main>

<style>
  article {
    margin-bottom: 1rem;
  }
</style>

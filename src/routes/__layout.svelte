<script context="module">
  export const prerender = true;
</script>

<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<Header />
<slot />
<Footer />

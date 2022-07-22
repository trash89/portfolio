<script context="module">
  export const prerender = true;
  import "$lib/assets/normalize.css";
  import "$lib/assets/global.css";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<Header />
<slot />
<Footer />

const links = [
  { link: "https://github.com/trash89", text: "github.com/trash89" },
  { link: "https://twitter.com/trash894", text: "twitter.com/trash894" },
  { link: "mailto:mariusraicu@laposte.net", text: "mariusraicu@laposte.net" },
];
const infos = [
  {
    text: "I work most of the time with React/Next, Redux, Svelte/Sveltekit, GraphQL,node/express, Solidity/Hardhat/Brownie and Python and also, like to experiment with other languages(Golang, Rust) and frameworks as well.",
  },
  {
    text: "With more than 25 years of experience in IT, mainly in database programmer/database administrator roles,  performed also in infrastructure roles, as technical service architect, delivering infrastructure services on data integration technologies (Informatica, Teradata, SAS).",
  },
  {
    text: "After a pause in my career in 2019, I decided to return as a Web Developer, so I learned the fundamentals of web development and followed training in the mentioned technologies.",
  },
];
export async function get() {
  return {
    status: 200,
    body: {
      links,
      infos,
    },
  };
}

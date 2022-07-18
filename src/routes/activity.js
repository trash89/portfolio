const webapplinks = [
  {
    link: "https://myjournalwebapp.netlify.app/",
    title: "Journal Application",
    text1: "In order to keep an online journal of daily activities, on profiles, clients, projects and subprojects.",
    text2: "With React/Redux-Toolkit/Material-UI/GraphQL/Apollo client.",
  },
  {
    link: "https://journalgraphqlserver.herokuapp.com/",
    title: "Journal GraphQL Server",
    text1: "The GraphQL server used by the Journal Application. Allows to send queries/mutations/subscriptions to a postgres database.",
    text2: "With GraphQL/Prisma ORM/Apollo-Express/Mysql/Postgres.",
  },
];
const blockchainapps = [
  {
    link: "https://multisigwalletfullstack.netlify.app/",
    title: "Multi Signature Wallet",
    text1: "A Fullstack implementation of a mutisignature wallet smartcontract, deployed on Rinkeby.",
  },
  {
    link: "https://votingfullstack.netlify.app/",
    title: "A Voting application",
    text1: "A Fullstack implementation of a voting smartcontract, on Rinkeby.",
  },
  {
    link: "https://auctionfullstack.netlify.app/",
    title: "Simple Auction and Blind Auction",
    text1: "Example of Simple and Blind Auction smartcontracts, deployed on Rinkeby and implemented with a Fullstack interface.",
  },
  {
    link: "https://crowdfundfullstack.netlify.app/",
    title: "A Crowd Funding application",
    text1: "Example of Crowd Funding smartcontract, deployed on Rinkeby and implemented with a Fullstack interface.",
  },
  {
    link: "https://complete-boilerplate.netlify.app/",
    title: "A boilerplate for Ethereum development",
    text1:
      "A Fullstack application demonstrating the usual operations. An implementation of an ERC20 token smartcontract with usual actions performed on tokens.",
  },
];
export async function GET() {
  return {
    status: 200,
    body: {
      webapplinks,
      blockchainapps,
    },
  };
}

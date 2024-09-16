import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Stage from "../components/Stage";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  homeStage: Stage,
};

storyblokInit({
  accessToken: "QwrKen6yHSMDjFAbaIHMOgtt",
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

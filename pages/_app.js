import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Stage from "../components/Stage";
import Headline from "../components/Headline";
import CategorieTeaser from "../components/CategorieTeaser";
import ImageGallery from "../components/ImageGallery";

const components = {
  feature: Feature,
  threeGrid: Grid,
  teaser: Teaser,
  page: Page,
  homeStage: Stage,
  trennerHeadline: Headline,
  categorieTeaser: CategorieTeaser,
  imageGallery: ImageGallery,
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

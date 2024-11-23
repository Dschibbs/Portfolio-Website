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
import Footer from "../components/Footer";
import FullWidthStage from "../components/FullWidthStage";
import PhotographerIntro from "../components/PhotographerIntro";
import PhotoSpecialties from "../components/PhotoSpecialties";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

const components = {
  feature: Feature,
  threeGrid: Grid,
  teaser: Teaser,
  page: Page,
  homeStage: Stage,
  trennerHeadline: Headline,
  categorieTeaser: CategorieTeaser,
  imageGallery: ImageGallery,
  footer: Footer,
  fullWidthStage: FullWidthStage,
  photographerIntro: PhotographerIntro,
  photoSpecialties: PhotoSpecialties,
  contactInfo: ContactInfo,
  contactForm: ContactForm,
};

storyblokInit({
  accessToken: "QwrKen6yHSMDjFAbaIHMOgtt",
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  const { key, ...rest } = pageProps;
  return <Component key={key} {...rest} />;
}

export default MyApp;

import Head from "next/head";
import Layout from "../components/Layout";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Home({ story, footer }) {
  story = useStoryblokState(story);

  console.log("footer", footer);

  return (
    <div>
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout footerData={footer}>
          <StoryblokComponent blok={story.content} />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  let slug = "home";

  let sbParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  const footerData = await storyblokApi.get('cdn/stories/global/footer');

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      footer: footerData ? footerData.data.story.content : false,
    },
    revalidate: 3600,
  };
}

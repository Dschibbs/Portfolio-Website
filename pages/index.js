import Head from "next/head";
import Layout from "../components/Layout";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Home({ story }) {
  story = useStoryblokState(story);

  return (
    <div>
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <StoryblokComponent blok={story.content} />
      </Layout>
      {/* <ImageGallery /> */}
    </div>
  );
}

export async function getStaticProps() {
  let slug = "home";

  let sbParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  console.log(storyblokApi);
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  let { links } = await storyblokApi.get("cdn/links/" ,{
    version: 'draft'
  });

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      links: links ? links : false,
    },
    revalidate: 3600,
  };
}

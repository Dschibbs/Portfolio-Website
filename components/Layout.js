import Navbar from './Navbar'
import Footer from './Footer'

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";
 
export default function Layout({ story, children }) {
  // console.log(story)
  // story = useStoryblokState(story);

  return (
    <>
      <Navbar />

      <main>
        {children}
      </main>

      <Footer />
    </>
  )
}

export async function getStaticProps() {
  let slug = "home";

  let sbParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}
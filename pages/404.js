import Head from "next/head";
import Layout from "../components/Layout";

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>404</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>404 - Page Not Found</h1>
      </Layout>
    </div>
  )
}
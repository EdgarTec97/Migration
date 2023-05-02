import Feature from "@/components/public/Feature";
import Pricing from "@/components/public/Pricing";
import Hero from "@/components/public/Hero";
import Layout from "@/components/public/Layout/Layout";
import SeoHead from "@/components/public/SeoHead";
import Comments from "@/components/public/Comments";

export default function Home() {
  return (
    <>
      <SeoHead title="INM Ciudad Victoria Tamaulipas" />
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
        <Comments />
      </Layout>
    </>
  );
}

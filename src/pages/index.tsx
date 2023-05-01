import Feature from "@/components/public/Feature";
import Pricing from "@/components/public/Pricing";
import Hero from "@/components/public/Hero";
import Layout from "@/components/public/Layout/Layout";
import SeoHead from "@/components/public/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title="LaslesVPN Landing Page" />
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}

import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Servicios from "../components/Servicios";
import Smartverso from "../components/Smartverso";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title='SmartLAB - Portafolio' />
      <Layout>
        <Hero />
        <Feature />
        <Servicios />
        <Smartverso />
      </Layout>
    </>
  );
}

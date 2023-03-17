import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function ServiceRealidadVirtual() {
  return (
    <>
      <SeoHead title='Realidad Virtual Medellín - SmartLAB' />
      <Layout>
        <Gallery />
      </Layout>
    </>
  );
}
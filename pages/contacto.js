import Contacto from "../components/Contact";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function PageContacto() {
  return (
    <>
      <SeoHead title='Contacto VR Medellín - SmartLAB' />
      <Layout>
        <Contacto />
      </Layout>
    </>
  );
}
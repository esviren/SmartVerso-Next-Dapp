import SoftwareAplicaciones from "../components/SoftwareAplicaciones";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function ServiceRealidadVirtual() {
  return (
    <>
      <SeoHead title='Software y Aplicaciones Medellín - SmartLAB' />
      <Layout>
        <SoftwareAplicaciones />
      </Layout>
    </>
  );
}
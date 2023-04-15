import SoftwareAplicaciones from "../components/SoftwareAplicaciones";
import Services from "../components/Services";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function ServiceSoftwareApp() {
  return (
    <>
      <SeoHead title='Software y Aplicaciones Medellín - SmartLAB' />
      <Layout>
        <SoftwareAplicaciones />
        <Services />
      </Layout>
    </>
  );
}
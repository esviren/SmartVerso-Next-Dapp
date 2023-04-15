import SoftwareAplicaciones from "../components/SoftwareAplicaciones";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function ServiceSoftwareApp() {
  return (
    <>
      <SeoHead title='Software y Aplicaciones Medellín - SmartLAB' />
      <Layout>
        <SoftwareAplicaciones />
      </Layout>
    </>
  );
}
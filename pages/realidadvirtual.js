import RealidadVirtual from "../components/RealidadVirtual";
import Services from "../components/Services";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function ServiceRealidadVirtual() {
  return (
    <>
      <SeoHead title='Realidad Virtual Medellín - SmartLAB' />
      <Layout>
        <RealidadVirtual />
        <Services />
      </Layout>
    </>
  );
}

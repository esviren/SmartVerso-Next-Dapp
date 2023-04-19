import RealidadVirtual from "../components/RealidadVirtual";
import ARSection from "../components/ARSection";
import Services from "../components/Services";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function CategoyDesarrollo3D () {
  return (
    <>
      <SeoHead title='Desarrollo 3D Medellín - SmartLAB' />
      <Layout>
        <RealidadVirtual />
        <ARSection />
        <Services />
      </Layout>
    </>
  );
}
import RealidadVirtual from "../components/RealidadVirtual";
import Services from "../components/Services";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function CategoyDesarrollo3D () {
  return (
    <>
      <SeoHead title='Desarrollo 3D Medellín - SmartLAB' />
      <Layout>
        <RealidadVirtual />
        <Services />
      </Layout>
    </>
  );
}
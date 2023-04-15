import Educacion3D from "../components/educacion-3d";
import Services from "../components/Services";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function CategoryEducacionTecnologica() {
  return (
    <>
      <SeoHead title='Educación en Tecnología 3D Medellín - SmartLAB'/>
      <Layout>
        <Educacion3D />
        <Services />
      </Layout>
    </>
  );
}
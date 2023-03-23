import Educacion3D from "../components/educacion-3d";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function CategoryEducacionTecnologica() {
  return (
    <>
      <SeoHead title='Educación en Tecnología 3D Medellín - SmartLAB'/>
      <Layout>
        <Educacion3D />
      </Layout>
    </>
  );
}
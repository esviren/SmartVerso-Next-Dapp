import Formulario from "../components/RegistroSmartRacing.js";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";


export default function PageContacto() {
  return (
    <>
      <SeoHead title='Sponsor Smart Racing - SmartLAB' />
      <Layout>
        <Formulario  />
      </Layout>
    </>
  );
}
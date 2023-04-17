import SmartRacing from "../components/SmartRacing";
import HeroSmartRacing from "../components/HeroSmartRacing";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function PageContacto() {
  return (
    <>
      <SeoHead title='Video Juego Smart Racing - SmartLAB' />
      <Layout>
        <HeroSmartRacing />
        <SmartRacing />
      </Layout>
    </>
  );
}
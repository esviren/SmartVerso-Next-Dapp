import SmartScanner from "../components/SmartScan";
import ARMenu from "../components/ARMenu";
import ARSection from "../components/ARSection";
import Services from "../components/Services";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function smartScan () {
  return (
    <>
      <SeoHead title='SmartScanner - Scaner de realidad aumentada' />
      <Layout>
        <SmartScanner />
        <Services />
      </Layout>
    </>
  );
}
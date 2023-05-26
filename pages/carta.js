import CartaRestaurantes from "../components/CartaRestaurantes";
import ARMenu from "../components/ARMenu";
import ARSection from "../components/ARSection";
import Services from "../components/Services";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function menuCarta () {
  return (
    <>
      <SeoHead title='Carta Para Restaurantes - Realidad Aumentada' />
      <Layout>
        <CartaRestaurantes />
        <ARMenu />
        <Services />
      </Layout>
    </>
  );
}
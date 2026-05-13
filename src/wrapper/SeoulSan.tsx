import "leaflet/dist/leaflet.css";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

export default function SeoulSan() {
  return (
    <article className="relative w-screen h-screen overflow-hidden">
      <Header />
      <Body />
      <Footer />
    </article>
  );
}

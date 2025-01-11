import Navbar from "@/components/Navbar/Navbar";
import "../styles/globals.css";
import Footer from "@/components/Footer.js/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer /> 

    </div>
  );
}

import Footer from "@/components/Footer.js/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import ReactModal from "react-modal";
const queryClient = new QueryClient()
ReactModal.setAppElement("#__next");
export default function App({ Component, pageProps }) {

  return (

    <QueryClientProvider client={queryClient}>

      <Navbar />
      <Component {...pageProps} />
      <ToastContainer />


      <Footer />

    </QueryClientProvider>
  );
}

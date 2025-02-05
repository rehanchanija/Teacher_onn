import Footer from "@/components/Footer.js/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/globals.css";
const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>

      <Navbar />
      <Component {...pageProps} />
      <Footer />

    </QueryClientProvider>
  );
}

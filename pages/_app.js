import Footer from "@/components/Footer.js/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from 'react'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import ReactModal from "react-modal";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { store } from '@/store'
import { Provider } from 'react-redux'

ReactModal.setAppElement("#__next");
const queryClient = new QueryClient()
export default function App({ Component, pageProps }) {

  // const [queryClient] = React.useState(() => new QueryClient())


  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {/* <Hydrate state={pageProps.dehydratedState}> */}
        <Navbar />
        <Component {...pageProps} />
        <ToastContainer />
        <Footer />
        {/* </Hydrate> */}
        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
    </Provider>
  );
}

import { useLayoutEffect } from "react";
import Header from "../../components/Header";
import VideoOffer from "./VideoOffer";
import LatestBlogs from "./LatestBlogs";
import Features from "./Features";
import Offers from "./Offers";
import BestProducts from "./BestProducts";
import TrendCollection from "./TrendCollection";
import Faqs from "./Faqs";
import Footer from "../../components/Footer";
import CustomerReview from "./CustomerReview";
import { motion } from "framer-motion";
import "./home.scss";
import "./homeResponsive.scss";

export default function Home() {
  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    return () => {
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <TrendCollection />
      <Offers />
      <VideoOffer />
      <BestProducts />
      <LatestBlogs />
      <CustomerReview />
      <Faqs />
      <Features />
      <Footer />
    </motion.div>
  );
}

import React, { useLayoutEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Header from "../../components/Header";
// import SpecialPrice from "./SpecialPrice";
import VideoOffer from "./VideoOffer";
import LatestBlogs from "./LatestBlogs";
import Features from "./Features";
import Offers from "./Offers";
import BestProducts from "./BestProducts";
import NavBar from "../../components/NavBar";
import TrendCollection from "./TrendCollection";
import CustomerReview from "./CustomerReview";
import "./home.scss";

export default function Home() {
  useLayoutEffect(() => {
    const locoScroll = new LocomotiveScroll({
      lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        lerp: 0.1,
        duration: 1.2,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 0.8,
        touchMultiplier: 2,
        normalizeWheel: true,
      },
    });
  });

  return (
    <>
      <NavBar />
      <Header />
      <TrendCollection />
      <Offers />
      <VideoOffer />
      <LatestBlogs />
      <Features />
      <BestProducts />
      <CustomerReview />
      <TrendCollection />
    </>
  );
}

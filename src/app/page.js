"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import Navbar from "./components/Navbar/navbar";
import Banner from "./components/banner";
import About from "./components/About/About";
import ServicesComponent from "./components/Services/Services";
import TechManagement from "./components/TechManagement/TechManagement";
import HeroSection from "./components/HeroSection/HeroSection";
import ProjectShowcase from "./components/ProjectShowcase/ProjectShowcase";
import Feedback from "./components/Feedback/Feedback";
import StatsCounter from "./components/StatsCounter/StatsCounter";
import TeamSection from "./components/TeamSection/TeamSection";
import FAQContact from "./components/FAQContact/FAQContact";
import "./globals.css";
import ClientSlideshow from "./components/ClientSlideshow/ClientSlideshow";
import StatsBanner from "./components/StatsBanner/StatsBanner";
import SDLCProcess from "./components/SDLCProcess/SDLCProcess";
 
export default function Home() {

  return (
    <div>
      <Navbar />
      <div id="banner"><Banner /></div>
      <div id="clients"><ClientSlideshow /></div>
      <div id="stats"><StatsBanner /></div>
      <div id="about"><About /></div>
      <div id="services"><ServicesComponent /></div>
      <div id="tech-management"><TechManagement /></div>
       {/* <HeroSection/> */}
      <div id="projects"><ProjectShowcase /></div>
      <SDLCProcess />
      <div id="reviews"><Feedback /></div>
      <div id="contact"><FAQContact/></div>
    </div>
  );
}

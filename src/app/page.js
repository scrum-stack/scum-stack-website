"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MdSearch, MdAccountCircle } from 'react-icons/md';
import { IoNotificationsOutline } from 'react-icons/io5';
import Link from 'next/link';
import Navbar from "./components/Navbar/navbar";
import Banner from "./components/banner";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import TechManagement from "./components/TechManagement/TechManagement";
import HeroSection from "./components/HeroSection/HeroSection";
import ProjectShowcase from "./components/ProjectShowcase/ProjectShowcase";
import Feedback from "./components/Feedback/Feedback";
import StatsCounter from "./components/StatsCounter/StatsCounter";
import TeamSection from "./components/TeamSection/TeamSection";
import FAQContact from "./components/FAQContact/FAQContact";

export default function Home() {

  return (
    <div>
      <Navbar />
      <Banner />
      <About/>
      <Services/>
      <TechManagement/>
      <HeroSection/>
      <ProjectShowcase/>
      <Feedback/>
      <StatsCounter/>
      <TeamSection/>
      <FAQContact/>
    </div>
  );
}

import { Flex } from "antd";
import { Navbar } from "../../components/navbar";
import { HeroSection } from "../../layouts/hero_section";
import { WhySection } from "../../layouts/why_section";
import { AboutSection } from "../../layouts/about_section";
import SistemPenilaianSection from "../../layouts/sistem_penilaian_section";
import CollaborationSection from "../../layouts/collaboration_section";
import FooterSection from "../../layouts/footer_section";
import ProductSection from "../../layouts/product_section";
import { Head } from "@inertiajs/react";

function Home() {
  return (
    <>
      <Head>
        <title>Kidversa</title>
      </Head>
      <Flex vertical align="center">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <WhySection />
        <ProductSection />
        <SistemPenilaianSection />
        <CollaborationSection />
        <FooterSection />
      </Flex>
    </>
  );
}

export default Home;

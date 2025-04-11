
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { FeaturedJobs } from "@/components/home/FeaturedJobs";
import { ResourcesSection } from "@/components/home/ResourcesSection";
import { NetworkSection } from "@/components/home/NetworkSection";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { CallToAction } from "@/components/home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedJobs />
      <FeatureHighlights />
      <ResourcesSection />
      <NetworkSection />
      <CallToAction />
    </Layout>
  );
};

export default Index;

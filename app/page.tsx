import { Hero } from './components/home/Hero';
import { TrustStrip } from './components/home/TrustStrip';
import { HealthPathways } from './components/home/HealthPathways';
import { HomeMotion } from './components/home/HomeMotion';
import { FeaturedCGM } from './components/home/FeaturedCGM';
import { CareGridSection } from './components/home/CareGridSection';
import { BiomedicalServices } from './components/home/BiomedicalServices';
import { EverydayDevices, HomeLiving } from './components/home/HomeLiving';
import { LearningSection } from './components/home/LearningSection';

export default function Home() {
  return (
    <HomeMotion>
      <Hero />
      <TrustStrip />
      <FeaturedCGM />
      <HealthPathways />
      <HomeLiving />
      <EverydayDevices />
      <CareGridSection />
      <BiomedicalServices />
      <LearningSection />
    </HomeMotion>
  );
}

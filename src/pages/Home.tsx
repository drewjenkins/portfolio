import PageTransition from '../components/ui/PageTransition'
import HeroSection from '../components/home/HeroSection'
import TechStack from '../components/home/TechStack'
import FeaturedProjects from '../components/home/FeaturedProjects'
import ValueProps from '../components/home/ValueProps'
import CTASection from '../components/home/CTASection'

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <TechStack />
      <FeaturedProjects />
      <ValueProps />
      <CTASection />
    </PageTransition>
  )
}

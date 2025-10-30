import Head from 'next/head'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import FeaturesSection from '../components/FeaturesSection'
import SpotlightSection from '../components/SpotlightSection'
import ProjectPortfolio from '../components/ProjectPortfolio'
 

export default function Home() {
  return (
    <>
      <Head>
        <title>KDGO - Home</title>
        <meta name="description" content="KDGO Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gray-900 flex flex-col">
        <Navbar />
        
        <main className="flex-1">
          <HeroSection />
        </main>
        <main className="flex-1">
          <FeaturesSection />
        </main>
        <main className="flex-1">
          <SpotlightSection />
        </main>
        <main className="flex-1">
          <ProjectPortfolio/>
        </main>
        <Footer />
      </div>
    </>
  )
}


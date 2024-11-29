import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ToolSection from '@/components/ToolSection'
import AdSense from '@/components/AdSense'
import Footer from '@/components/Footer'
import { toolsData } from '@/lib/toolsData'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-green-50">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AdSense className="my-8" adSlot="1234567890" />
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolsData.map((tool) => (
              <ToolSection key={tool.id} {...tool} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


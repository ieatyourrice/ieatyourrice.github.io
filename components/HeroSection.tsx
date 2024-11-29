import { Button } from '@/components/ui/button'

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-green-400 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Your All-in-One Solution for Everyday Calculations and Tools
        </h1>
        <p className="text-xl mb-8">
          From BMI calculators to financial tools, we simplify your decisions.
        </p>
        <Button size="lg" onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })}>
          Start Now
        </Button>
      </div>
    </section>
  )
}

export default HeroSection


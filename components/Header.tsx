import { Search } from 'lucide-react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          FinTools
        </Link>
        <nav className="hidden md:flex space-x-6">
          {['BMI Calculator', 'Verzugszinsenrechner', 'IP-Adressen', 'Kreditrechner', 'Baufinanzierungsrechner', 'About Us'].map((item) => (
            <Link key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-600 hover:text-blue-600 transition-colors">
              {item}
            </Link>
          ))}
        </nav>
        <div className="relative">
          <Input type="search" placeholder="Search..." className="pl-10 pr-4 py-2 rounded-full" />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>
    </header>
  )
}

export default Header


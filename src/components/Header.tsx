import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link 
            href="/" 
            className="flex items-center gap-2 no-underline cursor-pointer hover:opacity-80 transition-all duration-200"
          >
            <span className="text-gray-900 text-xl font-semibold tracking-wide">HOPEFUND</span>
          </Link>
        </div>
        <nav className="flex gap-8 absolute left-1/2 -translate-x-1/2 md:gap-4 sm:order-3 sm:w-full sm:justify-center">
          <Link 
            href="/projects" 
            className="text-sm font-medium no-underline text-gray-900 hover:text-gray-700 transition-colors"
          >
            Projects
          </Link>
          <Link 
            href="/feed" 
            className="text-sm font-medium no-underline text-gray-600 hover:text-gray-900 transition-colors"
          >
            Feed
          </Link>
          <Link 
            href="/pots" 
            className="text-sm font-medium no-underline text-gray-600 hover:text-gray-900 transition-colors"
          >
            Pots
          </Link>
          <Link 
            href="/donors" 
            className="text-sm font-medium no-underline text-gray-600 hover:text-gray-900 transition-colors"
          >
            Donors
          </Link>
        </nav>
        <div className="flex gap-3 sm:gap-2">
          <Button 
            variant="secondary"
            size="sm"
            className="bg-gray-800 text-white hover:bg-gray-700 hover:text-gray-900 transition-colors"
          >
            Cart
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="text-sm font-medium border-gray-300 hover:text-gray-900 transition-colors"
          >
            Sign In
          </Button>
        </div>
      </div>
    </header>
  )
}

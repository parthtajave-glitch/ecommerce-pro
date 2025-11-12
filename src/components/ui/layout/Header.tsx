'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ShoppingBag, Menu } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-serif font-medium">
            Aurenest
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/collections" className="text-sm hover:text-gray-600 transition-colors">
              Shop
            </Link>
            <Link href="/about" className="text-sm hover:text-gray-600 transition-colors">
              About
            </Link>
            <Link href="/journal" className="text-sm hover:text-gray-600 transition-colors">
              Journal
            </Link>
            <Link href="/contact" className="text-sm hover:text-gray-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="relative">
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-xs text-white">
                0
              </span>
            </Button>
            <Button variant="outline" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

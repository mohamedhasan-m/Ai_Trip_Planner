import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const menuOptions = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Pricing',
    path: '/pricing'
  },
  {
    name: 'Contact us',
    path: '/contact-us'
  }
]

function Header() {
  return (
    <div className="relative flex items-center justify-between px-8 py-4">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src="/logo.svg"
          alt="logo"
          width={40}
          height={40}
        />

        <h2 className="font-bold text-2xl">
          AI Trip Planner
        </h2>
      </div>

      {/* Center Menu */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-10">
        {menuOptions.map((menu) => (
          <Link
            key={menu.path}
            href={menu.path}
          >
            <h2 className="text-lg hover:scale-105 transition-all hover:text-primary">
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>

      {/* Get Started */}
      <Button>
        Get Started
      </Button>

    </div>
  )
}

export default Header
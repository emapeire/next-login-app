'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/constants'

export function Footer() {
  const year = new Date().getFullYear()
  const pathname = usePathname()

  return (
    <footer className='flex justify-center items-center w-full mx-auto md:max-w-3xl'>
      <div className='w-full mx-auto md:flex md:items-center md:justify-between text-sm font-medium text-neutral-700 dark:text-neutral-300'>
        <p>
          © {year}
          <span className='ms-2 me-2'>•</span>
          <a
            href='https://link.emapeire.xyz'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline hover:underline-offset-4'
          >
            Emanuel Peire
          </a>
          <span className='ms-2 me-2'>—</span>
          All rights reserved.
        </p>

        <div className='flex flex-wrap items-center pt-2 md:pt-0'>
          {navLinks.map((link, index) => (
            <div key={link.label}>
              {pathname === link.url ? (
                <span
                  aria-label={link.label}
                  className='opacity-50 cursor-default'
                >
                  {link.title}
                </span>
              ) : (
                <Link
                  aria-label={link.label}
                  href={link.url}
                  className='hover:underline hover:underline-offset-4'
                >
                  {link.title}
                </Link>
              )}
              {index < navLinks.length - 1 && (
                <span className='mx-2 cursor-default'>|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

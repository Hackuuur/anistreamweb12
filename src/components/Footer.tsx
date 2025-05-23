'use client'

import { usePathname } from 'next/navigation'


import Link from 'next/link'
import { Wrapper } from './Wrapper'
import Image from 'next/image'

const Footer = () => {
  const pathname = usePathname()
  const pathsToMinimize = [
    '/verify-email',
    '/sign-up',
    '/sign-in',
  ]

  return (
    <footer className='bg-black flex-grow-0'>
      <Wrapper>
        <div className='border-t border-gray-400 mt-4'>
          {pathsToMinimize.includes(pathname) ? null : (
            <div className='pb-4 pt-8'>
              <div className='flex justify-center'>
                
                <Image src={'/Logo.png'} height={60} width={60} alt='footer Logo' />
              </div>
            </div>
          )}

          {pathsToMinimize.includes(pathname) ? null : (
            <div>
              <div className='relative flex items-center px-6 py-6 sm:py-8 lg:mt-0'>
                <div className='absolute inset-0 overflow-hidden rounded-lg'>
                  <div
                    aria-hidden='true'
                    className='absolute bg-black inset-0 bg-gradient-to-br bg-opacity-90'
                  />
                </div>

                <div className='text-center relative mx-auto max-w-sm'>
                  <h3 className='font-semibold text-gray-200'>
                    Become a Creater
                  </h3>
                  <p className='mt-2 text-sm text-gray-300'>
                    If you&apos;d like to sell high-quality
                    digital Manga/Manhwa, you can do so in
                    minutes.{' '}
                    <Link
                      href='/sign-in?as=creator'
                      className='whitespace-nowrap font-medium text-blue-600 hover:text-blue-400'>
                      Get started &rarr;
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className='py-10 md:flex md:items-center md:justify-between'>
          <div className='text-center md:text-left'>
            <p className='text-sm text-gray-300'>
              &copy; {new Date().getFullYear()} All Rights
              Reserved
            </p>
          </div>

          <div className='mt-4 flex items-center justify-center md:mt-0'>
            <div className='flex space-x-8'>
              <Link
                href='#'
                className='text-sm text-gray-300 hover:text-gray-500'>
                Terms
              </Link>
              <Link
                href='#'
                className='text-sm text-gray-300 hover:text-gray-500'>
                Privacy Policy
              </Link>
              <Link
                href='#'
                className='text-sm text-gray-300 hover:text-gray-500'>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer
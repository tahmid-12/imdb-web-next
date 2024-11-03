'use client'

import dynamic from 'next/dynamic';
const ThemeProvider = dynamic(() => import('next-themes').then(mod => mod.ThemeProvider), { ssr: false });

const Providers = ({ children }) => {
  return (
    <ThemeProvider defaultTheme='system' attribute="class">
        <div className='text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300'>
            { children }
        </div>
    </ThemeProvider>
  )
}

export default Providers
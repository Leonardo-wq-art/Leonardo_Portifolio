
import Navbar from '@/components/Navbar'


import './globals.css'


export const metadata={
  title: 'Beats 3',
  description: 
  'Enjoy award-winning Beats sound with wireless listening freedom and a sleek',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
    
       <div className='w-full h-full  bg-gradient s'>
   <Navbar/>
        {children}

        </div>
        </body>
    </html>
  )
}

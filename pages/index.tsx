import Image from 'next/image'
import { Inter } from 'next/font/google'
import Designcave from './component/Designcave'
import Digitalmarketing from './component/Digitalmarketing'
import Complete from './component/Complete'
import Membership from './component/Membership'
import Recentwork from './component/Recentwork'
import Apps from './component/Apps'
import Memberslevle from './component/Memberslevle'
import Faqs from './component/Faqs'
import Footer from './component/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   
   <Designcave/>

   <Digitalmarketing/>

   <Complete/>

   <Membership/>

   <Recentwork/>

   <Apps/>

   <Memberslevle/>

   <Faqs/>

   <Footer/>
   </>
  )
}

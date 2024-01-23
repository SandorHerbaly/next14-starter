
/*"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"


const NavigationTestPage = () => {

   
    const pathname = usePathname()

    const handleClick = () => {
      console.log("clicked")
     

    }


  return (
    <div>

      <Link href="/" prefetch={false}>Click here</Link>

      <button onClick={handleClick}>Write andd Redirect</button>
    </div>
  )
}

export default NavigationTestPage
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../common/Button'

const Header = () => {
  return (
    <>
      <header className='w-full h-20 flex items-center justify-between px-8 bg-white shadow-md'>

        <Link href={"/"}>
          <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        </Link>


        <div className=' flex items-center gap-6 max-w-3xl'>

        </div>


        <div className=' flex items-center gap-6 '>


        </div>

      </header>
    </>
  )
}

export default Header
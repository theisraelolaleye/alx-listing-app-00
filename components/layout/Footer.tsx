import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Apartments in Dubai", href: "/explore/apartments-dubai" },
      { label: "Hotels in New York", href: "/explore/hotels-new-york" },
      { label: "Villa in Spain", href: "/explore/villa-spain" },
      { label: "Mansion in Indonesia", href: "/explore/mansion-indonesia" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/company/about" },
      { label: "Blog", href: "/company/blog" },
      { label: "Career", href: "/company/career" },
      { label: "Customers", href: "/company/customers" },
      { label: "Brand", href: "/company/brand" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Support", href: "/help/support" },
      { label: "Cancel booking", href: "/help/cancel-booking" },
      { label: "Refunds Process", href: "/help/refunds" },
    ],
  },
];


const Footer = () => {
  return (
    <footer className=' w-full font-medium leading-6 px-16 max-w-full mx-auto pt-10 '>

      <div className=' flex justify-between gap-[160px] '>

        <div className=' max-w-[640px] shrink-0  '>
          <Image src="/logo.svg" alt="ALX Logo" width={60} height={30} className=' mb-6 ' />
          <p>ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging options worldwide. From cozy city apartments and tranquil countryside retreats to exotic beachside villas, ALX connects you with the perfect place to stay for any trip.</p>
        </div>

        <div className=' ml-auto flex max-w-[790px] w-full justify-between'>
          {footerLinks.map((section) => (

            <div key={section.title} className=' w-[160px] '>
              <h3 className=' font-bold text-2xl mb-4 '>{section.title}</h3>

              <ul className=' space-y-2 '>
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className=' hover:underline text-base '>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


      </div>

      <div className=' flex justify-between mt-20 text-[#CACACA]' >
        <p className=' leading-6 font-medium '>Some hotel requires you to cancel more than 24 hours before check-in. Details <Link href={"/"} className=' text-[#34967C]' >here</Link></p>

        <div className=' flex gap-9 '>
          <Link href={"/"}>Term of Service</Link>
          <Link href={"/"}>Policy Service</Link>
          <Link href={"/"}>Cookie Policy</Link>
          <Link href={"/"}>Partners</Link>
        </div>
      </div>

    </footer>


  )
}

export default Footer
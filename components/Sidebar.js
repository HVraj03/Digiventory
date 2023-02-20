import Link from 'next/link';
import { data } from './sidebarData'
import Logo from '../public/logo.svg'
import Image from 'next/image'

import { getAuth } from 'firebase/auth'

export default function Sidebar() {



  return (
    <>
      <aside className="flex flex-col w-72 h-screen px-4 py-8 overflow-y-auto bg-white border-r">
        {/* --------- Logo section ------------- */}
        <Link href={data.fields.logo.value.href} className="px-4">
          <Image
            className="w-auto"
            width={50}
            height={50}
            src={Logo}
            alt={data.fields.logo.value.alt}
          />
          <p></p>
        </Link>

        {/* -------- Start nav Links  --------------- */}
        <div className="flex flex-col justify-between flex-1 mt-6 border-t">
          <nav className="mt-4">
            {data.fields.links.map((item, index) => (
              <Link
              key={index}
                href={item.field.link.value.href}
                className="flex items-center space-x-3 my-4 text-gray-700 p-2 transition-colors duration-300 transform rounded-md font-medium hover:bg-gray-200"
              >
                <svg
                  class="h-5 pr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d={item.field.link.value.path}
                  />
                </svg>
                <span className="mx-4 font-medium">
                  {item.field.link.value.label}
                </span>
              </Link>
            ))}
            <button
            
                className="flex items-center space-x-3 my-4 text-gray-700 p-2 transition-colors duration-300 transform rounded-md font-medium hover:bg-gray-200 hover:cursor-pointer"
              >
                <svg
                  class="h-5 pr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d={'M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'}
                  />
                </svg>
                <span className="mx-4 font-medium">
                  {'Log Out'}
                </span>
              </button>
          </nav>
        </div>
        {/* --------- End nav Links --------------  */}
      </aside>
    </>
  );
}

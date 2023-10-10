import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <svg className="w-8 h-8 fill-current text-purple-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.970 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
              </svg>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/how-it-works" className="px-4 py-3 text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="px-4 py-3 text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="/materials" className="px-4 py-3 text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">
                  Materials
                </Link>
              </li>
              <li>
                <Link href="/resources" className="px-4 py-3 text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/company" className="px-4 py-3 text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">
                  Company
                </Link>
              </li>
              <li>
                 <Link href="/get-instant-quote" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                      Get Instant Quote
                 </Link>
              </li>
            </ul>
          </nav>
            {/* Add the provided SVG person icon and Tailwind CSS dropdown here */}
            <div className="relative group">
              <button
                className="btn-sm text-white hover:bg-transparent ml-3 focus:outline-none" // Remove background and adjust hover behavior
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-9 h-9" // Slightly larger icon
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
              {/* Use Tailwind CSS classes to control the dropdown visibility */}
              <div className="absolute right-0 mt-2 w-48 bg-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <ul className="py-2">
                  <li className="px-4 py-2 text-gray-700 hover:bg-purple-100"> {/* Change text color to dark grey */}
                    <Link href="/signin">Sign In</Link>
                  </li>
                  <li className="px-4 py-2 text-gray-700 hover:bg-purple-100"> {/* Change text color to dark grey */}
                    <Link href="/signup">Sign Up</Link>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </header>
  )
}

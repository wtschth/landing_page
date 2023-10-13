import Link from 'next/link'
import MobileMenu from './mobile-menu'
import PageIllustration from '@/components/page-illustration'


export default function Header() {
  return (

    <header className="fixed top-0 w-full z-30 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Futura">
                <svg className="w-40 h-12 fill-current text-purple-600" viewBox="0 0 120 36" xmlns="http://www.w3.org/2000/svg">
                    <g fill="fff" stroke="#fff" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22.593 28.373l.326-.103-.142-.54-.332.082z"/>
                        <path d="M22.25 26.796l.088.573.335-.066-.084-.552zm-.083-1.036l.029.579.341-.029-.028-.558zm7.349-9.439l.075.334.549-.102-.055-.337zm1.02-.175l.038.34.557-.038-.017-.341zm1.038-.062l.001.342.558.026.02-.341zm-4.933 1.417l.18.291.479-.287-.162-.301zm.908-.495l.147.309.509-.229-.128-.317zm.961-.395l.112.323.532-.167-.092-.329zm-3.826 2.501l-.388.431.264.217.374-.415zm.743-.721l-.429.39.239.244.414-.376zm.819-.639l-.464.347.211.269.447-.335zm-3.491 4.49l.32.119.206-.519-.312-.139zm.413-.949l.305.154.266-.491-.295-.172zm.514-.903l.287.186.322-.456-.275-.203zm-1.485 4.325l-.029.579.342.008.028-.558zm.141-1.026l-.088.573.339.046.084-.553-.335-.066.44-.364.143-.54-.326-.103-.148.56m.153 5.19l.326-.103-.142-.54-.332.082z"/>
                        <path d="M22.257 26.854l.088.573.335-.066-.084-.552zm-.083-1.035l.029.579.341-.029-.028-.558zm1.846 5.378l.275-.203-.321-.456-.287.186zm-.57-.864l.295-.172-.266-.491-.305.154zm-.476-.924l.313-.139-.206-.519-.321.119zm2.81 3.607l.464.347.194-.281-.447-.335zm-.78-.68l.429.39.224-.258-.414-.376zm-.704-.765l.387.431.251-.232-.374-.416zm4.764 3.108l.092-.329-.532-.167-.112.323zm-.981-.33l.128-.317-.509-.229-.147.309zm-.943-.437l.162-.301-.479-.287-.18.291zm5.014 1.097l-.019-.341-.558.025-.001.342zm-1.035.003l.018-.341-.557-.038-.038.34zm-1.033-.109l.055-.337-.549-.103-.075.333zm4.557-.373l.545-.199-.13-.316-.525.192zm-.997.281l.562-.144-.094-.329-.541.139zm-1.025.17l.573-.088-.057-.337-.552.085zm5.206-2.29l-.225-.257-.431.354.209.271zm-.813.641l-.196-.28-.47.302.178.292zm-1.401.806l.521-.254-.164-.3-.502.244zm3.885-3.354l.301-.496-.296-.17-.29.478zm-.615.834l.349-.463-.276-.202-.336.446.263.218-.562.11-.386.403.238.246.401-.418m2.31-4.582l-.336-.064-.128.543.331.085z"/>
                        <path d="M40.44 28.928l.198-.545-.327-.101-.191.525zm-.419.95l.252-.522-.313-.137-.242.503zm.935-5.609l-.339.047.063.555.341-.027zm.088 1.031l-.342.01v.558l.342.01zm-.023 1.039l-.341-.027-.063.555.339.048zm-.745-4.512l-.252-.522-.304.155.242.503zm.362.97l-.197-.545-.32.121.191.525.327-.101-.217.53.128.544.336-.064-.132-.564m-2.576-4.438l-.238.246.386.404.252-.231z"/>
                        <path d="M39.234 20.024l-.349-.463-.263.218.336.446zm.568.87l-.301-.496-.285.188.29.478zm-3.663-3.598l-.521-.254-.145.309.502.245.164-.3.212.529.47.302.196-.28-.487-.313m.855.588l-.209.27.431.355.225-.257zm-4.186-1.837l-.573-.087-.036.34.552.085zm1.011.226l-.562-.144-.073.334.541.139zm.983.337l-.544-.199-.11.324.525.192zm-5.67-.468l.075.333.549-.102-.055-.337zm1.021-.175l.038.34.557-.038-.018-.341zm1.037-.063l.001.342.558.026.02-.341zm-4.933 1.418l.18.291.479-.287-.162-.301zm.909-.495l.147.309.509-.228-.128-.317zm.96-.396l.112.323.532-.167-.092-.329zm-3.826 2.502l-.388.431.264.217.374-.415zm.743-.721l-.429.39.239.244.414-.376zm.819-.64l-.464.347.211.269.447-.335zm-3.49 4.491l.32.119.206-.519-.313-.139zm.412-.95l.305.154.266-.491-.295-.172zm.515-.902l.287.186.322-.456-.275-.204zm-1.486 4.324l-.029.579.342.008.028-.558zm.141-1.026l-.088.573.339.046.084-.552-.335-.066.44-.364.143-.54-.326-.103-.148.56m79.936-5.75c1.727-1.175 3.306-1.762 4.737-1.762.98 0 1.76.191 2.339.574s.962.861 1.15 1.435.212 1.244.076 2.01l-.543 2.684-.711 3.979-.068.988.208.234.506.1.717.067-.015.654-1.845.027-1.855.08-.158-.187.435-2.15-3.192 2.27-1.588.307c-.682 0-1.244-.129-1.688-.387s-.754-.619-.931-1.082-.207-1.024-.089-1.683c.234-1.308.808-2.33 1.723-3.064s3.165-1.36 6.751-1.876c.235-1.318.12-2.245-.346-2.784s-1.172-.808-2.118-.808l-1.389.227-.762.367-.982 1.636-.576-.067z"/>
                        <path d="M95.161 15.802l.212.174-.606 2.751 1.185-1.269 1.01-.968.944-.527 1.03-.187 1.018.24-.732 3.311h-.575c-.195-.819-.671-1.228-1.429-1.228-.528 0-1.02.176-1.474.527l-1.022 1.322-.557 2.009-.265 1.482-.299 1.963-.213 1.803.116.354.292.154 1.797.133-.004.668-3.67.013-3.086.107.007-.681 1.555-.227.311-.167.235-.387.41-1.723.452-2.21.47-2.631.209-1.455.12-1.135-.142-.314-.647-.1-1.071-.013.007-.681c1.785-.312 3.217-.645 4.415-1.108zm-16.27 0l.212.174-.935 4.447-.556 3.111-.175 2.377a1.5 1.5 0 0 0 .68 1.021l1.394.354 1.768-.381 1.477-1.075.761-.935.343-1.349.305-1.495.258-1.442.209-1.455.12-1.135-.142-.314-.647-.1-1.071-.013.007-.681c1.785-.312 3.217-.645 4.416-1.108l.212.174-.935 4.447-.42 2.35-.52 3.271-.113 1.382.238.347 1.12.1h.358v.641l-2.52.013-1.819.093.432-2.417-2.153 1.749-1.261.694-1.737.28c-.954 0-1.669-.158-2.145-.474a2.04 2.04 0 0 1-.897-1.308c-.122-.556-.062-1.516.182-2.878l.201-1.055.465-2.604.209-1.455.12-1.135-.142-.314-.647-.1-1.071-.013.007-.681c1.785-.312 3.217-.645 4.416-1.108zm-12.597 1.763l2.098-.868.648-4.059 2.344-1.028.259.267-1.18 4.887 1.378.013 2.174-.08-.37 1.215-1.565.107-1.843.013-1.047 5.435-.357 2.464.298.908 1.06.327c.571 0 1.127-.156 1.668-.467l.221.481-1.708 1.335-1.412.32c-1.917 0-2.702-.97-2.356-2.911l.376-1.816.096-.467.99-5.541h-.524l-1.326.053-.034-.454M54.57 15.802l.212.174-.935 4.447-.556 3.111-.175 2.377a1.5 1.5 0 0 0 .68 1.021l1.394.354 1.768-.381 1.476-1.075.761-.935.343-1.349.305-1.495.258-1.442.209-1.455.12-1.135-.142-.314-.647-.1-1.071-.013.007-.681c1.785-.312 3.217-.645 4.416-1.108l.212.174-.935 4.447-.42 2.35-.52 3.271-.113 1.382.238.347 1.12.1h.358l.001.641-2.52.013-1.819.093.432-2.417-2.153 1.749-1.262.694-1.737.28c-.954 0-1.669-.158-2.146-.474a2.04 2.04 0 0 1-.897-1.308c-.122-.556-.062-1.516.182-2.878l.201-1.055.465-2.604.209-1.455.12-1.135-.142-.314-.647-.1-1.071-.013.007-.681c1.785-.312 3.217-.645 4.416-1.108zm-14.073 3.725l-.484 2.711-.452 2.604-.268 1.93.076.614.424.24 1.672.154-.031.748h-3.77l-3.674.107.036-.774 1.732-.214.562-.214.313-.534.42-1.816.521-2.844 1.105-6.182.44-2.604.28-1.963-.074-.588-.424-.24-1.674-.147.034-.761 6.431-.013 6.251-.08-.453 1.609-.569 2.397-.722.107-.002-1.135.036-1.349c-.83-.312-2.025-.467-3.585-.467l-2.483.16-1.047 5.074-.413 2.31 2.206.027 1.882-.087.963-.167.29-.3.333-.968.205-.721.76-.107-.531 3.044-.224 1.469-.252 1.696-.773.107.081-1.242.046-.975-.222-.401-.876-.174-2.146-.08zM10.075 30.523L5.358 6.258l24.265-4.717 4.717 24.265z"/>
                        <path d="M7.398 28.391V3.58h24.811v24.811zM105.72 6.929l-.342-2.75 11.18.006z"/>
                    </g>
                    <g fill="#000" stroke="#fff" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round">
                       <path d="M108.2 21.584c-2.46.418-4.028.868-4.701 1.349s-1.101 1.224-1.28 2.23c-.248 1.389.288 2.083 1.609 2.083 1.133 0 2.376-.686 3.729-2.056z"/>
                    </g>
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
                 <Link href="/quote" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
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
                  fill="ffffff"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-9 h-9" // Slightly larger icon
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
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

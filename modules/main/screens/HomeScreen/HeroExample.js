/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const Logo = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1501 1718" {...props} fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2"><path d="M1062.61 1449.014c45.618-99.284 77.818-217.352 93.918-346.153 45.617-48.3 88.551-96.601 126.118-147.585 56.35 88.55 88.551 174.418 99.284 246.869 18.784 0 37.567 5.367 56.351 13.417-8.05-93.918-48.3-198.569-120.751-308.587 134.168-203.935 161.001-389.087 69.767-501.788-67.084-85.868-190.518-115.385-348.837-88.55-29.517-53.668-64.4-99.285-99.284-134.169-5.367 18.784-13.417 37.567-21.467 53.667 24.15 24.15 45.617 56.35 67.084 91.235-75.134 18.783-150.268 48.3-230.769 88.55-77.817-40.25-155.635-69.767-230.769-88.55 21.467-34.884 42.934-67.084 67.084-91.235-10.733-16.1-18.783-34.883-21.467-53.667-37.567 34.884-69.767 80.5-99.284 134.168-158.318-26.834-281.753 5.367-348.837 88.551-91.234 112.701-67.084 300.536 67.084 504.472-72.45 110.017-112.7 214.668-120.751 308.586 16.1-8.05 34.884-10.733 56.35-13.417 8.05-75.134 42.934-158.318 99.285-246.869 37.567 50.984 77.817 99.284 126.118 147.585 16.1 128.801 48.3 246.869 93.917 346.153-42.933 5.367-83.184 8.05-118.067 5.367-5.367 18.784-13.417 34.884-24.15 50.984 21.466 2.683 42.933 5.367 64.4 5.367 32.2 0 67.084-2.684 104.651-10.734 72.45 136.852 174.418 214.669 281.753 214.669 107.334 0 209.302-77.817 287.12-217.352 37.566 5.367 72.45 8.05 104.65 8.05 24.15 0 45.617 0 64.401-5.367-10.733-16.1-18.784-32.2-24.15-50.984-37.567 5.367-77.818 5.367-120.751-2.683zm-56.35-8.05c-61.717-13.417-128.801-37.567-198.569-69.767 69.768-37.567 136.852-83.185 201.252-134.168 29.517-21.467 56.35-45.618 80.501-69.768-16.1 101.968-42.934 193.202-83.184 273.703zm158.318-423.971c2.684-34.884 2.684-72.45 2.684-107.334s0-72.451-2.684-107.335c32.2 34.884 59.034 72.451 85.868 107.335-26.834 34.883-56.35 72.45-85.868 107.334zm177.102-576.922c69.767 88.55 48.3 249.552-61.717 421.287-34.884-50.984-77.818-99.284-126.118-147.585-16.1-128.8-48.3-246.869-93.918-346.153 131.485-18.784 230.77 5.367 281.753 72.45zm-335.42-61.718c40.25 77.818 67.084 171.735 85.868 273.703-26.834-24.15-53.668-48.3-80.501-69.767-64.4-50.984-131.485-96.601-201.252-134.168 67.084-32.2 134.168-56.35 195.885-69.768zm-29.517 246.87c45.617 37.567 88.55 75.134 128.801 112.7 5.367 56.351 10.734 112.702 10.734 171.736 0 59.034-2.684 115.384-10.734 171.735-40.25 40.25-83.184 77.817-128.801 112.7-72.45 56.351-147.585 107.335-225.402 147.586-77.818-40.25-152.952-91.235-225.402-147.585-45.618-34.884-88.551-75.134-128.802-112.701-5.366-56.35-10.733-112.701-10.733-169.052 0-59.034 2.683-115.384 10.733-171.735 40.25-40.25 83.184-77.817 128.802-112.701 72.45-56.35 147.584-107.335 225.402-147.585 77.817 37.567 152.951 85.868 225.402 144.901zM692.307 448.12c-69.767 37.567-136.851 83.184-201.252 134.168-26.834 21.467-56.35 45.617-80.5 69.767 18.783-101.968 45.616-195.885 83.183-273.703 64.4 13.417 131.485 37.567 198.569 69.768zm-533.989-8.05c50.984-67.084 150.268-91.235 279.07-72.451-45.617 99.284-77.818 217.352-93.918 343.47-48.3 48.3-88.55 96.601-126.118 147.585C112.702 686.94 88.551 528.622 158.318 440.07zm93.918 469.588c26.833-37.567 53.667-72.451 85.867-107.335-2.683 34.884-2.683 72.451-2.683 107.335 0 34.883 2.683 72.45 2.683 107.334-32.2-34.884-59.034-72.45-85.867-107.334zm158.318 254.919c26.834 24.15 53.667 48.3 80.5 69.767 64.402 50.984 131.486 96.601 201.253 134.168-67.084 32.2-134.168 56.35-198.569 69.768-37.567-77.818-64.4-171.735-83.184-273.703zm340.787 499.105c-83.184 0-163.685-61.717-230.77-174.419 75.135-18.783 150.269-48.3 230.77-88.55 80.5 40.25 155.635 69.767 230.769 88.55-67.084 112.702-147.585 174.419-230.77 174.419z" fillRule="nonzero"/><path d="M722.879 1180.99V919.146l-184.05-184.05c-89.18 108.153-81.59 267.536 18.974 368.1 45.538 45.538 104.358 74 165.076 77.794zM944.877 1103.196c100.563-100.564 106.256-261.844 18.974-368.1l-184.05 184.05v261.844c58.82-5.692 117.64-30.359 165.076-77.794zM576.777 697.147L751.34 871.71l174.563-174.563c-102.461-83.486-248.563-81.589-349.126 0zM751.34 276.386c75.135 0 139.536-61.718 139.536-139.535S826.475 0 751.34 0 614.489 61.717 614.489 136.85s59.034 139.535 136.852 139.535zM1363.147 1258.495c-75.134 0-139.535 61.718-139.535 139.535 0 77.818 61.717 139.535 139.535 139.535 75.134 0 136.851-61.717 136.851-139.535 0-77.817-59.034-139.535-136.851-139.535zM139.535 1258.495C61.717 1258.495 0 1320.213 0 1395.347s61.717 139.535 139.535 139.535c77.817 0 136.851-61.718 136.851-139.535 0-77.818-61.717-136.852-136.851-136.852z" fillRule="nonzero"/></svg>
)

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Newsletter', href: 'https://mariosouto.com/newsletter' },
  { name: 'Vídeos e Tutoriais', href: 'https://youtube.com/DevSoutinho' },
]

export default function Example(props) {
  return (
    <div className="relative bg-gray-50 overflow-hidden flex flex-col flex-1">
      <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
        <div className="relative h-full max-w-7xl mx-auto">
          <svg
            className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
          </svg>
        </div>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24 flex flex-col flex-1">
        <Popover>
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <nav
                  className="relative flex items-center justify-between sm:h-10 md:justify-center"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <a href="#">
                        <span className="sr-only">Workflow</span>
                        <Logo className="h-8 w-auto sm:h-10 fill-current text-yellow-500" />
                        {/* <img
                          className="h-8 w-auto sm:h-10"
                          src="https://tailwindui.com/img/logos/workflow-mark-yellow-500.svg"
                          alt=""
                        /> */}
                      </a>
                      <div className="-mr-2 flex items-center md:hidden">
                        <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                          <span className="sr-only">Open main menu</span>
                          <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex md:space-x-10">
                    {navigation.map((item) => (
                      <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                    <span className="inline-flex rounded-md shadow">
                      <a
                        href="https://youtube.com/DevSoutinho?sub_confirmation=1"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md bg-yellow-500 text-white hover:bg-yellow-600"
                      >
                        Inscreva-se
                      </a>
                    </span>
                  </div>
                </nav>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  static
                  className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/workflow-mark-yellow-500.svg"
                          alt=""
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="block w-full px-5 py-3 text-center font-medium text-yellow-500 bg-gray-50 hover:bg-gray-100"
                    >
                      Log in
                    </a>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        <main className="mt-16 max-w-7xl px-4 sm:mt-24 container self-center grid sm:grid-cols-1 lg:grid-cols-2 gap-20 items-center content-center flex-1">
          <div className="text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">DevSoutinho </span>
              <br />
              <span className="block text-yellow-500 xl:inline">Gallery</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl max-w-sm md:max-w-md">
              Aqui você vai encontrar diversos exemplos de projetos feitos por mim com fluxos e features comuns que você pode usar para montar seu portfólio!
            </p>
          </div>
          <div>
            {props.children}
          </div>
        </main>
      </div>
    </div>
  )
}

import Head from "next/head";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>404 - Page Not Found | Jovan Raosavljevic</title>
        <meta name="description" content="Page not found" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="w-full min-h-screen flex items-center justify-center dark:bg-[#050505] transition-colors duration-300">
        <div className="max-w-[600px] mx-auto px-4 text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-[#5651e5] mb-4">404</h1>
            <h2 className="text-4xl font-bold text-gray-700 dark:text-gray-200 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/">
              <button className="px-8 py-4 shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white font-semibold hover:scale-105 transition-transform duration-300">
                Go Home
              </button>
            </Link>
            <Link href="/#projects">
              <button className="px-8 py-4 bg-white dark:bg-[#111827] text-gray-700 dark:text-gray-200 shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl uppercase font-semibold hover:scale-105 transition-transform duration-300">
                View Projects
              </button>
            </Link>
          </div>

          <div className="mt-12">
            <Link href="/">
              <div className="inline-block rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={40} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

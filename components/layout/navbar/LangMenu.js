import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const LangMenu = () => {
  const router = useRouter()
  const [language, setLanguage] = useState(router.locale)

  return (
    <div className="flex flex-row justify-between content-center mt-1 ">
      <div
        className={`mr-4 ${
          language === 'ar' ? 'border-b-2 border-gray-800 ' : ''
        }`}
        onClick={() => setLanguage('ar')}
      >
        <Link href={router.asPath} locale="ar">
          <a>
            <Image
              src="/images/ar.svg"
              width="25px"
              height="15px"
              className="object-cover"
              alt="ar"
            />
          </a>
        </Link>
      </div>
      <div
        className={`mr-4 ${
          language === 'tr' ? 'border-b-2 border-gray-800' : ''
        }`}
        onClick={() => setLanguage('tr')}
      >
        <Link href={router.asPath} locale="tr">
          <a>
            <Image
              src="/images/tr.svg"
              width="25px"
              height="15px"
              className="object-cover"
              alt="tr"
            />
          </a>
        </Link>
      </div>
      <div
        className={`mr-4 ${
          language === 'en' ? 'border-b-2 border-gray-800' : ''
        }`}
        onClick={() => setLanguage('en')}
      >
        <Link href={router.asPath} locale="en">
          <a>
            <Image
              src="/images/en.svg"
              width="25px"
              height="15px"
              className="object-cover"
              alt="en"
            />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default LangMenu

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Popover, Transition } from '@headlessui/react'

const CategoriesMenu = () => {
  const [categories, setGategories] = useState(null)
  const t = useTranslations('navbar')
  const router = useRouter()
  useEffect(() => {
    const getGategories = async () => {
      const { data } = await axios.get(
        `https://force-prefabricated.herokuapp.com/categories?_locale=${router.locale}`,
      )
      setGategories(data)
    }
    getGategories()
    return () => {
      //
    }
  }, [router.locale])
  return (
    <Transition
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Popover.Panel className="absolute z-10 mt-5 mx-auto mr-0 px-8 py-4 rounded-b-md bg-gradient-to-b from-gray-900 via-gray-700 to-gray-900">
        <div className="flex flex-col gap-2 min-w-max ">
          <Link href="/products" locale={router.locale}>
            <a
              className={`${
                router.asPath === '/products'
                  ? 'bg-gray-700 text-white'
                  : ''
              } text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
            >
              {t('allProducts')}
            </a>
          </Link>
          {categories &&
            categories.map((category) => (
              <Link
                key={category.id}
                href={`/products/${category.id}`}
                locale={router.locale}
              >
                <a
                  className={`${
                    router.asPath === `/products/${category.id}`
                      ? 'bg-gray-700 text-white'
                      : ''
                  } text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                >
                  {category.name}
                </a>
              </Link>
            ))}
        </div>
      </Popover.Panel>
    </Transition>
  )
}

export default CategoriesMenu

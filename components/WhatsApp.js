import { useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { useRouter } from 'next/router'

const WhatsApp = () => {
  const [whatsAppUrl, setWhatsAppUrl] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const getSiteInfo = async () => {
      const { data } = await axios.get(
        `https://force-prefabricated.herokuapp.com/website-data?_locale=${router.locale}`,
      )
      setWhatsAppUrl(data.whatsApp)
    }
    getSiteInfo()
    return () => {
      //
    }
  }, [router])
  return (
    <div className="block fixed right-5 bottom-10  ">
      <a href={whatsAppUrl} target="_blank" rel="noreferrer">
        <Image
          src="/images/whatsapp.svg"
          width="50px"
          height="50px"
          alt="whatsApp"
          className=" object-fill"
        />
      </a>
    </div>
  )
}

export default WhatsApp

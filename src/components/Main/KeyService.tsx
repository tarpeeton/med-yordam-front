"use client"
import { FC } from 'react'
import Image from 'next/image'

import { useLocale } from 'next-intl'
import One from '../../public/key/Profile.svg'
import Two from '../../public/key/reyting.svg'
import Three from '../../public/key/repeat.svg'
import four from '../../public/key/Sharhlar.svg'
import Five from '../../public/key/Last.svg'


const Data = [
  {
    id: "1",
    title: { 
      ru: "Редактирование профиля", 
      uz: "Profilni tahrirlash", 
      en: "Profile editing" 
    },
    description: { 
      ru: "Управляйте своей информацией, графиком работы и контактами.", 
      uz: "O‘zingizning ma'lumotlaringizni, ish jadvalingizni va kontaktlaringizni boshqaring.", 
      en: "Manage your information, work schedule, and contacts." 
    },
    icon: One
  },
  {
    id: "2",
    title: { 
      ru: "Редактирование профиля", 
      uz: "Profilni tahrirlash", 
      en: "Profile editing" 
    },
    description: { 
      ru: "Пациенты могут оставлять отзывы, которые помогут другим пользователям найти лучших специалистов.", 
      uz: "Bemorlar boshqa foydalanuvchilarga eng yaxshi mutaxassislarni topishga yordam beradigan sharhlar qoldirishi mumkin.", 
      en: "Patients can leave reviews that help other users find the best specialists." 
    },
    icon: Two
  },
  {
    id: "3",
    title: { 
      ru: "Редактирование профиля", 
      uz: "Profilni tahrirlash", 
      en: "Profile editing" 
    },
    description: { 
      ru: "Удобный поиск по рейтингу, ценам и местоположению.", 
      uz: "Reyting, narxlar va joylashuv bo‘yicha qulay qidiruv.", 
      en: "Convenient search by ratings, prices, and location." 
    },
    icon: Three
  },
  {
    id: "4",
    title: { 
      ru: "Редактирование профиля", 
      uz: "Profilni tahrirlash", 
      en: "Profile editing" 
    },
    description: { 
      ru: "Пишите и публикуйте статьи для расширения вашей аудитории и привлечения новых пациентов.", 
      uz: "Auditoriyangizni kengaytirish va yangi bemorlarni jalb qilish uchun maqolalar yozing va e’lon qiling.", 
      en: "Write and publish articles to expand your audience and attract new patients." 
    },
    icon: four
  },
  {
    id: "5",
    title: { 
      ru: "Редактирование профиля", 
      uz: "Profilni tahrirlash", 
      en: "Profile editing" 
    },
    description: { 
      ru: "Поддержка ссылок на Instagram, Telegram, YouTube и Facebook.", 
      uz: "Instagram, Telegram, YouTube va Facebook uchun havolalarni qo‘llab-quvvatlash.", 
      en: "Support for links to Instagram, Telegram, YouTube, and Facebook." 
    },
    icon: Five
  }
];




const KeyService: FC = () => {
  type Locale = 'ru' | 'uz' | 'en'

  const locale = useLocale() as Locale


  return (
    <div className='mt-[80px] mdl:mt-[120px] 2xl:mt-[150px]'>
      <h5 className='text-titleDark text-[24px] leading-[33px] slg:text-[32px] 3xl:text-[40px] slg:leading-[44.8px] 3xl:leading-[56px] font-medium  mb-[20px] slg:mb-[40px]'>
        {locale === 'ru'
          ? "Ключевые особенности:"
          : locale === 'uz'
            ? "Asosiy xususiyatlari:"
            : "Key Features:"}


      </h5>

      <div className='grid grid-cols-1 gap-[20px] slg:grid-cols-2 2xl:grid-cols-3 slg:gap-[40px] rounded-[20px] bg-white px-[20px] py-[40px] slg:px-[44px] 2xl:gap-[90px]'>
        {Data.map((item) => (
          <div key={item.id} className='flex flex-col gap-[16px] '>
            <div className='w-[32px] h-[32px]'>
              <Image src={item.icon.src} alt="Image One" width={32} height={32} quality={100} className='w-full h-full object-cover' />
            </div>
            <p className='text-[#050B2B] font-medium text-[18px] slg:text-[20px]'>
              {item.title[locale]}
            </p>
            <p className='text-[#050B2B] opacity-[60%] text-[15px] leading-[21px] slg:text-[18px]'>
              {item.description[locale]}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default KeyService
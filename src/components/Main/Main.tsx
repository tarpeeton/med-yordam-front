"use client"
import { FC } from 'react';
import LogoDefault from '../../public/menu/Logo.svg'
import Image from 'next/image';
import { useLocale } from 'next-intl';
import Banner from './Banner';

import Timer from './Timer';
import About from './About';
import FormAction from './FormAction';
import KeyService from './KeyService';
import WhyChoise from './Choise';
import HowWeWork from './HowWork';
import Map from './Map';
import Form from './Form';




const Main: FC = () => {
  const locale = useLocale()


  return (
    <div className='px-[16px] slg:px-[20px] 2xl:px-[100px]'>
      <div className='h-[79px] px-[20px] mdl:flex items-center justify-between flex-row flex-nowrap hidden'>
        <div>
          <img src={LogoDefault.src} alt="" width={300} height={90} className='w-full h-full object-cover' />
        </div>
        <div className='flex flex-row gap-[8px] mdl:w-[50%] slg:w-[40%]'>
          <button className='bg-white py-[17px] w-[50%] rounded-tl-[20px] rounded-bl-[20px] flex items-center justify-center text-[16px] '>
            {locale === 'ru' ? " О проекте" : locale === 'uz' ? 'Loyiha haqida' : locale === 'en' ? 'About the project' : "About the project"}
          </button>
          <button className='bg-white py-[17px] w-[50%] rounded-tr-[20px] rounded-br-[20px] flex items-center justify-center text-[16px] text-[#0129E3]'>
            {locale === 'ru' ? "Регистрация" : locale === 'uz' ? 'Ro\'yhatdan o\'tish' : 'Register'}
          </button>
        </div>
      </div>

      <Banner />
      <Timer />
      <About />
      <FormAction />
      <KeyService />
      <WhyChoise />
      <HowWeWork />
      <Map />
      <Form />
    </div>
  );
};

export default Main;
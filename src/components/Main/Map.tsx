"use client";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
// IMAGES
import One from "@/public/Map/One.svg";
import Two from "@/public/Map/Two.svg";
import Three from "@/public/Map/Three.svg";
import Four from "@/public/Map/Four.svg";
import Five from "@/public/Map/Five.svg";
import Six from "@/public/Map/Six.svg";

// Data for icons and text
const Data = [
  { 
    id: "1", 
    title: { 
      ru: "Опыт", 
      uz: "Tajriba", 
      en: "Experience" 
    }, 
    icon: One 
  },
  { 
    id: "2", 
    title: { 
      ru: "Отзывы", 
      uz: "Fikrlar", 
      en: "Reviews" 
    }, 
    icon: Two 
  },
  { 
    id: "3", 
    title: { 
      ru: "Запись", 
      uz: "Yozilish", 
      en: "Appointment" 
    }, 
    icon: Three 
  },
  { 
    id: "4", 
    title: { 
      ru: "Звонок", 
      uz: "Qo‘ng‘iroq", 
      en: "Call" 
    }, 
    icon: Four 
  },
  { 
    id: "5", 
    title: { 
      ru: "Местоположение", 
      uz: "Joylashuv", 
      en: "Location" 
    }, 
    icon: Five 
  },
  { 
    id: "6", 
    title: { 
      ru: "Адрес приёма", 
      uz: "Qabul manzili", 
      en: "Reception address" 
    }, 
    icon: Six 
  }
];


// Clinic locations
const clinicsLocations: { id: number; name: string; address: string; coords: [number, number] }[] = [
  { id: 1, name: "Семейная поликлиника № 14", address: "г. Ташкент Алмазарская СП-14", coords: [41.329423, 69.23438] },
  { id: 2, name: "Семейная поликлиника № 15", address: "г. Ташкент Алмазарская СП-15", coords: [41.330729, 69.197235] },
  { id: 3, name: "Семейная поликлиника № 16", address: "г. Ташкент Алмазарская СП-16", coords: [41.362064, 69.182376] },
];

const Map: FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const locale = useLocale() as "ru" | "uz" | "en";

  useEffect(() => {
    const loadYandexMap = () => {
      if (window.ymaps) {
        initializeMap();
        return;
      }

      const script = document.createElement("script");
      script.src = `https://api-maps.yandex.ru/2.1/?apikey=ВАШ_API_КЛЮЧ&lang=ru_RU`;
      script.async = true;
      script.onload = () => window.ymaps.ready(initializeMap);
      document.body.appendChild(script);
    };

    const initializeMap = () => {
      const map = new window.ymaps.Map("map", {
        center: clinicsLocations[0].coords,
        zoom: 15,
        controls: [],
      });

      clinicsLocations.forEach((clinic) => {
        const placemark = new window.ymaps.Placemark(
          clinic.coords,
          { hintContent: clinic.name, balloonContent: clinic.address },
          { iconColor: "#1960EB" }
        );
        map.geoObjects.add(placemark);
      });

      setMapLoaded(true);
    };

    if (!mapLoaded) loadYandexMap();
  }, [mapLoaded]);

  return (
    <section className='mt-[80px] mdl:mt-[120px] 3xl:mt-[150px] bg-white rounded-[20px] p-[20px] slg:py-[40px] slg:px-[20px] 2xl:p-0'>
      <div className='flex flex-col 2xl:flex-row 2xl:justify-center 2xl:items-center'>
        <div className='2xl:w-[50%] 2xl:px-[60px]'>
          <h6 className='text-titleDark text-[24px] leading-[33px] slg:text-[32px] 3xl:text-[40px] slg:leading-[44.8px] 3xl:leading-[56px] font-medium  mb-[20px] slg:mb-[40px] '>
            {locale === 'ru'
              ? "Как пациенты будут находить вас?"
              : locale === 'uz'
                ? "Bemorlar sizni qanday topadilar?"
                : "How will patients find you?"}

          </h6>
          <p className='leading-[17.9px] slg:leading-[19px] text-[15px] slg:text-[16px]  text-[#050B2B]'>
            {locale === 'ru'
              ? " Пациенты смогут использовать наш сервис для поиска врачей через фильтрыпо опыту, отзывам и местоположению, а также связываться с врачами через карты,записи на прием и звонки"
              : locale === 'uz'
                ? "Bemorlar filtrlar orqali shifokorlarni topish uchun bizning xizmatimizdan foydalanishlari mumkintajriba, sharhlar va joylashuv va xaritalar orqali shifokorlar bilan bog'lanish,uchrashuvlar va qo'ng'iroqlar"
                : "Patients will be able to use our service to search for doctors through filters based on experience, reviews and location, as well as contact doctors through maps,appointments and calls"}

          </p>
          <div className='grid grid-cols-1 gap-[20px] mt-[20px] slg:mt-[40px] 2xl:mt-[59px] slg:grid-cols-2'>
            {Data.map((item) => (
              <div key={item.id} className='flex flex-row gap-[16px] '>
                <div className='min-w-[40px] min-h-[40px]'>
                  <Image src={item.icon.src} alt="Image One" width={40} height={40} quality={100} className='w-full h-full object-cover' />
                </div>
                <p className='text-[20px] slg:text-[24px]'>
                  {item.title[locale]}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[250px] overflow-hidden slg:h-[600px] 2xl:w-[50%] 2xl:h-[556px] w-full  mt-[25px] slg:mt-[45px] 2xl:mt-0">
          <div id="map" className="w-full h-full" />
        </div>
      </div>





    </section>
  );
};

export default Map;

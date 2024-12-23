"use client";
import { FC, useState, useEffect } from 'react';


import { IoIosArrowDown } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { useProInfoStore } from '@/store/useProInfoStore';
import { IoGlobeOutline } from "react-icons/io5";
import { GoPencil } from "react-icons/go";
import { MdOutlineDateRange } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";



interface ILinksProps {

  selectedInputLang: "ru" | "uz" | "en";

}





const DashboardProInfo: FC<ILinksProps> = ({ selectedInputLang }) => {

  const {

    specialties,

    languages,

    achievements,

    educations,

    toggleSpecialty,

    toggleLanguage,

    addAchievement,

    updateAchievementField,

    updateEducationField,

    save,

    addEducation,

    addWorkExperience,

    updateWorkExperienceField,

    workExperiences,

    removePositionFromWorkExperience,

    removeEducation,

    removeAchievement,

    removeWorkExperience,

    addPositionToWorkExperience,

    updatePositionInWorkExperience

  } = useProInfoStore();



  // --- Локальные стейты для дропдаунов ---

  const [openSpecialization, setOpenSpecialization] = useState(false);

  const [openLanguage, setOpenLanguage] = useState(false);







  // Подсчёт выбранных специальностей / языков

  const selectedCount = specialties.filter(s => s.selected).length;

  const selectedLanguages = languages.filter(l => l.selected).length;



  // Функция для создания нового достижения:

  const handleAddAchievement = () => {

    addAchievement();

  };





  return (

    <div className='mt-[25px] 2xl:mt-[37px]'>

      <div className='flex flex-col 2xl:flex-row 2xl:gap-[2%] 2xl:flex-wrap'>







        {/* inputs */}

        <div className='flex flex-col mt-[20px] 2xl:mt-0 rounded-[18px] gap-[15px] 2xl:gap-[60px] p-[15px] 2xl:py-[37px] 2xl:px-[25px] bg-white w-full'>



          <div className='flex flex-col gap-[12px] 2xl:flex-row 2xl:gap-[1%]'>

            <div className='relative flex flex-col 2xl:w-[49%]'>

              <button

                type='button'

                onClick={() => setOpenSpecialization((prev) => !prev)}

                className='w-full text-left text-[#747474] rounded-[12px] focus:outline-none focus:ring-1 focus:ring-ring py-[18px] px-[15px] bg-[#F8F8F8] flex items-center justify-between'

              >

                <div className="flex items-center pl-[25px] 2xl:pl-[25px]">

                  <GoPencil className="absolute text-[#747474] left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                  {selectedInputLang === 'ru' ? 'Специальность' : selectedInputLang === 'uz' ? 'Muttaxasislik' : 'Speciality'}

                  {selectedCount > 0 ? `(${selectedCount})` : ''}

                </div>



                <IoIosArrowDown className={`w-4 h-4 ml-2 transition-transform ${openSpecialization ? 'rotate-180' : ''}`} />

              </button>

              {openSpecialization && (

                <div onMouseLeave={() => setOpenSpecialization(false)} className='w-full absolute z-[222] top-[70px] 2xl:top-[80px] bg-white  p-[10px] rounded-[12px] shadow-xl '>

                  {specialties.map((item, index) => (

                    <button onClick={() => toggleSpecialty(item.id)} key={index} className='flex rounded-[12px] hover:bg-[#F8F8F8]  w-full flex-row items-center  text-[15px] 2xl:text-[16px] text-[#747474] flex-nowrap justify-between py-[20px] px-[24px]'>

                      {item.name[selectedInputLang]}

                      {item.selected && <FaCheck className="h-4 w-4" />}

                    </button>

                  ))}



                </div>

              )}



            </div>

            <div className='relative flex flex-col 2xl:w-[49%]'>

              <button

                type='button'

                onClick={() => setOpenLanguage((prev) => !prev)}

                className='w-full text-left text-[#747474] rounded-[12px] focus:outline-none focus:ring-1 focus:ring-ring py-[18px] px-[15px] bg-[#F8F8F8] flex items-center justify-between'

              >

                <div className="flex items-center pl-[25px] 2xl:pl-[25px]">

                  <IoGlobeOutline className="absolute text-[#747474] left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                  {selectedInputLang === 'ru' ? 'Языки    ' : selectedInputLang === 'uz' ? 'Til ' : 'Languages'}

                  {selectedLanguages > 0 ? `(${selectedLanguages})` : ''}

                </div>



                <IoIosArrowDown className={`w-4 h-4 ml-2 transition-transform ${openLanguage ? 'rotate-180' : ''}`} />

              </button>

              {openLanguage && (

                <div onMouseLeave={() => setOpenLanguage(false)} className='w-full absolute z-[100] top-[80px] bg-white p-[10px] rounded-[12px] shadow-xl '>

                  {languages.map((item, index) => (

                    <button onClick={() => toggleLanguage(item.id)} key={index} className='flex rounded-[12px] hover:bg-[#F8F8F8]  w-full flex-row items-center  text-[15px] 2xl:text-[16px] text-[#747474] flex-nowrap justify-between py-[20px] px-[24px]'>

                      {item.name[selectedInputLang]}

                      {item.selected && <FaCheck className="h-4 w-4" />}

                    </button>

                  ))}



                </div>

              )}



            </div>





          </div>

          {/* DOSTIJENYA */}

          <div className='flex flex-col '>

            <div className='relative '>

              <h1 className='text-[#000000] text-[17px] 2xl:text-[20px] font-medium '>Достижения</h1>

              <div className='mt-[15px] grid grid-cols-1 2xl:grid-cols-2 gap-[15px]'>

                {achievements.map((achievement) => (

                  <div key={achievement.id} className="relative w-full">

                    <input

                      value={achievement.name[selectedInputLang]}

                      onChange={(e) =>

                        updateAchievementField(

                          achievement.id,

                          selectedInputLang, // Язык (ru, uz, en)

                          e.target.value // Новое значение

                        )

                      }

                      placeholder={

                        selectedInputLang === 'ru'

                          ? 'Достижение'

                          : selectedInputLang === 'uz'

                            ? 'Yutug`'

                            : ''

                      }

                      className="w-full text-[#747474] rounded-[12px] focus:outline-none focus:ring-1 focus:ring-ring py-[18px] pl-[40px] px-[15px] bg-[#F8F8F8]"

                    />

                    <GoPencil className="absolute text-[#747474] left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                  </div>

                ))}



              </div>

              <button onClick={handleAddAchievement} className='mt-[15px]  w-full 2xl:w-[220px]  rounded-[12px] border border-[#0129E3] text-[15px] 2xl:text-[16px] text-[#0129E3] font-medium h-[50px]'>

                Добавить

              </button>



            </div>







          </div>

          {/* Образование */}



          <div className='flex flex-col '>

            <div className='relative '>

              <h1 className='text-[#000000] text-[17px] 2xl:text-[20px] font-medium '>Образование</h1>

              <div className='mt-[15px] w-full  flex flex-col gap-[12px] 2xl:gap-[15px]'>

                {educations.map((education) => (

                  <div key={education.id} className='grid grid-cols-1 2xl:grid-cols-2 gap-[12px] 2xl:gap-[15px] w-full' >

                    {/* Education Name */}

                    <div className="relative">

                      <input

                        value={education.name[selectedInputLang]}

                        onChange={(e) =>

                          updateEducationField(

                            education.id,

                            "name",

                            selectedInputLang,

                            e.target.value

                          )

                        }

                        placeholder={

                          selectedInputLang === "ru"

                            ? "Название образования"

                            : selectedInputLang === "uz"

                              ? "Ta'lim nomi"

                              : "Education Name"

                        }

                        className="w-full text-[#747474] rounded-[12px] focus:outline-none focus:ring-1 focus:ring-ring py-[18px] pl-[40px] px-[15px] bg-[#F8F8F8]"

                      />

                      <GoPencil className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />

                    </div>



                    {/* Education Direction */}

                    <div className="relative">

                      <input

                        value={education.direction[selectedInputLang]}

                        onChange={(e) =>

                          updateEducationField(

                            education.id,

                            "direction",

                            selectedInputLang,

                            e.target.value

                          )

                        }

                        placeholder={

                          selectedInputLang === "ru"

                            ? "Направление"

                            : selectedInputLang === "uz"

                              ? "Yo'nalish"

                              : "Direction"

                        }

                        className="w-full text-[#747474] rounded-[12px] focus:outline-none focus:ring-1 focus:ring-ring py-[18px] pl-[40px] px-[15px] bg-[#F8F8F8]"

                      />

                      <GoPencil className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />

                    </div>

                    <div className="relative">

                      {/* Start Year */}

                      <input

                        type="text"

                        value={education.startYear}

                        onChange={(e) =>

                          updateEducationField(

                            education.id,

                            "startYear",

                            null,

                            e.target.value

                          )

                        }

                        placeholder="Год начала"

                        className="w-full text-[#747474] rounded-[12px] focus:outline-none focus:ring-1 focus:ring-ring py-[18px] pl-[40px] px-[15px] bg-[#F8F8F8]"

                      />

                      <GoPencil className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />

                    </div>

                    <div className="relative">

                      {/* End Year */}

                      <input

                        type="text"

                        value={education.endYear}

                        onChange={(e) =>

                          updateEducationField(

                            education.id,

                            "endYear",

                            null,

                            e.target.value

                          )

                        }

                        placeholder="Год окончания"

                        className="w-full text-[#747474] rounded-[12px] focus:outline-none focus:ring-1 focus:ring-ring py-[18px] pl-[40px] px-[15px] bg-[#F8F8F8]"

                      />

                      <GoPencil className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />

                    </div>













                  </div>

                ))}



              </div>

              <button onClick={addEducation} className='mt-[15px]  w-full 2xl:w-[220px]  rounded-[12px] border border-[#0129E3] text-[15px] 2xl:text-[16px] text-[#0129E3] font-medium h-[50px]'>

                Добавить

              </button>



            </div>







          </div>

          {/* WORK */}

          {/* Work Experience Section */}

          <div className="flex flex-col">

            <h1 className='text-[#000000] text-[17px] 2xl:text-[20px] font-medium'>Опыт работы</h1>

            <div className='mt-[15px] flex flex-col gap-[15px]'>

              {workExperiences.map((experience) => (

                <div key={experience.id} className='  rounded-[12px]'>

                  <div className='grid grid-cols-1 2xl:grid-cols-4 gap-[12px]'>

                    <div className='relative'>

                      <input

                        type="text"

                        value={experience.name[selectedInputLang]}

                        onChange={(e) =>

                          updateWorkExperienceField(

                            experience.id,

                            "name", // Поле для обновления

                            selectedInputLang, // Язык (например, 'ru', 'uz', 'en')

                            e.target.value // Новое значение

                          )

                        }

                        placeholder={

                          selectedInputLang === 'ru' ? 'Название клиники' :

                            selectedInputLang === 'uz' ? 'Klinika nomi' :

                              'Clinic Name'

                        }

                        className="AdminInput"

                      />

                      <GoPencil className="absolute text-[#747474] left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />



                    </div>





                    <div className='relative'>

                      <input

                        type="text"

                        value={experience.city[selectedInputLang]}

                        onChange={(e) =>

                          updateWorkExperienceField(

                            experience.id,

                            "city", // Поле для обновления

                            selectedInputLang, // Язык (например, 'ru', 'uz', 'en')

                            e.target.value // Новое значение

                          )

                        }

                        placeholder={

                          selectedInputLang === 'ru' ? 'Город' :

                            selectedInputLang === 'uz' ? 'Shahar' :

                              'City'

                        }

                        className="AdminInput"

                      />

                      <GoPencil className="absolute text-[#747474] left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />



                    </div>



                    <div className='relative'>

                      <input

                        type="text"

                        value={experience.fromYear}

                        onChange={(e) =>

                          updateWorkExperienceField(

                            experience.id,

                            "fromYear", // Поле для обновления

                            null, // Язык (например, 'ru', 'uz', 'en')

                            e.target.value // Новое значение

                          )

                        }

                        placeholder="Год начала"

                        className="AdminInput"

                      />

                      <MdOutlineDateRange className="absolute text-[#747474] left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />



                    </div>



                    <div className='relative'>

                      <MdOutlineDateRange className="absolute text-[#747474] left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                      <input

                        type="text"

                        value={experience.toYear}

                        onChange={(e) =>

                          updateWorkExperienceField(

                            experience.id,

                            "toYear", // Поле для обновления

                            null, // Язык (например, 'ru', 'uz', 'en')

                            e.target.value // Новое значение

                          )

                        }

                        placeholder="Год окончания"

                        className="AdminInput"

                      />

                    </div>



                  </div>

                  <div className='rounded-[12px] bg-[#F8F8F8] flex flex-col 2xl:flex-row items-center justify-between w-full mt-[15px] 2xl:mt-[12px] p-[7px] 2xl:p-[14px]'>

                    <div className='grid grid-cols-2 2xl:grid-cols-6 gap-[10px]'>

                      {experience.positions.map((item, index) => (

                        <div

                          key={index}

                          className='relative flex items-center bg-[#0129E3] rounded-[8px] text-white px-[15px] py-[8px]'>

                          <input

                            value={item[selectedInputLang]}

                            onChange={(e) => {

                              updatePositionInWorkExperience(experience.id, index, selectedInputLang, e.target.value);

                            }}

                            className="bg-transparent text-white focus:outline-none w-full"

                          />

                          <button

                            onClick={() => removePositionFromWorkExperience(experience.id, index)}

                            className="ml-[5px] text-white">

                            <IoClose />

                          </button>

                        </div>

                      ))}

                    </div>

                    <button className='text-[#0129E3] mt-[25px] 2xl:mt-0 w-[20px] h-[20px]'>

                      <FaPlus onClick={() => addPositionToWorkExperience(experience.id)} className='w-full h-full' />

                    </button>

                  </div>















                </div>

              ))}



              <button onClick={addWorkExperience} className='mt-[15px]  w-full 2xl:w-[220px]  rounded-[12px] border border-[#0129E3] text-[15px] 2xl:text-[16px] text-[#0129E3] font-medium h-[50px]'>

                Добавить

              </button>

            </div>

          </div>











        </div>

        {/* BUTTON SAVE */}

        <div className='2xl:order-[3] mt-[25px] w-full 2xl:w-[100%] flex items-center 2xl:justify-end'>

          <button onClick={save} className='bg-[#0129E3] 2xl:w-[235px] py-[20px] w-full rounded-[12px] font-medium text-center text-white'>

            {selectedInputLang === 'ru' ? 'Сохранить' : selectedInputLang === 'uz' ? 'Saqlash' : 'Save'}

          </button>

        </div>

      </div>



    </div>

  )

}



export default DashboardProInfo


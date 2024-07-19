import Anime from "@/components/Icons/Anime";
import Blender from "@/components/Icons/Blender";
import Img from "@/components/Icons/Img";
import MediaList from "@/components/MediaList";

const services = [
  {
    title: "Рендер",
    text: "Создания потрясающих фотореалистических рендеров окружения",
    icon: <Img />,
  },
  {
    title: "3D моделирование",
    text: "Создание 3D моделей под разный стиль с любой сложностью",
    icon: <Blender />,
  },
  {
    title: "Анимирование",
    text: "Создания 3D аниимаций на основе модели",
    icon: <Anime />,
  },
]

export default function Home() {
  return (
    <main>
      <section className='relative w-full h-screen mx-auto bg-[url(/bg-head.png)] bg-cover bg-no-repeat bg-center'>
        <div className='paddingX absolute inset-0 max-w-[1380px] mx-auto flex items-center gap-16'>

          <div className="flex flex-col justify-center items-center">
            <div className="w-5 h-5 rounded-full bg-primary" />
            <div className="w-1 sm:h-[446px] h-60 primary-gradient" />
          </div>

          <div className="flex flex-col gap-10">
            <h1 className='heroHeadText text-white'>
              Здрасте, Я<br />
              <span className='text-primary'>Богдан Романов</span>
            </h1>
            <p className='heroSubText max-w-[500px]'>
              Занимаюсь профессионально 3D моделированием<br />
              Могу создать, зарендерить, анимировать, подготовить к печати модель
            </p>
            <MediaList />
          </div>

        </div>
      </section>
      <section className='relative w-full h-full mx-auto'>
        <div className=' inset-0 max-w-[1380px] mx-auto flex justify-center flex-col gap-12'>
          <div className=" flex flex-col gap-4">
            <h2 className="">Услугу</h2>
            <svg width={65} height={15} viewBox="0 0 65 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 2H65M0 13H41.2838" stroke="#E52E20" strokeWidth={3} />
            </svg>
          </div>
          <div className="flex flex-row gap-[54px]">
            {services.map((item, index) => (
              <div key={index} className="bg-other flex flex-col items-center py-[32px] px-[46px] w-[40%] rounded-3xl">
                <div className="p-[14px] bg-bg  rounded-full mb-[12px]">
                  {item.icon}
                </div>
                <h3 className="mb-[30px]">
                  {item.title}
                </h3>
                <div className="text-center opacity-75 text-[20px] h-full flex justify-center items-center">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

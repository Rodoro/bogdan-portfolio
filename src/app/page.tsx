import MediaList from "@/components/MediaList";

export default function Home() {
  return (
    <main>
      <section className='w-full h-screen mx-auto bg-[url(/bg-head.png)] bg-cover bg-no-repeat bg-center'>
        <div className='paddingX absolute inset-0 max-w-7xl mx-auto flex items-center gap-16'>

          <div className="flex flex-col justify-center items-center">
            <div className="w-5 h-5 rounded-full bg-primary" />
            <div className="w-1 sm:h-[446px] h-60 primary-gradient" />
          </div>

          <div className="flex flex-col gap-10">
            <h1 className='heroHeadText text-white'>
              Здрасте, Я<br />
              <span className='text-primary'>Богдан Романов</span>
            </h1>
            <p className='heroSubText'>
              Занимаюсь профессионально 3D моделированием<br />
              Могу создать, зарендерить, анимировать, подготовить к печати модель
            </p>
            <MediaList />
          </div>

        </div>
      </section>
      <section className='w-full h-screen mx-auto'>
        <div>
          
        </div>
      </section>
    </main>
  );
}

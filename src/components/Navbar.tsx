import Link from "next/link";
import Logo from "./Logo";

const LINKS = [
    {
        path: '/#about',
        text: 'Обо мне'
    },
    {
        path: '/#about',
        text: 'Услуги'
    },
    {
        path: '/#about',
        text: 'Работы'
    },
    {
        path: '/#about',
        text: 'Связатся'
    },
];

const Navbar = () => {
  return (
    <nav className="fixed z-40 bg-[#353535]/[.40] h-[96px] w-full max-w-[1301px] mt-9 right-0 left-0 m-auto rounded-3xl flex justify-between items-center px-[53px]" style={{boxShadow: '0 4px 10px 6px rgba(0, 0, 0, 0.25)', backdropFilter: 'blur(16px)'}}>
        <Link href={"/"}>
            <Logo />
        </Link>
        <div className="gap-14 flex">
            {/* TODO: Сделать выделение пункта */}
            {LINKS.map((item, index) => (
                <Link key={index} href={item.path} className="font-cabin font-bold text-xl">
                    {item.text}
                </Link>
            ))}
        </div>
    </nav>
  )
}

export default Navbar

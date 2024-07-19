import Link from "next/link"
import Vk from "./Icons/Vk"
import WhatsApp from "./Icons/WhatsApp"
import Discord from "./Icons/Discord"
import Tg from "./Icons/Tg"

const items = [
    {
        url: '/',
        icon: <Vk />,
        color: '#2667BB',
    },
    {
        url: '/',
        icon: <WhatsApp />,
        color: '#1FA552',
    },
    {
        url: '/',
        icon: <Discord />,
        color: '#7128C9',
    },
    {
        url: '/',
        icon: <Tg />,
        color: '#2667BB',
    },
]

const MediaList = () => {
    return (
        <div className="flex justify-start items-center gap-9">
            {items.map((item, index) => (
                <Link className="p-[10px] rounded-xl" key={index} style={{ background: item.color }} href={item.url}>
                    {item.icon}
                </Link>
            ))}
        </div>
    )
}

export default MediaList

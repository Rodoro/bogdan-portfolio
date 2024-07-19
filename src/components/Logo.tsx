import Image from "next/image";

const Logo = () => {
  return (
    <Image src={'/logo.png'} alt={"logo"} width={'161'} height={'200'}/>
  )
}

export default Logo

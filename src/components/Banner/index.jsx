import { useLocation } from 'react-router-dom'

import { getBanner } from '@utils/getImage'

const Banner  = () =>{
  const {pathname} = useLocation()
  const {mobile, tablet, desktop} = getBanner(pathname)
 
  return(
    <div className=" h-[240px] lg:h-[347px] shadow-lg text-white flex mb-10 lg:mb-12 ">
      <img src={mobile} alt="Imagem do banner" className=' h-full w-full md:hidden' />
      <img src={tablet} alt="Imagem do banner" className=' h-full w-full hidden md:block lg:hidden' />
      <img src={desktop} alt="Imagem do banner" className=' h-full w-full hidden lg:block' />
    </div>
  )
}

export default Banner
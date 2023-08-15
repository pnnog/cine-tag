import { useLocation, useParams } from 'react-router-dom'

import homeBannerMobile from '@assets/mobile/home-banner.png'
import homeBannerTablet from '@assets/tablet/home-banner.png'
import homeBannerDesktop from '@assets/desktop/home-banner.png'


import favBannerMobile from '@assets/mobile/fav-banner.png'
import favBannerTablet from '@assets/tablet/fav-banner.png'
import favBannerDesktop from '@assets/desktop/fav-banner.png'


import playerBannerMobile from '@assets/mobile/player-banner.png'
import playerBannerTablet from '@assets/tablet/player-banner.png'
import playerBannerDesktop from '@assets/desktop/player-banner.png'




const banners = [
  {
    page:'/',
    pics:{
      mobile: homeBannerMobile,
      tablet: homeBannerTablet,
      desktop: homeBannerDesktop
    },
  },

  { 
    page:'/favoritos',
    pics: {
      mobile: favBannerMobile,
      tablet: favBannerTablet,
      desktop: favBannerDesktop
    },
  },

  { 
    page:'/player',
    pics: {
      mobile: playerBannerMobile,
      tablet: playerBannerTablet,
      desktop: playerBannerDesktop
    },
  }
]

const findPageBanner = (page) =>{

  try{
    return banners.find(obj => obj.page===page).pics
  }

  catch{
    console.error(` "${page}" banner pictures not found. Check the object "banners" and URL pathname`)
    return {mobile:'', tablet:'', desktop:''}
  }

 
}


const Banner  = () =>{
  const {pathname} = useLocation()
  const clearPathname = pathname.split('/',2).join('/')
 
  const {mobile, tablet, desktop} = findPageBanner(clearPathname)

  
  return(
    <div className=" h-[240px] lg:h-[347px] shadow-lg text-white flex mb-10 lg:mb-12 ">
      <img src={mobile} alt="Imagem do banner" className=' h-full w-full md:hidden' />
      <img src={tablet} alt="Imagem do banner" className=' h-full w-full hidden md:block lg:hidden' />
      <img src={desktop} alt="Imagem do banner" className=' h-full w-full hidden lg:block' />
    </div>
  )
}

export default Banner
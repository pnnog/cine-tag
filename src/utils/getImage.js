import aorigem from '@assets/cards/aorigem.png'
import batman from '@assets/cards/batman.png'
import clubedaluta from '@assets/cards/clubedaluta.png'
import interstelar from '@assets/cards/interstelar.png'
import joker from '@assets/cards/joker.png'
import ograndetruque from '@assets/cards/ograndetruque.png'
import oppenheimer from '@assets/cards/oppenheimer.png'
import seven from '@assets/cards/seven.png'

import homeBannerMobile from '@assets/mobile/home-banner.png'
import homeBannerTablet from '@assets/tablet/home-banner.png'
import homeBannerDesktop from '@assets/desktop/home-banner.png'


import favBannerMobile from '@assets/mobile/fav-banner.png'
import favBannerTablet from '@assets/tablet/fav-banner.png'
import favBannerDesktop from '@assets/desktop/fav-banner.png'


import playerBannerMobile from '@assets/mobile/player-banner.png'
import playerBannerTablet from '@assets/tablet/player-banner.png'
import playerBannerDesktop from '@assets/desktop/player-banner.png'


const cardImages = [
  {
    name:'a origem',
    url:aorigem,
    alt:'Capa do filme A origem'
  },

  {
    name:'batman',
    url:batman,
    alt:'Capa do filme Batman - Cavaleiro das Trevas'
  },


  {
    name:'clube da luta',
    url:clubedaluta,
    alt:'Capa do filme Clube da Luta'
  },

  {
    name:'interstelar',
    url:interstelar,
    alt:'Capa do filme Interstelar'
  },

  {
    name:'o grande truque',
    url:ograndetruque,
    alt:'Capa do filme O grande truque'
  },

  {
    name:'joker',
    url:joker,
    alt:'Capa do filme Joker'
  },

  {
    name:'oppenheimer',
    url:oppenheimer,
    alt:'Capa do filme Oppenheimer'
  },

  {
    name:'seven',
    url:seven,
    alt:'Capa do filme Seven - Os sete pecados capitais'
  },
]


const banners = [
  {
    path:'/',
    pics:{
      mobile: homeBannerMobile,
      tablet: homeBannerTablet,
      desktop: homeBannerDesktop
    },
  },

  { 
    path:'/favoritos',
    pics: {
      mobile: favBannerMobile,
      tablet: favBannerTablet,
      desktop: favBannerDesktop
    },
  },

  { 
    path:'/player',
    pics: {
      mobile: playerBannerMobile,
      tablet: playerBannerTablet,
      desktop: playerBannerDesktop
    },
  }
]


export const getCardImage = (name) =>{

  try {
    const imageObj = cardImages.find(cardImage => cardImage.name == name)
    return imageObj
  }

  catch {
    console.error(`Card Image "${imgName}" not found`)
    return ''
  }
  
}

export const getBanner = (pathname)=>{
  const path = pathname.split('/',2).join('/')
  
  const banner = banners.find(banner => banner.path === path)
  return banner.pics 
}

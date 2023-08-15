
import useCardsContext from 'hooks/useCardsContext'

import FavIcon from './FavIcon'

import android from '@assets/cards/android.png'
import component from '@assets/cards/component.png'
import js from '@assets/cards/js.png'
import dart from '@assets/cards/dart.png'
import { Link } from 'react-router-dom'

const cardImages = [
  {android},
  {component},
  {js},
  {dart},
]

const findPic = (imgName) =>{

  try {
    const imageObj = cardImages.find(cardImage => cardImage[imgName])
    const image = imageObj[imgName]
    return image
  }

  catch{
    console.error(`Card Image "${imgName}" not found`)
    return ''
  }
  
}


const Card = ({id, img, title, fav}) =>{
  
  const {toggleFav} = useCardsContext()
  const image = findPic(img)

  return(
    <li className='w-full max-w-[350px] mx-auto flex flex-col shadow-lg'>
      <Link to={`/player/${id}`} className='h-[460px] w-full bg-gray-700'>
        <img src={image} alt="imagem" className='w-full h-full' />   
      </Link>

      <div className='bg-gray-300 px-6 py-4 flex-1 flex flex-col justify-between gap-4'>
        <h3 className='font-bold text-lg'>{title}</h3> 
        <FavIcon isFav = {fav} onClick={()=> toggleFav(id)}/>
      </div>
    </li>
  )
}

export default Card
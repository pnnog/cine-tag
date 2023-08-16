import { Link } from 'react-router-dom'

import useCardsContext from 'hooks/useCardsContext'
import { getCardImage } from '@utils/getImage'

import FavIcon from './FavIcon'

const Card = ({card}) =>{
  const {toggleFav,verifyIfIsFav} = useCardsContext()
  
  const {url, alt} = getCardImage(card.img)

  return(
    <li className='w-full max-w-[300px] mx-auto flex flex-col shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105 '>
      <Link to={`/player/${card.id}`} className='h-[350px] w-full bg-gray-700'>
        <img src={url} alt={alt} className='w-full h-full' />   
      </Link>

      <div className='bg-yellow-500 px-6 py-4 flex-1 flex flex-col justify-between gap-4'>
        <h3 className='font-bold text-lg'>{card.title}</h3> 
        <FavIcon isFav = {verifyIfIsFav(card)} onClick={()=> toggleFav(card)}/>
      </div>
    </li>
  )
}

export default Card
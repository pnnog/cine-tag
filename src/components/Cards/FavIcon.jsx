
import {AiOutlineHeart as NotIsFavIcon, AiFillHeart as IsFavIcon} from 'react-icons/ai' 


export const FavIcon  = ({isFav, onClick}) =>{

  return(
    <div  className='cursor-pointer' onClick={onClick}>
      {isFav? <IsFavIcon size={22} /> : <NotIsFavIcon size={22}/>}
    </div>
  )
}

export default FavIcon
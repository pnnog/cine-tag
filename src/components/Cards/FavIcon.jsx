
import {AiOutlineHeart as NotIsFavIcon, AiFillHeart as IsFavIcon} from 'react-icons/ai' 


export const FavIcon  = ({isFav, onClick}) =>{

  return(
    <div  className='cursor-pointer w-fit' onClick={onClick}>
      {isFav? <IsFavIcon size={22} /> : <NotIsFavIcon size={22}/>}
    </div>
  )
}

export default FavIcon
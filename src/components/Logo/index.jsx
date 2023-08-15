import { Link } from "react-router-dom"

const Logo  = () =>{
  return(
    <Link to='/' > 
      <svg width="170" height="48" viewBox="0 0 170 48" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect width="169.5" height="48" fill="url(#pattern0)"/>
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_46_56" transform="scale(0.00442478 0.015625)"/>
          </pattern>
          <image id="image0_46_56" width="226" height="64" xlinkHref="data:image/png;base64,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"/>
        </defs>
      </svg>
    </Link>


  )
}

export default Logo
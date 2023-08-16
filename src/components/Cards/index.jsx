import Card from './Card'

const Cards = ({cards}) =>{

  return(
      <ul className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
        {cards.map(card => 
          <Card 
            key={card.id}
            card={card}
          />)}
      </ul>
  )
}

export default Cards
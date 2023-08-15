import Section from '@components/Section'
import Card from './Cards'

const Cards = ({cards}) =>{

  return(
    <Section id='cards'>
      <ul className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
        {cards.map(card => 
          <Card 
            key={card.id}
            id={card.id}
            img={card.img} 
            title={card.title} 
            fav={card.fav} 
          />)}
      </ul>
    </Section>

  )
}

export default Cards
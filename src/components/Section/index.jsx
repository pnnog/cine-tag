const Section = ({id, children}) => {
  return(
    <section id={id} className="container mx-auto px-8">
      {children}
    </section>
  )
}

export default Section 
import Container from "@components/Container"
import { useNavigate } from "react-router-dom"

export const NotFound = () =>{
  const navigate = useNavigate()
  
  return(
    <Container>
      <div className="flex h-full flex-col items-center gap-6">
        <h1>Opa... algo deu errado</h1>
        <button className="rounded-md border-0 p-4 bg-gray-400" onClick={()=> navigate('/')}> Voltar </button>
      </div>
   </Container>
  )
}

export default NotFound
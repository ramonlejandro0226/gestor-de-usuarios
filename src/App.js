


import useFormulario from './hooks/useFormulario'
import Input from './components/Input'
import Card  from './components/Card'
import Container from './components/Container'
import './components/div.css'
import Button from './components/Button'
import { useState } from 'react'

function App() {
   const[usuarios,setUsuarios]=useState([])
  const [formulario, handleChange,reset] =useFormulario({name:' ',Lastname:'',email:''})
   const submit = e =>{
      e.preventDefault()
      setUsuarios([
         ...usuarios,
         formulario,
      ])

      reset()
      
   }

   



  console.log(formulario,usuarios)
  return (

   
   <div style={{marginTop:'15%'}}>
      <Container>
               <Card>
               <div className='div'>

                  <form onSubmit={submit}>
               <Input placeholder='nombre' label='name' name='name' value ={formulario.name} onChange={handleChange} />

               <Input placeholder='apellido' label='apellido' name='Lastname' value ={formulario.Lastname} onChange={handleChange}/>

               <Input placeholder='email' label='Correo' name='email' value ={formulario.email} onChange={handleChange}/>
               <Button>Enviar</Button>
                  </form>
               </div>
         
         </Card>
         <Card>
            <ul>
               {usuarios.map(x=>
               <li key={x.email}>{`${x.name} ${x.Lastname}: ${x.email}`}</li>)}
            </ul>
         </Card>
         </Container>

   </div>
      

   

   
 
     
 
    
  )
 }

  


export default App;

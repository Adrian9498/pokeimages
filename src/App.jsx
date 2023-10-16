
import Card from './componentes/Card'
import './App.css'

function App() {


  
  return (
    <div className="App">
      {
        (()=>{
          const tarjetas = [];

          for(let i= 0 ; i <= 1010; i++){
            tarjetas.push(<Card contenido={i}/>)
          }

          return tarjetas;
        })()
      }

      
    </div>
  )
}

export default App

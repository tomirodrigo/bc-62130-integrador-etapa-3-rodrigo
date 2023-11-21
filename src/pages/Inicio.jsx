import Card from '../components/Card'
import { useContext } from 'react'
import  './Inicio.scss' 
import ProductoContext from '../contexts/ProductoContext'

const Inicio = () => {
  const { productos } = useContext(ProductoContext)
    return(
        <>

  
  <main>
    <section className="section-cards">
      <header className="section-cards__header">
        <h1>Mipagina.com</h1>
        <p>Aprovecha las Ofertas!!!!</p>
      </header>
      <div className="cards-container">
        {
          productos && productos.map( (producto, idx) => (
            <Card key={idx} producto= {producto} />
          ))
        }

      </div>
  
    </section> 
  </main> 

        
  <script type="module" src="/main.js"></script>
</>
    )
}
export default Inicio
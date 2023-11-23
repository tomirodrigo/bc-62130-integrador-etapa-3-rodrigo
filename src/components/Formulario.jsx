import { useContext, useEffect, useState } from 'react'
import ProductoContext from '../contexts/ProductoContext'
import { useForm } from '../hooks/useForm'
import DragDrop from './DragDrop'

const formInicial = {
  id: null,
  nombre: '',
  precio: '',
  stock: '',
  marca: '',
  categoria: '',
  detalles: '',
  foto: '',
  envio: false,
}

const Formulario = ({ productoAEditar, setProductoAEditar}) => {
  // Estados del drag and drop
  const [foto, setFoto] = useState('')
  const [srcImagen, setSrcImagen] = useState('')

  const [form, setForm, handleChange] = useForm(formInicial)
  const { crearProductoContext, actualizarProductoContext } = useContext(ProductoContext)

  useEffect(() => {
    if ( productoAEditar ) {
      setSrcImagen(productoAEditar.foto)
      setForm(productoAEditar)
    } else {
      setForm(formInicial)
    }

    // productoAEditar ? setForm(productoAEditar) : setForm(formInicial)
  }, [productoAEditar, setProductoAEditar])


  const handleSubmit = async (e) => {
    e.preventDefault() // Detener el comportamiento del formulario
    try {
      if ( form.id === null ) {
        const productoNuevo = {...form, ...foto}
        await crearProductoContext(productoNuevo)
      } else {
        const productoEditado = {...form, ...foto}
        await actualizarProductoContext(productoEditado)
      }
      handleReset()
    } catch (error) {
      console.error('Ocurrió un error en el handleSubmit', error)  
    }
    
  }

  const handleReset = ()  => {
    setForm(formInicial)
    setProductoAEditar(null)
    setSrcImagen('')
  }


  return (
    <>
      <h3>{productoAEditar ? 'Editando' : 'Agregando'}</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="lbl-nombre">Nombre</label>
          <input type="text" name="nombre" id="lbl-nombre" value={form.nombre} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lbl-precio">Precio</label>
          <input type="text" name="precio" id="lbl-precio" value={form.precio} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lbl-stock">Stock</label>
          <input type="text" name="stock" id="lbl-stock" value={form.stock} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lbl-marca">Marca</label>
          <input type="text" name="marca" id="lbl-marca" value={form.marca} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lbl-categoria">Categoría</label>
          <input type="text" name="categoria" id="lbl-categoria" value={form.categoria} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lbl-detalles">Detalles</label>
          <input type="text" name="detalles" id="lbl-detalles" value={form.detalles} onChange={handleChange} />
        </div>
       {/*  <div>
          <label htmlFor="lbl-foto">Foto</label>
          <input type="text" name="foto" id="lbl-foto" value={form.foto} onChange={handleChange} />
        </div> */}

        <DragDrop
          setFoto={setFoto}
          setSrcImagen={setSrcImagen}
          srcImagen={srcImagen} />

        <div>
          <label htmlFor="lbl-envio">Envío</label>
          <input type="checkbox" name="envio" id="lbl-envio" checked={form.envio} onChange={handleChange} />
        </div>

        <button type="submit">Guardar</button>
        <button type="reset" onClick={handleReset}>Limpiar</button>
      </form>
    </>
  )
}

export default Formulario
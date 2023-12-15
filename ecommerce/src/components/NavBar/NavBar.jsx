import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <div className='contenedor'>
        <div className='tituloContenedor scale-up-horizontal-left'>
          <h2>ShoeStore</h2>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shoe" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 6h5.426a1 1 0 0 1 .863 .496l1.064 1.823a3 3 0 0 0 1.896 1.407l4.677 1.114a4 4 0 0 1 3.074 3.89v2.27a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1z" />
            <path d="M14 13l1 -2" />
            <path d="M8 18v-1a4 4 0 0 0 -4 -4h-1" />
            <path d="M10 12l1.5 -3" />
            </svg>
        </div>
        <ul className='nav'>
            <li type="none"><a href='#'>Productos</a></li>
            <li type="none"><a href='#'>Contacto</a></li>
            <li type="none"><a href='#'>Informacion</a></li>
            <li type="none"><a href='#'>{<CartWidget/>}</a></li>
        </ul>
    </div>
  )
}

export default NavBar
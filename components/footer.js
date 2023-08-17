import Link from "next/link"
import style from '../styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={`contenedor ${style.contenido}`}>
        <nav className={style.navegacion}>
          <Link className={''} href={'/'} >Inicio</Link>
          <Link  className={''} href={'/nosotros'} >Nosotros</Link>
          <Link  className={''} href={'/tienda'} >Tienda</Link>
          <Link  className={''} href={'/blog'} >Blog</Link>
        </nav>
        <p className={style.copy}>Todos los Derechos Reservados {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer
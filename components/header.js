import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import style from '../styles/header.module.css'
import carrito from '@/public/img/carrito.png'


const Header = () => {
  const router=useRouter( )

  return (
    <header className={style.header}>
      
      <div className={`contenedor ${style.barra}`}>
        <Link href={'/'}>
          <Image src={'/img/logo.svg'} width={300} height={40} alt='logotipo'/>
        </Link>
        <nav className={style.navegacion}>
          <Link className={router.pathname =='/' ? style.activo : ''} href={'/'} >Inicio</Link>
          <Link  className={router.pathname =='/nosotros' ? style.activo : ''} href={'/nosotros'} >Nosotros</Link>
          <Link  className={router.pathname =='/tienda' ? style.activo : ''} href={'/tienda'} >Tienda</Link>
          <Link  className={router.pathname =='/blog' ? style.activo : ''} href={'/blog'} >Blog</Link>
          <Link href={'/carrito'}><Image src={carrito} width={40} height={40} alt='imagen carrrito'/></Link>
        </nav>
      </div>
      
     </header>
  )
}

export default Header
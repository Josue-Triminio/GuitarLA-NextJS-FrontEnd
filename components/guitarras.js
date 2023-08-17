import Image from "next/image"
import Link from "next/link"
import style from '@/styles/guitarras.module.css'

const Guitarras = ({guitarra}) => {
  const {url,imagen,nombre,precio,descripcion}=guitarra
  
  return (
    <div className={style.guitarra}>

    <div>
      <Image src={imagen.data.attributes.formats.medium.url}width={600} height={400} alt={`imagen de ${nombre}`} />
    </div>
    <div className={style.contenido}>
      <h3>{nombre}</h3>
      <p className={style.descripcion}>{descripcion}</p>
      <p className={style.precio}>${precio}</p>
      <Link className={style.enlace} href={`/guitarras/${url}`}>Ver Producto</Link>
    </div>



    </div>
    
  )
}

export default Guitarras
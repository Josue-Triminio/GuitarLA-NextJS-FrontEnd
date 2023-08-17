import Image from "next/image"
import Link from "next/link"
import { formatearFecha } from "@/utils/helpers"
import style from '@/styles/blog.module.css'

export default function Blogs({blog}) {
    const {contenido,imagen,titulo,url,publishedAt}=blog
  return (
    <article>
        <Image src={imagen.data.attributes.formats.medium.url}width={600} height={400} alt={`imagen de blog`} />
        <div className={style.contenido}>

            <h3>{titulo}</h3>
            <p className={style.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={style.resumen}>{contenido}</p>
            <Link className={style.enlace} href={`/blog/${url}`}>Leer Post</Link>
        </div>



    </article>
  )
}

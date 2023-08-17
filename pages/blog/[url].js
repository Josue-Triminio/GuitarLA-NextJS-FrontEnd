import Layout from "@/components/layout"
import { formatearFecha } from "@/utils/helpers"
import style from '@/styles/blog.module.css'
import Image from "next/image"

export default function Post({post}) {
    const {titulo , imagen ,contenido,publishedAt}=post[0].attributes
    console.log(post);
  return (
    <Layout title={titulo}>
        <article className={`${style.post} ${style['mt-3']}`}>
        <Image src={imagen.data.attributes.url}width={1000} height={400} alt={`imagen de blog ${titulo}`} />
            <div className={style.contenido}>

                <h3>{titulo}</h3>
                <p className={style.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={style.resumen}>{contenido}</p>
                
            </div>
    </article>
    </Layout>
  )
}


export async function getServerSideProps({query:{url}}) {
    const respuesta=await fetch(`${process.env.API_URL}/blogs?filters[url]=${url}&populate=imagen`)
    const {data:post}=await respuesta.json()

    return{
        props:{
            post
        }
    }
}

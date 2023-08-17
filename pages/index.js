import Layout from '@/components/layout'
import Guitarras from '@/components/guitarras'
import style from '@/styles/grid.module.css'
import Blogs from '@/components/blogs'
import Curso from '@/components/curso'
import Image from 'next/image'



export default function Home({guitarra,blog,curso}) {
  
  console.log(curso);
  return (
    <>
       <Layout 
        title={'Inicio'} 
        description={'Venta de guitarras y blog de guitarras'}>

        <main className='contenedor'>
          <h1 className='heading'>Nuestra Coleccion</h1>
          <div className={style.grid}>
            {guitarra?.map(guitarra=>(
              <Guitarras 
                key={guitarra.id}
                guitarra={guitarra.attributes}
              />))}
          </div>
        </main>

          <Curso 
            curso={curso}
          
          
          />

        <section className='contenedor'>
          <h2 className='heading'>Blog</h2>
          <div className={style.grid}>
            {blog.map (blog => (
                  <Blogs
                    key={blog.id}
                    blog={blog.attributes} />
              ))}
            </div>

        </section>


       </Layout>
        
    </>
  )
}

export async function getStaticProps() {
  const urlGuitarras=`${process.env.API_URL}/guitarras?populate=imagen`
  const urlBlog=`${process.env.API_URL}/blogs?populate=imagen`
  const urlCurso=`${process.env.API_URL}/curso?populate=imagen`
  const [resGuitarras,resBlog,resCurso]= await Promise.all([
    fetch(urlGuitarras),
    fetch(urlBlog),
    fetch(urlCurso) ])

    const [{data:guitarra},{data:blog},{data:curso}] = await Promise.all([
      resGuitarras.json(),
      resBlog.json(),
      resCurso.json()

    ])
  return{
    props:{
      guitarra,
      blog,
      curso
    }
  }
  
    
  
  
}
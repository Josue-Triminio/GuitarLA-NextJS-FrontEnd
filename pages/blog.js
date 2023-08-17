import Layout from "@/components/layout"
import Blogs from '@/components/blogs'
import style from '@/styles/grid.module.css'



const Blog = ({blog}) => {
  return (
    <>
        <Layout
        title={'Blog'}
        description={'Venta de guitarras y blog de guitarras'}>

          <main className="contenedor">
            <h1 className="heading">Blog</h1>
            <div className={style.grid}>
            {blog.map (blog => (
                  <Blogs
                    key={blog.id}
                    blog={blog.attributes} />
              ))}
            </div>
          </main>
        

        </Layout>
    
    
    </>
  )
}


export async function getServerSideProps() {
  const respuesta=await fetch(`${process.env.API_URL}/blogs?populate=imagen`)
  const {data:blog}=await respuesta.json()
  

  return{
    props:{
      blog
    }
  }
  
    
  
  
}

export default Blog
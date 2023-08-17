
import Layout from "@/components/layout"
import Guitarras from "@/components/guitarras"
import style from '@/styles/grid.module.css'

const Tienda = ({guitarras}) => {
 
  return (
    <>
        <Layout
        title={'Tienda'}
        description={'Venta de guitarras y blog de guitarras'}>

          <main className="contenedor">

            <h1 className="heading" >Tienda</h1>
            <div className={style.grid}>
            {guitarras?.map(guitarra=>(
              <Guitarras 
                key={guitarra.id}
                guitarra={guitarra.attributes}
              />

            ))}
            </div>

          </main>
        

        </Layout>
    
    
    </>
  )
}

export default Tienda

export async function getServerSideProps() {
  const respuesta=await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const {data:guitarras}=await respuesta.json()
  

  return{
    props:{
      guitarras
    }
  }
  
    
  
  
}
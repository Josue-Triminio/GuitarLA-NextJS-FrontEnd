import Layout from "@/components/layout"
import Image from "next/image"
import style from '../styles/nosotros.module.css'



const Nosotros = () => {
  return (
    <>
        <Layout
        title={'Nosotros'}
        description={'Venta de guitarras y blog de guitarras'}>

          <main className="contenedor">
            <h1 className="heading"> Nosotros </h1>
            <div className={style.contenido}>
              <Image src='/img/nosotros.jpg ' width={1000} height={800} alt="imagen de nosotros" />

              <div>
                <p>Donec et felis vel justo ornare efficitur. Pellentesque 
                  facilisis vitae enim eu consectetur. In non mi eget diam pellentesque 
                  placerat. Morbi varius, tellus nec consectetur consectetur, risus massa
                  ullamcorper turpis, et iaculis elit est sit amet est. Sed ut orci at tellus 
                </p>
                <p>
                    accumsan consectetur. Nulla sodales efficitur nunc vitae ultrices. Donec purus 
                    tortor, aliquam eget justo nec, lacinia mollis lacus. Praesent consequat, arcu
                    mollis efficitur fermentum, leo libero ornare enim, ac mollis felis lorem vel 
                    lacus. Maecenas porta vel tellus vel sagittis. Proin dictum tristique libero vel 
                    ultricies. Etiam tellus dolor, vehicula non fermentum nec, sagittis 
                </p>
                
              </div>
            </div>
          </main>
        

        </Layout>
    
    
    </>
  )
}

export default Nosotros
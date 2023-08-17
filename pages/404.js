import Layout from '@/components/layout'
import Link from 'next/link'


export default function Pagina404() {
  return (
    <Layout>
        <div className='error'>

        <h1 className='mensaje'>{`Pagina no Encontrada >_<`}</h1>
        <Link className='errorlink' href={'/'}>Ir a Inicio</Link>


        </div>

    </Layout>
  )
}

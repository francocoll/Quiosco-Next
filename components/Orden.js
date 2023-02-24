import { formatearDinero } from 'helpers'
import Image from 'next/image'
import axios from 'axios'
import { toast } from 'react-toastify'

const Orden = ({ orden }) => {
    const { id, nombre, total, pedido } = orden
    const completarOrden = async () => {
        try {
            await axios.post(`/api/ordenes/${id}`)
            toast.success('Orden completed')
        } catch (error) {
            toast.error('Error')
        }
    }


    return (
        <div className='border p-10 space-y-5'>
            <h1 className="text-2xl font-bold">Orden: {id}</h1>
            <p className="text-lg font-bold">Client: {nombre}</p>
            <div>
                {pedido.map(articulo => (
                    <div key={articulo.id} className='py-3 flex border-b last-of-type:border-0 items-center '>
                        <div className='w-32'>
                            <Image
                                width={400}
                                height={500}
                                src={`/assets/img/${articulo.imagen}.jpg`}
                                alt='nada'

                            />
                        </div>
                        <div className='p-5 space-y-2'>
                            <h4 className='text-xl font-bold text-amber-500'>
                                {articulo.nombre}
                            </h4>
                            <p className='text-lg font-bold'>Cantidad: {articulo.cantidad}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='md:flex md:items-center md:justify-between my-10'>
                <p className='mt-5 font-black text-4xl text-amber-500'>
                    Total :{formatearDinero(total)}
                </p>
                <button className='bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded'
                    type='button'
                    onClick={completarOrden}
                >
                    Complete Order
                </button>
            </div>
        </div>
    )
}

export default Orden
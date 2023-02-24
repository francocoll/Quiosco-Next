import Layout from "layout/Layout";
import { useEffect, useCallback } from "react";
import useQuiosco from "hooks/useQuiosco";


export default function Total() {
    const { pedido, nombre, setNombre, colocarOrden } = useQuiosco()

    const comprobarPedido = useCallback(() => {
        return pedido.length === 0 || nombre === '' || nombre.length < 3;
    }, [pedido, nombre])

    useEffect(() => {
        comprobarPedido()
    }, [pedido, comprobarPedido])

    

    return (
        <Layout pagina='Total y confirmar pedido'>
            <h1 className="text-4xl font-black">Total and verify your order</h1>
            <p className="text-2xl my-10">Confirm your order</p>
            <form onSubmit={colocarOrden}>
                <div>
                    <label htmlFor="name" className="block uppercase text-slate-800 font-bold text-xl">
                        Name:
                    </label>
                    <input
                        id='name'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                        type="text"
                        className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
                    />
                    <div className="mt-10">
                        <p className="text-2xl">
                            Total{''}
                            <span className="font-bold">

                            </span>
                        </p>
                    </div>
                    <div>
                        <input
                            type='submit'
                            value='Confirm order'
                            disabled={comprobarPedido()}
                            className={`${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'} text-center w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white`} />
                    </div>
                </div>
            </form>
        </Layout>
    )
}
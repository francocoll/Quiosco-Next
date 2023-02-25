import Layout from "layout/Layout"
import useQuiosco from "hooks/useQuiosco"
import ResumenProducto from "components/ResumenProducto"
export default function Resumen() {
    const { pedido } = useQuiosco()
    return (
        <Layout pagina='Summary'>
            <h1 className="text-4xl font-black">Summary</h1>
            <p className="text-2xl my-10">Check your order</p>
            {pedido.length === 0 ? (
                <p className="text-center text-2xl">No elements</p>
            ) : (
                pedido.map((producto) => (
                    <ResumenProducto
                        key={producto.id}
                        producto={producto}
                    />
                ))
            )}
        </Layout>
    )
}

export default function ProductosPage({params}:{params: {id: string}}) {
    const {id} = params;
    return (
        <div>
            <h1 className="text-4xl">El id del Producto es: {id}</h1>
        </div>
    );
}


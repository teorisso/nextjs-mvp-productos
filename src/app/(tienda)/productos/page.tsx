import ProductCard from "@/app/components/product-card";


const products = [
    {
        id: 1,
        name: "Producto 1",
        description: "Descripción del producto 1",
        price: 100
    },
    {
        id: 2,
        name: "Producto 2",
        description: "Descripción del producto 2",
        price: 200
    },
    {
        id: 3,
        name: "Producto 3",
        description: "Descripción del producto 3",
        price: 300
    },
    {
        id: 4,
        name: "Producto 4",
        description: "Descripción del producto 4",
        price: 400
    },
    {
        id: 5,
        name: "Producto 5",
        description: "Descripción del producto 5",
        price: 500
    },
    {
        id: 6,
        name: "Producto 6",
        description: "Descripción del producto 6",
        price: 600
    },
    {
        id: 7,
        name: "Producto 7",
        description: "Descripción del producto 7",
        price: 700
    },
    {
        id: 8,
        name: "Producto 8",
        description: "Descripción del producto 8",
        price: 800
    },
    {
        id: 9,
        name: "Producto 9",
        description: "Descripción del producto 9",
        price: 900
    },
    {
        id: 10,
        name: "Producto 10",
        description: "Descripción del producto 10",
        price: 1000
    }
];
 

export default function ProductosPage() {
    return (
        <div>
            <h1 className="text-4xl text-center font-bold my-4">This is Productos Page</h1>
            <ProductCard products={products} />
        </div>
    );
}
import Link from "next/link";

const navItems = [
    {
        label: 'Home',
        route: '/'
    },
    {
        label: 'Productos',
        route: '/productos'
    },
    {
        label: 'Contacto',
        route: '/contacto'
    }
];

export default function Navigation() {
    return (
    <nav className="w-[1200px] flex justify-center gap-4 items-center p-4">
        {navItems.map((item, index) => {
            return (
            <Link key={index} href={item.route} className="hover: text-gray-300 hover:underline">
                {item.label}
            </Link>
            );
        })}
    </nav>
    ); 
} 
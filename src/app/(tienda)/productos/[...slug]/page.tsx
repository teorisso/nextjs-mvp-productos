export default function ProductosPage({params}:{params: {slug: string[]}}) {
    const {slug} = params;
    return (
        <div className="text-4xl flex gap-8 ">
            {slug.map((s, index) => (
            <span key={index}>{s}</span>
            ))}
        </div>
    );
}

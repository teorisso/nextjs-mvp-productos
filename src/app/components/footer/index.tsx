'use client';

export default function Footer() {
    return (
        <footer className="flex justify-center w-full h-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white antialiased">
            <div className="w-[1200px] flex justify-between items-center px-4 md:px-0">
                {/* Left Section */}
                <div className="text-xl font-semibold">
                    Hecho por Teo 😎
                </div>
                
                {/* Right Section */}
                <div className="text-xs text-gray-300 flex flex-col items-end gap-1">
                    <p><strong>CopyRight 2024</strong></p>
                    <p className="cursor-pointer hover:text-blue-400 transition-colors"
                        onClick={() => { window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); }}>
                        <strong>TheGame</strong>
                    </p>
                </div>
            </div>
        </footer>
    )
}

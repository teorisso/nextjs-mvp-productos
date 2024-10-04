'use client';
import { FaEnvelope, FaGithub } from 'react-icons/fa';
import { useState } from 'react';

export default function ContactPage() {
    const [loading, setLoading] = useState(false);

    const handleEmailClick = () => {
        window.location.href = 'mailto:teorisso@gmail.com';
    };

    const handleGithubClick = () => {
        window.open('https://github.com/teorisso', '_blank');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl text-center font-bold my-4">Me puedes encontrar en</h1>
            <div className="text-center space-y-4">
                <button
                    type="button"
                    onClick={handleEmailClick}
                    className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                >
                    <FaEnvelope className="mr-2" />
                    Email: teorisso@gmail.com
                </button>
                <button
                    type="button"
                    onClick={handleGithubClick}
                    className="flex items-center justify-center px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition duration-300"
                >
                    <FaGithub className="mr-2" />
                    GitHub: teorisso
                </button>
            </div>
        </div>
    );
}


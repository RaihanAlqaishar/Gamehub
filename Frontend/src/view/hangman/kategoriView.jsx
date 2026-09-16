import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function KategoriView() {

    const [kategori, setKategori] = useState([])
    const navigate = useNavigate()

    const API_URL = import.meta.env.VITE_API_URL

    useEffect(() => {
        fetch(`${API_URL}/hangman`)
            .then(res => res.json())
            .then(data => setKategori(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <>
            <div className="bg-yellow-400 w-full h-screen flex flex-col items-center justify-center">

                <h1 className="text-3xl text-blue-500 font-bold mb-1">
                    pilih <span className="text-orange-500">Kategori</span>
                </h1>

                <div className="w-full flex max-w-sm flex-wrap justify-center gap-2  md:max-w-full">
                    {kategori.map((item) => (
                        <button
                            key={item}
                            className="cursor-pointer m-2 bg-blue-500 text-white py-2 px-4 rounded"
                            onClick={() => navigate(`/hangman/${item}`)}>
                            {item}
                        </button>
                    ))}
                </div>

            </div>
        </>
    )
}

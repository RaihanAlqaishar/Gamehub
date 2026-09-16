import {useState, useEffect} from 'react'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'


export default function GameView({ kategori }) {
    
    const [data, setData]   = useState(null)
    const [bot, setBot]     = useState(null)
    const [life, setLife]   = useState(7)
    const [guessedLetter, setGuessedLetter] = useState([])
    const API_URL = import.meta.env.VITE_API_URL
    const navigate = useNavigate()
    
    const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z'
    ];

    useEffect (() => {
        fetch(`${API_URL}/hangman/${kategori}`)
        .then(res => res.json())
        .then(data => {setData(data)})
    },[kategori])

    useEffect(() => {
        if(data){
            const word = Math.floor(Math.random() * data.kata.length)
            setBot(data.kata[word])
        }
    }, [data])

    useEffect(() => {
        if(life === 0) {
            Swal.fire(`kamu kalah jawabnya adalah ${bot}`).then(() => navigate('/hangman'));
        }
    }, [life])


    useEffect(() => {
        if (bot && bot.split('').every((huruf) => guessedLetter.includes(huruf))) {
            Swal.fire(`kamu menang selamat 🎉🎉`).then(() => navigate('/hangman'));
        }
    })

    if(!data) {
        return <p>Loading.....</p>
    }

    const listAlphabet = alphabet.map((word) => {
            return <button key={word} disabled={guessedLetter.includes(word)} onClick={() => guessWord(word)} className='bg-[#5E63BA] p-3 rounded text-white font-Bold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'>{word}</button>
        })
    
    function guessWord(huruf) {
        if(!bot) {return}

        setGuessedLetter((prev) => {
        if(prev.includes(huruf)){
            return prev
        }
        return [...prev, huruf]
    })

        if(!bot.includes(huruf)) {
            setLife(prev => prev - 1)
        }
    } 

    function mappingWord() {
        return bot?.split('').map((huruf) => {
            return guessedLetter.includes(huruf) ? huruf + ' ' : ' - ' 
        })
    }


function Hangman() {
    return (
        <div className="w-full max-w-3xs mx-auto">
            <svg className="w-full h-auto" viewBox="0 0 300 300">
                {life <= 6 && ( <line
                 x1="50" y1="250" x2="50" y2="50" stroke="black" strokeWidth="8"/>)}

                {life <= 5 && (<line
                 x1="50" y1="50" x2="180" y2="50" stroke="black" strokeWidth="8"/>)}

                {life <= 4 && (<line
                 x1="180" y1="50" x2="180" y2="80" stroke="black" strokeWidth="5"/>)}

                {life <= 3 && (<circle cx="180" cy="105" r="25" fill="none" stroke="black" strokeWidth="5"/>)}

                {life <= 2 && ( <line x1="180" y1="130" x2="180" y2="200" stroke="black" strokeWidth="5"/>)}

                {life <= 1 && ( <> <line x1="180" y1="145" x2="145" y2="175" stroke="black" strokeWidth="5"/> <line x1="180" y1="145" x2="215" y2="175" stroke="black" strokeWidth="5" /></> )}

                {life <= 0 && ( <> <line x1="180" y1="200" x2="150" y2="235" stroke="black" strokeWidth="5"/><line x1="180" y1="200" x2="210" y2="235" stroke="black" strokeWidth="5" /> </>)}

                {life <= 6 && ( <line x1="25" y1="250" x2="220" y2="250" stroke="black" strokeWidth="8" /> )}
            </svg>
        </div>
    )
}

    

    return (
          <>
                <div className="h-screen w-full flex flex-col items-center justify-center sm:flex-row sm:gap-5">
                    
                    <div>
                        <div className="font-bold text-3xl">{Hangman()}</div>
                    </div>
        
                    <div className=" flex flex-col gap-2 w-full justify-center text-center  h-screen sm:max-w-md">
                        {mappingWord()}
                        <h1 className="font-bold text-3xl">Nyawa tersisa {life}</h1>
                        <div className="flex flex-wrap w-full justify-center gap-2  rounded-lg">
                            {listAlphabet}
                        </div>
                    </div>
                    
                </div>
            </>
    )

}



import { useState,useEffect } from "react"
import rps from './rpsLogic'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"  

export default function() {

    const [playerChoice, setPlayerChoice] = useState('batu')
    const [compChoice, setCompChoice] = useState('kertas')
    const [playerScore, setPlayerScore] = useState (null)
    const [compScore, setCompScore] = useState (null)
    const [result, setResult]= useState (null)
    const navigate = useNavigate()

    function handlePlay(choice) {
        const game = rps(choice)

        
        setPlayerChoice(game.playerChoice)
        setCompChoice(game.compChoice)
        setResult(game.result)

        

            if(game.result === 'menang') {
            Swal.fire("kamu menang")
            setPlayerScore(prev => prev + 1 )
            }

            if(game.result === 'kalah'){
                Swal.fire("kamu kalah")
                setCompScore(prev => prev + 1 )
            }
            
            if(game.result === 'seri'){
                Swal.fire("hasil seri!")
            }


    }
    


    return (
        <>
            <div className="w-full h-screen flex justify-center relative bg-[#141E39]">
                <div className='flex absolute right-0 bg-white m-3 rounded-2xl p-2 font-bold' ><button className='cursor-pointer' onClick={() => navigate('/')}>Back</button></div>
                <div className="flex items-center justify-around h-screen gap-14 sm:gap-44 md:gap-72 ">
                    <div className="flex justify-center items-center w-32 h-32 sm:w-40 sm:h-40 bg-[#f7f4f3] rounded-full border-[5px] border-amber-600">
                        <img src={`/images/${playerChoice}.png`} alt="" className="w-25 h-25" />
                    </div>

                    <div className="flex flex-col text-[#f7f4f3] fixed top-0 left-0 font-bold">
                        <h2 id="scoreP">Player : {playerScore}</h2>
                        <h2 id="scoreC">Comp : {compScore}</h2>
                    </div>

                    <div className="flex justify-center items-center w-32 h-32 sm:w-40 sm:h-40 bg-[#f7f4f3] rounded-full border-[5px] border-amber-600">
                        <img src={`/images/${compChoice}.png`} alt="" id="img2" className="w-25 h-25" />
                    </div>

                </div>

                <div className="flex absolute bottom-10 gap-4 sm:gap-20">
                    <button onClick={() => handlePlay('gunting')} className="bg-[#f7f4f3] flex justify-center items-center cursor-pointer h-25 w-25 border-[5px] border-green-600 rounded-full">
                        <img src="/images/gunting.png" alt="" className="w-15 h-15 object-cover" />
                    </button>
                    <button onClick={() => handlePlay('batu')} className="bg-[#f7f4f3] flex justify-center items-center cursor-pointer h-25 w-25 border-[5px] border-green-600 rounded-full">
                        <img src="/images/batu.png" alt="" className="w-15 h-15 object-cover" />
                    </button>
                    <button onClick={() => handlePlay('kertas')} className="bg-[#f7f4f3] flex justify-center items-center cursor-pointer h-25 w-25 border-[5px] border-green-600 rounded-full" >
                        <img src="/images/kertas.png" alt="" className="w-15 h-15 object-cover"/>
                    </button>
                </div>

            </div>

        </>
    )
}

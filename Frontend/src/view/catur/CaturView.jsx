import {Chessboard} from 'react-chessboard'
import {makeMove, chess} from './CaturLogic'
import { useState } from 'react';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
export default function () {

    const [chessPosition, setChessPosition] = useState(chess.fen())
    const [checkKing, setCheckKing]= useState(null)
    const navigate = useNavigate()

    function checkKingPosition() {
        const board = chess.board()
        const files = ['a','b','c','d','e','f','g','h']
    
        if(!chess.inCheck()) {
            return setCheckKing(null)
        }

        for (let i=0; i<board.length;i++){
            for(let h=0;h<board[i].length;h++){
                const piece = board[i][h]

                if(piece && piece.type ==='k' && piece.color === chess.turn()) {
                    const square = files[h] + (8-i)
                    setCheckKing(square)
                }
            }
        }
    }

    function makeRandomMove() {
      const possibleMoves = chess.moves();

      if (chess.isGameOver()) {
        return;
      }
      if(chess.turn() !== 'b'){
        return
      }

      const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

      chess.move(randomMove);
      setChessPosition(chess.fen());
      checkKingPosition()
    }

    function onPieceDrop({
      sourceSquare,
      targetSquare,
      promotion
    }) {
        if (!targetSquare) {
            return false;
        }
       
      try {
        const hasil = makeMove(sourceSquare, targetSquare, promotion)
        console.log(hasil.check, hasil.checkmate, hasil.draw)
        setChessPosition(chess.fen())
        checkKingPosition()
        
        if(hasil.checkmate === true) {
            Swal.fire('Kamu menang').then(() => {chess.reset(), setChessPosition(chess.fen()) , setCheckKing(null)} )
            return
        }

        if(hasil.draw === true) {
            Swal.fire('Game Draw').then(() => {chess.reset(), setChessPosition(chess.fen()) , setCheckKing(null)} )
            return
        }
        
        setTimeout(makeRandomMove, 500)

        return true;
      } catch {
        return false;
      }
    }

    const chessboardOptions = {
      position: chessPosition,
      onPieceDrop,
      squareStyles:{
        [checkKing] : {
            backgroundColor : 'red'
        },
      },
      id: 'play-vs-random',
    };

    return (
        <>
        <div className='flex absolute bg-white m-3 rounded-2xl p-2 font-bold' ><button className='cursor-pointer' onClick={() => navigate('/')}>Back</button></div>
        <div className='flex items-center justify-center w-full h-screen bg-amber-400'>
            <div className='w-2xs'>
            <Chessboard options={chessboardOptions} />
            </div>
        </div>
        </>
    )
  }

  

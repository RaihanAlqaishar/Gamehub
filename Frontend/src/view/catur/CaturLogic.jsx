import {Chess} from 'chess.js'

const chess = new Chess()

function makeMove(sourceSquare,targetSquare,promotion) {
    chess.move({   
    from : sourceSquare,
    to : targetSquare,
    promotion : 'q'
})
    return {
        check : chess.inCheck(),
        checkmate : chess.isCheckmate(),
        draw : chess.isDraw()
    }
}


export {chess, makeMove}




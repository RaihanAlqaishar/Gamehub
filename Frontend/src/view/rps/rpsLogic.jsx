const pilihan = ['batu','gunting','kertas']

function rps(playerChoice) {
    const compChoice = pilihan[Math.floor(Math.random() * pilihan.length)]

    let result

    if(playerChoice === compChoice){
        result = 'seri'
    } else if (
        playerChoice === "gunting" && compChoice === 'kertas' ||
        playerChoice === "batu" && compChoice === 'gunting' ||
        playerChoice === "kertas" && compChoice === 'batu'
    ) {
        result = 'menang' 
    } else {
        result = 'kalah'
    }

    console.log(playerChoice, compChoice)

    return {playerChoice, compChoice, result}

}

export default rps

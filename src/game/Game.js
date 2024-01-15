import React, { useState, useEffect } from 'react'
import './Game.css'

import rockPic from '../include/pics/pierre.png'
import scissorsPic from '../include/pics/ciseaux.png'
import paperPic from '../include/pics/feuille.png'
import winPic from '../include/pics/win.png'
import losePic from '../include/pics/lose.png'
import playAgainPic from '../include/pics/play_again.png'

function Game() {
    const [playerChoice, setPlayerChoice] = useState(null)
    const [computerChoice, setComputerChoice] = useState(null)
    const [result, setResult] = useState("")
    const [resultPic, setResultPic] = useState(null);

    const choices = ["Pierre", "Feuille", "Ciseaux"]

    const handleChoice = (choice) => {
        const computerRandomChoice = choices[Math.floor(Math.random() * choices.length)]

        setPlayerChoice(choice)
        setComputerChoice(computerRandomChoice)
    }

    const handleResult = () => {
        const outcomes = {
            Feuille: { Pierre: "Gagné", Ciseaux: "Perdu" },
            Pierre: { Ciseaux: "Gagné", Feuille: "Perdu" },
            Ciseaux: { Feuille: "Gagné", Pierre: "Perdu" },
        }

        setResult(playerChoice === computerChoice ? "Égalité" : outcomes[playerChoice][computerChoice] || "Égalité")
    }

    const selectPic = (choice) => {
        switch (choice) {
            case "Pierre":
                return rockPic;
            case "Feuille":
                return paperPic;
            case "Ciseaux":
                return scissorsPic;
            case "Gagné":
                return winPic
            case "Perdu":
                return losePic
            case "Égalité":
                return playAgainPic
            default:
                return null;
        }
    }

    useEffect(() => {
        if (playerChoice && computerChoice) {
            handleResult();
        }
    }, [playerChoice, computerChoice]);

    useEffect(() => {
        if (result) {
            const resultPic = selectPic(result);
            setResultPic(resultPic);

            // setTimeout(() => {
            //     setResultPic(null)
            // }, 3000);
        }
    }, [result]);

    return (
        <div className='game'>
            <div className='game__size'>
                {/* <p>Choix du joueur : {playerChoice}</p>
                <p>Choix de l'ordinateur : {computerChoice}</p>
                <p>Résultat : {result}</p> */}
                <div className='game__pic__container'>
                {resultPic && <img src={resultPic} alt="Résultat du jeu" />}
                </div>
                <div className='game__pics'>
                    {computerChoice && <img src={selectPic(computerChoice)} alt={computerChoice} />}
                    {playerChoice && <img src={selectPic(playerChoice)} alt={playerChoice} />}
                </div>
                <div className='game__button'>
                    {choices.map((choice, index) => (
                        <button className='btn btn-secondary' key={index} onClick={() => handleChoice(choice)}>
                            {choice}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Game
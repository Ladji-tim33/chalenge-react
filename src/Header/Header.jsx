import React from 'react'

import '../App.css';
// import ButtonColor from "./ButtonsColors";


const ButtonColor = ({ color, changebg }) => {
    return (

        <button className={`myButton ${color}`} onClick={changebg}></button>
    )
}

const Header = ({ changebg }) => {
    return (
        <div className=' bg-white p-3 rounded d-flex justify-content-between'>
            <div>
                <h1>NoteHack</h1>
            </div>
            <div>
                <ButtonColor color="gradientOne" changebg={() => changebg("gradientOne")} />
                <ButtonColor color="gradientTwo" changebg={() => changebg("gradientTwo")} />
                <ButtonColor ccolor="gradientThree" changebg={() => changebg("gradientThree")} />
                <ButtonColor color="gradientFour" changebg={() => changebg("gradientFour")} />
                <ButtonColor color="gradientFive" changebg={() => changebg("gradientFive")} />
                <ButtonColor color="gradientSix" changebg={() => changebg("gradientSix")} />

            </div>
        </div>
    )
}

export default Header;

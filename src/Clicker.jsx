import { useState } from "react";
import './Clicker.css'
import { useAtom } from "jotai";
import { balanceState } from "./App";
import axios from "axios"
function Clicker() {

    const [clicks, setClicks] = useState([]);
    const [balance, setBalance] = useAtom(balanceState);
    window.Telegram.WebApp;
    const tg = window.Telegram.WebApp;
    const telegramId = tg.initDataUnsafe?.user?.id;
    const onClose = () => {
        tg.close()
    }
    
    const handleClick = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX;
        const y = e.clientY;
        const id = new Date().getTime();
        

        const newClick = {
            id,
            x,
            y
        };

        setClicks([...clicks, newClick]);
        setBalance(balance + 1)
        fetch(`http://87.228.9.138:8081/increase-user-balance/${1}`, {method: "GET"})
        setTimeout(() => {
            setClicks((prevClicks) => prevClicks.filter((click) => click.id !== id));
            }, 1000);
    };

    return (
        <div className='clicker-container'>
            <div onClick={handleClick} className="clicker-button">
            </div>
            {clicks.map((click) => (
                <div 
                    key={click.id}
                    className="clicker-number"
                    style={{left:click.x, top:click.y}}
                >
                    +1  
                </div>
            ))}
            <button onClick={onClose}>Close Mini App</button>
        </div>

        
    )
}



export default Clicker
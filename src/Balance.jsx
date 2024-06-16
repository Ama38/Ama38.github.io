import { useAtom } from "jotai";
import { balanceState } from "./App";
import "./Balance.css"
function Balance() {
    const [balance, setBalance] = useAtom(balanceState)

    return (
        <div className="balance-container">
            <div className="balance-current-balance">
                {balance}
            </div>
        </div>
    )
}


export default Balance
import "./Header.css"


function Header() {

    const tg = window.Telegram.WebApp;
    return (
        <div className="header-container">
            <div className="header-username">
                @{/*tg.initDataUnsafe.user.username*/}amaterasu, {tg.initDataUnsafe?.user?.id}
            </div>
            <div className="header-filler"></div>
        </div>
    )
}




export default Header
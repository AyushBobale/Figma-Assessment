import './HamMenu.css'

function HamMenu(props) {
    return(
        <div className={props.hide ? "side-menu side-menu-active" : "side-menu"}>
            <div className="side-menu-item active-link">List items</div>
            <div className="side-menu-item">How renting works</div>
            <div className="side-menu-item">Rentkar for Business</div>
            <div className="side-menu-item">Rentkar for Events</div>
            <div className="side-menu-item">Invest in Ecosystem</div>
        </div>
    )
}

export default HamMenu;
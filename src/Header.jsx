import reactLogo from './assets/react.svg'
function Header() {
    return (
        <nav className="nav-main">
            <div className="nav-inner">
                <div className="nav-logo-name">
                    <img src={reactLogo} alt="" />
                    <h3>ReactFacts</h3>
                </div>
                <div className="title">
                    <h4>React Course Project - 1</h4>
                </div>
            </div>
        </nav>
    )
}

export default Header;
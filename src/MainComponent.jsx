import reactLargeLogo from "./assets/react-icon-large.png";
function MainComponent() {
    return (
        <div className="main-component">
            <div className="main-component-inner">
                <div className="main-component-title">
                    <h1>Fun facts about React</h1>
                </div>
                <div className="main-component-list">
                    <ul>
                        <li>Was first released in 2013</li>
                        <li>Was originally created by Jordan Walke</li>
                        <li>Has well over 100K stars on GitHub</li>
                        <li>Is maintained by Facebook</li>
                        <li>Powers thousands of enterprise apps, including mobile apps</li>
                    </ul>
                </div>
            </div>
            <div className="react-large-logo">
                <img className="react-large-logo" src={reactLargeLogo} alt="" />
            </div>
        </div>
    );
}

export default MainComponent;

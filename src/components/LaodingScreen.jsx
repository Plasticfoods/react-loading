
const LoadingScreen = () => {
    const cssProperties = {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center'
    };

    return (
        <div className="loader-container">  
            <div className="ring">Loading
                <span></span>
            </div>
        </div>
    )
}

export default LoadingScreen
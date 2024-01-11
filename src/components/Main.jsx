import { useState } from "react"
import LoadingScreen from "./LaodingScreen"

export default function Main() {
    const [loading, setLoading] = useState(false)

    const handleClick = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }

    return (
        <div className="main">
            <button className="btn" type="button" onClick={handleClick}>Click</button>
            {loading ? <LoadingScreen /> : ''}
        </div>    
    )
}
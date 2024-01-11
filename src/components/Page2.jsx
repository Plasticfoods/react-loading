import { useEffect } from "react"

export default function Page2({ setProgress }) {

    useEffect(() => {
        setProgress(40)
        setTimeout(() => {
            console.log('Progess finished')
            setProgress(100)
        }, 800)    
    }, [])

    return (
        <div className="page2">
            <h1 className="title">Page2</h1>
        </div>    
    )
}
import { useEffect } from "react"

export default function Page1({ setProgress }) {
    useEffect(() => {
        setProgress(30)
        setTimeout(() => {
            console.log('Progess finished')
            setProgress(100)
        }, 500)    
    }, [])

    return (
        <div className="page1">
            <h1 className="title">Page1</h1>
        </div>    
    )
}
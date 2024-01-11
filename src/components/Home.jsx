import { useEffect } from 'react';
import Main from './Main';

const Home = ({ setProgress }) => {

    useEffect(() => {
        setProgress(20)
        setTimeout(() => {
            console.log('Progess finished')
            setProgress(100)
        }, 400)    
    }, [])

    return (
        <div className="home">
            <h1 className='title'>This is simple project to display loading animation</h1>
            <Main />
        </div>
    )
};

export default Home;
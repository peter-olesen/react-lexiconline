import { useState, useEffect } from 'react'
import main from './Main.module.scss'

export const Main = () => {
    const [data, setData] = useState(null);

    const endpoint = "https://api.dictionaryapi.dev/api/v2/entries/en/hello";
    
      async function fetchData() {
        try {
            const res = await fetch(endpoint);
            const data = await res.json();
            console.log(data[0]);         
            setData(data);
        } catch {
            console.error("Error fetching data:", error)
        }
      }
  
    useEffect (() => {    
        fetchData();
    }, []);

    return (
        <main>
            <div className={main.wrapper}>
                <div className={main.searchresult}>
                    <h2>{data[0].word}</h2>
                    <h3>Noun:</h3>
                    <p></p>
                </div>
            </div>
        </main>
    )
}
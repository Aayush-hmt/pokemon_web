import { useEffect, useState } from "react"
import Card from "./Card";

export function Pokemon() {

    const [inputValue, setInputValue] = useState("");
    const [detailsPokemon, setDetailsPokemon] = useState([]);
    const [loding, setLoding] = useState(true)
    const [error, setError] = useState(null)

    const API = "https://pokeapi.co/api/v2/pokemon/?lim=24";


    // console.log(inputValue)
   
    const fetchPokemon = async () => {
        try {
            const resp = await fetch(API);
            const data = await resp.json();
            // console.log(data)
            const detailsPokemonsData = data.results.map(async (current) => {
                console.log(current.url)
                const respinner = await fetch(current.url);
                const datainner = await respinner.json();
                // console.log("inner data ",datainner)
                setLoding(false)
                return datainner;
            })

            const da = await Promise.all(detailsPokemonsData);
            setDetailsPokemon(da)

            // console.log(detailsPokemon)
        }
        catch (e) {
            console.log("error in fetching phase..", e)
            setLoding(false)
            setError(e)
        }

    }

    useEffect(() => {
        fetchPokemon();
    }, [])


    const fildredData=() => detailsPokemon.filter((current)=>   current.name.toLowerCase().includes(inputValue.toLowerCase())) 
    // fildredData()
    console.log("which form of data iiiiiii",fildredData())


    if (error) {
        return (
            <div>
                <h1>{error.message}</h1>
            </div>
        )

    }

    if (loding) {
        return (
            <div>

                <h1>Loding..</h1>
            </div>
        )
    }

    return (
        <>
            <div className="flex flex-col items-center gap-2 pt-5 pb-10 border">
                <h1 className="text-4xl font-bold pb-3">Poke'mons</h1>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="p-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Search Pokemon"
                />
            </div>        
           <Card fildredData={fildredData} />
        </>
    )
}
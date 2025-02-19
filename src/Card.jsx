

export default function Card({ fildredData }) {
    console.log("which form of data 44 ", fildredData)
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {fildredData().map((pokemon, index) => (
                <div key={index} className=" shadow-lg rounded-lg p-4 border border-gray-200 hover:drop-shadow-lg hover:bg-blue-200 transition-all">
                    <img
                        src={pokemon.sprites.other.dream_world.front_default}
                        alt={pokemon.name}
                        className="w-32 h-32 mx-auto"
                    />
                    <h1 className="text-xl font-bold text-center mt-2 capitalize">{pokemon.name}</h1>
                    <p className="text-center text-gray-600">{pokemon.types.map(curType => curType.type.name).join(", ")}</p>
                    <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-700">
                        <div className="bg-blue-100 p-2 rounded-lg text-center">
                            <span className="block font-semibold">Experience</span>
                            <p>{pokemon.base_experience}</p>
                        </div>
                        <div className="bg-red-100 p-2 rounded-lg text-center">
                            <span className="block font-semibold">Attack</span>
                            <p>{pokemon.stats[1].base_stat}</p>
                        </div>
                        <div className="col-span-2 bg-green-100 p-2 rounded-lg text-center">
                            <span className="block font-semibold">Abilities</span>
                            <p>{pokemon.abilities.map(abilityInfi => abilityInfi.ability.name).join(", ")}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

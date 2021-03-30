export default function StarWars({data}){
    return(
        <div>
            <h1>Star Wars Films</h1>
            {data.results.map( film => {
                return(
                    <ul key={film.episode_id}>
                        <li className="font-bold text-5xl">{film.title}</li>
                    </ul>
                )
            })}
        </div>
    )
}

export async function getServerSideProps(){

    const response = await fetch("https://swapi.dev/api/films")
    const data = await response.json()

    return { props: { data } }

}
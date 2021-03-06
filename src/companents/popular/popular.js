import React, {useState, useEffect} from 'react';
import axios from "axios";
import {ApiKey} from "../ApiKey/ApiKey";
// import MovieCard from "../Card/MovieCard";


const Popular = () => {
    const [popular, setPopular] = useState([])
    const [page, setPage] = useState(1)

    const handelPage = (pageNum) => {
        setPage(pageNum)
    }
    console.log(handelPage)


    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=ru-RU&page=${page}`)
            .then(({data}) => setPopular(data.results))
        window.scrollTo(0, 0)
    }, [page])
    console.log(popular)


    return (


        <div className="bg-gray-800">
            <div className="container mx-auto flex flex-wrap p-10 flex-col md:flex-row items-center mx-auto">
                <h1 className="text-3xl w-full py-5 text-gray-100">Populars movies</h1>

                <div className="flex flex-row flex-wrap pb-20">
                    {/*{*/}

                    {/*    // popular.filter(film => {*/}
                    {/*    //     <MovieCard el={el} key={el.id}/>*/}
                    {/*    //*/}
                    {/*    })*/}
                    {/*}*/}
                </div>
            </div>
        </div>


    )
}
export default Popular
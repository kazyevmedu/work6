import './App.css';
import Header from "./companents/header/header";
import './companents/header/header.css'
import {Routes, Route, useSearchParams} from "react-router-dom";
import Home from "./companents/home/home";
import Popular from "./companents/popular/popular";
import TopRated from "./companents/topRated/topRated";
import UpComing from "./companents/upComing/upComing";
import Latest from "./companents/Latest/latest";
import MovieDetails from "./companents/MovieDateils/movieDetails";



function PersonDetails(props) {
    return props;
}

function App() {
    const [search, setSearch] = useSearchParams();
    const postQuery = search.get("result") || ""


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const query = form.search.value

        setSearch({result: query})
    }
    return (
        <div className="App">

            <Header handleSubmit={handleSubmit}/>
            <Routes>
                    <Route path="/home" element={<Home result={postQuery}/>}/>
                    <Route path="/popular" element={<Popular result={postQuery}/>} />
                    <Route path="/topRated" element={<TopRated result={postQuery}/>} />
                    <Route path="/upcoming" element={<UpComing result={postQuery}/>} />
                    <Route path="/latest" element={<Latest/>}  result={postQuery}/>
                    <Route path="/movie-details:id" element={<MovieDetails  result={postQuery}/>} />
                    <Route path="/movie-details/person-details/:personaId" element={<PersonDetails  result={postQuery}/>} />
                    </Routes>

                    </div>
                    );
                }

                    export default App;

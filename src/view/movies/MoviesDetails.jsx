import { useParams } from "react-router";
import { moviesData } from "../../utils/MovieData";
import { NavLink } from "react-router-dom";


export default function MoviesDetails(){
    const{id} = useParams();
    console.log(typeof id);

    const singleMovie = moviesData.find((element)=>element.id==id);
    console.log(singleMovie);
    return (
        <>
        <nav aria-label="breadcrumb">
            <ol>
                <li className="breadcrumb-item"><NavLink to={'/movies'} >Movies</NavLink></li>
                <li className="breadcrumb-item active" aria-current="page">{singleMovie && singleMovie.title} </li>
                <li className="breadcrumb-item active" aria-current="page"> releaseYear = {singleMovie && singleMovie.releaseYear} </li>
                <li className="breadcrumb-item active" aria-current="page">  rating = {singleMovie && singleMovie.rating} </li>
                <li className="breadcrumb-item active" aria-current="page"> genre={singleMovie && singleMovie.genre} </li>
                <li className="breadcrumb-item active" aria-current="page"> director={singleMovie && singleMovie.director} </li>
            </ol>
        </nav>
        </>
    )
    
}

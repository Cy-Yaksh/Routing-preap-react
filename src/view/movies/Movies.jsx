import { NavLink } from "react-router-dom";
import { moviesData } from "../../utils/MovieData";


export default function Movies(){
    console.log(moviesData);

    return(
        <>
        <section>
            <h2 style={{textAlign:'center'}} >Popular Movies</h2>
            <div  className='d-flex justify-content-evenly gap-4 flex-wrap'>
                {
                    moviesData.length > 0 && moviesData.map((element,index)=>(
                        <div key={index= element.id} className="card-body" style={{width: '18rem'}}>
                            <div className="card-title d-flex flex-column gap-4">
                                <p>{element.id}</p>
                                <h5>{element.title}</h5>
                                <p>{element.releaseYear}</p>

                                <div><NavLink to={`/movies/${element.id}`}>view more</NavLink></div>
                            </div>
                            
                            </div>
                             ))}
            </div>
        </section>
        </>
    )
    
}
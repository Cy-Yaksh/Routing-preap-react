import { NavLink } from "react-router-dom"
import "../notfound/NotFound.css"

export default function PageNotFound(){
    return(
        <>
        <div className="page-not-found">
      <h1>404</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <NavLink to="/" className="go-home">Go to Home</NavLink>
    </div>
        </>
    )
}
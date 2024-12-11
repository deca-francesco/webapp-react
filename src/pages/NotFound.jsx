import { Link } from "react-router";

export default function NotFound() {
  return (
    <>
      <div className="container pt-5">
        <h1>😥 404 Pagina non trovata</h1>
        <Link to='/movies' className="btn btn-primary mt-5" >Torna alla Home</Link>
      </div>
    </>
  )
}


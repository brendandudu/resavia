import { Link } from "react-router-dom"

const AppChoice = () => {
    return(
        <>
        <h1>Quelle application souhaitez-vous visiter ?</h1>
        <Link to="/sport-resa">
            <img src="https://img.freepik.com/photos-gratuite/outils-sport_53876-138077.jpg?w=1060&t=st=1687824162~exp=1687824762~hmac=2551a3f06d611130bee64ea28682989526f7f462f4e26e4bb37e03f8219030bf" width="100" height="100"/>
            <p>Sport - Sport est réserver aux evenements physique</p>
        </Link><br/><br/>
        <Link to="/web-resa">
        <img src="https://st3.depositphotos.com/1010613/35999/i/600/depositphotos_359992006-stock-photo-man-working-from-home-having.jpg" width="100" height="100"/>
            <p>Web - Web est réserver aux evenements de toutes catégories (physique, En ligne, Hybrid)</p>
        </Link>
        </>
    )
}

export default AppChoice;
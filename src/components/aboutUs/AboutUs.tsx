import './AboutUs.css'
import mi from './../../assets/mi.jpg' 

function AboutUs(){
    return(
        <section className="about">
    <div className="mi">
        <img src={mi} alt="Accessos team"/>
        <div className="mi-text">
            <h2>About us</h2>
            <h5>Accessos team</h5>
            <p>
                4 women, 4 future engineers, and 4 scholars at the BHFF. It is not the usual formula for a team, is it? But we promise you it's a good one. However, those traits aren't the only thing we have in common - we are united around our visions and goals. Commitment is our pinky promise and creativity is our middle name. 
            </p>
            <a href="https://www.instagram.com/accessos.jewelry/?hl=hr" className="hero-btn"> Let's Connect</a>
        </div>
    </div>
</section>
    )
}

export default AboutUs;
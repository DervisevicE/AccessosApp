import './Header.css'
import logo from './../../assets/accessosLogo.png' 

function Header() {
    return (
        <section className="header">
    <nav>
        <a href="#top"> <img src={logo} alt="logo" /> </a>
        <div className="nav-links">
            <i className="fa fa-times"></i>
            <ul>
                <li><a href="#top">HOME</a></li>
                <li><a href="how_accessos_works.html">HOW ACCESSOS WORKS</a></li>
                <li><a href="">SHOP</a></li>
                <li><a href="about_us.html">ABOUT US</a></li>
            </ul>
        </div>
        <i className="fa fa-bars"></i>
    </nav>

    <div className="text-box">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui accusamus velit reprehenderit quia quasi quas nulla eligendi sapiente praesentium distinctio!
        </p>
        <h1>
            SAFETY HAS NEVER LOOKED SO GOOD
        </h1>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quos voluptas, obcaecati nulla doloremque provident, fugit laudantium architecto esse ipsum ut dignissimos ducimus enim assumenda nesciunt earum non mollitia delectus.
        </p>
        <a href="" className="hero-btn">A button</a>
    </div>
</section>
    )
}

export default Header;
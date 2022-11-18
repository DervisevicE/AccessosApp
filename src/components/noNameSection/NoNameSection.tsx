import './NoNameSection.css'
import logo from './../../assets/logo.jpg'

function NoNameSection(){
    return(
        
        <section className="section3">
    <h1>BLABLA PSPSPS KSKSKS</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum hic rem animi quam earum. Aut culpa beatae itaque repellendus facilis temporibus reprehenderit soluta nemo voluptas maxime expedita, nulla praesentium ipsa ea placeat quibusdam minima quidem iste aliquid totam modi rerum? Dolorem corrupti voluptate aperiam eveniet unde tenetur, rerum maiores! Nihil.</p>
    <div className="row">
        <div className="section3-col">
            <img src={logo} alt="sss"/>
            <div className="layer">
                <h3>BLABLABLA</h3>
            </div>
        </div>

        <div className="section3-col">
            <img src={logo} alt="sss"/>
            <div className="layer">
                <h3>PSPSPSPSPS</h3>
            </div>
        </div>

        <div className="section3-col">
            <img src={logo} alt="sss"/>
            <div className="layer">
                <h3>KSKSKSKSK</h3>
            </div>
        </div>
    </div>
</section>

        
    )
}

export default NoNameSection;
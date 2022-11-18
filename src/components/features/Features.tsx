import './Features.css'
import bracelet from './../../assets/bracelet.png'
import bluetooth from './../../assets/bluetooth.png'
import tap from './../../assets/tap.png'

function Features() {
    return (
        <section className="section2">
            <h1>ACCESSOS FEATURES</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias est officia, rem cum quo aperiam.</p>

            <div className="row">
                <div className="feature-col">
                    <h3>PRVI FEATURE</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, odit.</p>
                    <img src={bracelet} alt="bracelet" className="featureimg" />
                </div>
                <div className="feature-col">
                    <h3>DRUGI FEATURE</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, saepe.</p>
                    <img src={bluetooth} alt="sss" className="featureimg" />
                </div>
                <div className="feature-col">
                    <h3>TREĆI FEATURE</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, odit.</p>
                    <img src={bracelet} alt="bracelet" className="featureimg" />
                </div>
            </div>


            <div className="row">
                <div className="feature-col">
                    <h3>ČETVRTI FEATURE</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, odit.</p>
                    <img src={tap} alt="bracelet" className="featureimg" />
                </div>
                <div className="feature-col">
                    <h3>PETI FEATURE</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, saepe.</p>
                    <img src={tap} alt="sss" className="featureimg" />
                </div>
                <div className="feature-col">
                    <h3>ŠESTI FEATURE</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, odit.</p>
                    <img src={tap} alt="bracelet" className="featureimg" />
                </div>
            </div>
        </section>
    )
}

export default Features;
import Spline from '@splinetool/react-spline';
import "../Skills/linguagensStyle.css"

export function Linguagens() {
 
    return (
        <div className="LinguagensContainer">
            <div className="TitleContainer">
                <h1
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="1500"
                >
                    Principais Linguagens
                </h1>
            </div>
            
            <div className="skillsSplineWrapper">
                <Spline
                    className='skillsContainer'
                    scene="https://prod.spline.design/H6q-8d1v9uMlyHAR/scene.splinecode"
                />
            </div>
        </div>
    );
}
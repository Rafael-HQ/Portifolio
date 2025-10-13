import Spline from '@splinetool/react-spline';
import './TerraStyle.css';

export function Terra() {
    return (
        <div>
            <Spline
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-aos-duration="1500"
                className="spline-container"
                scene="https://prod.spline.design/kHiJVw48U14aNnKf/scene.splinecode"
            />
        </div>
    );
}
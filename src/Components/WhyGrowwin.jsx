import './WhyGrowwin.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Png1 from '../assets/Png1.png';
import Png2 from '../assets/pngwing2.png';
import Png3 from '../assets/pngwing3.png';
import Png4 from '../assets/pngwing4.png';


const CarouselCard = ({ icon, text }) => {
    return (
        <div className='carousel-container  my-2  rounded-2xl  '>
            <div className="carousel-card shadow-2xl  border-2">
                <img className="icon mx-auto " src={icon} alt="" />
                <p className="text">{text}</p>
            </div>
        </div>
    );
};

const WhyGrowwin = () => {
    const data = [
        {
            icon: Png1,
            text: "Growwin is at the forefront of technological innovation, pushing boundaries and shaping the future.",
        },
        {
            icon: Png2,
            text: "By partnering with growwin, organizations can achieve unparalleled growth and tap into new possibilities.",
        },
        {
            icon: Png3,
            text: "Growwin believes in community-driven initiatives. Our stakeholders have the power to guide our contributions to causes that resonate with them.",
        },
        {
            icon: Png4,
            text: "Our mission is not just about creating groundbreaking solutions but also ensuring that they are sustainable and make a positive impact on society.",
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1800,
    };

    return (
        <>
            <h1 className='text-5xl font-kalam font-bold text-center text-gray-600 mb-10'>Why Growwin ?</h1>
            <Slider {...settings}>
                {data.map((item, index) => (
                    <CarouselCard
                        key={index}
                        icon={item.icon}
                        text={item.text}
                    />
                ))}
            </Slider>
        </>
    );
};

export default WhyGrowwin;

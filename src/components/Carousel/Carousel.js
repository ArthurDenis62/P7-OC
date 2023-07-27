import './Carousel.module.scss';
import ArrowRight from '../../img/arrow_right.png';
import ArrowLeft from '../../img/arrow_left.png';
import { useState } from 'react';

function Slider({imgSlider}) {
    const [actuelleIndex, setActuelleIndex] = useState(0);
    const nextSlide = () => {
        setActuelleIndex(actuelleIndex + 1)
        if (actuelleIndex === imgSlider.length - 1)
        setActuelleIndex(0)
    }
    const prevSlide = () => {
        setActuelleIndex(actuelleIndex - 1)
        if (actuelleIndex === 0)
        setActuelleIndex(imgSlider.length - 1)
    }

    return (
        <section style={{backgroundImage: `url(${imgSlider[actuelleIndex]})`}} className='carousel'>
            {imgSlider.length > 1 && 
                <>
                    <img className='carousel_arrow carousel_arrow_right' src={ArrowRight} alt="show next slider" onClick={nextSlide} />
                    <img className='carousel_arrow carousel_arrow_left' src={ArrowLeft} alt="show previous slider" onClick={prevSlide} />
                    <p className='slideCount'>{actuelleIndex + 1} / {imgSlider.length}</p>
                </>
            }
        </section>
    )
}

export default Slider;
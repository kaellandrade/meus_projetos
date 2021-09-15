import React from 'react';

const Carousel = props => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
    
                <div className="carousel-item active">
                    <img src="https://m.media-amazon.com/images/G/01/digital/video/sonata/gl2_SVOD_ROW_EscapeRoom/3466d72f-9070-4d5b-adc8-a332a634d7bd._UR3000,600_SX1500_FMjpg_.jpg" className="d-block w-100" />
                </div>
                <div className="carousel-item">
                    <img src="https://m.media-amazon.com/images/S/sonata-images-prod/CROW_BR_Paramount_TheHandmaidsTale_S4/941f7105-04bb-452c-83be-d2b631e1ba52._UR3000,600_SX1500_FMjpg_.jpeg" className="d-block w-100" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    );
}

export default Carousel;
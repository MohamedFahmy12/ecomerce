import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import mobile from '../../images/mobile.png'
import LeftButton from './LeftButton';
import RightButton from './RightButton';
const ProductGallery = () => {
    const images = [
        {
            original: `${mobile}`,
        },
        {
            original: `${mobile}`,
        },
        {
            original: `${mobile}`,
        },
    ];
    return (
        <div className="product-gallary-card ">
            <ImageGallery 
            className="d-flex justfiy-content-center  align-items-center
            pt-2" items={images}
                defaultImage={mobile}
                showFullscreenButton={false}
                isRTL={true}
                showPlayButton={false}
                showThumbnails={false}
                renderRightNav={RightButton}
                renderLeftNav={LeftButton}
            />
        </div>
    )
}

export default ProductGallery

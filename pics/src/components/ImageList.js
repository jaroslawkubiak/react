import './ImageList.css';
import ImageShow from './ImageShow.js';
function ImageList({images}){

    const renderedImages = images.map(img => {
        return <ImageShow key={img.id}  image={img} />;
    });
    return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;

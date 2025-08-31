import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import blue from '../img/blue.jpg';
import blue1 from '../img/blue1.jfif';
import blue2 from '../img/blue2.png';
import blue3 from '../img/blue3.png';
import blue4 from '../img/blue4.jpg';
import white from '../img/white.jpg';
import white1 from '../img/white1.jfif';
import white2 from '../img/white2.jfif';
import white3 from '../img/white3.png';
import white4 from '../img/white4.jfif';
import green from '../img/green.jpg';
import green1 from '../img/green1.jfif';
import green2 from '../img/green2.png';
import green3 from '../img/green3.jpg';
import green4 from '../img/green4.jfif';
import red from '../img/red.jpg';
import red1 from '../img/red1.jfif';
import red2 from '../img/red2.png';
import red3 from '../img/red3.PNG';
import red4 from '../img/red4.jfif';
import './ImageSliderr';


const images = [
  { src: green, name: "", price: "557,360,000 تومان" },
  { src: green1, name: "زمرد", price: "100,500,000 تومان" },
  { src: green2, name: "زمرد", price: "87,550,000 تومان" },
  { src: green3, name: "زمرد", price: "71,150,000 تومان" },
  { src: green4, name: "زمرد", price: "116,350,000 تومان" },
  { src: white, name: "برلیان", price: "557,360,000 تومان" },
  { src: white1, name: "برلیان", price: "100,500,000 تومان" },
  { src: white2, name: "برلیان", price: "87,550,000 تومان" },
  { src: white3, name: "برلیان", price: "71,150,000 تومان" },
  { src: white4, name: "برلیان", price: "116,350,000 تومان" },
  { src: red, name: "یاقوت سرخ", price: "557,360,000 تومان" },
  { src: red1, name: "یاقوت سرخ", price: "100,500,000 تومان" },
  { src: red2, name: "یاقوت سرخ", price: "87,550,000 تومان" },
  { src: red3, name: "یاقوت سرخ", price: "71,150,000 تومان" },
  { src: red4, name: "یاقوت سرخ", price: "116,350,000 تومان" },
  { src: green, name: "", price: "557,360,000 تومان" },
  { src: green1, name: "زمرد", price: "100,500,000 تومان" },
  { src: green2, name: "زمرد", price: "87,550,000 تومان" },
  { src: white, name: "برلیان", price: "557,360,000 تومان" },
  { src: white1, name: "برلیان", price: "100,500,000 تومان" },
  { src: white2, name: "برلیان", price: "87,550,000 تومان" },
  { src: white3, name: "برلیان", price: "71,150,000 تومان" },
  { src: white4, name: "برلیان", price: "116,350,000 تومان" },
  { src: green3, name: "زمرد", price: "71,150,000 تومان" },
  { src: blue, name: "یاقوت کبود", price: "557,360,000 تومان" },
  { src: blue1, name: "یاقوت کبود", price: "100,500,000 تومان" },
  { src: blue2, name: "یاقوت کبود", price: "87,550,000 تومان" },
  { src: blue3, name: "یاقوت کبود", price: "71,150,000 تومان" },
  { src: blue4, name: "یاقوت کبود", price: "116,350,000 تومان" },
  { src: green, name: "", price: "557,360,000 تومان" },
  { src: green1, name: "زمرد", price: "100,500,000 تومان" },
  { src: green2, name: "زمرد", price: "87,550,000 تومان" },
  { src: green3, name: "زمرد", price: "71,150,000 تومان" },
  { src: green4, name: "زمرد", price: "116,350,000 تومان" },
  { src: red, name: "یاقوت سرخ", price: "557,360,000 تومان" },
  { src: red1, name: "یاقوت سرخ", price: "100,500,000 تومان" },
  { src: red2, name: "یاقوت سرخ", price: "87,550,000 تومان" },
  { src: red3, name: "یاقوت سرخ", price: "71,150,000 تومان" },
  { src: red4, name: "یاقوت سرخ", price: "116,350,000 تومان" },
  { src: white, name: "برلیان", price: "557,360,000 تومان" },
  { src: white1, name: "برلیان", price: "100,500,000 تومان" },
  { src: white2, name: "برلیان", price: "87,550,000 تومان" },
  { src: white3, name: "برلیان", price: "71,150,000 تومان" },
  { src: white4, name: "برلیان", price: "116,350,000 تومان" },
  { src: green, name: "", price: "557,360,000 تومان" },
  { src: green1, name: "زمرد", price: "100,500,000 تومان" },
  { src: green2, name: "زمرد", price: "87,550,000 تومان" },
  { src: white, name: "برلیان", price: "557,360,000 تومان" },
  { src: white1, name: "برلیان", price: "100,500,000 تومان" },
  { src: white2, name: "برلیان", price: "87,550,000 تومان" },
  { src: white3, name: "برلیان", price: "71,150,000 تومان" },
  { src: white4, name: "برلیان", price: "116,350,000 تومان" },
  { src: green3, name: "زمرد", price: "71,150,000 تومان" },
  { src: green4, name: "زمرد", price: "116,350,000 تومان" },
  { src: red, name: "یاقوت سرخ", price: "557,360,000 تومان" },
  { src: red1, name: "یاقوت سرخ", price: "100,500,000 تومان" },
  { src: red2, name: "یاقوت سرخ", price: "87,550,000 تومان" },
  { src: red3, name: "یاقوت سرخ", price: "71,150,000 تومان" },
  { src: red4, name: "یاقوت سرخ", price: "116,350,000 تومان" }
];


const ImageSlider = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleImageClick = (image) => {
    setIsClosing(false);
    setSelectedImage(image);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedImage(null);
      setIsClosing(false);
    }, 500);
  };

  // زمان انیمیشن را با مدت زمان انیمیشن در CSS هماهنگ کنید | Sync animation timing with CSS duration
  return (
    <div className='pt-5' id='slider'>
      <h3 className="container centered ">نمونه کارهای جواهرسازی با سنگ‌های قیمتی</h3>
      <p className="container centered pt-2">
        در این بخش شما می‌توانید برخی از نمونه کارهای برجسته و منحصربه‌فرد ما را مشاهده کنید. هر یک از جواهرات ما با دقت و هنر فراوان ساخته شده و از سنگ‌های قیمتی طبیعی بهره می‌برد. این جواهرات نه تنها زینتی هستند، بلکه با خود انرژی و داستانی خاص به همراه دارند.
      </p>
      <div className="slider-container">-
        <div className="slider-wrapper">
          {images.map((image, index) => (
            <img key={index} className="slider-image" src={image.src} alt={image.name} onClick={() => handleImageClick(image)} />
          ))}
        </div>
      </div>

{/* مودال برای نمایش تصویر بزرگ | Modal for displaying enlarged image */}
      <div className={`image-modal fade ${selectedImage ? (isClosing ? 'close' : 'open') : ''}`} style={{ display: selectedImage ? 'block' : 'none' }}>
        <div className="image-modal-dialog modal-lg mt-5">
          <div className="image-modal-content mt-5 pt-1">
            <div>
              <button type="button" className="closebtnn cent py-2" onClick={handleClose}>&times;</button>
            </div>
            <div className="image-modal-body d-flex flex-column flex-md-row justify-content-center bg-white py-5">  
  {selectedImage && (  
    <>  
      <img   
        src={selectedImage.src}   
        alt="Large view"   
        className="img-fluid w-100 w-md-50 my-5 py-3"   
      />  
      <div className="image-info text-center text-md-start mt-3 mt-md-0">  
        <h5 className='text-nowrap'>{selectedImage.name}</h5>  
        <p>{selectedImage.price}</p>  
      </div>  
    </>  
  )}  
</div>
          </div>
        </div>
      </div>

{/* پس‌زمینه مودال برای بستن با کلیک | Modal backdrop for closing on click */}
      {selectedImage && <div className="image-modal-backdrop fade show" onClick={handleClose}></div>}
    </div>
  );
};

export default ImageSlider;

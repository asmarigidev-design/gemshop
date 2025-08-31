import React from 'react';  




// نمایش آیتم‌های گالری در دو ردیف؛ هر آیتم با تصویر اصلی و رویداد کلیک برای باز کردن مودال
// Displays gallery items in two rows; each item shows main image and opens modal on click

const GalleryItem = ({ image, onClick }) => {  
  return (  
    <div className="gallery-item " onClick={onClick}>  
      <img src={image.src} alt="" className="img-fluid gallery-img full-width my-2" />   
    </div>  
  );  
};  

export default GalleryItem;
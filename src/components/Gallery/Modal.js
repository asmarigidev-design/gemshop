const Modal = ({ isOpen, onClose, currentImage, images, setCurrentImage, products }) => {  // کامپوننت مودال با پراپ‌های ورودی | Modal component with props
   if (!isOpen) return null;  // اگر مودال باز نباشد، چیزی نمایش نده | Return null if modal is not open

   const currentProduct = products.find(product => product.src === currentImage.src);  // پیدا کردن محصول مرتبط با تصویر | Find product matching current image

   if (!currentProduct) {  
       return <div>محصول مورد نظر پیدا نشد.</div>;  // نمایش پیام خطا اگر محصول پیدا نشد | Show error if product not found
   }  

   return (  
       <div className="modal" onClick={onClose}>  {/* پس‌زمینه مودال برای بستن با کلیک | Modal backdrop for closing on click */}
           <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ display: 'flex' }}>  {/* محتوای مودال با جلوگیری از بسته شدن | Modal content with click stop */}
               <span className="close" onClick={onClose}>&times;</span>  {/* دکمه بستن مودال | Modal close button */}

               <div className='rr' style={{ display: 'flex' }}>  
                   <img  
                       src={currentImage.src}  
                       alt="Modal display"  
                       className="col-4 modal-image"  // تصویر بزرگ محصول | Enlarged product image
                   />  

                   <div className="product-details col-6 mx-5 py-5">  {/* جزئیات محصول در مودال | Product details in modal */}
                       <h4 className="py-5  cent">{currentProduct.title}</h4>  {/* عنوان محصول | Product title*/}
                       <h4 className="px-5 cent">نوع کالا: {currentProduct.description}</h4>   {/*توضیح محصول | Product description*/}
                       <h4 className="px-5 cent">قیمت: {currentProduct.price}</h4>   {/*قیمت محصول | Product price*/}
                       <h4 className="px-5 cent">{currentProduct.type}</h4>  {/* نوع محصول | Product type*/}
                   </div>  
               </div>  

               <div className="modal-thumbnails mx-3 centered">  {/* تصاویر بندانگشتی برای انتخاب | Thumbnail images for selection */}        
                         {images.map((image, index) => (  
                       <img  
                           key={index}  
                           src={image}  
                           alt={`Thumbnail ${index}`}  
                           className="thumbnail "  
                           onClick={() => {  
                               setCurrentImage({ src: image });  // تغییر تصویر فعلی با کلیک | Change current image on click
                           }}  
                       />  
                   ))}  
               </div>  
           </div>  
       </div>  
   );  
};
export default Modal; 
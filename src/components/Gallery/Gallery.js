import {React, useEffect,useState } from 'react';
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

import GalleryItem from './GalleryItem';  
import Modal from './Modal';  
import AOS from 'aos';
import 'aos/dist/aos.css';


// آرایه‌ای شامل چهار دسته تصویر برای گالری؛ هر دسته دارای یک تصویر اصلی و چهار تصویر thumbnail است
// Array of four image categories for the gallery; each contains one main image and four thumbnails


const images = [  
  { src: blue, thumbnails: [blue1, blue2, blue3, blue4] },  
  { src: white, thumbnails: [white1, white2, white3, white4] },  
  { src: green, thumbnails: [green1, green2, green3, green4] },  
  { src: red, thumbnails: [red1, red2, red3, red4] }   
];  

const products = [  
  {  
    id: 1,  
    src: blue,
    type: 'سرویس جواهر یاقوت کبود ',  
    description: 'رنگ: آبی',  
    price: '557,360,000 تومان',  
    title: 'طرح اورانوس',  

  },  
  {  
    id: 2,  
    src: white,  
    type: 'سرویس جواهر برلیان ',  
    description: 'رنگ: سفید',  
    price: '557,360,000 تومان',  
    title: 'طرح اورانوس',
    pa: 'وقتی صحبت از سرویس برلیان می‌شود اغلب شما را به یاد یک گردنبند و گوشواره جواهر فاخر و لوکس می‌اندازد که با لباس های شب زیبا ست شده است'  
  
  }, 
  {  
    id: 3,  
    src: green,  
    type: 'سرویس جواهر زمرد ',  
    description: 'رنگ: سبز',  
    price: '557,360,000 تومان',  
    title: 'طرح اورانوس'  
  },  
  {  
    id: 4,  
    src: red,  
    title: 'سرویس جواهریاقوت قرمز',  
    type: 'رنگ: قرمز',  
    price: '557,360,000 تومان',  
    description: 'طرح اورانوس'  
  } ,
  {  
    id: 5,  
    src: red1,  
    title: 'گوشواره کوچک جواهریاقوت قرمز',  
    type: 'رنگ: قرمز',  
    price: '100,500,000 تومان',  
    description: 'طرح اورانوس'  
  } ,
  {  
    id: 6,  
    src: red2,  
    title: 'حلقه جواهریاقوت قرمز',  
    type: 'رنگ: قرمز',  
    price: '87,550,000 تومان',  
    description: 'طرح بلادی اسکای'  
  } , 
  {  
    id: 7,  
    src: red3,  
    title: 'انگشتر جواهر یاقوت سرخ ',  
    type: 'رنگ: قرمز',  
    price: '71,150,000 تومان',  
    description: 'طرح اورانوس'  
  } ,  
  {  
    id: 8,  
    src: red4,  
    title: 'گوشواره جواهر کلیپسی یاقوت سرخ ',  
    type: 'رنگ: قرمز',  
    price: '116,350,000 تومان',  
    description: 'طرح اورانوس'  
  } , 
  {  
    id: 9,  
    src: blue1,  
    title: 'گوشواره کوچک جواهریاقوت کبود',  
    type: 'رنگ: آبی',  
    price: '100,500,000 تومان',  
    description: 'طرح اورانوس'  
  } ,
  {  
    id: 10,  
    src: blue2,  
    title: 'حلقه جواهریاقوت کبود',  
    type: 'رنگ: آبی',  
    price: '87,550,000 تومان',  
    description: 'طرح بلادی اسکای'  
  } , 
  {  
    id: 11,  
    src: blue3,  
    title: 'انگشتر جواهر یاقوت کبود ',  
    type: 'رنگ: آبی',  
    price: '71,150,000 تومان',  
    description: 'طرح اورانوس'  
  } , 
  {  
    id: 12,  
    src: blue4,  
    title: 'گوشواره جواهر کلیپسی یاقوت کبود ',  
    type: 'رنگ: آبی',  
    price: '116,350,000 تومان',  
    description: 'طرح اورانوس'  
  } , 
  {  
    id: 13,  
    src: green1,  
    title: 'گوشواره کوچک جواهر زمرد',  
    type: 'رنگ: سبز',  
    price: '100,500,000 تومان',  
    description: 'طرح اورانوس'  
  } ,
  {  
    id: 14,  
    src: green2,  
    title: 'حلقه جواهریاقوت زمرد',  
    type: 'رنگ: سبز',  
    price: '87,550,000 تومان',  
    description: 'طرح بلادی اسکای'  
  } ,   
  
  {  
    id: 15,  
    src: green3,  
    title: 'انگشتر جواهرزمرد ',  
    type: 'رنگ: سبز',  
    price: '71,150,000 تومان',  
    description: 'طرح اورانوس'  
  } , 
  {  
    id: 16,  
    src: green4,  
    title: 'گوشواره جواهر کلیپسی زمرد ',  
    type: 'رنگ: سبز',  
    price: '116,350,000 تومان',  
    description: 'طرح اورانوس'  
  } , 
  {  
    id: 17,  
    src: white1,  
    title: 'گوشواره کوچک جواهر برلیان',  
    type: 'رنگ: سفید',  
    price: '100,500,000 تومان',  
    description: 'طرح اورانوس',
    pa: 'وقتی صحبت از سرویس برلیان می‌شود اغلب شما را به یاد یک گردنبند و گوشواره جواهر فاخر و لوکس می‌اندازد که با لباس های شب زیبا ست شده است'  
  
  } ,
  {  
    id: 18,  
    src: white2,  
    title: 'حلقه جواهر برلیان ',  
    type: 'رنگ: سفید',  
    price: '87,550,000 تومان',  
    description: 'طرح بلادی اسکای',
    pa: 'وقتی صحبت از سرویس برلیان می‌شود اغلب شما را به یاد یک گردنبند و گوشواره جواهر فاخر و لوکس می‌اندازد که با لباس های شب زیبا ست شده است'  
  
  } , 
  {  
    id: 19,  
    src: white3,  
    title: 'انگشتر جواهر برلیان ',  
    type: 'رنگ: سفید',  
    price: '71,150,000 تومان',  
    description: 'طرح اورانوس'
 
  } , 
  {  
    id: 20,  
    src: white4,  
    title: 'گوشواره جواهر کلیپسی برلیان ',  
    type: 'رنگ: سفید',  
    price: '116,350,000 تومان',  
    description: 'طرح اورانوس'
 
  } 
];  

const Gallery = () => { 
   useEffect(()=>{
          AOS.init(
            { duration: 1000}
           );
        },[])
       

        // مدیریت وضعیت مودال نمایش تصویر و به‌روزرسانی تصویر اصلی و تصاویر کوچک هنگام انتخاب هر دسته
// Handles modal state and updates main image and thumbnails when a category is selected

  const [isModalOpen, setIsModalOpen] = useState(false);  
  const [currentImage, setCurrentImage] = useState(images[0]);  
  const [thumbnailImages, setThumbnailImages] = useState(currentImage.thumbnails);  

  const openModal = (image) => {  
    setCurrentImage(image);  
    setThumbnailImages(image.thumbnails); // به روزرسانی thumbnails  
    setIsModalOpen(true);  
  };  

  const closeModal = () => {  
    setIsModalOpen(false);  
  };  


  return (  
    <section className="gallery py-5" id="gallery">  
    <div className="jewelry-background my-5">  
            <div className="container mt-5 text-container ">  
                <h2 className="text-center mb-4 py-5" data-aos="fade-up">استفاده از سنگ‌ها در جواهرسازی</h2>  

                <div className="row">  
                    <div className="col-md-6 backk" data-aos="fade-left">  
                        <h5 className='cent'>زیبایی و تنوع</h5>  
                        <p className='cent'>سنگ‌های قیمتی مانند الماس، یاقوت، زمرد و سایرین برای جذابیت بصری و زیبایی در جواهرات استفاده می‌شوند.</p>  
                    </div>  
                    <div className="col-md-6 backk" data-aos="fade-right">  
                        <h5 className='cent'>معنویت و نمادگرایی</h5>  
                        <p className='cent'>هر سنگ معنی خاصی دارد؛ برای مثال، یاقوت نماد عشق و وفاداری است.</p>  
                    </div>  
                </div>  

                <div className="row mt-4 ">  
                    <div className="col-md-6 backk" data-aos="fade-left">  
                        <h5 className='cent'>ویژگی‌های منحصر به فرد</h5>  
                        <p className='cent'>برخی سنگ‌ها خاصیت‌هایی از جمله آرامش و حفاظت را دارند که می‌تواند بر انتخاب جواهر تأثیر بگذارد.</p>  
                    </div>  
                    <div className="col-md-6 backk" data-aos="fade-right">  
                        <h5 className='cent'>کیفیت و عمر</h5>  
                        <p className='cent'>سنگ‌های با کیفیت بالا به مرور زمان تغییر شکل نمی‌دهند و ارزش خود را حفظ می‌کنند.</p>  
                    </div>  
                </div>  

                <h2 className="text-center mt-5 mb-4" data-aos="fade-up"> فلزات رایج برای ساخت جواهرات</h2>  

                <div className="row py-5">  
                    <div className="col-md-6 backk" data-aos="fade-left">  
                        <h5 className='cent'>طلا</h5>  
                        <p>زیبایی، پایداری و عیارهای مختلف از جمله ویژگی‌های طلا هستند، اما قیمت آن معمولاً بالاتر است.</p>  
                    </div>  
                    <div className="col-md-6 backk" data-aos="fade-right">  
                        <h5 className='cent'>نقره</h5>  
                        <p>نقره گزینه‌ای اقتصادی‌تر است، اما ممکن است نیاز به مراقبت بیشتری داشته باشد.</p>  
                    </div>  
                </div>  
            </div>  
        </div> 
      <div className="">  
        <div className="row mb-5" data-aos="fade-up">  
          <div className="col d-flex flex-wrap text-uppercase justify-content-center">  
            <h1 className="font-weight-bold align-self-center mx-1">کلکسیون</h1>  
            <h1 className="section-title-special mx-1">الماس</h1>  
          </div>  
        </div>  


        {/*// نمایش آیتم‌های گالری در دو ردیف؛ هر آیتم با تصویر اصلی و رویداد کلیک برای باز کردن مودال
// Displays gallery items in two rows; each item shows main image and opens modal on click
*/}
        <div className="row justify-content-center">  
          <div className="col-sm-6 d-flex flex-column justify-content-between" >  
            <div className="row "  data-aos="fade-left">  
              <div className="col-sm-6 " > {/* اضافه کردن کلاس جدید */}  
                <GalleryItem image={images[0]} onClick={() => openModal(images[0])} />   
              </div>  
              <div className="col-sm-6 "> {/* اضافه کردن کلاس جدید */}  
                <GalleryItem image={images[1]} onClick={() => openModal(images[1])} />  
              </div>  
            </div>  
            <div className="row" data-aos="fade-right">  
              {images.slice(2).map((image, index) => (  
                <div className="col-sm-6"key={index} >  
                  <GalleryItem image={image} onClick={() => openModal(image)} />  
                </div>  
              ))}  
            </div>  
          </div>  
        </div>  


      </div>  
      <Modal   
        isOpen={isModalOpen}   
        onClose={closeModal}   
        currentImage={currentImage}   
        images={thumbnailImages}  
        setCurrentImage={setCurrentImage}   
        products={products}  
      /> 



<div className="container py-5 ">
  <h1 className="centered py-3" backk>استفاده از سنگ‌ها در جواهرسازی
  </h1>
  <p className=""data-aos="fade-up">جواهرسازی یکی از هنرهای باستانی است که در آن از موادی مانند طلا، نقره و سنگ‌های قیمتی و نیمه‌قیمتی برای خلق قطعات زیبا و باارزش استفاده می‌شود. سنگ‌ها به عنوان یکی از عناصر اصلی در جواهرسازی، نه تنها به زیبایی این آثار افزوده بلکه به آنها معنای عمیق‌تری نیز می‌بخشند. انتخاب سنگ‌ها در ساخت جواهرات به دلایل مختلفی صورت می‌گیرد:
</p>
<h3 className="centered py-3"data-aos="fade-up">زیبایی و تنوع:</h3>
<p className=""data-aos="fade-right">سنگ‌های قیمتی مانند الماس، یاقوت، زمرد و چندین نوع دیگر به دلیل رنگ‌های زیبا و براق، جذابیت خاصی به جواهرات می‌بخشند. هر کدام از این سنگ‌ها می‌توانند ویژگی‌های منحصر به فردی را به جواهر اضافه کنند.</p>
<h3 className="centered py-3"data-aos="fade-left">معنویت و نمادگرایی</h3>
<p className=""data-aos="fade-right">بسیاری از فرهنگ‌ها به سنگ‌ها معانی خاصی نسبت می‌دهند. به عنوان مثال، یاقوت نماد عشق و وفاداری، و همه‌گیرترین سنگ، الماس به عنوان نماد قدرت و جاودانگی شناخته می‌شود. این باورها می‌توانند بر انتخاب سنگ‌ها تأثیر بگذارند.</p>
<h3 className="centered py-3"data-aos="fade-left">ویژگی‌های منحصر به فرد:</h3>
<p className=""data-aos="fade-right">هر سنگ ویژگی‌های خاصی دارد. به عنوان مثال، برخی سنگ‌ها خاصیت‌هایی از جمله آرامش، حفاظت و یا انرژی مثبت را به همراه دارند. این ویژگی‌ها می‌توانند باعث انتخاب یک سنگ خاص برای یک جواهر خاص شوند.</p>
<h3 className="centered py-3"data-aos="fade-left">کیفیت و عمر:</h3>
<p className=""data-aos="fade-right">سنگ‌های با کیفیت بالا به مرور زمان تغییر شکل نمی‌دهند و ارزش خود را حفظ می‌کنند. این ویژگی جذابیت بیشتری برای خریداران ایجاد می‌کند</p>


<h3 className="centered py-3"data-aos="fade-up">طلا یا نقره</h3>
<p className=""data-aos="fade-right">در جواهرسازی، طلا و نقره به عنوان فلزات اصلی مورد استفاده قرار می‌گیرند. انتخاب یکی از این فلزات بستگی به سلیقه، اهداف و بودجه شما دارد</p>
<h3 className="centered py-3"data-aos="fade-up">طلا</h3>
<p className=""data-aos="fade-right">طلا به دلیل زیبایی و درخشندگی فوق‌العاده، یک انتخاب محبوب در جواهرسازی است.طلا از نظر شیمیایی پایدار است و به راحتی زنگ نمی‌زند یا تغییر رنگ نمی‌دهدعمدتاً در عیارهای مختلف (به‌عنوان مثال ۱۸ عیار، ۲۲ عیار) موجود است که هر کدام خواص خاص خود را دارند</p>
<p className=""data-aos="fade-right">طلا معمولاً گران‌تر از سایر فلزات است، که می‌تواند هزینه ساخت جواهرات را افزایش دهد</p>

<h3 className="centered py-3"data-aos="fade-up">نقره</h3>
<p className=""data-aos="fade-right">نقره به طور کلی با قیمت پایین‌تری نسبت به طلا در دسترس است و یک گزینه بسیار محبوب برای جواهرات اقتصادی می‌باشد
نقره دارای درخشندگی بسیار خوبی است و برای طراحی‌های زیبا و مدرن مناسب است.</p>
<p className=""data-aos="fade-right">نقره ممکن است با گذشت زمان زنگ بزند و نیاز به مراقبت بیشتری داشته باشد.
به‌طور کلی به اندازه طلا پایدار نیست و ممکن است زودتر آسیب ببیند.</p>

</div>




    </section>  
  );  
};  

export default Gallery; 
import { React, useState, useEffect } from 'react'; // ایمپورت ری‌اکت و هوک‌ها | Import React and hooks
import Header from "./components/Header/Header"; // کامپوننت هدر صفحه | Page header component
import Article from "./components/Article/Article"; // بخش مقاله یا معرفی | Article or intro section
import Gallery from './components/Gallery/Gallery.js'; // گالری تصاویر محصولات | Product image gallery
import Card from './components/card/Card.js'; // کارت‌های ویژگی محصول | Product feature cards
import ImageSlider from "./components/imageslider/ImageSlider"; // اسلایدر تصاویر اول | First image slider
import ImageSliderr from "./components/imageslider/ImageSliderr"; // اسلایدر تصاویر دوم | Second image slider
import Footer from './components/footer/Footer.js'; // فوتر صفحه | Page footer
import { FaArrowUp } from 'react-icons/fa';  // آیکن فلش برای اسکرول به بالا | Arrow icon for scroll-to-top

function App() {
   const [isVisible, setIsVisible] = useState(false); // وضعیت نمایش دکمه اسکرول | Scroll button visibility

    const handleScroll = () => {  // بررسی موقعیت اسکرول برای نمایش دکمه | Check scroll position to show button
        if (window.pageYOffset > 400) {  
            setIsVisible(true);  
        } else {  
            setIsVisible(false);  
        }  
    };  

    useEffect(() => {  // افزودن و حذف رویداد اسکرول | Add/remove scroll event listener
        window.addEventListener('scroll', handleScroll);  
        return () => {  
            window.removeEventListener('scroll', handleScroll);  
        };  
    }, []);  

    const scrollToTop = () => {  // تابع اسکرول نرم به بالا | Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });  
    };  

    const [isSticky,] = useState(false);  // وضعیت چسبندگی نوار ناوبری | Sticky navbar state

  return (
<div className="containerapp" style={{ maxWidth: '100%', padding: '0' }}>  {/* کانتینر اصلی اپلیکیشن | Main app container */}

    <div className="App">
 <nav className={`navbar custom-bg navbar-dark navbar-expand-sm ${isSticky ? 'sticky-top' : ''}`}>  {/* نوار ناوبری با حالت چسبنده | Navbar with sticky option */}
   <div className='container'>
          <a href='/' className="navbar-brand text-white">GEM</a>  {/* برند نوار ناوبری | Navbar brand */}
          <button className='navbar-toggler ' type='button' data-bs-toggle="collapse"
            data-bs-target='#myToggleNav' aria-controls='myToggleNav'
            aria-expanded="false" aria-label='Toggle Navigation'>  {/* دکمه باز و بسته کردن منو | Toggle menu button */}
            <span className='navbar-toggler-icon '></span>
          </button>
        
          <div className='collapse navbar-collapse justify-content-center' id="myToggleNav">  {/* منوی ناوبری قابل جمع شدن | Collapsible navbar menu */}
  <div className='navbar-nav'>  
    <a className="nav-item nav-link text-white" href='/'>خانه</a>  {/* لینک صفحه خانه | Home link*/}
    <a className="nav-item nav-link text-white" href='/'>ثبت سفارش</a>  {/* لینک ثبت سفارش | Order link*/}
    <a className="nav-item nav-link text-white" href='#slider'>نمونه کارها</a>  {/* لینک نمونه کارها | Portfolio link*/}
    <a className="nav-item nav-link text-white" href='#footer'>درباره ما</a> {/* لینک درباره ما | About us link*/}
  </div>  
</div>
        </div>
      </nav>

        <Header />  {/* کامپوننت هدر | Header component */}
        <Article />  {/* بخش مقاله معرفی | Intro article section */}
        <Card />  {/* کارت‌های نماد و ویژگی محصول | Symbolic product feature cards */}
        <ImageSlider />  {/* اسلایدر اول تصاویر | First image slider */}
        <ImageSliderr />  {/* اسلایدر دوم تصاویر | Second image slider */}
        <Gallery />  {/* گالری تصاویر جواهرات | Jewelry image gallery */}
        <Footer />  {/* فوتر صفحه | Page footer */}

      {isVisible && ( // نمایش دکمه اسکرول فقط در صورت فعال بودن | Show scroll button only if visible
                <a href="/" className="to-top" onClick={scrollToTop}>  
                    <i className="fas fa-chevron-up"> <FaArrowUp size={24} color="black" /> </i>  
                </a>  
            )} 
    </div>
    </div>  
  );
}

export default App; 

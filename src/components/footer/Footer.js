import { React, useEffect } from 'react';  
import 'bootstrap/dist/css/bootstrap.min.css';  // ایمپورت استایل‌های ضروری بوت‌استرپ // Import essential Bootstrap CSS
import AOS from 'aos';  // ایمپورت کتابخانه انیمیشن‌های اسکرول // Import AOS animation library
import 'aos/dist/aos.css';  // ایمپورت استایل‌های AOS // Import AOS CSS

const Footer = () => {  
    /* 
    مقداردهی اولیه AOS هنگام مونتاژ کامپوننت 
    Initialize AOS when component mounts 
    */
    useEffect(() => {  
        AOS.init({ duration: 1000 });  // تنظیم مدت زمان پیش‌فرض انیمیشن‌ها // Set default animation duration
    }, []);  

    return (  
        <div>  
            {/* 
            بخش اصلی فوتر با استایل مرکزی 
            Main footer section with centered styling 
            */}
            <div className="footer text-center mt-5" id='footer'>  
                {/* 
                کانتینر بوت‌استرپ برای محتوای شبکه‌بندی شده 
                Bootstrap container for grid content 
                */}
                <div className="container">  
                    {/* 
                    ردیف با فاصله‌گذاری عمودی بین ستون‌ها 
                    Row with vertical spacing between columns 
                    */}
                    <div className="row g-3"> {/* اضافه کردن کلاس g-3 به row برای فاصله‌ی بین ستون‌ها */}  
                        {/* 
                        ستون 1: بخش درباره ما با انیمیشن fade-left 
                        Column 1: About us section with fade-left animation 
                        */}
                        <div className="col-md-4 text-containerr py-3" data-aos="fade-left">  
                            <h4>درباره ما</h4>  
                            <p>  
                                شرکت جواهرسازی الماس با هدف ارائه زیورآلات با کیفیت بالا و طراحی‌های منحصر به فرد تأسیس شده است.  
                            </p>  
                            <p>  
                                هدف ما ارتقای تجربه مشتریان عزیز و تأمین نیازهای مختلف آنها در زمینه جواهرات است.  
                            </p>  
                        </div>  

                        {/* 
                        ستون 2: بخش لینک‌های ناوبری با انیمیشن fade-up 
                        Column 2: Navigation links section with fade-up animation 
                        */}
                        <div className="col-md-4 text-containerr py-3" data-aos="fade-up">  
                            <h4>لینک‌ها</h4>  
                            {/* 
                            لیست بدون استایل پیش‌فرض 
                            Unstyled list 
                            */}
                            <ul className="list-unstyled px-2">  
                                <li><a href="/">خانه</a></li>  
                                <li><a href="/">درباره</a></li>  
                                <li><a href="/">خدمات</a></li>  
                                <li><a href="/">تماس با ما</a></li>  
                            </ul>  
                        </div>  

                        {/* 
                        ستون 3: اطلاعات تماس با انیمیشن fade-right 
                        Column 3: Contact information with fade-right animation 
                        */}
                        <div className="col-md-4 text-containerr py-3" data-aos="fade-right">  
                            <h4>اطلاعات تماس</h4>  
                            <p>تلفن: <a href="tel:+1234567890">05234 567 899</a></p>  
                            <p>آدرس: خیابان سمنان, جنب ساختمان پزشکان</p>  
                        </div>  
                    </div>  
                </div>  
            </div>  
        </div>  
    );  
};  

// صادرات کامپوننت فوتر به عنوان پیش‌فرض
// Export footer component as default
export default Footer;
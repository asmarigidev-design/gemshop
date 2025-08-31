import {React, useEffect } from 'react';
import tblue from './img/tblue.jpg';  
import sblue from './img/sblue.jpg';  
import tgreen from './img/tgreen.jfif';  
import sgreen from './img/sgreen.jfif';  
import ssor from './img/ssor.jpg';  
import tsor from './img/tsor.jpg';  
import mor from './img/mor.jfif'; 
import tmor from './img/tmor.jpg'; 
import tyellow from './img/tyellow.jpg';  
import syellow from './img/syellow.jfif';  
import spink from './img/spink.jfif';  
import tpink from './img/tpink.webp';  
import swhite from './img/swhite.jpg'; 
import twhite from './img/twhite.webp'; 
import sfi from './img/sfi.jfif';  
import tfi from './img/tfi.jfif';  
import sorang from './img/sorang.jfif'; 
import torang from './img/torang.jfif'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

function Card() {
     useEffect(()=>{
          AOS.init(
            { duration: 1000}
           );
        },[])


      
  return (
    <div>
      <section className="quotes py-5 my-5" id='cardd'>
        <div className="container">
          <div className="row my-5">
            <div className="col d-flex flex-wrap text-uppercase justify-content-center" data-aos="fade-up">
              <h1 className="font-weight-bold align-self-center mx-1">سنگهای</h1>
              <h1 className="section-title-special mx-1">نمادین</h1>
            </div>
          </div>
          <div className="row ">
            <div className="col-10 mx-auto my-5 col-md-6 col-lg-4">
              <div className="card" data-aos="fade-left">
                <img src={tblue} className="card-img card-img-top" alt="American car" />
                <div className="card-body text-center customer-card-body">
                  <img src={sblue} className="rounded-circle customer-img" alt="Customer" />
                  <div className="card-title">
                    <h5 className="customer-name text-capitalize text-primary">یاقوت کبود</h5>
                  </div>
                  <h6 className="customer-job text-capitalize text-dark">حکمت و عقل: رنگ آبی یاقوت کبود با عقل، دانش و فهم ارتباط دارد. بسیاری از فرهنگ‌ها آن را به عنوان سنگ حکمت می‌شناسند.

وفاداری و صداقت: این گوهر به عنوان نماد صداقت و وفاداری نیز مطرح است، به همین دلیل در انگشترهای نامزدی و ازدواج محبوبیت دارد.

روحانیت و عرفان: در بسیاری از فرهنگ‌ها، یاقوت کبود به عنوان سنگی مقدس و متبرک شناخته می‌شود که به رشد روحانی و ارتباط با نیروهای معنوی کمک می‌کند.

آرامش و صلح: رنگ آبی یاقوت کبود اغلب با احساس آرامش و صلح داخلی ارتباط دارد.</h6>
                </div>
              </div>
            </div>
            <div className="col-10 mx-auto my-5 col-md-6 col-lg-4">
              <div className="card" data-aos="fade-right">
                <img src={tmor} className="card-img card-img-top" alt="American car" />
                <div className="card-body text-center customer-card-body">
                  <img src={mor} className="rounded-circle customer-img" alt="Customer" />
                  <div className="card-title">
                    <h4 className="customer-name text-capitalize"> مروارید</h4>
                  </div>
                  <h6 className="customer-job text-capitalize text-dark">  
                  خلوص و پاکی: مرواریدها به دلیل درخشندگی و رنگ سفید یا کرم خود، نمادی از خلوص و پاکی هستند.

عشق و احساسات: نماد عشق، عواطف و احساسات عمیق نیز شناخته می‌شوند.

دانش و حکمت: در برخی فرهنگ‌ها، مرواریدها به عنوان نماد دانش و حکمت مورد توجه قرار می‌گیرند.

زیبایی طبیعی: مرواریدها به دلیل شکل‌گیری طبیعی‌شان، نماد زیبایی طبیعی و طبیعی‌گرایی هستند.

قدرت و ثروت: در تاریخ، مرواریدها اغلب به عنوان     
مروارید به عنوان سنگی شفابخش و آرامش بخش در مدیتیشن و تمرینات روحانی استفاده می‌شود  
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-10 mx-auto my-5 col-md-6 col-lg-4">
              <div className="card" data-aos="fade-left">
                <img src={tgreen} className="card-img card-img-top" alt="American car" />
                <div className="card-body text-center customer-card-body">
                  <img src={sgreen} className="rounded-circle customer-img" alt="Customer" />
                  <div className="card-title">
                    <h4 className="customer-name text-capitalize text-success">زمرد</h4>
                  </div>
                  <h6 className="customer-job text-capitalize text-dark">عشق و وفاداری: زمرد اغلب به عنوان نماد عشق، وفاداری و تعهد مورد استفاده قرار می‌گیرد.

زندگی و رشد: رنگ سبز زمرد با طبیعت، بهار و رشد ارتباط دارد و به عنوان نماد زندگی و باززایی شناخته می‌شود.

بخت و اقبال: در برخی از فرهنگ‌ها، زمرد به عنوان سنگ خوش‌شانسی و افزایش بخت و اقبال مورد توجه قرار گرفته است.

حکمت و دانش: زمرد نیز به عنوان نماد دانش و حکمت در برخی فرهنگ‌ها مورد احترام است.

حفاظت و امنیت: این گوهر به عنوان محافظ در برابر انرژی‌های منفی و نیروهای مضر شناخته می‌شود.</h6>
                 
                </div>
              </div>
            </div>
            <div className="col-10 mx-auto my-5 col-md-6 col-lg-4">
              <div className="card" data-aos="fade-right">
                <img src={tsor} className="card-img card-img-top" alt="American car" />
                <div className="card-body text-center customer-card-body">
                  <img src={ssor} className="rounded-circle customer-img" alt="Customer" />
                  <div className="card-title">
                    <h4 className="customer-name text-capitalize text-danger">یاقوت سرخ</h4>
                  </div>
                  <h6 className="customer-job text-capitalize text-dark">عشق و اشتیاق: یاقوت سرخ به دلیل رنگ قرمز زنده خود، نمادی از عشق و اشتیاق است.

قدرت و انرژی: این گوهر نماد قدرت، شجاعت و انرژی است و اغلب به عنوان سنگ رهبران و پادشاهان مورد استفاده قرار می‌گیرد.

حفاظت و امنیت: یاقوت سرخ به عنوان سنگی که می‌تواند از صاحب خود در برابر خطرات و انرژی‌های منفی محافظت کند، شناخته می‌شود.

شجاعت و اراده: این گوهر به دلیل ارتباطش با شجاعت و اراده قوی، برای تقویت اعتماد به نفس و قوی‌تر شدن استفاده می‌شود.
           
قدرت و انرژی: یاقوت سرخ نمادی از قدرت، شجاعت و انرژی است و اغلب به عنوان سنگ رهبران و پادشاهان شناخته می‌شود.   </h6> 
                </div>
              </div>
            </div>
            <div className="col-10 mx-auto my-5 col-md-6 col-lg-4">
              <div className="card" data-aos="fade-left">
                <img src={tpink} className="card-img card-img-top" alt="American car" />
                <div className="card-body text-center customer-card-body">
                  <img src={spink} className="rounded-circle customer-img" alt="Customer" />
                  <div className="card-title pin">
                    <h4 className="pin customer-name text-capitalize ">کوارتزصورتی</h4>
                  </div>
                  <h6 className="customer-job text-capitalize text-dark">عشق و محبت: کوارتز صورتی به عنوان سنگ عشق شناخته می‌شود و نماد عشق بی‌قید و شرط، محبت و عواطف عمیق است.

شفا و آرامش: این گوهر به عنوان سنگ شفا دهنده و آرامش بخش شناخته می‌شود و برای کاهش استرسظمفید است.

حساسیت و همدلی:  پرورش حساسیت، همدلی و ارتباطات عاطفی کمک می‌کند.

تقویت قلب: این سنگ اغلب برای انرژی قلبی و بهبود عواطف استفاده می‌شود.

زیبایی و جذابیت: کوارتز صورتی نماد زیبایی طبیعی و جذابیت است و به افزایش اعتماد به نفس و جذابیت فردی کمک می‌کند. به عنوان سنگی مقدس در فرهنگ‌هاشناخته شده است.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-10 mx-auto my-5 col-md-6 col-lg-4">
              <div className="card" data-aos="fade-right">
                <img src={twhite} className="card-img card-img-top" alt="American car" />
                <div className="card-body text-center customer-card-body">
                  <img src={swhite} className="rounded-circle customer-img" alt="Customer" />
                  <div className="card-title">
                    <h4 className="customer-name text-capitalize">برلیان</h4>
                  </div>
                  <h6 className="customer-job text-capitalize text-dark">جاودانگی و ابدیت: به دلیل سختی و دوام بالای الماس، برلیان نمادی از جاودانگی و پیوندهای ابدی است.

عشق و تعهد: برلیان به دلیل درخشندگی و زیبایی فوق‌العاده، نمادی از عشق عمیق و تعهد پایدار است. به همین دلیل، در انگشترهای نامزدی و ازدواج بسیار محبوب است.

پاکی و بی‌گناهی: شفافیت و درخشندگی الماس باعث شده است که برلیان نماد پاکی، صداقت و بی‌گناهی باشد.

قدرت و اعتبار: به دلیل ارزش و نادر بودن، برلیان نمادی از قدرت، اعتبار و موفقیت است.

روشنایی و روشنگری: درخشندگی برلیان نمادی از روشنایی و روشنگری است که به رفع تاریکی‌ها و گمراهی‌ها کمک می‌کند
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-10 mx-auto my-5 col-md-6 col-lg-4">
              <div className="card" data-aos="fade-left">
                <img src={tyellow} className="card-img card-img-top" alt="American car" />
                <div className="card-body text-center customer-card-body">
                  <img src={syellow} className="rounded-circle customer-img" alt="Customer" />
                  <div className="card-title">
                    <h4 className="customer-name text-capitalize text-warning">یاقوت زرد</h4>
                  </div>
                  <h6 className="customer-job text-capitalize text-dark">خوش‌شانسی و ثروت: یاقوت زرد به عنوان نماد ثروت، رفاه و افزایش خوش‌شانسی شناخته می‌شود.

شادی و خوش‌بینی: رنگ زرد این سنگ نمادی از شادی، خوش‌بینی و انرژی مثبت است.

روشنایی و روشنگری: یاقوت زرد به عنوان نماد روشنایی، روشنگری و آگاهی معنوی مورد توجه قرار می‌گیرد.

شفا و انرژی: این گوهر به عنوان سنگی شفابخش و تقویت کننده‌ی انرژی فیزیکی و روحانی شناخته می‌شود.

خودباوری و اعتماد به نفس: یاقوت زرد به افزایش خودباوری فرد کمک می‌کند.
که به بهبود انرژی‌های فیزیکی و روحانی کمک می‌کند.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-10 mx-auto my-5 col-md-6 col-lg-4">
              <div className="card" data-aos="fade-right">
                <img src={torang} className="card-img card-img-top" alt="American car" />
                <div className="card-body text-center customer-card-body">
                  <img src={sorang} className="rounded-circle customer-img" alt="Customer" />
                  <div className="card-title pinn">
                    <h4 className=" customer-name text-capitalize ">کهربا</h4>
                  </div>
                  <h6 className="customer-job text-capitalize text-dark">پایداری و گذشته: به دلیل قدمت و فرآیند طولانی تشکیل آن، کهربا نمادی از پایداری، تاریخ و ارتباط با گذشته است.

شفا و انرژی: کهربا به عنوان سنگی شفابخش شناخته می‌شود که می‌تواند انرژی مثبت را تقویت کرده و از استرس و اضطراب بکاهد.

حفاظت: کهربا به عنوان سنگی محافظ شناخته می‌شود که می‌تواند از صاحب خود در برابر انرژی‌های منفی و خطرات محافظت کند.

خلاقیت و انگیزه: این گوهر به تقویت خلاقیت و انگیزه فردی کمک می‌کند.

ثروت و خوشبختی: کهربا به عنوان نمادی از ثروت، رفاه و خوشبختی نیز مطرح است.
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-10 mx-auto my-5 col-md-6 col-lg-4">
              <div className="card" data-aos="fade-left">
                <img src={tfi} className="card-img card-img-top" alt="American car" />
                <div className="card-body text-center customer-card-body">
                  <img src={sfi} className="rounded-circle customer-img" alt="Customer" />
                  <div className="card-title">
                    <h4 className="customer-name text-capitalize text-info">فیروزه</h4>
                  </div>
                  <h6 className="customer-job text-capitalize text-dark"> حفاظت و ایمنی: فیروزه به عنوان سنگی محافظ شناخته می‌شود که می‌تواند از صاحب خود در برابر انرژی‌های منفی و خطرات محافظت کند.

شفا و انرژی: این گوهر به عنوان سنگ شفا دهنده و تقویت کننده‌ی انرژی فیزیکی و روحانی شناخته می‌شود.

حکمت و دانش: فیروزه به عنوان نماد حکمت و دانش مورد توجه قرار می‌گیرد و به تقویت تفکر و بینش کمک می‌کند.

دوستی و عشق: فیروزه به عنوان سنگی که دوستی، عشق و تفاهم را تقویت می‌کند، شناخته می‌شود.

آرامش و صلح: رنگ آبی فیروزه اغلب با احساس آرامش و صلح داخلی ارتباط دارد.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Card;

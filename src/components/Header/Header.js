import {React, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGem } from 'react-icons/fa';    
function Header() {   
     useEffect(()=>{
          AOS.init(
            { duration: 1000}
           );
        },[])
      

    return (
        <div>
              <header className="header" id="header">
                <div className="container-fluid "  >
                  <div className="row height-max align-items-center " data-aos="fade-up">
<div className="gem ">
<FaGem size={150} color="white" />  {/* استفاده از آیکن الماس | Using diamond icon */}
 

</div>
                  <div className="col-md-9 ml-auto text-right pr-7" >  
            <h5 className="centered container text-uppercase my-2 title text-nowrap ce">  
                بامجموعه جواهرات الماس  
            </h5>  
            <h5 className="centered container text-uppercase my-2 titlee text-nowrap ce">  
                درخشش, زیبایی, هنر  
            </h5>  
            <h5 className="centered container text-uppercase  titleee text-nowrap ce">  
                و عشق در دستان شما  
            </h5>  
        </div>  
                  </div>
                </div>
              </header>
        
        </div>
        
          );
        }
export default Header; 
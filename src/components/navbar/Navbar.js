import {React,useState,useEffect} from 'react'; // ایمپورت ری‌اکت و هوک‌ها برای مدیریت وضعیت و افکت‌ها | Import React and hooks for state and effects

function Navbar() {
    const [isSticky, setSticky] = useState(false);  // وضعیت چسبندگی نوار ناوبری | Sticky navbar state

  return (
<div id="navbar">  
            <nav className={`navbar bg-yellow navbar-dark navbar-expand-sm ${isSticky ? 'sticky-top' : ''}`}> 
                <div className='container'>  
                    <a href='/' className="navbar-brand">AYLA</a> 
                    <button className='navbar-toggler' type='button' data-bs-toggle="collapse"  
                        data-bs-target='#myToggleNav' aria-controls='myToggleNav'  
                        aria-expanded="false" aria-label='Toggle Navigation'> 
                        <span className='navbar-toggler-icon'></span>  
                    </button>  
                    <div className='collapse navbar-collapse' id="myToggleNav">  
                        <div className='navbar-nav ml-auto'>  
                            <a className="nav-item nav-link active" href='/'>خانه</a>    
                            <a className="nav-item nav-link" href='/'>ثبت سفارش</a>   
                            <a className="nav-item nav-link" href='/'>نمونه کارها</a> 
                            <a className="nav-item nav-link  nav-fill" href='/'> </a>
                    </div>  </div>
                </div>  
            </nav> 
</div>

  );
}

export default Navbar; 

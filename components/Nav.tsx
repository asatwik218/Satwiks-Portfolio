import React from 'react';
import Image from 'next/image';


const Nav:React.FC = () => {
    
    return <nav className='mx-5 my-3 flex justify-between'>
        <Image
          src="/images/logo.jpeg"
          alt="promptopia logo"
          width={70}
          height={70}
          className="object-cover  "
        />
        <div>
            
        </div>
    </nav>
}
export default Nav;
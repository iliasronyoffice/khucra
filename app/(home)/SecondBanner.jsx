import banner1 from '../../public/1.png';
import banner2 from '../../public/2.png';     
import banner3 from '../../public/3.png';     
import Image from 'next/image';

export default function SecondBanner() {
  return (
    <div className='grid grid-cols-3 gap-5 container mx-auto px-4 mt-8 mb-14'>
         <div className="banner1">
        <Image src={banner1} alt="Banner 1" className="w-full h-auto rounded-xl"/>
      </div>
      <div className="banner2">
        <Image src={banner2} alt="Banner 2" className="w-full h-auto rounded-xl"/>              
         </div>
      <div className="banner3">
        <Image src={banner3} alt="Banner 3" className="w-full h-auto rounded-xl"/>              
         </div>
    </div>
  )
}

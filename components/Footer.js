import React from 'react';
import Image from 'next/image';
import logo from '../public/assets/logo_1.png';
import instagram from '../public/assets/instagram.png';
import facebook from '../public/assets/facebook.png';
import tiktok from '../public/assets/tiktok.png';
import linkedin from '../public/assets/linkedin.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#DDDBF5]/50 to-[#E0A4D7]/40 py-20 px-20 ">
        <div className="flex flex-row">
            <div>
                <Image src={logo} alt="Logo" className="flex ml-84 mr-20 mt-84 w-[178px] h-[53px]" />
            </div>
            <div className="flex flex-col ml-10">
                <div className="text-2xl font-HeaderFont font-semibold mb-9">Connect with us</div>
                <div className="grid grid-rows-2 grid-cols-2 gap-8 mb-10">
                    {/* add gap stuff to grid*/}
                    <div className="flex flex-row gap-2">
                        <Image src={instagram} alt="Instagram" className='flex flex-row w-[24px] h-[24px]'></Image>
                        <a href="https://www.instagram.com/queenswic/" aria-label="Instagram" class="text-lg font-HeaderFont text-gray-600 hover:text-gray-800">Instagram</a>
                    </div>                
                    <div className="flex flex-row gap-2">
                        <Image src={tiktok} alt="Tiktok" className='flex flex-row w-[24px] h-[24px]'></Image>
                        <a href="https://www.tiktok.com/@queenswic" aria-label="TikTok" class="text-lg font-HeaderFont text-gray-600 hover:text-gray-800">TikTok</a>
                    </div>                
                    <div className="flex flex-row gap-2">
                        <Image src={linkedin} alt="LinkedIn" className='flex flex-row w-[24px] h-[24px]'></Image>
                        <a href="https://ca.linkedin.com/company/queens-qwic" aria-label="LinkedIn" class="text-lg font-HeaderFont text-gray-600 hover:text-gray-800">LinkedIn</a>
                    </div>                
                    <div className="flex flex-row gap-2">
                        <Image src={facebook} alt="Facebook" className='flex flex-row w-[24px] h-[24px]'></Image>
                        <a href="https://www.facebook.com/QueensWIC/" aria-label="Facebook" class="text-lg font-HeaderFont text-gray-600 hover:text-gray-800">Facebook</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="h-full w-full">
            <div className="flex justify-center mt-12 w-full h-[0.1px] border border-[#202632]"></div>
            <div className='flex flex-row justify-between mt-4'>
                <div className="self-end">© 2024 Queen's Women In Computing</div> 
                {/* add gap stuff */}
                <div className='flex flex-row self-end gap-9'>          
                    <Image src={instagram} href="https://www.instagram.com/queenswic/" alt="Instagram" className='flex flex-row w-[24px] h-[24px]' ></Image>
                    <Image src={tiktok} href="https://www.tiktok.com/@queenswic" alt="Tiktok" className='flex flex-row w-[24px] h-[24px]'></Image>
                    <Image src={linkedin} href="https://ca.linkedin.com/company/queens-qwic" alt="LinkedIn" className='flex flex-row w-[24px] h-[24px]'></Image>
                    <Image src={facebook} href="https://www.facebook.com/QueensWIC/" alt="Facebook" className='flex flex-row w-[24px] h-[24px]'></Image>
                </div>
            </div>
            
        </div>
    </footer>
    );
};

export default Footer;
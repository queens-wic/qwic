import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CardImgBlue from "@/components/cards/card-img-blue";
import CardImgPink from "@/components/cards/card-img-pink";
import CardImgPurple from "@/components/cards/card-img-purple";
import EventBox from "./event-box";
import Image from "next/image";
import img from "@/public/assets/img_7.png";

const Page = () => {
  return (
    <div className='bg-[#F5F5F5] min-h-screen h-full'>

      <div className="p-4"/>
      <Header/>
      <div className="mx-36">

      <div className="p-10"/>
        <h1 className="text-[40px] font-bold">Upcoming Events</h1>
        <div className="p-10"/>
        <div className="flex justify-start space-x-56">
        <EventBox
            card={<CardImgPink/>}
            date={'Monday Aug 26'}
            name={'Event Name'}
            info={'Event Info'}
        />
          <EventBox
            card={<CardImgBlue/>}
            date={'Monday Aug 26'}
            name={'Event Name'}
            info={'Event Info'}
        />
        <EventBox
            card={<CardImgPurple/>}
            date={'Monday Aug 26'}
            name={'Event Name'}
            info={'Event Info'}
          />
        </div>

        <div className="p-10"/>

        <hr className="w-full border-t border-black my-4" />

        <div className="p-10"/>
        <h1 className="text-[40px] font-bold">Previous Events</h1>
        <div className="p-10"/>
        <div className="flex justify-start space-x-56">
        <EventBox
            card={<CardImgPink/>}
            date={'Monday Aug 26'}
            name={'Event Name'}
            info={'Event Info'}
        />
          <EventBox
            card={<CardImgBlue/>}
            date={'Monday Aug 26'}
            name={'Event Name'}
            info={'Event Info'}
        />
        <EventBox
            card={<CardImgPurple/>}
            date={'Monday Aug 26'}
            name={'Event Name'}
            info={'Event Info'}
          />
        </div>

        <div className="h-24"></div>

        <div className="flex justify-start space-x-56">
        <EventBox
            card={<CardImgPink/>}
            date={'Monday Aug 26'}
            name={'Event Name'}
            info={'Event Info'}
        />
          <EventBox
            card={<CardImgBlue/>}
            date={'Monday Aug 26'}
            name={'Event Name'}
            info={'Event Info'}
        />
        <EventBox
            card={<CardImgPurple/>}
            date={'Monday Aug 26'}
            name={'Event Name'}
            info={'Event Info'}
          />
        </div>


      </div>

      <div className="h-48"></div>
      <Footer/>

    </div>
  )
}

export default Page;
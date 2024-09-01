import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CardImgBlue from "@/components/cards/card-img-blue";
import CardImgPink from "@/components/cards/card-img-pink";
import CardImgPurple from "@/components/cards/card-img-purple";
import EventBox from "./event-box";
import gitpub from "@/public/assets/gitpub.jpg";
import hackher from "@/public/assets/hackher.jpg";
import spinco_feb from "@/public/assets/spinco_feb.jpg";
import techpanel from "@/public/assets/techpanel.jpg";
import spinco_nov from "@/public/assets/spinco_nov.jpg";
import braceletmaking from "@/public/assets/braceletmaking.jpg";
import IgButtonPink from "./button-pink";
import IgButtonBlue from "./button-blue";


const Page = () => {
  return (
    <div className='bg-[#F5F5F5] min-h-screen h-full'>

      <div className="p-4"/>
      <Header/>
      <div className="mx-36">

      <div className="p-10"/>
        <h1 className="text-[40px] font-bold">Upcoming Events</h1>
        <div className="p-6"/>
        <div>
          <p>Stay tuned for Upcoming Events!</p>
          <p>Keep an eye on our Instagram for more details...</p>
          <div className="flex flex-row justify-start">
            <IgButtonPink 
            username={'@queenswic'}
            link={'https://www.instagram.com/queenswic/'}
            />
            <IgButtonBlue 
            username={'@qwic_community'}
            link={'https://www.instagram.com/qwic_community/'}
            />
          </div>
        </div>

        <div className="p-6"/>

        <hr className="w-full border-t border-black my-4" />

        <div className="p-6"/>
        <h1 className="text-[40px] font-bold">Previous Events</h1>
        <div className="p-6"/>
        <div className="flex justify-start space-x-56">
        <EventBox
            card={<CardImgPink img={gitpub}/>}
            date={'April 3rd, 2024'}
            name={'GitPub'}
            info={'Join us for a night out of dancing and singing at DAFT brewing! Tickets are $15 through the link in our Instagram bio.'}
        />
          <EventBox
            card={<CardImgBlue img={hackher}/>}
            date={'March 9-10th, 2024'}
            name={'HackHer'}
            info={'QWIC\'s annual Hackathon is coming this March! Applications open Feb 2, 2024. Stay tuned for panels, sponsors and other details!'}
        />
        <EventBox
            card={<CardImgPurple img={spinco_feb}/>}
            date={'February 11th, 2024'}
            name={'QWIC x SpinCo'}
            info={'We had such a blast last semester at spinco that WE HAD to bring it back! Tickets are live in our Instagram bio, get them before they sell out!'}
          />
        </div>

        <div className="h-24"></div>

        <div className="flex justify-start space-x-56">
        <EventBox
            card={<CardImgPink img={techpanel}/>}
            date={'November 15th, 2023'}
            name={'Technical Internship Panel'}
            info={'Interested in learning what goes on during an internship? Meet panelists from companies such as Microsoft, Whitehorse Liquidity Partners, Bank of Canada, Toronto Blue Jays and more!'}
        />
          <EventBox
            card={<CardImgBlue img={spinco_nov}/>}
            date={'November 4th, 2023'}
            name={'QWIC x SpinCo'}
            info={'QWIC takes over SpinCo! Going to be super fun with great music and even better vibes. Tickets are $15 through the link in our Instagram bio, get them before they sell out!'}
        />
        <EventBox
            card={<CardImgPurple img={braceletmaking}/>}
            date={'September 16th, 2023'}
            name={'Bracelet Making'}
            info={'Kick the year off by joining us at MacDonald Park from 1-3pm for some bracelet making! All are welcome, come meet people or bring a friend!'}
          />
        </div>


      </div>

      <div className="h-48"></div>
      <Footer/>

    </div>
  )
}

export default Page;
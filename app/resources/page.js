import React from 'react'
import img from '@/public/assets/img_7.png'
import ResourceBoxBlue from './ResourceBoxBlue'
import ResourceBoxPink from './ResourceBoxPink'
import ResourceBoxPurple from './ResourceBoxPurple'



const page = () => {
  return (
    <div className="h-screen">
      <div className="mx-36">

        <h1 className="text-[40px] font-bold">Resources</h1>

        <div className="p-16"/>

        {/* ITEM 1 */}
        <ResourceBoxBlue
          img = {img}
          title = {'Resource title'}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenim ad minim veniam Lorem ipsum dolor sit amet consectetur adipiscing elit sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam'}
          id = {'HS'}
        />

        <div className="p-16"/>

        {/* ITEM 2 */}
        <ResourceBoxPink
          img = {img}
          title = {'Resource title'}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenim ad minim veniam Lorem ipsum dolor sit amet consectetur adipiscing elit sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam'}
          id = {'HS'}
        />

        <div className="p-16"/>

        {/* ITEM 3 */}
        <ResourceBoxPurple
          img = {img}
          title = {'Resource title'}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenim ad minim veniam Lorem ipsum dolor sit amet consectetur adipiscing elit sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam'}
          id = {'HS'}
        />

        <div className="p-16"/>
    
      </div>
    </div>
  )
}

export default page

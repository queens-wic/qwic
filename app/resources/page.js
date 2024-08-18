import React from 'react'
import img from '@/public/assets/img_7.png'
import ResourceBoxBlue from './ResourceBoxBlue'
import ResourceBoxPink from './ResourceBoxPink'
import ResourceBoxPurple from './ResourceBoxPurple'
import FilterBar from './FilterBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const resources = [
  {
    id: 'high-school-students',
    component: (
      <ResourceBoxBlue
        img={img}
        title={'Resource title'}
        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        id={'high-school-students'}
      />
    ),
  },
  {
    id: 'incoming-students',
    component: (
      <ResourceBoxPink
        img={img}
        title={'Resource title'}
        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        id={'incoming-students'}
      />
    ),
  },
  {
    id: 'computing-at-queens',
    component: (
      <ResourceBoxPurple
        img={img}
        title={'Resource title'}
        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        id={'computing-at-queens'}
      />
    ),
  },
];

const Page = () => {
  return (
    <div className='bg-[#F5F5F5] min-h-screen h-full'>
      <div className="p-4"/>
      <Header/>
      <div className="mx-36">

        <div className="p-10"/>
        <h1 className="text-[40px] font-bold">Resources</h1>
        <div className="p-10"/>
        <FilterBar/>

        <div className="p-10"/>
        {resources.map((resource, index) => (
          <React.Fragment key={index}>
            {resource.component}
            <div className="p-16"/>
          </React.Fragment>
        ))}

        <div className="p-32"/>
      </div>
      <Footer/>

    </div>
  )
}

export default Page;


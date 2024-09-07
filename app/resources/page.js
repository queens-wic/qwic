import React from 'react'
import ResourceBoxBlue from './ResourceBoxBlue'
import ResourceBoxPink from './ResourceBoxPink'
import ResourceBoxPurple from './ResourceBoxPurple'
import FilterBar from './FilterBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import girlswhocode from '@/public/assets/girlswhocode.png'
import khanacademy from '@/public/assets/khanacademy.png'
import ywib from '@/public/assets/ywib.png'
import codeorg from '@/public/assets/codeorg.png'
import jack from '@/public/assets/jack.png'
import sws from '@/public/assets/sws.jpeg'
import sass from '@/public/assets/sass.png'
import fourdirections from '@/public/assets/fourdirections.png'
import good2talk from '@/public/assets/good2talk.png'
import mym from '@/public/assets/mym.png'
import rho from '@/public/assets/rho.jpeg'
import onwa from '@/public/assets/onwa.jpeg'
  
  // temporary hard coded data
  // array with each resource is an object with an id and component
const resources = [
  {
    id: 'high-school-students',
    component: (
      <ResourceBoxBlue
        img={girlswhocode}
        title={'Girls Who Code'}
        description={'Offers free programs to help girls from grades 3-12 learn computer science and close the gender gap in technology.'}
        id={'high-school-students'}
        link={'https://girlswhocode.com/'}
      />
    ),
  },
  {
    id: 'high-school-students',
    component: (
      <ResourceBoxPink
        img={khanacademy}
        title={'Khan Academy'}
        description={'Offers free online courses in a wide range of subjects, including math, science, and computer programming, helping students supplement their education.'}
        id={'high-school-students'}
        link={'https://www.khanacademy.org/'}
      />
    ),
  },
  {
    id: 'high-school-students',
    component: (
      <ResourceBoxPurple
        img={ywib}
        title={'Young Women in Business (YWIB)'}
        description={'A network that empowers young women through professional development events, mentorship programs, and leadership opportunities.'}
        id={'high-school-students'}
        link={'https://ywib.ca/'}
      />
    ),
  },
  {
    id: 'high-school-students',
    component: (
      <ResourceBoxBlue
        img={codeorg}
        title={'Code.org'}
        description={'A platform that provides free coding lessons and resources, aiming to make computer science accessible to students of all ages.'}
        id={'high-school-students'}
        link={'https://code.org/'}
      />
    ),
  },
  {
    id: 'high-school-students',
    component: (
      <ResourceBoxBlue
        img={jack}
        title={'Jack.org'}
        description={'A Canadian organization focused on youth mental health, providing resources, peer support, and leadership opportunities for young people to lead mental health initiatives.'}
        id={'high-school-students'}
        link={'https://jack.org/'}
      />
    ),
  },
  {
    id: 'incoming-students',
    component: (
      <ResourceBoxBlue
        img={sws}
        title={'Queen\'s University Student Wellness Services (SWS)'}
        description={'Offers comprehensive health and wellness support, including mental health counseling, medical services, and accessibility services to ensure students thrive academically and personally.'}
        id={'incoming-students'}
        link={'https://www.queensu.ca/studentwellness/'}
      />
    ),
  },
  {
    id: 'incoming-students',
    component: (
      <ResourceBoxBlue
        img={sass}
        title={'Student Academic Success Services (SASS)'}
        description={'Provides academic support through workshops, one-on-one consultations, and resources to help students improve their study skills, writing, and time management.'}
        id={'incoming-students'}
        link={'https://sass.queensu.ca/'}
      />
    ),
  },
  {
    id: 'incoming-students',
    component: (
      <ResourceBoxPink
        img={fourdirections}
        title={'Four Directions Indigenous Student Centre'}
        description={'Provides a welcoming space and support for Indigenous students, offering cultural programming, academic advising, and a sense of community.'}
        id={'incoming-students'}
        link={'https://www.queensu.ca/fourdirections/'}
      />
    ),
  },
  {
    id: 'incoming-students',
    component: (
      <ResourceBoxPurple
        img={good2talk}
        title={'Good2Talk'}
        description={'Good2Talk is a free, confidential support service for Canadian post-secondary students, offering 24/7 counseling and mental health resources. It provides help via phone or text to address student life challenges.'}
        id={'incoming-students'}
        link={'https://good2talk.ca/'}
      />
    ),
  },
  {
    id: 'incoming-students',
    component: (
      <ResourceBoxBlue
        img={mym}
        title={'Mind Your Mind'}
        description={'mindyourmind is a mental health resource for youth, providing tools, information, and interactive activities to help manage stress, mental health, and well-being. The site also connects young people with resources and support in their communities.'}
        id={'incoming-students'}
        link={'https://mindyourmind.ca/'}
      />
    ),
  },
  {
    id: 'incoming-students',
    component: (
      <ResourceBoxPink
        img={rho}
        title={'Rainbow Health Ontario'}
        description={'Rainbow Health Ontario is a resource that promotes the health and well-being of LGBTQ+ communities in Ontario. It offers information, support, and resources to help individuals find inclusive healthcare and mental health services.'}
        id={'incoming-students'}
        link={'https://www.rainbowhealthontario.ca/'}
      />
    ),
  },
  {
    id: 'incoming-students',
    component: (
      <ResourceBoxPurple
        img={onwa}
        title={'Ontario Native Women’s Association'}
        description={'The Ontario Native Women’s Association (ONWA) supports the well-being of Indigenous women and their families in Ontario. It provides resources, advocacy, and programs that focus on health, safety, and empowerment for Indigenous communities.'}
        id={'incoming-students'}
        link={'https://www.onwa.ca/'}
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
        <p className='p-8 px-0 pb-16'>
          Resources focused on academics, mental health and finding community, for incoming and high school students.
        </p>
        {resources
          .map((resource) => ({
            ...resource,
            title: resource.component.props.title  // Extract the title for sorting
          }))
          .sort((a, b) => a.title.localeCompare(b.title))  // Sort the resources alphabetically by title
          .map((resource, index) => (
            <React.Fragment key={index}>
              {resource.component}
              <div className="p-16"/>
            </React.Fragment>
        ))}

        <div className="h-40"/>
      </div>
      <Footer/>

    </div>
  )
}

export default Page;


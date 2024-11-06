import React from "react";
import ResourceBoxBlue from "./ResourceBoxBlue";
import ResourceBoxPink from "./ResourceBoxPink";
import ResourceBoxPurple from "./ResourceBoxPurple";
import FilterBar from "./FilterBar";

import girlswhocode from "@/public/assets/girlswhocode.png";
import khanacademy from "@/public/assets/khanacademy.png";
import ywib from "@/public/assets/ywib.png";
import codeorg from "@/public/assets/codeorg.png";
import jack from "@/public/assets/jack.png";
import sws from "@/public/assets/sws.jpeg";
import sass from "@/public/assets/sass.png";
import fourdirections from "@/public/assets/fourdirections.png";
import good2talk from "@/public/assets/good2talk.png";
import mym from "@/public/assets/mym.png";
import rho from "@/public/assets/rho.jpeg";
import onwa from "@/public/assets/onwa.jpeg";

// temporary hard coded data
// array with each resource is an object with an id and component
const resources = [
  {
    id: "high-school-students",
    component: (
      <ResourceBoxBlue
        img={girlswhocode}
        title={"Girls Who Code"}
        description={
          "Offers free programs to help girls from grades 3-12 learn computer science and close the gender gap in technology."
        }
        id={"high-school-students"}
        link={"https://girlswhocode.com/"}
      />
    ),
  },
  {
    id: "high-school-students",
    component: (
      <ResourceBoxPink
        img={khanacademy}
        title={"Khan Academy"}
        description={
          "Offers free online courses in a wide range of subjects, including math, science, and computer programming, helping students supplement their education."
        }
        id={"high-school-students"}
        link={"https://www.khanacademy.org/"}
      />
    ),
  },
  {
    id: "high-school-students",
    component: (
      <ResourceBoxPurple
        img={ywib}
        title={"Young Women in Business"}
        description={
          "A network that empowers young women through professional development events, mentorship programs, and leadership opportunities."
        }
        id={"high-school-students"}
        link={"https://ywib.ca/"}
      />
    ),
  },
  {
    id: "high-school-students",
    component: (
      <ResourceBoxBlue
        img={codeorg}
        title={"Code.org"}
        description={
          "A platform that provides free coding lessons and resources, aiming to make computer science accessible to students of all ages."
        }
        id={"high-school-students"}
        link={"https://code.org/"}
      />
    ),
  },
  {
    id: "high-school-students",
    component: (
      <ResourceBoxBlue
        img={jack}
        title={"Jack.org"}
        description={
          "A Canadian organization focused on youth mental health, providing resources, peer support, and leadership opportunities for young people to lead mental health initiatives."
        }
        id={"high-school-students"}
        link={"https://jack.org/"}
      />
    ),
  },
  {
    id: "incoming-students",
    component: (
      <ResourceBoxBlue
        img={sws}
        title={"Student Wellness Services"}
        description={
          "Offers comprehensive health and wellness support, including mental health counseling, medical services, and accessibility services to ensure students thrive academically and personally."
        }
        id={"incoming-students"}
        link={"https://www.queensu.ca/studentwellness/"}
      />
    ),
  },
  {
    id: "incoming-students",
    component: (
      <ResourceBoxBlue
        img={sass}
        title={"Student Academic Success Services"}
        description={
          "Provides academic support through workshops, one-on-one consultations, and resources to help students improve their study skills, writing, and time management."
        }
        id={"incoming-students"}
        link={"https://sass.queensu.ca/"}
      />
    ),
  },
  {
    id: "incoming-students",
    component: (
      <ResourceBoxPink
        img={fourdirections}
        title={"Four Directions Indigenous Student Centre"}
        description={
          "Provides a welcoming space and support for Indigenous students, offering cultural programming, academic advising, and a sense of community."
        }
        id={"incoming-students"}
        link={"https://www.queensu.ca/fourdirections/"}
      />
    ),
  },
  {
    id: "incoming-students",
    component: (
      <ResourceBoxPurple
        img={good2talk}
        title={"Good2Talk"}
        description={
          "Good2Talk is a free, confidential support service for Canadian post-secondary students, offering 24/7 via phone or text counseling and mental health resources."
        }
        id={"incoming-students"}
        link={"https://good2talk.ca/"}
      />
    ),
  },
  {
    id: "incoming-students",
    component: (
      <ResourceBoxBlue
        img={mym}
        title={"Mind Your Mind"}
        description={
          "Mind Your Mind is a mental health resource for youth, providing tools, information, and interactive activities to help manage stress, mental health, and well-being."
        }
        id={"incoming-students"}
        link={"https://mindyourmind.ca/"}
      />
    ),
  },
  {
    id: "incoming-students",
    component: (
      <ResourceBoxPink
        img={rho}
        title={"Rainbow Health Ontario"}
        description={
          "Promotes the health and well-being of LGBTQ+ communities in Ontario. Find information, support, and resources for inclusive healthcare and mental health services."
        }
        id={"incoming-students"}
        link={"https://www.rainbowhealthontario.ca/"}
      />
    ),
  },
  {
    id: "incoming-students",
    component: (
      <ResourceBoxPurple
        img={onwa}
        title={"Ontario Native Women’s Association"}
        description={
          "Supports the well-being of Indigenous women and their families. Find resources, advocacy, and programs that focus on health, safety, and empowerment for Indigenous communities."
        }
        id={"incoming-students"}
        link={"https://www.onwa.ca/"}
      />
    ),
  },
];

const Page = () => {
  return (
    <div className="pt-10 mx-4 sm:mx-8 md:mx-16 lg:mx-36">
      {/* Heading */}
      <div className="flex justify-center items-center pt-10">
        <div className="relative w-full">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl mb-3 sm:mb-4 lg:mb-6 font-bold">Resources</h2>
          <div className="z-10 absolute top-0 -left-10 w-44 h-44 bg-light-pink rounded-full mix-blend-multiply filter blur-2xl opacity-95 animate-blob"></div>
          <div className="z-10 absolute right-10 w-44 h-44 bg-light-purple rounded-full filter mix-blend-multiply blur-2xl opacity-95 animate-blob animation-delay-4000"></div>
          <p className="text-secondary-text text-[18px] mt-4">
            Resources focused on academics, mental health and finding community, for incoming and high school students.
          </p>
        </div>
      </div>
      
      {/* Resource list */}
      <div className="mt-16">
        <div className="flex flex-col w-full flex-wrap gap-20
        lg:flex-row lg:justify-between lg:mt-10 lg:mb-10 
        xl:grid xl:grid-cols-3 xl:mt-10 xl:mb-10"
        >
          {resources
            .map((resource) => ({
              ...resource,
              title: resource.component.props.title, // Extract the title for sorting
            }))
            .sort((a, b) => a.title.localeCompare(b.title)) // Sort the resources alphabetically by title
            .map((resource, index) => (
              <React.Fragment key={index}>
                {resource.component}
              </React.Fragment>
            ))}
        </div>

        <div className="h-40" />
      </div>
    </div>
  );
};


export default Page;
// temporary hard coded data
// array with each resource is an object with an id and component
const resources = [
  {
    id: "high-school-students",
    component: (
      <ResourceBoxPurple
        img="/assets/girlswhocode.png"
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
        img="/assets/khanacademy.png"
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
        img="/assets/ywib.png"
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
    id: "",
    component: (
      <ResourceBoxPink
        img="/assets/codeorg.png"
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
        img="/assets/jack.png"
        title={"Jack.org"}
        description={
          "A Canadian organization focused on youth mental health, providing resources, peer support, and leadership opportunities."
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
        img="/assets/sws.jpeg"
        title={"Student Wellness Services"}
        description={
          "Offers comprehensive health and wellness support, including mental health counseling and medical services."
        }
        id={"incoming-students"}
        link={"https://www.queensu.ca/studentwellness/"}
      />
    ),
  },
  {
    id: "incoming-students",
    component: (
      <ResourceBoxPink
        img="/assets/sass.png"
        title={"Student Academic Success Services"}
        description={
          "Provides academic support to help students improve their study skills, writing, and time management."
        }
        id={"incoming-students"}
        link={"https://sass.queensu.ca/"}
      />
    ),
  },
  {
    id: "incoming-students",
    component: (
      <ResourceBoxBlue
        img="/assets/fourdirections.png"
        title={"Four Directions Indigenous Student Centre"}
        description={
          "Cultural programming, academic advising, and community for Indigenous students."
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
        img="/assets/good2talk.png"
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
        img="/assets/mym.png"
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
        img="/assets/rho.jpeg"
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
        img="/assets/onwa.jpeg"
        title={"Ontario Native Women’s Association"}
        description={
          "Find resources, advocacy, and programs that focus on health, safety, and empowerment for Indigenous communities."
        }
        id={"incoming-students"}
        link={"https://www.onwa.ca/"}
      />
    ),
  },
];

export default resources;

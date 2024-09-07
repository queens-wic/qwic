"use client";  // Enable client-side hooks

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ResourceBoxBlue from '../ResourceBoxBlue';
import ResourceBoxPink from '../ResourceBoxPink';
import ResourceBoxPurple from '../ResourceBoxPurple';

const ResourceFilterPage = () => {
  const router = useRouter();
  const [id, setId] = useState(null);

  useEffect(() => {
    if (router && router.query && router.query.id) { // checks if all are defined
      setId(router.query.id);
    }
  }, [router]);  // Observe `router` as a whole


  if (!id) {
    return <div>Loading...</div>; // Display loading state while id is undefined
  }

  // array with each resource is an object with an id and component
  const resources = [ 
    {
      id: 'high-school-students',
      component: (
        <ResourceBoxBlue
          img={img}
          title={'Resource title'}
          description={'Description for High School Students...'}
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
          description={'Description for Incoming Students...'}
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
          description={'Description for Computing at Queen\'s...'}
          id={'computing-at-queens'}
        />
      ),
    },
  ];

  const filteredResources = resources.filter(resource => resource.id === id);

  return (
    <div>
      <h1>Filtered Resources for {id}</h1>
      {filteredResources.length ? (
        filteredResources.map((resource, index) => (
          <div key={index}>
            {resource.component}
          </div>
        ))
      ) : (
        <p>No resources found for this filter.</p>
      )}
    </div>
  );
};

export default ResourceFilterPage;


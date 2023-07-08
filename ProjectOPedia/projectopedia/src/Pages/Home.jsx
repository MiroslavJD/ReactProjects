import React from 'react';
import projectList from '../Store/data';
import ProjectCard from '../Components/Page/ProjectCard';



function Home() {
  return (
    <div className="container p-5 text-white">
        <div className="h3 text-success">Project List</div>
        <div className="row">
            {projectList.map((project,index)=>{            
                <ProjectCard key={index} project={project}/>
            })}
        </div>
    </div>
  );
}

export default Home;

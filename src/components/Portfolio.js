import React, { useState } from 'react';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Project data
  const projects = [
    {
      id: 1,
      title: "Mead and Monsters",
      subtitle: "A narrative-driven RPG set in a post-cataclysmic dwarven world",
      description: "A vertical slice developed under tight 4-month constraints with our small indie team at KIBO Entertainment.",
      contributions: [
        "Game & Level Design: Created the narrative structure and environmental storytelling",
        "Custom Tool Development: Built an automated landscaping system with performance-optimized stylized grass",
        "Combat System: Designed the combat system then implemented by the programmer",
        "Diegetic Health System: Designed immersive health visualization that enhances player feedback"
      ],
      challenges: [
        "Balanced visual fidelity with performance optimization in UE5, a new engine for us at the time",
        "Stood out with the diagetic system",
        "Integrated complex companion AI pathfinding",
        "Managed scope to deliver a complete vertical slice within the 4-month timeline"
      ],
      thumbnail: "https://i.postimg.cc/hvYrgmMC/Highres-Screenshot-2024-04-12-15-06-49.png",
      images: [
        "https://i.postimg.cc/W3HMnC9H/riding-7-15-ezgif-com-video-to-gif-converter.gif",
        "https://i.postimg.cc/wMxwj8qs/villagefight-2-9-ezgif-com-video-to-gif-converter.gif",
        "https://i.postimg.cc/QxyfhyRH/bossfight-2-14-ezgif-com-video-to-gif-converter.gif",
        "https://i.postimg.cc/pdtYdbkX/diagetic-3-11-ezgif-com-video-to-gif-converter.gif",
        "https://i.postimg.cc/gkC3MFCq/terraintool-2-15-ezgif-com-video-to-gif-converter.gif",
        "https://i.postimg.cc/W4JKBvzN/villagewalk-3-11-ezgif-com-video-to-gif-converter.gif",
        "https://i.postimg.cc/9MQ94W9V/riding2-6-18-ezgif-com-video-to-gif-converter.gif"
      ],
      technologies: ["UE 5.4", "Blueprinting", "Blender", "SpeedTree", "Substance Painter"]
    },
    {
      id: 2,
      title: "From Home to CHOAM",
      subtitle: "A metaphorical journey game about transitioning to university life abroad",
      description: "This GameMaker project was developed as part of my first-year university coursework, challenging us to learn a new engine while building a complete game experience.",
      contributions: [
        "Full Development Leadership: Managed all aspects from concept to implementation",
        "Visual Design: Created all art assets and environments to support the narrative theme",
        "Systems Implementation: Built mechanics that translate abstract emotions into gameplay"
      ],
      challenges: [
        "Learned GameMaker's language and environment while simultaneously developing the game",
        "Transformed complex emotional concepts (anxiety) into tangible gameplay mechanics",
        "Completed comprehensive development with minimal team support (two-person project)"
      ],
      thumbnail: "https://i.postimg.cc/mrvD4BS8/ezgif-frame-005.png",
      images: [
        "https://i.postimg.cc/QMy7W2JT/introlevel-all-ezgif-com-video-to-gif-converter.gif",
        "https://i.postimg.cc/CLcx1jNZ/introlevel-fighting-ezgif-com-video-to-gif-converter.gif",
        "https://i.postimg.cc/9fjKHk7y/level2-ezgif-com-video-to-gif-converter.gif",
        "https://i.postimg.cc/Jz3KZzsB/stationlevel-ezgif-com-video-to-gif-converter.gif",
        "https://i.postimg.cc/R0XRppQS/lastlevels-ezgif-com-video-to-gif-converter.gif",
      ],
      technologies: ["GameMaker", "GML", "Pixel Art with Aseprite"]
    },
    {
      id: 3,
      title: "Wizard Hat with a Cat",
      subtitle: "A competitive spell-casting PvP game developed during an intensive month-long development sprint",
      description: "This project demonstrates my team's rapid prototyping capabilities, evolving through three distinct design iterations before arriving at the final combat-focused experience.",
      contributions: [
        "Lead Designer: Guided the project through multiple iterations based on playtesting feedback",
        "Character Controller Programming: Built responsive movement and spell-casting systems",
        "Combat Design: Balanced spell interactions for meaningful tactical choices"
      ],
      challenges: [
        "Maintained development momentum while pivoting design direction twice",
        "Implemented complex spell interactions with limited technical resources",
        "Delivered a playable, balanced PvP experience within a one-month timeframe"
      ],
      thumbnail: "https://i.postimg.cc/8sQ9kXY8/cat.png",
      images: [
        "https://i.postimg.cc/gJjfgZh7/wizardcat1-ezgif-com-video-to-gif-converter.gif",
        "https://i.postimg.cc/L5ZGpFNB/wizardcat2-ezgif-com-video-to-gif-converter.gif"
      ],
      technologies: ["Unity", "C#", "Co-op"]
    },
    {
      id: 4,
      title: "AI-Enhanced Game Development",
      subtitle: "A Unity roguelike shooter developed alongside a custom AI development assistant",
      description: "This entrepreneurship elective project explored how AI tools can dramatically accelerate game development workflows.",
      contributions: [
        "AI Integration: Implemented LLM API for code analysis and suggestion",
        "Rapid Development: Completed a full roguelike prototype in just 3 days",
        "Workflow Optimization: Designed processes for effective human-AI collaboration"
      ],
      challenges: [
        "Created effective prompt engineering patterns for code assistance",
        "Balanced AI suggestions with critical implementation decisions",
        "Demonstrated 80% development time reduction compared to traditional methods"
      ],
      thumbnail: "https://i.postimg.cc/Y0KBjS4y/codev.png",
      images: [
        "https://i.postimg.cc/v8JZ6YFy/codev-cropped-3-20-ezgif-com-video-to-gif-converter.gif",
        "https://i.postimg.cc/CLCSBbsC/unityfpshooter-2-13-ezgif-com-video-to-gif-converter.gif"
      ],
      technologies: ["Unity", "C#", "LLM CLAUDE API", "AI Workflows"]
    },
    {
    id: 5,
      title: "Dorifto Delivery",
      subtitle: "Business has been going down, we have to stand out! Drift and Deliver, that's how!",
      description: "An arcade-style delivery game where drifting is how your business succeeds",
      contributions: [
        "Vehicle Physics Programming: Developed responsive drift mechanics with realistic handling",
        "Game Design: Created progression system linking drift performance to delivery efficiency",
        "Level Design: Built dynamic delivery routes that reward skillful drifting",
        "UI/UX Implementation: Designed intuitive controls and feedback systems for drift scoring dot dithering"
      ],
      challenges: [
        "Physics Balance: Balanced realistic physics with arcade-style accessibility for broad appeal",
        "Performance Optimization: Optimized complex vehicle calculations while maintaining smooth 60fps performance",
        "Game Design: Designed challenging but achievable delivery objectives that encourage mastery"
      ],
      thumbnail: "https://i.postimg.cc/FzmC2kkm/ae86.jpg",
      images: [
        "https://placehold.co/800x450?text=AI+Workflow+Demo",
        "https://placehold.co/800x450?text=Procedural+Generation",
        "https://placehold.co/800x450?text=Roguelike+Elements+Gif"
      ],
      technologies: ["Unity", "C#", "Physics Simulation", "Mobile Optimization"]
    },
    {
      id: 6,
      title: "Police VR Training Project",
      subtitle: "A specialized VR training application for Dutch Police forces",
      description: "While most details remain under NDA, this project showcases my ability to integrate cutting-edge AI technology with immersive virtual reality experiences.",
      contributions: [
        "AI Implementation: Integrated GPT and ElevenLabs API within Unreal Engine",
        "VR Development: Created immersive interactions for specialized training scenarios"
      ],
      challenges: [
        "Worked within strict security and privacy requirements",
        "Optimized performance for VR hardware constraints",
        "Collaborated with subject matter experts to ensure training effectiveness"
      ],
      thumbnail: "https://i.postimg.cc/sx9qX4Cv/police.png",
      images: [
        "https://i.postimg.cc/tJq7vyyJ/politie.png"
      ],
      technologies: ["Unreal Engine", "Blueprint", "VR", "GPT API", "ElevenLabs API", "Custom Plugins"]
    }
  ];

  // Leadership experience
  const leadership = {
    title: "Leadership Experience",
    position: "Founder",
    company: "KIBO Entertainment",
    description: "Led a 4-person indie game studio through a critical development phase, delivering our vertical slice RPG Mead and Monsters.",
    responsibilities: [
      "Strategic Leadership: Established project scope, milestones, and production pipeline",
      "Team Management: Coordinated specialized roles while maintaining cohesive vision",
      "Resource Optimization: Delivered complex systems despite limited team size and timeline"
    ],
    challenges: [
      "Convincing stakeholders: Business plans and presentations in order to convince the university for us to intern in our own company",
      "Production Bottlenecks: Implemented agile methodology to prioritize core features",
      "Technical Limitations: New engine, new tools",
      "Scope Management: Maintained feature quality while meeting the initial set deadline"
    ]
  };

  // Technical skills
  const skills = [
    {
      category: "Game Development",
      skills: [
        "Game & Level Design",
        "Narrative Design",
        "Systems Design",
        "Using tools like Miro, Notion or the Office Suite"
      ]
    },
    {
      category: "Programming",
      skills: [
        "C#",
        "GDScript",
        "Blueprint Visual Scripting",
        "GameMaker Language",
        "JavaScript and Python basics"
      ]
    },
    {
      category: "3D Development",
      skills: [
        "Asset Creation - Blender and Aseprite",
        "Texturing - Blender, Krita and Substance Painter",
        "Animation Implementation - Cascadeur"
      ]
    },
    {
      category: "AI Integration",
      skills: [
        "LLM API Implementation",
        "AI-Assisted Development",
        "Understanding of AI Tools and their possibilities"
      ]
    },
    {
      category: "Engines & Tools",
      skills: [
        "Unity",
        "Unreal Engine",
        "Godot",
        "GameMaker",
        "Blender",
        "Cascadeur",
        "Adobe Creative Suite",
        "Gaea",
      ]
    }
  ];


  // Handle image navigation
  const nextImage = () => {
    if (activeProject) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === activeProject.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (activeProject) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? activeProject.images.length - 1 : prevIndex - 1
      );
    }
  };

  // Reset image index when changing projects
  const openProjectDetail = (project) => {
    setCurrentImageIndex(0);
    setActiveProject(project);
  };

  // Project detail view
  const ProjectDetail = ({ project }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 overflow-y-auto">
        <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto border border-gray-700 text gray-100 shadow-xl">
          <div className="sticky top-0 bg-gray-900 p-4 border-b border-gray-700 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-blue-300">{project.title}</h2>
            <button 
              onClick={() => setActiveProject(null)}
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 text-gray-300"
            >
              ✕
            </button>
          </div>
          
          <div className="p-6">
            {/* Project Image Gallery */}
            <div className="mb-8">
              <div className="relative">
                <div className="relative h-80 bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
                  <img 
                    src={project.images[currentImageIndex]} 
                    alt={`${project.title} showcase ${currentImageIndex + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Navigation Arrows */}
                {project.images.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                    >
                      ←
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                    >
                      →
                    </button>
                  </>
                )}
              </div>
              
              {/* Image Indicators */}
              {project.images.length > 1 && (
                <div className="flex justify-center mt-3 space-x-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full ${
                        currentImageIndex === index ? 'bg-blue-500' : 'bg-gray-600'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
            
            <h3 className="text-xl font-semibold mb-2">{project.subtitle}</h3>
            <p className="mb-6 text-gray-300">{project.description}</p>
            
            <div className="mb-6">
              <h4 className="text-lg font-bold mb-3 text-blue-200">My Contributions</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                {project.contributions.map((contribution, index) => {
                  const [title, description] = contribution.split(': ');
                  return (
                    <li key={index}>
                      <span className="font-bold">{title}:</span> {description}
                    </li>
                  );
                })}
              </ul>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-bold mb-3">Key Challenges Overcome</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                {project.challenges.map((challenge, index) => {
                  const [title, description] = challenge.includes(': ') 
                    ? challenge.split(': ') 
                    : [null, challenge];
                    
                  return (
                    <li key={index}>
                      {title ? (
                        <>
                          <span className="font-bold text-blue-200">{title}:</span> {description}
                        </>
                      ) : (
                        challenge
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-3 text-blue-200">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-blue-900 text-blue-100 rounded-full text-sm border border-blue-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header & Navigation */}
      <header className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-6 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-blue-300">Game Developer Portfolio</h1>
              <p className="mt-1 text-blue-100">Creative Media and Game Technologies Student</p>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#projects" className="hover:text-blue-300 transition-colors">Projects</a></li>
                <li><a href="#leadership" className="hover:text-blue-300 transition-colors">Leadership</a></li>
                <li><a href="#skills" className="hover:text-blue-300 transition-colors">Skills</a></li>
                <li><a href="#about" className="hover:text-blue-300 transition-colors">About</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-blue-300">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div 
                key={project.id} 
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700"
              >
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-300">{project.title}</h3>
                  <p className="text-sm text-gray-400 italic mb-3">{project.subtitle}</p>
                  <p className="text-gray-300 mb-4 truncate">{project.description}</p>
                  
                  <button 
                    onClick={() => openProjectDetail(project)}
                    className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 transition-colors shadow-md"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Leadership Section */}
        <section id="leadership" className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-blue-300">Leadership Experience</h2>
          
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-700">
            <div className="flex flex-col md:flex-row justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-300">{leadership.position}</h3>
                <p className="text-xl text-gray-300">{leadership.company}</p>
              </div>
            </div>
            
            <p className="mb-6 text-gray-300">{leadership.description}</p>
            
            <div className="mb-6">
              <h4 className="text-lg font-bold mb-3 text-blue-200">Key Responsibilities</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                {leadership.responsibilities.map((responsibility, index) => {
                  const [title, description] = responsibility.split(': ');
                  return (
                    <li key={index}>
                      <span className="font-bold text-blue-200">{title}:</span> {description}
                    </li>
                  );
                })}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-3 text-blue-200">Significant Challenges Overcome</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                {leadership.challenges.map((challenge, index) => {
                  const [title, description] = challenge.split(': ');
                  return (
                    <li key={index}>
                      <span className="font-bold text-blue-200">{title}:</span> {description}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section id="skills" className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-blue-300">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.skills.map((skill, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="mr-2 text-blue-400">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        
        {/* About Me Section */}
        <section id="about">
          <h2 className="text-3xl font-bold mb-10 text-center text-blue-300">About Me</h2>
          
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-700">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <img 
                src="https://i.postimg.cc/VL4X8GH2/eu.jpg" 
                alt="Profile" 
                className="w-40 h-40 rounded-full object-cover border-2 border-blue-400"
              />
              
              <div className="text-gray-300">
                <p className="mb-4">
                  I'm a 4th year <strong className="text-blue-300">Creative Media and Game Technologies (CMGT)</strong> student at the Hanze University of Applied Sciences with a focus on game design, level design, and programming.
                </p>
                <p className="mb-4">
                  My background spans multiple game engines and development methodologies, with particular expertise in <strong className="text-blue-300">Unity C# development, Godot GD script development</strong> and <strong className="text-blue-300">Unreal Engine level design</strong>.
                </p>
                <p>
                  I'm passionate about creating meaningful player experiences through immersive design and innovative technology integration. My portfolio demonstrates my ability to <strong className="text-blue-300">perform under pressure</strong>, <strong className="text-blue-300">overcome technical challenges</strong>, and <strong className="text-blue-300">deliver high-quality projects</strong> under constraints.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-950 text-white py-8 mt-12 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-2">© 2025 Game Developer Portfolio</p>
          <p>Contact: <a href="ivanovjucanmihai@gmail.com" className="text-blue-300 hover:underline">ivanovjucanmihai@gmail.com</a></p>
        </div>
      </footer>
      
      {/* Project Detail Modal */}
      {activeProject && <ProjectDetail project={activeProject} />}
    </div>
  );
};

export default Portfolio;

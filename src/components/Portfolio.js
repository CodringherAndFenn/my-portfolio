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
        "Combat System: Implemented responsive combat mechanics including boss encounters",
        "Diegetic Health System: Designed immersive health visualization that enhances player feedback"
      ],
      challenges: [
        "Balanced visual fidelity with performance optimization across diverse environments",
        "Integrated complex companion AI pathfinding in procedurally generated terrain",
        "Managed scope to deliver a complete vertical slice within the 4-month timeline"
      ],
      thumbnail: "https://i.postimg.cc/hvYrgmMC/Highres-Screenshot-2024-04-12-15-06-49.png",
      images: [
        "https://placehold.co/800x450?text=Combat+System+Demo",
        "https://placehold.co/800x450?text=Environment+Showcase",
        "https://placehold.co/800x450?text=Boss+Battle+Gif",
        "https://placehold.co/800x450?text=Character+Customization"
      ],
      technologies: ["Unity", "C#", "Custom Tools"]
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
      thumbnail: "https://placehold.co/600x400",
      images: [
        "https://placehold.co/800x450?text=Gameplay+Mechanics",
        "https://placehold.co/800x450?text=Visual+Style+Demo",
        "https://placehold.co/800x450?text=Level+Progression+Gif"
      ],
      technologies: ["GameMaker", "GML", "Pixel Art"]
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
      thumbnail: "https://placehold.co/600x400",
      images: [
        "https://placehold.co/800x450?text=Spell+Casting+Effects",
        "https://placehold.co/800x450?text=Multiplayer+Arena",
        "https://placehold.co/800x450?text=Character+Abilities+Gif",
        "https://placehold.co/800x450?text=Gameplay+Demo"
      ],
      technologies: ["Unity", "C#", "Multiplayer"]
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
      thumbnail: "https://placehold.co/600x400",
      images: [
        "https://placehold.co/800x450?text=AI+Workflow+Demo",
        "https://placehold.co/800x450?text=Procedural+Generation",
        "https://placehold.co/800x450?text=Roguelike+Elements+Gif"
      ],
      technologies: ["Unity", "C#", "LLM API", "AI Workflows"]
    },
    {
      id: 5,
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
      thumbnail: "https://placehold.co/600x400",
      images: [
        "https://placehold.co/800x450?text=VR+Interaction+Demo",
        "https://placehold.co/800x450?text=Training+Environment",
        "https://placehold.co/800x450?text=AI+Response+System"
      ],
      technologies: ["Unreal Engine", "Blueprint", "VR", "GPT API", "ElevenLabs API"]
    }
  ];

  // Leadership experience
  const leadership = {
    title: "Leadership Experience",
    position: "CEO and Founder",
    company: "KIBO Entertainment",
    description: "Led a 4-person indie game studio through a critical development phase, delivering our vertical slice RPG Mead and Monsters.",
    responsibilities: [
      "Strategic Leadership: Established project scope, milestones, and production pipeline",
      "Team Management: Coordinated specialized roles while maintaining cohesive vision",
      "Resource Optimization: Delivered complex systems despite limited team size and timeline"
    ],
    challenges: [
      "Production Bottlenecks: Implemented agile methodology to prioritize core features",
      "Technical Limitations: Developed custom tools to streamline environment creation",
      "Scope Management: Maintained feature quality while meeting ambitious deadlines"
    ]
  };

  // Technical skills
  const skills = [
    {
      category: "Game Development",
      skills: [
        "Game & Level Design",
        "Narrative Design",
        "Systems Design"
      ]
    },
    {
      category: "Programming",
      skills: [
        "C#",
        "Blueprint Visual Scripting",
        "GameMaker Language",
        "JavaScript"
      ]
    },
    {
      category: "3D Development",
      skills: [
        "Asset Creation",
        "Texturing",
        "Animation Implementation"
      ]
    },
    {
      category: "AI Integration",
      skills: [
        "LLM API Implementation",
        "AI-Assisted Development",
        "Prompt Engineering"
      ]
    },
    {
      category: "Engines & Tools",
      skills: [
        "Unity",
        "Unreal Engine",
        "GameMaker",
        "Blender",
        "Adobe Creative Suite"
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
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 overflow-y-auto">
        <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto">
          <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <button 
              onClick={() => setActiveProject(null)}
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              ✕
            </button>
          </div>
          
          <div className="p-6">
            {/* Project Image Gallery */}
            <div className="mb-8">
              <div className="relative">
                <div className="relative h-80 bg-gray-100 rounded-lg overflow-hidden">
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
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
                    >
                      ←
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
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
                        currentImageIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
            
            <h3 className="text-xl font-semibold mb-2">{project.subtitle}</h3>
            <p className="mb-6">{project.description}</p>
            
            <div className="mb-6">
              <h4 className="text-lg font-bold mb-3">My Contributions</h4>
              <ul className="list-disc pl-6 space-y-2">
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
              <ul className="list-disc pl-6 space-y-2">
                {project.challenges.map((challenge, index) => {
                  const [title, description] = challenge.includes(': ') 
                    ? challenge.split(': ') 
                    : [null, challenge];
                    
                  return (
                    <li key={index}>
                      {title ? (
                        <>
                          <span className="font-bold">{title}:</span> {description}
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
              <h4 className="text-lg font-bold mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
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
    <div className="min-h-screen bg-gray-50">
      {/* Header & Navigation */}
      <header className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Game Developer Portfolio</h1>
              <p className="mt-1">Creative Media and Game Technologies Student</p>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#projects" className="hover:text-blue-200">Projects</a></li>
                <li><a href="#leadership" className="hover:text-blue-200">Leadership</a></li>
                <li><a href="#skills" className="hover:text-blue-200">Skills</a></li>
                <li><a href="#about" className="hover:text-blue-200">About</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div 
                key={project.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 italic mb-3">{project.subtitle}</p>
                  <p className="text-gray-700 mb-4 truncate">{project.description}</p>
                  
                  <button 
                    onClick={() => openProjectDetail(project)}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
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
          <h2 className="text-3xl font-bold mb-10 text-center">Leadership Experience</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col md:flex-row justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">{leadership.position}</h3>
                <p className="text-xl text-gray-700">{leadership.company}</p>
              </div>
            </div>
            
            <p className="mb-6 text-gray-700">{leadership.description}</p>
            
            <div className="mb-6">
              <h4 className="text-lg font-bold mb-3">Key Responsibilities</h4>
              <ul className="list-disc pl-6 space-y-2">
                {leadership.responsibilities.map((responsibility, index) => {
                  const [title, description] = responsibility.split(': ');
                  return (
                    <li key={index}>
                      <span className="font-bold">{title}:</span> {description}
                    </li>
                  );
                })}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-3">Significant Challenges Overcome</h4>
              <ul className="list-disc pl-6 space-y-2">
                {leadership.challenges.map((challenge, index) => {
                  const [title, description] = challenge.split(': ');
                  return (
                    <li key={index}>
                      <span className="font-bold">{title}:</span> {description}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section id="skills" className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.skills.map((skill, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2 text-blue-600">•</span>
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
          <h2 className="text-3xl font-bold mb-10 text-center">About Me</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <img 
                src="https://placehold.co/400x400" 
                alt="Profile" 
                className="w-40 h-40 rounded-full object-cover"
              />
              
              <div>
                <p className="mb-4">
                  I'm a 4th year <strong>Creative Media and Game Technologies (CMGT)</strong> student at the Hanze University of Applied Sciences with a focus on game design, level design, and programming.
                </p>
                <p className="mb-4">
                  My background spans multiple game engines and development methodologies, with particular expertise in <strong>Unity C# development</strong> and <strong>Unreal Engine level design</strong>.
                </p>
                <p>
                  I'm passionate about creating meaningful player experiences through thoughtful design and innovative technology integration. My portfolio demonstrates my ability to <strong>lead teams</strong>, <strong>overcome technical challenges</strong>, and <strong>deliver high-quality projects</strong> under constraints.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-2">© 2025 Game Developer Portfolio</p>
          <p>Contact: <a href="mailto:contact@example.com" className="text-blue-300 hover:underline">contact@example.com</a></p>
        </div>
      </footer>
      
      {/* Project Detail Modal */}
      {activeProject && <ProjectDetail project={activeProject} />}
    </div>
  );
};

export default Portfolio;

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
      <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 overflow-y-auto">
        <div className="bg-white rounded-xl max-w-4xl w-full max-h-screen overflow-y-auto shadow-2xl">
          <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center rounded-t-xl">
            <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
            <button 
              onClick={() => setActiveProject(null)}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200"
            >
              ✕
            </button>
          </div>
          
          <div className="p-6">
            {/* Project Image Gallery */}
            <div className="mb-8">
              <div className="relative">
                <div className="relative h-80 rounded-xl overflow-hidden" style={{ backgroundColor: '#d5f76e' }}>
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
                      style={{ backgroundColor: '#eae3f2' }}
                    >
                      ←
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full hover:bg-blue-700 transition-colors" //schimba daca trbee si aci si sus
                      style={{ backgroundColor: '#eae3f2' }}
                    >
                      →
                    </button>
                  </>
                )}
              </div>
              
              {/* Image Indicators */}
              {project.images.length > 1 && (
                <div className="flex justify-center mt-4 space-x-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        currentImageIndex === index ? 'scale-125 shadow-md' : 'hover:scale-110'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
            
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.subtitle}</h3>
            <p className="mb-6 text-gray-600 leading-relaxed">{project.description}</p>
            
            <div className="mb-6">
              <h4 className="text-lg font-bold mb-3" style={{ color: '#eae3f2' }}>My Contributions</h4>
              <ul className="list-disc pl-6 space-y-2">
                {project.contributions.map((contribution, index) => {
                  const [title, description] = contribution.split(': ');
                  return (
                    <li key={index} className="text-gray-600">
                      <span className="font-bold text-gray-800">{title}:</span> {description}
                    </li>
                  );
                })}
              </ul>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-bold mb-3" style={{ color: '#eae3f2' }}>Key Challenges Overcome</h4>
              <ul className="list-disc pl-6 space-y-2">
                {project.challenges.map((challenge, index) => {
                  const [title, description] = challenge.includes(': ') 
                    ? challenge.split(': ') 
                    : [null, challenge];
                    
                  return (
                    <li key={index} className="text-gray-600">
                      {title ? (
                        <>
                          <span className="font-bold text-gray-800">{title}:</span> {description}
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
              <h4 className="text-lg font-bold mb-3" style={{ color: '#eae3f2' }}>Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 rounded-full text-sm font-medium text-white"
                    style={{ backgroundColor: '#5053e4' }}
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
    <div className="min-h-screen" style={{ backgroundColor: '#d5f76e' }}>
      {/* Modern Header with Geometric Design */}
      <header className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, #eae3f2 0%, #5053e4 100%)` }}>
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 opacity-20" style={{ backgroundColor: '#deb841' }}
               transform="rotate(45deg)"></div>
          <div className="absolute top-20 -left-10 w-32 h-32 rounded-full opacity-15" style={{ backgroundColor: '#de9e36' }}></div>
          <div className="absolute bottom-10 right-1/4 w-24 h-24 opacity-10" style={{ backgroundColor: '#d5f76e' }}
               transform="rotate(30deg)"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            {/* Main Header Content */}
            <div className="max-w-4xl mx-auto">
              <div className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" 
                   style={{ backgroundColor: '#deb841', color: '#eae3f2' }}>
                ✨ Available for New Opportunities
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Game Developer
                <span className="block text-3xl lg:text-4xl font-normal mt-2" style={{ color: '#d5f76e' }}>
                  Portfolio
                </span>
              </h1>
              
              <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
                Creative Media and Game Technologies Student specializing in 
                <span className="font-semibold" style={{ color: '#deb841' }}> Unity C#</span> and 
                <span className="font-semibold" style={{ color: '#de9e36' }}> Unreal Engine</span> development
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#projects" 
                   className="px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                   style={{ backgroundColor: '#de9e36' }}>
                  View My Work
                </a>
                <a href="#about" 
                   className="px-8 py-3 rounded-full font-semibold border-2 border-white text-white hover:bg-white transition-all duration-300"
                   style={{ color: 'white' }}
                   onMouseEnter={(e) => {
                     e.target.style.backgroundColor = 'white';
                     e.target.style.color = '#eae3f2';
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.backgroundColor = 'transparent';
                     e.target.style.color = 'white';
                   }}>
                  Learn About Me
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Modern Navigation */}
        <nav className="relative border-t border-white border-opacity-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="flex flex-wrap justify-center lg:justify-start space-x-8 py-4">
              {[
                { href: "#projects", label: "Projects" },
                { href: "#leadership", label: "Leadership" },
                { href: "#skills", label: "Skills" },
                { href: "#about", label: "About" }
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href} 
                     className="text-white hover:text-opacity-80 font-medium transition-all duration-200 py-2 border-b-2 border-transparent hover:border-white hover:border-opacity-50">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#eae3f2' }}>Featured Projects</h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#deb841' }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div 
                key={project.id} 
                className="rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#eae3f2' }}
              >
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#eae3f2' }}>{project.title}</h3>
                  <p className="text-sm text-gray-600 italic mb-3">{project.subtitle}</p>
                  <p className="text-gray-700 mb-4 line-clamp-3">{project.description}</p>
                  
                  <button 
                    onClick={() => openProjectDetail(project)}
                    className="px-6 py-2 rounded-full text-white font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
                    style={{ backgroundColor: '#5053e4' }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section id="leadership" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#52874f' }}>Leadership Experience!</h2>
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#eae3f2' }}>Leadership Experience</h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#de9e36' }}></div>
          </div>
          
          <div className="rounded-xl shadow-lg p-8 relative overflow-hidden" style={{ backgroundColor: '#eae3f2' }}>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5" 
                 style={{ backgroundColor: '#deb841' }}
                 transform="rotate(45deg) translate(50%, -50%)"></div>
                 
            <div className="relative">
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: '#eae3f2' }}>{leadership.position}</h3>
                  <p className="text-xl" style={{ color: '#5053e4' }}>{leadership.company}</p>
                </div>
              </div>
              
              <p className="mb-6 text-gray-700 leading-relaxed">{leadership.description}</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold mb-3" style={{ color: '#eae3f2' }}>Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {leadership.responsibilities.map((responsibility, index) => {
                      const [title, description] = responsibility.split(': ');
                      return (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 mt-1 w-2 h-2 rounded-full flex-shrink-0" 
                                style={{ backgroundColor: '#deb841' }}></span>
                          <div>
                            <span className="font-bold text-gray-800">{title}:</span>
                            <span className="text-gray-600"> {description}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-3" style={{ color: '#eae3f2' }}>Significant Challenges Overcome</h4>
                  <ul className="space-y-2">
                    {leadership.challenges.map((challenge, index) => {
                      const [title, description] = challenge.split(': ');
                      return (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 mt-1 w-2 h-2 rounded-full flex-shrink-0" 
                                style={{ backgroundColor: '#de9e36' }}></span>
                          <div>
                            <span className="font-bold text-gray-800">{title}:</span>
                            <span className="text-gray-600"> {description}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
         {/* Skills Section */}
        <section id="skills" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#eae3f2' }}>Technical Skills</h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#5053e4' }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: '#eae3f2' }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#eae3f2' }}>{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.skills.map((skill, i) => (
                    <li key={i} className="flex items-center group">
                      <span className="mr-3 w-2 h-2 rounded-full transition-all duration-200 group-hover:scale-150" 
                            style={{ backgroundColor: '#deb841' }}></span>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        
        {/* About Me Section */}
        <section id="about">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#eae3f2' }}>About Me</h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#de9e36' }}></div>
          </div>
          
          <div className="rounded-xl shadow-lg p-8" style={{ backgroundColor: '#eae3f2' }}>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="relative">
                <img 
                  src="https://i.postimg.cc/VL4X8GH2/eu.jpg" 
                  alt="Profile" 
                  className="w-48 h-48 rounded-2xl object-cover shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg"
                     style={{ backgroundColor: '#deb841' }}>
                  🚀
                </div>
              </div>
              
              <div className="flex-1">
                <p className="mb-4 text-gray-700 text-lg leading-relaxed">
                  I'm a 4th year <strong style={{ color: '#eae3f2' }}>Creative Media and Game Technologies (CMGT)</strong> student at the Hanze University of Applied Sciences with a focus on game design, level design, and programming.
                </p>
                <p className="mb-4 text-gray-700 text-lg leading-relaxed">
                  My background spans multiple game engines and development methodologies, with particular expertise in <strong style={{ color: '#5053e4' }}>Unity C# development, Godot GD script development</strong> and <strong style={{ color: '#de9e36' }}>Unreal Engine level design</strong>.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  I'm passionate about creating meaningful player experiences through immersive design and innovative technology integration. My portfolio demonstrates my ability to <strong style={{ color: '#deb841' }}>perform under pressure</strong>, <strong style={{ color: '#eae3f2' }}>overcome technical challenges</strong>, and <strong style={{ color: '#5053e4' }}>deliver high-quality projects</strong> under constraints.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="text-white py-12" style={{ backgroundColor: '#eae3f2' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
            <p className="opacity-90">Ready to create something amazing together?</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="mailto:ivanovjucanmihai@gmail.com" 
               className="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
               style={{ backgroundColor: '#deb841', color: '#eae3f2' }}>
              Get In Touch
            </a>
            <a href="#projects" 
               className="px-6 py-3 rounded-full font-semibold border-2 border-white text-white hover:bg-white transition-all duration-300"
               onMouseEnter={(e) => {
                 e.target.style.backgroundColor = 'white';
                 e.target.style.color = '#eae3f2';
               }}
               onMouseLeave={(e) => {
                 e.target.style.backgroundColor = 'transparent';
                 e.target.style.color = 'white';
               }}>
              View Portfolio
            </a>
          </div>
          
          <div className="border-t border-white border-opacity-20 pt-6">
            <p className="opacity-75">© 2025 Game Developer Portfolio - Crafted with passion</p>
          </div>
        </div>
      </footer>
      
      {/* Project Detail Modal */}
      {activeProject && <ProjectDetail project={activeProject} />}
    </div>
  );
};

export default Portfolio;

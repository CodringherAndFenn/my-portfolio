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
        "Diegetic Health System: Designed a diagetic health system inspired by Dead Space"
      ],
      challenges: [
        "Producing everything in UE5, a new engine for us at the time",
        "Stood out with the diagetic system",
        "Integrated complex companion AI pathfinding",
        "Managed scope to deliver a complete vertical slice within the 4-month timeline"
      ],
      thumbnail: `${process.env.PUBLIC_URL}/images/Highres-Screenshot-2024-04-12-15-06-49.png`,
      images: [
        `${process.env.PUBLIC_URL}/images/riding-7-15-ezgif-com-video-to-gif-converter.gif`,
        `${process.env.PUBLIC_URL}/images/villagefight-2-9-ezgif-com-video-to-gif-converter.gif`,
        `${process.env.PUBLIC_URL}/images/bossfight-2-14-ezgif-com-video-to-gif-converter.gif`,
        `${process.env.PUBLIC_URL}/images/diagetic-3-11-ezgif-com-video-to-gif-converter.gif`,
        `${process.env.PUBLIC_URL}/images/terraintool-2-15-ezgif-com-video-to-gif-converter.gif`,
        `${process.env.PUBLIC_URL}/images/villagewalk-3-11-ezgif-com-video-to-gif-converter.gif`,
        `${process.env.PUBLIC_URL}/images/riding2-6-18-ezgif-com-video-to-gif-converter.gif`,
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
        "Systems Implementation: Built mechanics that translate the complicated emotions a new expat student can go through, into gameplay"
      ],
      challenges: [
        "Learned GameMaker's language and environment while simultaneously developing the game",
        "2D pixel art creation from scratch",
        "Completed comprehensive development with minimal team support (two-person project)"
      ],
      thumbnail: `${process.env.PUBLIC_URL}/images/ezgif-frame-005.png`,
      images: [
        `${process.env.PUBLIC_URL}/images/introlevel-all-ezgif-com-video-to-gif-converter.gif`,
        `${process.env.PUBLIC_URL}/images/introlevel-fighting-ezgif-com-video-to-gif-converter.gif`,
        `${process.env.PUBLIC_URL}/images/level2-ezgif-com-video-to-gif-converter.gif`,
        "https://i.postimg.cc/Jz3KZzsB/stationlevel-ezgif-com-video-to-gif-converter.gif",
        "https://i.postimg.cc/R0XRppQS/lastlevels-ezgif-com-video-to-gif-converter.gif",
      ],
      technologies: ["GameMaker", "GML", "Pixel Art with Aseprite"]
    },
    {
      id: 3,
      title: "Wizard Hat with a Cat",
      subtitle: "A competitive spell-casting PvP game developed during an intensive 3 week long development challenge",
      description: "This project demonstrates my team's rapid prototyping capabilities, evolving through three distinct design iterations before arriving at the final combat-focused experience.",
      contributions: [
        "Lead Designer: Guided the project through multiple iterations based on playtesting feedback",
        "Character Controller Programming: Built two responsive movement and spell-casting systems",
        "Combat Design: Balancing the PvP aspect of the game through extensive testing"
      ],
      challenges: [
        "Maintained development momentum while pivoting our design direction twice",
        "Delivered a playable, balanced PvP experience within a three week timeframe"
      ],
      thumbnail: `${process.env.PUBLIC_URL}/images/cat.png`,
      images: [
        `${process.env.PUBLIC_URL}/images/wizardcat1-ezgif-com-video-to-gif-converter.gif`,
        `${process.env.PUBLIC_URL}/images/wizardcat2-ezgif-com-video-to-gif-converter.gif`,
      ],
      technologies: ["Unity", "C#", "Co-op"]
    },
    {
      id: 4,
      title: "AI-Enhanced Game Development",
      subtitle: "A Unity roguelike shooter developed alongside a custom AI development assistant",
      description: "This entrepreneurship elective project explored how AI tools can dramatically accelerate game development workflows.",
      contributions: [
        "AI Integration: Implemented LLM API for code analysis and suggestionas a CLI tool",
        "Rapid Development: Completed a full roguelike prototype in just 3 days that included environment, enemy behavior, shooting and movement mechanics, etc."
      ],
      challenges: [
        "Balanced AI suggestions with critical implementation decisions",
        "Demonstrated 80% development time reduction compared to traditional methods, as long as the developer is already knowledgeable about the subject matter"
      ],
      thumbnail: `${process.env.PUBLIC_URL}/images/codev.png`,
      images: [
        "https://i.postimg.cc/v8JZ6YFy/codev-cropped-3-20-ezgif-com-video-to-gif-converter.gif",
        "https://i.postimg.cc/CLCSBbsC/unityfpshooter-2-13-ezgif-com-video-to-gif-converter.gif",
      ],
      technologies: ["Unity", "C#", "LLM CLAUDE API", "AI Workflows"]
    },
    {
    id: 5,
      title: "Nothing's U.P",
      subtitle: "If you are innocent, then you have nothing to hide, right?",
      description: "A narrative driven, CLI based game developed under a 2 week timeline in our Rapid Prototyping elective. Game is written 100% in python and is made around the theme of 'nothng' and 'whats up'. It has a total of 5 endings, 2 of them being secret, depending on your choices.",
      contributions: [
        "Programming, Narrative Design, UX/UI and everything else: me"
      ],
      challenges: [
        "OS compatibility: packaged the game to work on MacOS, Windows and Linux",
        "Thematic compatibility: Incorporated the theme 'nothing' and 'whats up' in a gamified manner under tight time constraints",
        "Full game loop: Main challenge and focus of this project and elective is to deliver full game loops in a 2 week timeline."
      ],
      thumbnail: `${process.env.PUBLIC_URL}/images/menu.png`,
      images: [
        `${process.env.PUBLIC_URL}/images/menu.png`,
        `${process.env.PUBLIC_URL}/images/rulebook.png`,
        `${process.env.PUBLIC_URL}/images/day1.png`,
        `${process.env.PUBLIC_URL}/images/judgement.png`,
        `${process.env.PUBLIC_URL}/images/shift1complete.png`,
      ],
      technologies: ["Python", "CLI based", "Narrative puzzle design", "OS compatibility"]
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
        "Collaborated with subject matter experts to ensure training effectiveness (police officers)"
      ],
      thumbnail: `${process.env.PUBLIC_URL}/images/police.png`,
      images: [
        `${process.env.PUBLIC_URL}/images/politie.png`,
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
      "Team Management: Coordinated specialized roles while maintaining cohesive vision amongst team members",
      "Resource Optimization: Delivered complex, built from scratch systems despite limited team size and timeline"
    ],
    challenges: [
      "Convincing stakeholders: Multi-stage Business, Marketing and Development plans in order to convince the university for us to intern in our own company",
      "Production Bottlenecks: Implemented agile methodology to prioritize core features, learned a lot above scope-creep",
      "Technical Limitations: New engine(Unreal), new tools(Blueprinting over C# development)",
      "Scope Management: Maintained feature quality and adhered to the initial MoScoW list while also meeting the initial set deadline"
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
      category: "Programming - Good understanding",
      skills: [
        "C#",
        "GDScript",
        "Blueprint Visual Scripting",
        "GameMaker Language",
        "JavaScript and Python basics",

      ]
    },
    {
      category: "UNIX file system familiarity",
      skills: [
        "Basic sys-admin capabilities",
        "Understanding of permission based security",
        "Basic server and networking knowledge"
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
        "Understanding of AI Tools and their possibilities: Clickless internet, "
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
            <h2 className="text-2xl font-bold" style={{ color: '#3c3836' }}>{project.title}</h2>
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
                <div className="relative h-80 rounded-xl overflow-hidden" style={{ backgroundColor: '#ebdbb2' }}>
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
                      style={{ backgroundColor: '#458588' }}
                    >
                      ←
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full hover:bg-blue-700 transition-colors" //schimba daca trbee si aci si sus
                      style={{ backgroundColor: '#458588' }}
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
                      style={{ backgroundColor: currentImageIndex === index ? '#458588' : '#d79921' }}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
            
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#3c3836' }}>{project.subtitle}</h3>
            <p className="mb-6 leading-relaxed" style={{ color: '#3c3836' }}>{project.description}</p>
            
            <div className="mb-6">
              <h4 className="text-lg font-bold mb-3" style={{ color: '#458588' }}>My Contributions</h4>
              <ul className="list-disc pl-6 space-y-2">
                {project.contributions.map((contribution, index) => {
                  const [title, description] = contribution.split(': ');
                  return (
                    <li key={index} style={{ color: '#3c3836' }}>
                      <span className="font-bold">{title}:</span> {description}
                    </li>
                  );
                })}
              </ul>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-bold mb-3" style={{ color: '#458588' }}>Key Challenges Overcome</h4>
              <ul className="list-disc pl-6 space-y-2">
                {project.challenges.map((challenge, index) => {
                  const [title, description] = challenge.includes(': ') 
                    ? challenge.split(': ') 
                    : [null, challenge];
                    
                  return (
                    <li key={index} style={{ color: '#3c3836' }}>
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
              <h4 className="text-lg font-bold mb-3" style={{ color: '#458588' }}>Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 rounded-full text-sm font-medium text-white"
                    style={{ backgroundColor: '#8ec07c' }}
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
    <div className="min-h-screen" style={{ backgroundColor: '#fbf1c7' }}>
      {/* Modern Header with Geometric Design */}
      <header className="relative" style={{ backgroundColor: '#3c3836' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation Bar */}
          <nav className="flex justify-between items-center py-3 border-b" style={{ borderColor: '#fbf1c7' }}>
            <div className="flex items-center">
              <h2 className="text-2xl font-bold" style={{ color: '#d79921' }}>Portfolio</h2>
            </div>
            <ul className="hidden md:flex space-x-8">
              {[
                { href: "#projects", label: "Projects" },
                { href: "#leadership", label: "Leadership" },
                { href: "#skills", label: "Skills" },
                { href: "#about", label: "About" }
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href} 
                     className="font-medium transition-all duration-200 hover:text-opacity-70"
                     style={{ color: '#d79921' }}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Main Header Content */}
          <div className="py-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{color: '#ffffff'}}>
                Game Developer & Designer
              </h1>
              
              <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: '#ffffff' }}>
                Creative Media and Game Technologies Student specializing in Game, Narrative, and Level Design
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#projects" 
                   className="px-6 py-2 font-semibold transition-all duration-300 hover:opacity-90"
                   style={{ backgroundColor: '#d79921', color: '#fbf1c7' }}>
                  View My Work
                </a>
                <a href="#about" 
                   className="px-6 py-2 font-semibold border-2 transition-all duration-300"
                   style={{ borderColor: '#ffffff', color: '#ffffff' }}
                   onMouseEnter={(e) => {
                     e.target.style.backgroundColor = '#fbf1c7';
                     e.target.style.color = '#fbf1c7';
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.backgroundColor = 'transparent';
                     e.target.style.color = '#ffffff';
                   }}>
                  Learn About Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#3c3836' }}>Featured Projects</h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#d79921' }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div 
                key={project.id} 
                className="rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#ebdbb2' }}
              >
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#3c3836' }}>{project.title}</h3>
                  <p className="text-sm italic mb-3" style={{ color: '#458588' }}>{project.subtitle}</p>
                  <p className="mb-4 line-clamp-3" style={{ color: '#3c3836' }}>{project.description}</p>
                  
                  <button 
                    onClick={() => openProjectDetail(project)}
                    className="px-6 py-2 rounded-full text-white font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
                    style={{ backgroundColor: '#458588' }}
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
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#3c3836' }}>Leadership Experience</h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#cc241d' }}></div>
          </div>
          
          <div className="rounded-xl shadow-lg p-8 relative overflow-hidden" style={{ backgroundColor: '#ebdbb2' }}>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5" 
                 style={{ backgroundColor: '#d79921' }}
                 transform="rotate(45deg) translate(50%, -50%)"></div>
                 
            <div className="relative">
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: '#3c3836' }}>{leadership.position}</h3>
                  <p className="text-xl" style={{ color: '#458588' }}>{leadership.company}</p>
                </div>
              </div>
              
              <p className="mb-6 leading-relaxed" style={{ color: '#3c3836' }}>{leadership.description}</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold mb-3" style={{ color: '#3c3836' }}>Key Responsibilities</h4>
                  <ul className="space-y-2">
                    {leadership.responsibilities.map((responsibility, index) => {
                      const [title, description] = responsibility.split(': ');
                      return (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 mt-1 w-2 h-2 rounded-full flex-shrink-0" 
                                style={{ backgroundColor: '#d79921' }}></span>
                          <div>
                            <span className="font-bold" style={{ color: '#3c3836' }}>{title}:</span>
                            <span style={{ color: '#3c3836' }}> {description}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-3" style={{ color: '#3c3836' }}>Significant Challenges Overcome</h4>
                  <ul className="space-y-2">
                    {leadership.challenges.map((challenge, index) => {
                      const [title, description] = challenge.split(': ');
                      return (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 mt-1 w-2 h-2 rounded-full flex-shrink-0" 
                                style={{ backgroundColor: '#cc241d' }}></span>
                          <div>
                            <span className="font-bold" style={{ color: '#3c3836' }}>{title}:</span>
                            <span style={{ color: '#3c3836' }}> {description}</span>
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
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#52874f' }}>Technical Skills</h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#458588' }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: '#ebdbb2' }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#3c3836' }}>{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.skills.map((skill, i) => (
                    <li key={i} className="flex items-center group">
                      <span className="mr-3 w-2 h-2 rounded-full transition-all duration-200 group-hover:scale-150" 
                            style={{ backgroundColor: '#d79921' }}></span>
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
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#3c3836' }}>About Me</h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: '#de9e36' }}></div>
          </div>
          
          <div className="rounded-xl shadow-lg p-8" style={{ backgroundColor: '#ebdbb2' }}>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="relative">
                <img 
                  src="https://i.postimg.cc/VL4X8GH2/eu.jpg" 
                  alt="Profile" 
                  className="w-48 h-48 rounded-2xl object-cover shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg"
                     style={{ backgroundColor: '#d79921' }}>
                  🚀
                </div>
              </div>
              
              <div className="flex-1">
                <p className="mb-4 text-gray-700 text-lg leading-relaxed">
                  I'm a 4th year <strong style={{ color: '#3c3836' }}>Creative Media and Game Technologies (CMGT)</strong> student at the Hanze University of Applied Sciences with a focus on game design, level design, narrative design and enough programming to showcase my ideas.
                </p>
                <p className="mb-4 text-gray-700 text-lg leading-relaxed">
                  My background spans multiple game engines and development methodologies, with particular expertise in <strong style={{ color: '#458588' }}>Unity C# development, Godot development</strong> and <strong style={{ color: '#de9e36' }}>Unreal Engine level design and Blueprinting</strong>.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  I'm passionate about creating meaningful player experiences with unique narratives and immersive level design. My portfolio demonstrates my ability to <strong style={{ color: '#d79921' }}>perform under pressure</strong>, <strong style={{ color: '#458588' }}>overcome technical challenges</strong>, and <strong style={{ color: '#8ec07c' }}>deliver both small and bigger sized projects</strong> under constraints.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="text-white py-12" style={{ backgroundColor: '#3c3836' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
            <p className="opacity-90">Ready to create something amazing together?</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="mailto:ivanovjucanmihai@gmail.com" 
               className="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
               style={{ backgroundColor: '#d79921', color: '#3c3836' }}>
              Get In Touch
            </a>
            <a href="#projects" 
               className="px-6 py-3 rounded-full font-semibold border-2 border-white text-white hover:bg-white transition-all duration-300"
               onMouseEnter={(e) => {
                 e.target.style.backgroundColor = 'white';
                 e.target.style.color = '#3c3836';
               }}
               onMouseLeave={(e) => {
                 e.target.style.backgroundColor = 'transparent';
                 e.target.style.color = 'white';
               }}>
              View Portfolio
            </a>
          </div>
          
          <div className="border-t border-white border-opacity-20 pt-6">
            <p className="opacity-75">© 2025 Game Developer Portfolio</p>
          </div>
        </div>
      </footer>
      
      {/* Project Detail Modal */}
      {activeProject && <ProjectDetail project={activeProject} />}
    </div>
  );
};

export default Portfolio;

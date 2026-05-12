import { useState, useEffect } from "react";
import Slider from "react-slick";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Github, Linkedin, Mail, ExternalLink, Briefcase, Calendar, MapPin, Award, Code, Sparkles } from "lucide-react";
import AnimatedCodeSVG from "./components/AnimatedCodeSVG";
import AnimatedExperienceSVG from "./components/AnimatedExperienceSVG";
import AnimatedProjectSVG from "./components/AnimatedProjectSVG";
import AnimatedSkillsSVG from "./components/AnimatedSkillsSVG";
import ThemeSelector, { themes, Theme } from "./components/ThemeSelector";
import { useTheme } from "./hooks/useTheme";

// Helper function to generate theme from gradient (must match ThemeSelector)
const generateThemeFromGradient = (startColor: string, endColor: string): Theme => {
  const getLuminance = (hex: string) => {
    const rgb = parseInt(hex.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  };

  const startLum = getLuminance(startColor);
  const endLum = getLuminance(endColor);
  const avgLum = (startLum + endLum) / 2;
  const isDark = avgLum < 0.5;

  const hexToTailwind = (hex: string) => hex.toLowerCase();

  return {
    id: 'custom-gradient',
    name: 'Custom Gradient',
    mode: isDark ? 'dark' : 'light',
    colors: {
      primary: hexToTailwind(startColor),
      secondary: hexToTailwind(endColor),
      accent: hexToTailwind(endColor),
      background: isDark ? 'slate-950' : 'slate-50',
      foreground: isDark ? 'white' : 'slate-900',
      card: isDark ? 'slate-900' : 'white',
      muted: isDark ? 'slate-400' : 'slate-600',
      gradientFrom: `from-[${startColor}]`,
      gradientVia: `via-[${endColor}]`,
      gradientTo: `to-[${endColor}]`,
      buttonGradient: `from-[${startColor}] to-[${endColor}]`,
      badgeColor: hexToTailwind(startColor)
    }
  };
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[1]); // Default to dark theme

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedThemeId = localStorage.getItem("selectedTheme");
    if (savedThemeId === 'custom-gradient') {
      // Load custom gradient theme
      const savedGradient = localStorage.getItem("customGradient");
      if (savedGradient) {
        const { start, end } = JSON.parse(savedGradient);
        const customTheme = generateThemeFromGradient(start, end);
        setCurrentTheme(customTheme);
      }
    } else if (savedThemeId) {
      const theme = themes.find(t => t.id === savedThemeId);
      if (theme) {
        setCurrentTheme(theme);
      }
    }
  }, []);

  useEffect(() => {
    if (currentTheme.mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("selectedTheme", currentTheme.id);
  }, [currentTheme]);

  const handleThemeChange = (theme: Theme) => {
    setCurrentTheme(theme);
  };

  useTheme(currentTheme);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true
  };

  const experiences = [
    {
      company: "Feuji",
      role: "Software Developer",
      duration: "Present",
      period: "2024 - Present",
      location: "Current Position",
      description: "Leading development initiatives and architecting scalable solutions for enterprise clients.",
      achievements: [
        "Spearheading full-stack development projects",
        "Implementing modern cloud architectures",
        "Mentoring junior developers and conducting code reviews",
        "Driving technical innovation and best practices"
      ],
      skills: ["React", "Node.js", "AWS", "TypeScript", "Microservices"],
      theme: "from-indigo-600 via-purple-600 to-pink-600"
    },
    {
      company: "Dharani Info Technologies",
      role: "Full Stack Developer",
      duration: "2.1 Years",
      period: "2022 - 2024",
      location: "Professional Growth",
      description: "Developed and delivered innovative web solutions, contributing to multiple client projects and internal tools.",
      achievements: [
        "Built 15+ responsive web applications from concept to deployment",
        "Reduced application load time by 40% through optimization",
        "Led a team of 3 developers on critical projects",
        "Implemented CI/CD pipelines improving deployment efficiency by 60%"
      ],
      skills: ["JavaScript", "React", "Python", "MongoDB", "Docker"],
      theme: "from-emerald-600 via-teal-600 to-cyan-600"
    }
  ];

  const projects = [
    {
      title: "Enterprise Dashboard",
      description: "Real-time analytics platform with advanced data visualization and reporting capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
      gradient: "from-violet-500 to-purple-500"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured shopping experience with payment integration and inventory management.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      tags: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Project Management Tool",
      description: "Collaborative workspace with real-time updates and team coordination features.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      tags: ["TypeScript", "WebSocket", "Redis", "Docker"],
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  const skills = {
    "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    "Backend": ["Node.js", "Python", "Express", "FastAPI", "GraphQL"],
    "Database": ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    "DevOps": ["Docker", "AWS", "CI/CD", "Kubernetes", "Git"],
    "Tools": ["Figma", "VS Code", "Postman", "Jira", "Slack"]
  };

  return (
    <div className="min-h-screen overflow-x-hidden transition-colors duration-300" style={{ backgroundColor: `var(--theme-background)`, color: `var(--theme-foreground)` }}>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 dark:opacity-20 animate-blob" style={{ backgroundColor: `var(--theme-primary)` }}></div>
        <div className="absolute top-0 -right-4 w-96 h-96 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 dark:opacity-20 animate-blob animation-delay-2000" style={{ backgroundColor: `var(--theme-secondary)` }}></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-10 dark:opacity-20 animate-blob animation-delay-4000" style={{ backgroundColor: `var(--theme-accent)` }}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 shadow-lg' : 'bg-transparent'}`} style={scrolled ? { backgroundColor: `${currentTheme.mode === 'dark' ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)'}` } : {}}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6" style={{ color: `var(--theme-primary)` }} />
            <span className="text-xl font-semibold bg-gradient-to-r bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))` }}>Portfolio</span>
          </div>
          <div className="flex items-center gap-8">
            <a
              href="#about"
              className="relative px-3 py-2 rounded-md transition-all duration-300 group overflow-hidden cursor-pointer"
              style={{ color: `var(--theme-muted)` }}
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`
              }}></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">About</span>
            </a>
            <a
              href="#experience"
              className="relative px-3 py-2 rounded-md transition-all duration-300 group overflow-hidden cursor-pointer"
              style={{ color: `var(--theme-muted)` }}
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`
              }}></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Experience</span>
            </a>
            <a
              href="#projects"
              className="relative px-3 py-2 rounded-md transition-all duration-300 group overflow-hidden cursor-pointer"
              style={{ color: `var(--theme-muted)` }}
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`
              }}></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Projects</span>
            </a>
            <a
              href="#skills"
              className="relative px-3 py-2 rounded-md transition-all duration-300 group overflow-hidden cursor-pointer"
              style={{ color: `var(--theme-muted)` }}
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`
              }}></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Skills</span>
            </a>
            <a
              href="#contact"
              className="relative px-3 py-2 rounded-md transition-all duration-300 group overflow-hidden cursor-pointer"
              style={{ color: `var(--theme-muted)` }}
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`
              }}></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Contact</span>
            </a>
            <ThemeSelector currentTheme={currentTheme} onThemeChange={handleThemeChange} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6" style={{
              background: `linear-gradient(to right, color-mix(in srgb, var(--theme-primary) 10%, transparent), color-mix(in srgb, var(--theme-secondary) 10%, transparent))`,
              border: `1px solid color-mix(in srgb, var(--theme-primary) 30%, transparent)`
            }}>
              <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm" style={{ color: `var(--theme-primary)` }}>Available for opportunities</span>
            </div>
            <h1 className="text-6xl md:text-8xl mb-6 bg-gradient-to-r bg-clip-text text-transparent" style={{
              backgroundImage: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary), var(--theme-accent))`
            }}>
              Crafting Digital Excellence
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed" style={{ color: `var(--theme-muted)` }}>
              Full Stack Developer with 2+ years of experience building scalable web applications.
              From <span className="text-emerald-600 dark:text-emerald-400">Dharani Info Technologies</span> to <span className="text-indigo-600 dark:text-indigo-400">Feuji</span>,
              delivering innovative solutions that drive business growth.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button
                size="lg"
                asChild
                className="gap-2 shadow-lg text-white hover:opacity-90 transition-opacity"
                style={{
                  background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))`,
                  boxShadow: `0 10px 25px color-mix(in srgb, var(--theme-primary) 25%, transparent)`
                }}
              >
                <a href="mailto:kondeboinaajay873@gmail.com">
                  <Mail className="h-4 w-4" />
                  Let's Connect
                </a>
              </Button>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 gap-2"
              >
                <a href="https://github.com/kondeboinaajay" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  View Work
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6" style={{ backgroundColor: currentTheme.mode === 'light' ? 'white' : 'transparent' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r bg-clip-text text-transparent" style={{
              backgroundImage: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary))`
            }}>
              About Me
            </h2>
            <p className="text-lg" style={{ color: `var(--theme-muted)` }}>Building the future, one line at a time</p>
          </div>

          <Slider {...carouselSettings} className="mb-16">
            <div className="px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="w-64 h-64 mx-auto">
                  <AnimatedCodeSVG />
                </div>
                <div>
                  <h3 className="text-3xl mb-6" style={{ color: `var(--theme-foreground)` }}>Passionate Developer</h3>
                  <p className="mb-6 leading-relaxed text-lg" style={{ color: `var(--theme-muted)` }}>
                    I'm a passionate developer who believes in creating meaningful digital experiences.
                    My journey through Dharani Info Technologies and now at Feuji has shaped my approach
                    to solving complex problems with elegant, efficient solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-3xl mb-6" style={{ color: `var(--theme-foreground)` }}>Full-Stack Excellence</h3>
                  <p className="leading-relaxed text-lg" style={{ color: `var(--theme-muted)` }}>
                    Specializing in full-stack development, I combine cutting-edge technologies with
                    user-centric design to deliver applications that not only work flawlessly but also
                    delight users.
                  </p>
                </div>
                <div className="relative">
                  <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-600/20 dark:to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-200 dark:border-purple-500/20">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center p-6 bg-white dark:bg-slate-900/50 rounded-xl border border-purple-200 dark:border-slate-800">
                        <div className="text-4xl mb-2 text-slate-900 dark:text-white">2+</div>
                        <div className="text-slate-600 dark:text-slate-400">Years Experience</div>
                      </div>
                      <div className="text-center p-6 bg-white dark:bg-slate-900/50 rounded-xl border border-purple-200 dark:border-slate-800">
                        <div className="text-4xl mb-2 text-slate-900 dark:text-white">25+</div>
                        <div className="text-slate-600 dark:text-slate-400">Projects Delivered</div>
                      </div>
                      <div className="text-center p-6 bg-white dark:bg-slate-900/50 rounded-xl border border-purple-200 dark:border-slate-800">
                        <div className="text-4xl mb-2 text-slate-900 dark:text-white">15+</div>
                        <div className="text-slate-600 dark:text-slate-400">Technologies</div>
                      </div>
                      <div className="text-center p-6 bg-white dark:bg-slate-900/50 rounded-xl border border-purple-200 dark:border-slate-800">
                        <div className="text-4xl mb-2 text-slate-900 dark:text-white">100%</div>
                        <div className="text-slate-600 dark:text-slate-400">Dedication</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 px-6 bg-slate-100 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 theme-gradient-text">
              Professional Journey
            </h2>
            <p className="text-lg theme-text-muted">Building expertise across innovative organizations</p>
          </div>

          <div className="mb-12 w-64 h-64 mx-auto">
            <AnimatedExperienceSVG />
          </div>

          <Slider {...carouselSettings}>
            {experiences.map((exp, index) => (
              <div key={index} className="px-4">
                <div className="group">
                  <div className="relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-900/80 dark:to-slate-800/50 rounded-2xl p-8 border border-slate-300 dark:border-slate-700/50 hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.theme} rounded-t-2xl`}></div>

                    <div className="grid lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-1">
                        <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${exp.theme} bg-clip-text text-transparent mb-4`}>
                          <Briefcase className="h-5 w-5" />
                          <span className="text-2xl">{exp.company}</span>
                        </div>
                        <h3 className="text-xl text-slate-900 dark:text-white mb-4">{exp.role}</h3>

                        <div className="space-y-3 text-slate-600 dark:text-slate-400">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-pink-600 dark:text-pink-400" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-6">
                          {exp.skills.map((skill, i) => (
                            <Badge key={i} className="theme-badge transition-all duration-300">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="lg:col-span-2">
                        <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed text-lg">
                          {exp.description}
                        </p>

                        <div className="space-y-3">
                          <div className="flex items-center gap-2 mb-4 theme-text-primary">
                            <Sparkles className="h-5 w-5" />
                            <span>Key Achievements</span>
                          </div>
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start gap-3 group/item">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full theme-gradient-bg group-hover/item:scale-150 transition-transform"></div>
                              <p className="text-slate-600 dark:text-slate-400 group-hover/item:text-slate-900 dark:group-hover/item:text-slate-300 transition-colors">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6 bg-white dark:bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 theme-gradient-text">
              Featured Projects
            </h2>
            <p className="text-lg theme-text-muted">Showcasing innovation and technical excellence</p>
          </div>

          <div className="mb-12 w-64 h-64 mx-auto">
            <AnimatedProjectSVG />
          </div>

          <Slider {...{...carouselSettings, slidesToShow: 3, slidesToScroll: 1, responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } }
          ]}}>
            {projects.map((project, index) => (
              <div key={index} className="px-4">
                <Card className="group bg-white dark:bg-slate-900/50 border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 h-full">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-3 text-slate-900 dark:text-white group-hover:theme-text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="theme-text-muted mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} className="theme-badge transition-all duration-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 gap-2 theme-hover-border transition-all duration-300">
                      View Details
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-6 bg-slate-100 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 theme-gradient-text">
              Technical Arsenal
            </h2>
            <p className="text-lg theme-text-muted">Technologies and tools I work with daily</p>
          </div>

          <div className="mb-12 w-80 h-80 mx-auto">
            <AnimatedSkillsSVG />
          </div>

          <Slider {...{...carouselSettings, slidesToShow: 3, slidesToScroll: 1, responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } }
          ]}}>
            {Object.entries(skills).map(([category, items], index) => (
              <div key={index} className="px-4">
                <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900/80 dark:to-slate-800/50 rounded-2xl p-8 border border-slate-300 dark:border-slate-700/50 theme-hover-border transition-all duration-300 h-full min-h-[280px]">
                  <div className="flex items-center gap-2 mb-6">
                    <Code className="h-5 w-5 theme-text-primary" />
                    <h3 className="text-xl text-slate-900 dark:text-white">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <Badge key={i} className="theme-badge transition-all duration-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6 bg-white dark:bg-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6 theme-gradient-text">
            Let's Create Something Amazing
          </h2>
          <p className="theme-text-muted mb-12 text-lg leading-relaxed">
            Whether you have a project in mind or just want to connect, I'm always open to discussing
            new opportunities and collaborations.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              size="lg"
              asChild
              className="gap-2 shadow-lg text-white hover:opacity-90 transition-opacity theme-gradient-bg"
            >
              <a href="mailto:kondeboinaajay873@gmail.com">
                <Mail className="h-5 w-5" />
                Email Me
              </a>
            </Button>
            <Button
              size="lg"
              asChild
              variant="outline"
              className="border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 gap-2 theme-hover-border"
            >
              <a href="https://www.linkedin.com/in/kondeboinaajay" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button
              size="lg"
              asChild
              variant="outline"
              className="border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 gap-2 theme-hover-border"
            >
              <a href="https://github.com/kondeboinaajay" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 theme-text-primary" />
              <span className="theme-text-muted">Built with passion and precision</span>
            </div>
            <div className="theme-text-muted">
              © 2026 Portfolio. Powered by React + Tailwind CSS
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
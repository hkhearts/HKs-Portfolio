export const personalInfo = {
  name: "Hari Krishnan C",
  tagline: "AR/VR & Game Developer crafting immersive digital experiences from South India.",
  roles: ["AR/VR Developer", "Game Developer", "XR Engineer", "Creative Technologist"],
  email: "harikrishnanofficialdev@gmail.com",
  phone: "+91 9361249474",
  linkedin: "https://www.linkedin.com/in/hari-krishnan-973b36267/",
  location: "Tamil Nadu, India",
  github: "https://github.com/hkhearts",
  summary: "Computer Science engineer specialising in AR, VR, Game Development, and Machine Learning.",
};

export const education = [
  { degree: "B.E. Computer Science & Engineering", institution: "Ramco Institute of Technology", duration: "2023–2027", score: "CGPA: 8.44" },
  { degree: "Higher Secondary (12th)", institution: "Jaycees Matric Hr. Sec. School", duration: "2021–2023", score: "90%", location: "Rajapalayam" },
  { degree: "Primary (10th)", institution: "VNUAPT Mat Hr Sec School", duration: "up to 2021", score: "100%" },
];

export const roles = [
  { role: "Junior Developer", company: "4Friends Studio — Sairam Incubation", desc: "Game dev & VR at Sri Sairam Engineering College Incubator." },
  { role: "Head Manager", company: "RD Labz", desc: "Leading R&D initiatives in emerging technologies." },
  { role: "Chief Software Architect", company: "Folonite", desc: "Architecture for neurotechnology-focused applications." },
];

export const internships = [
  { title: "Game Development & VR Intern", org: "Sri Sairam Engineering College", location: "Chennai", from: "Jun 2025", to: "Jul 2025", mode: "Offline", link: "/experience/Sairam/IMG_20241025_0001.pdf" },
  { title: "Student Intern — R&D Center", org: "RIT XR R&D Center", location: "RIT Campus", from: "Jun 2025", to: "Present", mode: "Offline" },
  { title: "Automation Developer", org: "The Ramco Cements Ltd", location: "Ariyalur", from: "Apr 2025", to: "Apr 2025", mode: "Offline" },
  { title: "Java Developer Intern", org: "ShadowFox", location: "Remote", from: "Dec 2024", to: "Dec 2024", mode: "Online" },
  { title: "Game Developer", org: "Magnion Technology Factory", location: "Onsite", from: "Mar 2024", to: "Jul 2024", mode: "Offline", link: "/experience/Magnion/Hari Krishnan.pdf" },
  { title: "Python Developer Intern", org: "CodSoft", location: "Remote", from: "Oct 2023", to: "Nov 2023", mode: "Online" },
];

export const coreSkills = [
  "C", "C++", "C#", "Java", "Python", "JavaScript",
  "OOP", ".NET", "Unity", "AR/VR", "Blender", "Git",
  "Django", "Three.js", "HTML", "CSS", "TensorFlow", "OpenCV",
  "SQL", "MongoDB", "Figma", "SketchUp", "YOLO", "Docker",
];

export interface Project {
  name: string;
  description: string;
  tech: string;
  year: string;
  category: string;
  repo?: string;
  slug: string;
  images?: string[];
}

export const flagshipProjects: Project[] = [
  {
    name: "Driving Licence Car Simulator",
    description: "Physics-based driving licence training simulator with Logitech steering hardware, real-world traffic scenarios, and an authentic dashboard UI.",
    tech: "Unity 3D, C#, Logitech SDK",
    year: "2026", category: "Game Dev",
    repo: "",
    slug: "car-simulator",
  },
  {
    name: "ShadeIQ",
    description: "Smart AR-powered shade recommendation system. Uses WebAR and AI to analyse skin tones and recommend perfect makeup shades in real time.",
    tech: "WebAR, Django, SQLite",
    year: "2026", category: "AR/VR",
    repo: "https://github.com/hkhearts/ARmakeUp-NaturalsHackathon",
    slug: "shade-iq",
  },
  {
    name: "Origami AR",
    description: "Transforms origami learning into an interactive AR experience using image markers and 3D step-by-step instructions.",
    tech: "ARCore, Unity, C#, Vuforia",
    year: "2024", category: "AR/VR",
    repo: "https://github.com/hkhearts/Origami",
    slug: "origami-ar",
  },
  {
    name: "Temple AR",
    description: "Augmented Reality platform for cultural temple experiences, bringing heritage to life through immersive AR visualisation.",
    tech: "ARCore, Unity, C#",
    year: "2025", category: "AR/VR",
    repo: "",
    slug: "temple-ar",
  },
];

export const allProjects: Project[] = [
  { name: "Driving Licence Car Simulator", description: "Physics-based driver training with Logitech hardware and real-world traffic simulation.", tech: "Unity 3D, C#, Logitech SDK", year: "2026", category: "Game Dev", repo: "", slug: "car-simulator" },
  { name: "ShadeIQ", description: "AR-powered makeup shade recommendation using WebAR and AI skin tone analysis.", tech: "WebAR, Django, SQLite", year: "2026", category: "AR/VR", repo: "https://github.com/hkhearts/ARmakeUp-NaturalsHackathon", slug: "shade-iq" },
  { name: "Temple AR", description: "AR platform bringing cultural temple heritage to life through immersive visualisation.", tech: "ARCore, Unity, C#", year: "2025", category: "AR/VR", repo: "", slug: "temple-ar" },
  { name: "RIT College Tour", description: "Virtual guided AR/VR tour of Ramco Institute of Technology campus with interactive hotspots.", tech: "Unity, ARCore, C#", year: "2025", category: "AR/VR", repo: "https://github.com/hkhearts/rittour", slug: "rit-tour" },
  { name: "YAP Compiler", description: "Custom programming language compiler with lexical analysis, parsing, and code generation.", tech: "C#, .NET", year: "2025", category: "Dev Tools", repo: "", slug: "yap-compiler" },
  { name: "Shooting Shogun", description: "3D action shooting game with advanced enemy AI and polished level design.", tech: "Unity 3D, C#", year: "2025", category: "Game Dev", slug: "shooting-shogun" },
  { name: "Indoor Navigation System", description: "AR-based indoor navigation using spatial anchors and real-time pathfinding for large buildings.", tech: "Unity, ARCore, Immersal SDK", year: "2025", category: "AR/VR", slug: "indoor-navigation" },
  { name: "Sleep Quality Prediction", description: "ML model predicting sleep quality from biometric and lifestyle data using regression analysis.", tech: "Python, Scikit-learn, Django", year: "2025", category: "AI/ML", slug: "sleep-quality" },
  { name: "Hall Booking Management System", description: "Full-stack system for booking and managing institution halls with real-time availability.", tech: "Django, SQL, HTML, CSS", year: "2025", category: "Web Dev", slug: "hall-booking" },
  { name: "Custom Database Engine", description: "Lightweight custom database engine with query parsing, indexing, and storage management.", tech: "C, Python", year: "2025", category: "Dev Tools", slug: "custom-db" },
  { name: "CN Load Balancer", description: "Computer networks load balancer simulation with round-robin, least-connections, and IP-hash algorithms.", tech: "Python, Networking", year: "2025", category: "Dev Tools", slug: "load-balancer" },
  { name: "Recipe AI", description: "AI-powered recipe recommendation system using NLP and ingredient-based filtering with voice input.", tech: "Python, NLP, LangChain", year: "2025", category: "AI/ML", slug: "recipe-ai" },
  { name: "Cisco Packet 3D VR Models", description: "3D VR-ready models of Cisco networking hardware (routers, laptops, switches) for educational simulations.", tech: "Blender, SketchUp, Unity", year: "2025", category: "Design", repo: "", slug: "cisco-3d", images: ["/projects/cisco/cisco 1.png", "/projects/cisco/Internet.png", "/projects/cisco/Laptop.png", "/projects/cisco/Router.png"] },
  { name: "Recipe AI 3D Models", description: "3D visual assets for a recipe AR application — modelled and textured food props for AR overlay.", tech: "Blender, SketchUp", year: "2025", category: "Design", slug: "recipe-3d", images: ["/projects/3dmodel/IMG-20250930-WA0002.jpg", "/projects/3dmodel/IMG-20250930-WA0003.jpg", "/projects/3dmodel/IMG-20250930-WA0004.jpg", "/projects/3dmodel/IMG-20250930-WA0005.jpg"] },
  { name: "Seven Segment Display AI", description: "YOLO-based model detecting and reading digits from seven-segment displays in real time.", tech: "YOLO, Python", year: "2025", category: "AI/ML", slug: "seven-segment-ai" },
  { name: "F.R.I.D.A.Y AI Assistant", description: "Voice-controlled personal assistant with NLP, task automation, and ML-powered responses.", tech: "Python, ML, NLP", year: "2025", category: "AI/ML", slug: "friday-ai" },
  { name: "Certificate Generator", description: "Django-based tool to generate and distribute digital certificates in bulk.", tech: "Django, Python", year: "2025", category: "Web Dev", slug: "cert-generator" },
  { name: "Nexus WorkSpace", description: "Digital workspace platform with collaboration, task management, and project tracking.", tech: "Django, Python", year: "2025", category: "Web Dev", slug: "nexus-workspace" },
  { name: "Origami AR", description: "Interactive AR origami learning with image markers and 3D step-by-step instructions.", tech: "ARCore, Unity, C#, Vuforia", year: "2024", category: "AR/VR", repo: "https://github.com/hkhearts/Origami", slug: "origami-ar" },
  { name: "Heart Watch", description: "ML system predicting heart disease from symptoms and biomarkers with Django dashboard.", tech: "Django, ML, Python", year: "2024", category: "AI/ML", slug: "heart-watch" },
  { name: "Carpet Man", description: "3D superhero action game with custom physics and enemy AI.", tech: "Unity, C#", year: "2024", category: "Game Dev", slug: "carpet-man" },
  { name: "City Car Racer", description: "Racing game with multiple car models, tracks, and competitive speed mechanics.", tech: "Unity, C#", year: "2024", category: "Game Dev", slug: "city-car-racer" },
  { name: "Haunted Lemon", description: "Horror thriller game with a mysterious lemon-themed storyline and atmospheric design.", tech: "Unity, C#", year: "2024", category: "Game Dev", slug: "haunted-lemon" },
  { name: "CCTV Camera AI", description: "Computer vision surveillance system using OpenCV for real-time monitoring.", tech: "OpenCV, Python", year: "2024", category: "AI/ML", slug: "cctv-ai" },
  { name: "AR VR Lab Design", description: "3D SketchUp model of an augmented and virtual reality laboratory for RIT.", tech: "SketchUp", year: "2024", category: "Design", slug: "ar-vr-lab" },
  { name: "Anime Parallax Website", description: "Engaging parallax website centred around Itachi with custom scroll animations.", tech: "HTML, CSS, JavaScript", year: "2023", category: "Web Dev", slug: "anime-parallax" },
  { name: "Flappy Bird Game", description: "Pygame recreation of Flappy Bird with classic mechanics and custom sprites.", tech: "PyGame, Python", year: "2023", category: "Game Dev", slug: "flappy-bird" },
  { name: "Snake Game", description: "Classic snake game with progressive difficulty using Python and Pygame.", tech: "PyGame, Python", year: "2023", category: "Game Dev", slug: "snake-game" },
];

export const certificates = [
  { name: "Gen AI Course Completion", issuer: "LinkedIn Learning", year: "2024", folder: "GenAi", file: "1764783567397.jpg" },
  { name: "C++ Advanced Certificate", issuer: "Udemy", year: "2024", folder: "CppAdvanced", file: "1764651581441.jpg" },
  { name: "C# Unity 3D Certificate", issuer: "Cursa", year: "2024", folder: "Cursa", file: "cursa.jpg" },
  { name: "Gaming AI Dev Certificate", issuer: "Itronics Solutions", year: "2024", folder: "Itronics", file: "pitsonix.jpg" },
  { name: "HTML & CSS (Zero to Hero)", issuer: "Let's Upgrade", year: "2024", folder: "LetsUpgrade", file: "1700381434806.jpg" },
  { name: "Meta Frontend Certificate", issuer: "Coursera", year: "2023", folder: "MetaFrontend", file: "CERTIFICATE_LANDING_PAGE~VDWGBGU7TPXA.jpeg" },
  { name: "Python Programming", issuer: "CodSoft", year: "2023", folder: "CodSoft", file: "1699507668798.jpg" },
  { name: "Cisco Cybersecurity", issuer: "Cisco Networking Academy", year: "2026", folder: "CiscoCyber", file: "Screenshot 2026-06-28 115907.png" },
  { name: "NPTEL Certification", issuer: "NPTEL", year: "2026", folder: "NPTEL", file: "Screenshot 2026-06-28 115620.png" },
  { name: "E-Summit Participation", issuer: "E-Summit", year: "2025", folder: "ESummit", file: "e745d6b8-cecf-439e-bf91-8960f26ee490.jpg" },
  { name: "PixelVerse Certificate", issuer: "PixelVerse", year: "2025", folder: "PixelVerse", file: "8a4fc53c-1855-4581-b820-8465f665e4ec.jpg" },
  { name: "SIMATS Certificate", issuer: "SIMATS", year: "2025", folder: "Simats", file: "1760185985446.jpg" },
  { name: "Film Show Award", issuer: "RIT, IE(I)", year: "2025", folder: "FilmShow", file: "Screenshot 2026-06-28 121253.png" },
];

export const hackathonDetails = [
  {
    slug: "naturals-hackathon",
    name: "Naturals ShadeIQ Challenge",
    organizer: "Naturals Salon",
    year: "2026", award: "Second Runner-UP",
    description: "Built ShadeIQ — an AR-powered makeup shade recommendation system — for the Naturals hackathon. Our solution used computer vision and WebAR to analyse skin tones and recommend perfect shades, winning the challenge.",
    images: ["/hackathon/Naturals/1779559726291.jpg","/hackathon/Naturals/1779559727262.jpg","/hackathon/Naturals/1779559727396.jpg","/hackathon/Naturals/1779559727415.jpg","/hackathon/Naturals/1779559747402.jpg","/hackathon/Naturals/1779559748964.jpg"],
  },
  {
    slug: "xplay-game-jam",
    name: "X-Play Game Jam",
    organizer: "SRM, Aaruush '24",
    year: "2025", award: "2nd Place",
    description: "Developed an innovative AR-integrated game in 48 hours at X-Play Game Jam. Our entry secured 2nd place with unique gameplay mechanics.",
    images: ["/hackathon/Xplay/1764783362568.jpg"],
  },
  {
    slug: "simats-qmodelx",
    name: "QModelX",
    organizer: "SIMATS",
    year: "2025", award: "3rd Place",
    description: "Built an AI-powered quantitative model at SIMATS. Our predictive analytics solution earned 3rd place among participating teams.",
    images: ["/hackathon/Simats/1760375792396.jpg","/hackathon/Simats/1760375792461.jpg","/hackathon/Simats/1760375792634.jpg","/hackathon/Simats/1760375792730.jpg","/hackathon/Simats/1760375792811.jpg","/hackathon/Simats/1760375792842.jpg","/hackathon/Simats/1760375792860.jpg"],
  },
  {
    slug: "startup-spotlight",
    name: "StartUp SpotLight",
    organizer: "Guru Jambeshwar Univ., Delhi",
    year: "2025", award: "Finalist",
    description: "Pitched our tech startup idea at the national StartUp SpotLight competition. Reached the finals among hundreds of teams from across India.",
    images: ["/hackathon/StartupSpotlight/1724002295848.jpg","/hackathon/StartupSpotlight/1724002296520.jpg"],
  },
  {
    slug: "hackbeyond",
    name: "HackBeyondLimits",
    organizer: "Rathinam College",
    year: "2025", award: "Finalist",
    description: "Competed in HackBeyondLimits pushing creative and technical boundaries in a 24-hour sprint.",
    images: ["/hackathon/HackBeyond/IMG20250222214358.jpg","/hackathon/HackBeyond/IMG20250224140314.jpg"],
  },
  {
    slug: "hackatronics",
    name: "HackTronix 1.0",
    organizer: "Sri Sairam Engineering College",
    year: "2024", award: "Participated",
    description: "Participated in HackTronix 1.0, presenting innovative hardware-software integration projects.",
    images: ["/hackathon/Hackatronics/IMG-20250423-WA0046.jpeg","/hackathon/Hackatronics/IMG20250504212530.jpg"],
  },
  {
    slug: "trident-2k26",
    name: "Trident 2K26",
    organizer: "Trident College",
    year: "2026", award: "Participated",
    description: "Participated in Trident 2K26 technical fest, presenting AR development projects.",
    images: ["/hackathon/Trident/1771600032353.jpg","/hackathon/Trident/1771600032569.jpg","/hackathon/Trident/1771600032570.jpg","/hackathon/Trident/1771600032614.jpg"],
  },
  {
    slug: "code-fusion",
    name: "Code Fusion 2.0",
    organizer: "Chandigarh University",
    year: "2025", award: "Finalist",
    description: "Reached the finals of Code Fusion 2.0 at Chandigarh University with an innovative AR solution.",
    images: ["/hackathon/CodeFusion/code Fusion.jpg"],
  },
  {
    slug: "hacks24",
    name: "HackZ'24",
    organizer: "CEG Guindy",
    year: "2024", award: "Participated",
    description: "Participated in HackZ'24 at CEG Guindy, developing rapid-prototype solutions.",
    images: ["/hackathon/Hacks24/322f6f4b-aff0-4c1b-9263-8e55a1e01f6d.jpg","/hackathon/Hacks24/ae2d1648-532f-495b-bbfb-7662b15c9906.jpg"],
  },
  {
    slug: "ignis",
    name: "Ignis",
    organizer: "Bannari Amman Inst.",
    year: "2023", award: "Participated",
    description: "Participated in Ignis at Bannari Amman Institute of Technology — one of the earliest hackathon experiences.",
    images: ["/hackathon/Ignis/hari(1).jpg","/hackathon/Ignis/hari(4).jpg"],
  },
  {
    slug: "rusa-startup",
    name: "RUSA StartUp Cafe",
    organizer: "Anna University",
    year: "2024", award: "Participated",
    description: "Attended the RUSA StartUp Cafe design thinking workshop and startup pitch event at Anna University.",
    images: ["/hackathon/RusaStartup/hari(2).jpg","/hackathon/RusaStartup/hari(3).jpg"],
  },
  {
    slug: "pragyan",
    name: "Pragyan'25",
    organizer: "NIT Tiruchirappalli",
    year: "2025", award: "Participated",
    description: "Participated in Pragyan'25 — the technical festival of NIT Tiruchirappalli.",
    images: ["/hackathon/Pragyan/Pragyan.jpg"],
  },
  {
    slug: "virtual-playground",
    name: "Virtual Playground",
    organizer: "IIT Patna",
    year: "2025", award: "Participated",
    description: "Participated in the Game Development Challenge at IIT Patna's Virtual Playground event.",
    images: ["/hackathon/VirtualPlayground/VirtualPlaygroundGD.jpg"],
  },
  {
    slug: "flipkart-grid",
    name: "Flipkart Grid 6.0",
    organizer: "FlipKart",
    year: "2024", award: "Participated",
    description: "Participated in Flipkart Grid 6.0, one of India's largest engineering challenges.",
    images: ["/hackathon/FlipkartGrid/830b7022-3981-452c-a671-9f3f5cbc416c.jpg"],
  },
  {
    slug: "hackit",
    name: "Hack It'25",
    organizer: "Anna University",
    year: "2025", award: "Participated",
    description: "Participated in Hack It'25 hosted by Anna University.",
    images: ["/hackathon/HackIt/hack it.jpg"],
  },
  {
    slug: "inviern",
    name: "Inviern",
    organizer: "Unknown",
    year: "2023", award: "Participated",
    description: "Participated in Inviern.",
    images: ["/hackathon/Inviern/video_2023-12-08_22-05-25.mp4"],
  }
];

export const hackathons = hackathonDetails.map(h => ({
  name: h.name, organizer: h.organizer, year: h.year, award: h.award, slug: h.slug,
}));

export const stats = [
  { label: "Projects Built", value: "50+" },
  { label: "Hackathons", value: "18" },
  { label: "Internships", value: "6" },
  { label: "Certifications", value: "13" },
];

export const extraCurricular = [
  { domain: "Art & Drawing", activities: ["2D Game Sprites", "Chibi Gothic Art", "Digital Art", "Low Poly Art"], achievements: ["Admin @hk._.drawings", "National Art Contest Winner 2024"] },
  { domain: "Music", activities: ["Lyrics Creation", "Singing"], achievements: [] },
  { domain: "Chess", activities: ["1000 rated on chess.com"], achievements: [] },
  { domain: "Badminton", activities: ["Club player — passionate hobby"], achievements: ["3rd in Nationals"] },
];

export const workshopsOrganized = [
  { name: "Augment Your Imagination (II year)", role: "Instructor", org: "RIT CSE, XR R&D Center", year: "2025" },
  { name: "Power BI Essentials: Data to Dashboard", role: "Instructor", org: "RIT CSE, RIT IEEE", year: "2025" },
  { name: "Augment Your Imagination (III year)", role: "Technical Support", org: "RIT CSE, XR R&D Center", year: "2025" },
  { name: "SketchUp Pro Essentials", role: "Instructor", org: "RIT CSE, XR R&D Center", year: "2025" },
  { name: "Folonite Basic Industrial Training", role: "Instructor", org: "RIT CSE, Folonite", year: "2024" },
];

export const projectCategories = ["All", "AR/VR", "Game Dev", "AI/ML", "Web Dev", "Design", "Dev Tools"];

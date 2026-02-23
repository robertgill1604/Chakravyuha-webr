export const eventConfig = {
  name: "CHAKRAVYUHA 2K26",
  subtitle: "Innovate. Integrate. Dominate.",
  secondSubtitle: "24 hrs State Level Hackathon",
  organizer: "JJ College Engineering and Technology (Autonomous)",
  group: "Sowdambikaa Group of Institutions",
  accreditation: ["NAAC 'A' Grade", "NBA", "Autonomous"],
  date: process.env.EVENT_DATE || "2026-03-18",
  venue: process.env.EVENT_VENUE || "JJ College of Engineering and Technology (Autonomous) Campus, Trichy",
  registrationDeadline: process.env.REGISTRATION_DEADLINE || "2026-03-15",
  
  contact: {
    facultyCoordinator: {
      name: "Mr S Narayanasamy B.E., M.E., (Ph.D)",
      phone: "8883183512",
    },
    studentCoordinator: {
      name: "Mr P Ayyappan BE CSE II Year",
      phone: "9042143286",
      email: "ayyappan.p1208@gmail.com",
    },
  },

  accommodation: {
    foodProvided: true,
    restingRoom: {
      available: true,
      separate: true,
      purpose: "Relaxation and sleep",
    },
  },

  registrationFee: "₹2,000",
  teamSize: {
    min: 1,
    max: 3,
  },

  themes: [
    {
      id: "life-science-health",
      title: "Life Science & Health Technology",
      description: "Innovate healthcare solutions, medical devices, telemedicine, and wellness technologies to improve lives.",
      icon: "Heart",
    },
    {
      id: "smart-agriculture",
      title: "Smart Agriculture & Rural Innovation",
      description: "Build solutions for sustainable farming, rural development, and agricultural technology.",
      icon: "Sprout",
    },
    {
      id: "inclusive-digital",
      title: "Inclusive Digital Transformation",
      description: "Create accessible technology solutions for differently-abled individuals and underserved communities.",
      icon: "Accessibility",
    },
    {
      id: "embedded-iot",
      title: "Embedded & IoT",
      description: "Develop smart devices, embedded systems, and IoT solutions connecting the physical and digital worlds.",
      icon: "Cpu",
    },
    {
      id: "smart-education",
      title: "Smart Education & EdTech",
      description: "Transform learning experiences with innovative educational technology and digital learning solutions.",
      icon: "GraduationCap",
    },
    {
      id: "open-innovation",
      title: "Open Innovation",
      description: "Bring your innovative ideas that don't fit into other categories. Creativity knows no bounds!",
      icon: "Lightbulb",
    },
  ],

  timeline: [
    {
      date: "March 18, 2026",
      time: "09:00 AM",
      title: "Registration & Check-in",
      description: "Team registration verification and welcome kit distribution",
    },
    {
      date: "March 18, 2026",
      time: "10:00 AM",
      title: "Opening Ceremony",
      description: "Inauguration and briefing about rules and guidelines",
    },
    {
      date: "March 18, 2026",
      time: "11:00 AM",
      title: "Hackathon Begins",
      description: "Coding starts! Teams begin working on their projects",
    },
    {
      date: "March 18, 2026",
      time: "02:00 PM",
      title: "Lunch Break",
      description: "Networking lunch and team interactions",
    },
    {
      date: "March 18, 2026",
      time: "08:00 PM",
      title: "Dinner & Check-in",
      description: "Progress review and mentor feedback session",
    },
    {
      date: "March 19, 2026",
      time: "12:00 AM",
      title: "Midnight Snacks",
      description: "Energy boost for late-night coding",
    },
    {
      date: "March 19, 2026",
      time: "08:00 AM",
      title: "Breakfast",
      description: "Morning refreshments and final sprint preparation",
    },
    {
      date: "March 19, 2026",
      time: "11:00 AM",
      title: "Submission Deadline",
      description: "All projects must be submitted with presentation",
    },
    {
      date: "March 19, 2026",
      time: "11:30 AM",
      title: "Project Presentations",
      description: "Teams present their solutions to judges",
    },
  ],

  facilities: [
    {
      title: "High-Speed WiFi",
      description: "Dedicated high-speed internet for all participants",
      icon: "Wifi",
    },
    {
      title: "Power Backup",
      description: "24/7 uninterrupted power supply with UPS backup",
      icon: "Zap",
    },
    {
      title: "Food & Beverages",
      description: "Complimentary meals, snacks, and refreshments",
      icon: "Coffee",
    },
    {
      title: "Mentorship",
      description: "Expert mentors available throughout the event",
      icon: "Users",
    },
    {
      title: "Workspaces",
      description: "Dedicated desks and collaboration areas",
      icon: "Monitor",
    },
    {
      title: "Parking",
      description: "Free parking space for all participants",
      icon: "Car",
    },
  ],

  guidelines: [
    "Teams can have 1-3 members (individual or team participation allowed)",
    "Teams can use open-source libraries and APIs",
    "Each team must submit a working prototype and presentation link",
    "Plagiarism will result in immediate disqualification",
    "Decision of judges is final and binding",
    "Participants must bring their own laptops and necessary equipment",
    "Registration fee must be paid before the deadline",
  ],

  prizes: {
    first: "₹20,000",
    second: "₹10,000",
    third: "₹5,000",
    consolation: 5,
  },
} as const;

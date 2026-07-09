import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vineet Sansare",
  initials: "VS",
  url: "https://vineetsansare.com",
  location: "Dubai, United Arab Emirates",
  locationLink: "https://www.google.com/maps/place/dubai",
  description:
    "Engineering Leader · Digital Banking · AI-Powered Software Delivery",
  summary:
    "Engineering Leader building scalable Digital Banking products, AI-powered engineering workflows, and high-performing teams. I specialize in software architecture, delivery leadership, and mentoring engineers to achieve business impact in FinTech and Digital Wealth sectors.",
  avatarUrl: "/me.png",
  skills: [
    "Claude Code",
    "OpenAI Codex",
    "ChatGPT",
    "Gemini",
    "GitHub Copilot",
    "n8n",
    "Fastlane",
    "SwiftUI",
    "React Native",
    "Docker",
    "GitHub Actions",
    "Xcode",
    "Firebase",
    "WebdriverIO"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "contact@vineetsansare.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vineetsansare",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vineetsansare/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/VineetSansare",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:contact@vineetsansare.com",
        icon: Icons.email,
        navbar: false,
      },
      Calendly: {
        name: "Calendly",
        url: "#",
        icon: Icons.globe,
        navbar: true,
      }
    },
  },

  work: [
    {
      company: "Emirates NBD",
      href: "https://www.emiratesnbd.com/",
      badges: [],
      location: "Dubai",
      title: "Engineering Tech Lead",
      logoUrl: "/enbd.png",
      start: "2022",
      end: "Present",
      description:
        "Leading the engineering delivery for Digital Wealth products. Architecting scalable, AI-powered solutions and migrating legacy systems to modern stacks. Driving engineering excellence, stakeholder management, and cross-functional team growth.",
    },
    {
      company: "Abu Dhabi Islamic Bank",
      href: "https://www.adib.ae/",
      badges: [],
      location: "Abu Dhabi",
      title: "Senior Software Engineer",
      logoUrl: "/adib.png",
      start: "2019",
      end: "2022",
      description:
        "Spearheaded the development of ADIB Mobile Banking applications. Championed architecture reviews, UIKit to SwiftUI migrations, and continuous integration workflows, significantly improving app performance and delivery velocity.",
    },
    {
      company: "Hinduja Global Solutions (HGS)",
      href: "#",
      badges: [],
      location: "Mumbai, India",
      title: "Mobile Development Manager",
      logoUrl: "",
      start: "10/2017",
      end: "01/2019",
      description: "Managed the end-to-end development life cycle and architecture for a portfolio of client mobile applications. Led the strategic migration of legacy monolithic Objective-C applications to modern, Swift-based modular frameworks.",
    },
    {
      company: "Idealake Information Technologies",
      href: "#",
      badges: [],
      location: "Mumbai, India",
      title: "Tech Lead",
      logoUrl: "",
      start: "03/2017",
      end: "09/2017",
      description: "Directed and mentored a team of 8 software engineers, guaranteeing the on-time delivery of premium applications. Partnered directly with client stakeholders, backend engineers, and UI/UX designers.",
    },
    {
      company: "Mobond Consultancy",
      href: "#",
      badges: [],
      location: "Mumbai, India",
      title: "Senior Software Engineer",
      logoUrl: "",
      start: "06/2016",
      end: "03/2017",
      description: "Solely developed, rewrote, and launched m-Indicator, achieving 20,000+ downloads. Integrated core offline storage infrastructure and real-time push notifications.",
    },
    {
      company: "Hexaware Technologies",
      href: "https://hexaware.com/",
      badges: [],
      location: "Mumbai, India",
      title: "Senior Software Engineer",
      logoUrl: "",
      start: "12/2010",
      end: "07/2016",
      description: "Pioneered the team's platform shift from legacy .NET web systems over to native mobile app development as an early adopter of Swift.",
    }
  ],
  education: [
    {
      school: "Southern New Hampshire University",
      href: "https://www.snhu.edu/",
      degree: "MBA (Information Technology)",
      logoUrl: "",
      start: "2012",
      end: "2014",
    },
    {
      school: "Mumbai University (RAIT)",
      href: "#",
      degree: "Bachelor of Engineering (Information Technology)",
      logoUrl: "",
      start: "2006",
      end: "2010",
    }
  ],
  projects: [
    {
      title: "Emirates NBD Digital Wealth",
      href: "https://apps.apple.com/us/app/enbd-x/id1497518128",
      dates: "2022 - Present",
      active: true,
      description:
        "Led the engineering architecture and delivery of the Digital Wealth platform on ENBD X, enabling seamless investment and wealth management for millions of users.",
      technologies: [
        "SwiftUI",
        "React Native",
        "Architecture",
        "Digital Banking",
        "FinTech"
      ],
      links: [
        {
          type: "App Store",
          href: "https://apps.apple.com/us/app/enbd-x/id1497518128",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "ADIB Mobile Banking",
      href: "https://apps.apple.com/ae/app/adib-mobile-banking/id1128180440",
      dates: "2019 - 2022",
      active: true,
      description:
        "Core contributor to the ADIB Mobile Banking application, focusing on robust architecture, security, and a premium user experience.",
      technologies: [
        "UIKit",
        "Swift",
        "Mobile Security",
        "Banking Architecture"
      ],
      links: [
        {
          type: "App Store",
          href: "https://apps.apple.com/ae/app/adib-mobile-banking/id1128180440",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "AI Engineering Experiments",
      href: "#",
      dates: "2023 - Present",
      active: true,
      description:
        "Exploring data-driven, extensible AI integrations including local LLMs, n8n automations, and git worktrees to optimize engineering workflows.",
      technologies: [
        "Claude Code",
        "Local LLMs",
        "n8n",
        "GitHub Copilot",
        "Automation"
      ],
      image: "",
      video: "",
    }
  ],
  speaking: [
    {
      title: "Git Worktree + Claude Code = True Parallelism",
      dates: "2024",
      location: "Internal Tech Talk",
      description: "Demonstrated parallel workflows using AI agents and git worktrees for maximum developer productivity.",
      image: "",
    },
    {
      title: "UIKit → SwiftUI Migration",
      dates: "2023",
      location: "Conference",
      description: "Strategies for incremental adoption of SwiftUI in large-scale enterprise banking applications.",
      image: "",
    },
    {
      title: "AI-assisted Engineering",
      dates: "2024",
      location: "Engineering All-Hands",
      description: "How to leverage Copilot, ChatGPT, and Claude Code to accelerate software delivery and architecture reviews.",
      image: "",
    },
    {
      title: "Architecture Reviews & Engineering Excellence",
      dates: "2023",
      location: "Internal Workshop",
      description: "Best practices for conducting architecture reviews and fostering a culture of engineering excellence.",
      image: "",
    }
  ],
  awards: [
    {
      title: "ENBD GEM Award",
      dates: "2023",
      location: "Emirates NBD",
      description: "Recognized for outstanding technical leadership and successful delivery of the Digital Wealth portfolio.",
      image: "",
    }
  ],
  hackathons: [],
} as const;

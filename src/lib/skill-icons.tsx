import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiHtml5,
  SiCss,
  SiSass,
  SiTailwindcss,
  SiMui,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiStrapi,
  SiMysql,
  SiJest,
  SiWebdriverio,
  SiGithub,
  SiGithubcopilot,
  SiVercel,
  SiNetlify,
  SiDocker,
  SiPostman,
  SiJira,
  SiFigma,
  SiGit,
  SiFramer,
  SiThreedotjs,
  SiEsri,
  SiWebpack,
  SiBitbucket,
  SiTestinglibrary,
} from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
import { FaTools, FaRocket, FaBrain, FaCode, FaCloud } from "react-icons/fa";
import { BiTestTube } from "react-icons/bi";
import { VscCode } from "react-icons/vsc";
import { MdCode, MdPlayArrow } from "react-icons/md";

// Skill icon mapping
export const skillIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  // Frontend
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "Redux Toolkit": SiRedux,
  "Redux": SiRedux,
  "Redux Saga": SiRedux,
  "Redux Thunk": SiRedux,
  "TanStack Query": SiReact,
  "HTML5": SiHtml5,
  "HTML": SiHtml5,
  "CSS3 / SCSS": SiCss,
  "CSS3": SiCss,
  "CSS": SiCss,
  "JavaScript (ES6+)": SiJavascript,
  "SCSS": SiSass,
  "SASS": SiSass,
  "Tailwind CSS": SiTailwindcss,
  "Material UI": SiMui,
  "MUI": SiMui,
  "Material-UI": SiMui,
  "Bootstrap": SiBootstrap,
  "Framer Motion": SiFramer,
  "Joy UI": SiMui,
  "JoyUI": SiMui,
  "Joy-UI": SiMui,
  "React Native": SiReact,

  // Backend
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "Express": SiExpress,
  "MongoDB": SiMongodb,
  "Mongoose": TbBrandMongodb,
  "PostgreSQL": SiPostgresql,
  "Supabase": SiSupabase,
  "Strapi CMS": SiStrapi,
  "Strapi": SiStrapi,
  "REST APIs": SiExpress,
  "GraphQL": FaCode,
  "MySQL": SiMysql,
  "tRPC": FaCode,
  "Drizzle ORM": SiPostgresql,
  "Firebase": FaCloud,
  "Better-auth": FaCode,

  // Testing
  "Jest": SiJest,
  "React Testing Library": SiTestinglibrary,
  "RTL": SiTestinglibrary,
  "Playwright": MdPlayArrow,
  "playwright": MdPlayArrow,
  "WebdriverIO": SiWebdriverio,
  "Unit Testing": SiJest,
  "E2E Testing": BiTestTube,
  "Cypress": BiTestTube,

  // AI Tools
  "GitHub Copilot": SiGithubcopilot,
  "Cursor AI": FaCode,
  "Cursor": FaCode,
  "cursor": FaCode,
  "Windsurf": FaCode,
  "Prompt Engineering": FaBrain,
  "AI-Driven Development": SiGithubcopilot,
  "Vibe Coding": FaRocket,

  // DevOps
  "Git / GitHub": SiGithub,
  "Git": SiGit,
  "GitHub": SiGithub,
  "GitHub Actions": SiGithub,
  "CI/CD": SiGithub,
  "Vercel": SiVercel,
  "Netlify": SiNetlify,
  "Heroku": FaCloud,
  "Azure": FaCloud,
  "Microsoft Azure": FaCloud,
  "azure": FaCloud,
  "Docker": SiDocker,

  // Tools
  "VS Code": VscCode,
  "Visual Studio Code": VscCode,
  "VSCode": VscCode,
  "vscode": VscCode,
  "Postman": SiPostman,
  "Jira": SiJira,
  "Figma": SiFigma,
  "MongoDB Atlas": SiMongodb,
  "Bitbucket": SiBitbucket,
  "Webpack": SiWebpack,
  "Chrome DevTools": MdCode,
  "Lodash": FaCode,

  // Additional Technologies
  "ThreeJS": SiThreedotjs,
  "Three.js": SiThreedotjs,
  "ArcGIS": SiEsri,
  "GitHub Pages": SiGithub,
  "Balsamiq": FaTools,

  // Generic fallbacks for concepts
  "Micro-frontend architecture": SiReact,
};

// Default icon component for skills without specific icons
export const DefaultSkillIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <div className={`w-5 h-5 rounded bg-primary/20 ${className}`} />
);

// Get icon component for a skill
export const getSkillIcon = (skillName: string) => {
  return skillIcons[skillName] || DefaultSkillIcon;
};

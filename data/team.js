/**
 * The Otical team. Photos live under /public/images/team.
 * Graphic Design and UI Design are represented here as capabilities;
 * they are presented under the UI/UX Design service.
 *
 * `department` groups members the same way `services.js` groups by `pillar`
 * — so the team reads as an organised company roster (Engineering / Design /
 * Operations) rather than a flat list of individual freelancer profiles.
 */

export const team = [
  {
    name: 'Puneet Kumar',
    role: 'Web Developer',
    department: 'Engineering',
    image: '/images/team/puneet.jpg',
    linkedin: 'https://www.linkedin.com/in/puneetshivaay',
  },
  {
    name: 'Ratnesh Kumar',
    role: 'AI/ML Engineer',
    department: 'Engineering',
    image: '/images/team/ratnesh.jpg',
    linkedin: 'https://www.linkedin.com/in/kratnesh',
  },
  {
    name: 'Dheeraj Kumar',
    role: 'Blockchain Developer',
    department: 'Engineering',
    image: '/images/team/dheeraj.jpg',
    linkedin: 'https://www.linkedin.com/in/dheeraj-kumar-a8b532170',
  },
  {
    name: 'Shekhar Sharma',
    role: 'IoT & Automation Engineer',
    department: 'Engineering',
    image: '/images/team/shekhar.jpg',
    linkedin: 'https://www.linkedin.com/in/sharmashekharr',
  },
  {
    name: 'Aman Tiwari',
    role: 'Web Developer',
    department: 'Engineering',
    image: '/images/team/aman.png',
    linkedin: 'https://www.linkedin.com/in/aman-tiwari-dev/',
  },
  {
    name: 'Ritu Chaudhary',
    role: 'QA Engineer',
    department: 'Engineering',
    image: '/images/team/ritu.png',
    linkedin: 'https://www.linkedin.com/in/rituchaudharyqa',
  },
  {
    name: 'Pratibha Kanaujiya',
    role: 'UI Designer',
    department: 'Design',
    image: '/images/team/pratibha.jpg',
    linkedin: 'https://www.linkedin.com/in/pratibha-kanaujiya-6462b0234/',
  },
  {
    name: 'Amit Kumar',
    role: 'Graphic Designer',
    department: 'Design',
    image: '/images/team/amit.png',
    linkedin: 'https://www.linkedin.com/company/oticalofficial',
  },
  {
    // NOTE: the old data had "Ghanish"/"Ghanist" inconsistently, and a
    // LinkedIn URL with a typo ("hhttps://"). Corrected here.
    name: 'Ghanist Baghel',
    role: 'Marketing Head',
    department: 'Operations',
    image: '/images/team/ghanisht.jpg',
    linkedin: 'https://www.linkedin.com/in/ghanist-baghel',
  },
];

/**
 * Ordered departments for the grid. Fixed order (not alphabetical) so
 * Engineering leads, matching how the services pillars lead with Build.
 */
export const teamDepartments = ['Engineering', 'Design', 'Operations'];


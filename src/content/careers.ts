export interface JobListing {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  preferredQualifications: string[];
  applicationEmail: string;
  status: 'active' | 'archived';
  postedDate: string;
}

// NOTE: The original careers page was hosted on Notion and could not be scraped.
// These listings are flagged for human verification before publishing.
// Status should be verified with the hiring team before launch.

export const jobListings: JobListing[] = [
  {
    id: 'sap-consultant',
    title: 'SAP Consultant',
    location: 'Chantilly, VA / Remote',
    type: 'Full-time',
    department: 'SAP Solutions',
    description:
      'We are looking for an experienced SAP Consultant to join our team and support our clients in implementing and optimizing SAP solutions across HXM and S/4HANA platforms.',
    responsibilities: [
      'Lead SAP implementation and migration projects',
      'Provide functional and technical consulting to clients',
      'Configure and customize SAP modules to meet business requirements',
      'Conduct workshops and training sessions for end users',
      'Collaborate with cross-functional teams on integration projects',
    ],
    requirements: [
      'Minimum 5 years of SAP consulting experience',
      'Strong knowledge of SAP S/4HANA or SAP HXM',
      'Experience with full project lifecycle implementations',
      'Excellent communication and presentation skills',
      "Bachelor's degree in Computer Science, Business, or related field",
    ],
    preferredQualifications: [
      'SAP certification in relevant modules',
      'Experience in healthcare or financial services industries',
      'Knowledge of SAP integration technologies',
    ],
    applicationEmail: 'us@esveetech.com',
    status: 'active',
    postedDate: '2025-01-15',
  },
  {
    id: 'full-stack-developer',
    title: 'Full Stack Developer',
    location: 'Chantilly, VA / Hyderabad, India',
    type: 'Full-time',
    department: 'Application Development',
    description:
      'Join our application development team to build modern, scalable web applications for our enterprise clients using contemporary frameworks and technologies.',
    responsibilities: [
      'Design and develop full-stack web applications',
      'Write clean, maintainable, and well-documented code',
      'Participate in code reviews and contribute to architecture decisions',
      'Collaborate with UX designers and product stakeholders',
      'Troubleshoot and resolve technical issues in production',
    ],
    requirements: [
      'Minimum 3 years of full-stack development experience',
      'Proficiency in JavaScript/TypeScript and modern frameworks (React, Angular, or Vue)',
      'Experience with server-side technologies (Node.js, Java, or Python)',
      'Strong understanding of database design and SQL/NoSQL databases',
      'Experience with RESTful APIs and microservices architecture',
    ],
    preferredQualifications: [
      'Experience with cloud platforms (AWS, Azure, or GCP)',
      'Knowledge of CI/CD pipelines and DevOps practices',
      'Experience with containerization (Docker, Kubernetes)',
    ],
    applicationEmail: 'us@esveetech.com',
    status: 'active',
    postedDate: '2025-02-01',
  },
  {
    id: 'it-recruiter',
    title: 'IT Technical Recruiter',
    location: 'Chantilly, VA',
    type: 'Full-time',
    department: 'Staffing Solutions',
    description:
      'We are seeking an experienced IT Technical Recruiter to support our staffing solutions practice and help our clients find the right technology talent.',
    responsibilities: [
      'Source, screen, and recruit technology professionals',
      'Manage the full recruitment lifecycle from job posting to placement',
      'Build and maintain a pipeline of qualified candidates',
      'Coordinate with clients to understand staffing requirements',
      'Conduct technical phone screenings and interviews',
    ],
    requirements: [
      'Minimum 2 years of IT recruiting experience',
      'Strong understanding of IT roles, technologies, and skill sets',
      'Experience with applicant tracking systems and recruiting tools',
      'Excellent communication and interpersonal skills',
      'Ability to manage multiple positions and priorities simultaneously',
    ],
    preferredQualifications: [
      'Experience with government or enterprise client staffing',
      'Knowledge of H-1B and immigration processes',
      'Existing candidate network in the Washington, D.C. metro area',
    ],
    applicationEmail: 'us@esveetech.com',
    status: 'active',
    postedDate: '2025-03-01',
  },
];

export const careersBenefits = [
  {
    title: 'Global Opportunities',
    description:
      'Work on projects across the United States, Latin America, and Asia with our international delivery teams.',
  },
  {
    title: 'Technical Growth',
    description:
      'Work across cloud, software engineering, data, cybersecurity, telecom, and SAP environments.',
  },
  {
    title: 'Collaborative Culture',
    description:
      'Join a team that values practical problem-solving and combines technical depth with business acumen.',
  },
  {
    title: 'Diverse Projects',
    description:
      'Engage with clients across healthcare, logistics, insurance, and HR management industries.',
  },
];

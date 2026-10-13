export interface ClientPartner {
  id: string;
  name: string;
  logo: string;
  category?: string;
  description?: string;
}

export const clientsAndPartners: ClientPartner[] = [
  {
    id: 'volery',
    name: 'Volery',
    logo: '/clients/volery.png',
    category: 'Technology & Consulting',
    description: 'Cloud technology and digital solutions company.'
  },
  {
    id: 'nfinity',
    name: 'NFINITY',
    logo: '/clients/nfinity.png',
    category: 'Enterprise Solutions',
    description: 'Transforming enterprise infrastructure and agile software engineering.'
  },
  {
    id: 'cloudera',
    name: 'Cloudera',
    logo: '/clients/cloudera.png',
    category: 'Big Data & Cloud',
    description: 'Hybrid data cloud platform for enterprise analytics and machine learning.'
  },
  {
    id: 'amazon',
    name: 'Amazon.com',
    logo: '/clients/amazon.png',
    category: 'Cloud & E-Commerce',
    description: 'Global technology leader in cloud computing and digital infrastructure.'
  },
  {
    id: 'kaara',
    name: 'Kaara',
    logo: '/clients/kaara.png',
    category: 'IT Services',
    description: 'Innovative digital business engineering and enterprise consulting.'
  },
  {
    id: 'eastern-healthcare',
    name: 'Eastern Healthcare Financial Services',
    logo: '/clients/eastern-healthcare.png',
    category: 'Healthcare & Finance',
    description: 'Healthcare revenue cycle management and specialized financial systems.'
  },
  {
    id: 'ctrls',
    name: 'CtrlS',
    logo: '/clients/ctrls.png',
    category: 'Data Centers & Cloud',
    description: "Asia's largest Rated-4 hyperscale data center and managed services provider."
  },
  {
    id: 'ositran',
    name: 'OSITRAN',
    logo: '/clients/ositran.png',
    category: 'Public Sector & Infrastructure',
    description: 'Supervisory agency for investment in public transport infrastructure.'
  },
  {
    id: 'pioneer-labs',
    name: 'Pioneer Labs',
    logo: '/clients/pioneer-labs.png',
    category: 'Software Engineering',
    description: 'Next-generation software product research and rapid prototyping.'
  },
  {
    id: 'isoftech',
    name: 'iSoftech Inc.',
    logo: '/clients/isoftech.png',
    category: 'Enterprise Software',
    description: 'Integrated enterprise business solutions, staffing, and technology delivery.'
  },
  {
    id: 'mariadb',
    name: 'MariaDB',
    logo: '/clients/mariadb.png',
    category: 'Database & Open Source',
    description: 'World-renowned relational database management and high-availability database systems.'
  },
  {
    id: 'sunarp',
    name: 'SUNARP',
    logo: '/clients/sunarp.png',
    category: 'Government & Registries',
    description: 'National Superintendency of Public Registries delivering digital citizen services.'
  },
  {
    id: 'redhat',
    name: 'Red Hat',
    logo: '/clients/redhat.png',
    category: 'Enterprise Open Source',
    description: 'Global leader in enterprise open source and Kubernetes container platforms.'
  },
  {
    id: 'nimbl',
    name: 'NIMBL (Techedge Group)',
    logo: '/clients/nimbl.png',
    category: 'SAP & Cloud Strategy',
    description: 'North America’s premier SAP consulting and digital transformation advisory.'
  },
  {
    id: 'seventablets',
    name: 'SevenTablets',
    logo: '/clients/seventablets.png',
    category: 'Mobile & Emerging Tech',
    description: 'Specialists in custom mobile app development, UI/UX, and cloud architecture.'
  },
  {
    id: 'mcboben',
    name: 'MCBOBEN',
    logo: '/clients/mcboben.png',
    category: 'Business Consulting',
    description: 'Technology-enabled management consulting and global professional services.'
  },
  {
    id: 'envision',
    name: 'Envision Enterprise Solutions',
    logo: '/clients/envision.png',
    category: 'Enterprise Asset Management',
    description: 'Empowering enterprises through IBM Maximo, IoT, and asset management automation.'
  },
  {
    id: 'jahia',
    name: 'Jahia',
    logo: '/clients/jahia.png',
    category: 'Digital Experience Platform',
    description: 'Headless CMS and customer data platform creating personalized digital journeys.'
  },
  {
    id: 'chamber-commerce',
    name: 'US Chamber of Commerce',
    logo: '/images/chamber-commerce.png',
    category: 'Business Association',
    description: 'The world’s largest business organization representing companies of all sizes across America.'
  }
];

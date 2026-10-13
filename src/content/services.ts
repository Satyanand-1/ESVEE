import {
  Cloud,
  Code2,
  Layers,
  ShieldCheck,
  RadioTower,
  Building2,
  UserCheck,
  Users,
  Handshake,
  UsersRound,
  MapPin,
  Flag,
  Globe2,
  ClipboardCheck,
  type LucideIcon,
} from 'lucide-react';

/** The six cards shown on the home page, in display order. */
export interface CoreService {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export const coreServices: CoreService[] = [
  {
    id: 'technology-consulting',
    title: 'Technology Consulting',
    description:
      'Experienced consultants who help plan, architect, and move technology initiatives forward.',
    image: '/images/consulting.jpg',
    href: '/services#technology-consulting',
  },
  {
    id: 'staffing-and-team-augmentation',
    title: 'Staffing and Team Augmentation',
    description:
      'Contract, contract to hire, and direct placement professionals, plus added capacity for existing teams.',
    image: '/images/staffing.jpg',
    href: '/services#staffing-and-team-augmentation',
  },
  {
    id: 'application-and-software-engineering',
    title: 'Application and Software Engineering',
    description:
      'Application development, integration, testing, and maintenance across the software lifecycle.',
    image: '/images/app-dev.jpg',
    href: '/services#software-engineering',
  },
  {
    id: 'cloud-data-and-security',
    title: 'Cloud, Data, and Security',
    description:
      'Support for cloud and infrastructure, data and integration, and cybersecurity work.',
    image: '/images/security.jpg',
    href: '/services#cloud-and-infrastructure',
  },
  {
    id: 'telecom-and-infrastructure',
    title: 'Telecom and Infrastructure',
    description:
      'Consultants and delivery support for telecom and network infrastructure environments.',
    image: '/images/telecom.jpg',
    href: '/services#telecom',
  },
  {
    id: 'sap-and-enterprise-platforms',
    title: 'SAP and Enterprise Platforms',
    description:
      'SAP S/4HANA, Human Experience Management, and enterprise platform implementation and support.',
    image: '/images/sap.jpg',
    href: '/services#enterprise-platforms-and-sap',
  },
];

/** Services page, group 1: Consulting and Workforce Solutions. */
export const technologyConsulting = {
  id: 'technology-consulting',
  title: 'Technology Consulting',
  image: '/images/consulting.jpg',
  description:
    'Our consultants combine technical experience with strategic and business understanding. We help organizations make informed technology decisions and carry them through planning, architecture, and implementation.',
  features: [
    'Technology strategy and roadmap planning',
    'Architecture and design advisory',
    'Change management support',
    'Best practices implementation',
  ],
};

export interface StaffingOffering {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const staffing = {
  id: 'staffing-and-team-augmentation',
  title: 'Staffing and Team Augmentation',
  image: '/images/staffing.jpg',
  description:
    'Our recruiting process combines focused sourcing, practical screening, and clear communication to identify professionals who fit the requirement and working environment.',
  offerings: [
    {
      title: 'Contract Staffing',
      description: 'Technology professionals for a defined period or a specific requirement.',
      icon: UserCheck,
    },
    {
      title: 'Team Augmentation',
      description: 'Additional skills and delivery capacity that work as part of your existing team.',
      icon: Users,
    },
    {
      title: 'Contract to Hire and Direct Placement',
      description: 'Professionals who can start on contract and convert, or join your organization directly.',
      icon: Handshake,
    },
    {
      title: 'Project Based Consulting Teams',
      description: 'A coordinated group of consultants assembled around a defined technology initiative.',
      icon: UsersRound,
    },
  ] satisfies StaffingOffering[],
};

/** Services page, group 2: Technology Capabilities. Also drives the home page capability grid. */
export interface Capability {
  id: string;
  title: string;
  /** Broad category name used on the home page. */
  shortTitle: string;
  icon: LucideIcon;
  description: string;
  features: string[];
  /** Narrower offerings that sit under this capability rather than standing on their own. */
  includes?: { title: string; description: string }[];
}

export const capabilities: Capability[] = [
  {
    id: 'cloud-and-infrastructure',
    title: 'Cloud and Infrastructure',
    shortTitle: 'Cloud',
    icon: Cloud,
    description:
      'Cloud architecture, DevOps practices, and infrastructure deployment, with monitoring and management that keep operations visible.',
    features: [
      'Cloud architecture and deployment',
      'DevOps practices',
      'Infrastructure monitoring and management',
    ],
  },
  {
    id: 'software-engineering',
    title: 'Software Engineering',
    shortTitle: 'Software Engineering',
    icon: Code2,
    description:
      'We work across the software lifecycle, from requirements analysis and architecture design through implementation, integration, testing, deployment, and ongoing maintenance.',
    features: [
      'Requirements analysis and architecture design',
      'Full-stack application development',
      'Legacy system modernization',
      'Quality assurance and testing',
      'Deployment and maintenance',
    ],
    includes: [
      {
        title: 'Open Source Solutions',
        description:
          'Technology assessment, custom development, and migration from proprietary platforms using open-source technologies.',
      },
      {
        title: 'Web Design and Development',
        description:
          'Responsive websites and web applications with user experience and interface design at the core.',
      },
    ],
  },
  {
    id: 'data-and-integration',
    title: 'Data and Integration',
    shortTitle: 'Data and Integration',
    icon: Layers,
    description:
      'Data pipelines, API integrations, and ETL processes that connect business systems and make information usable.',
    features: [
      'Data pipelines and ETL processes',
      'API development and integration',
      'Reporting and analytics',
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    shortTitle: 'Cybersecurity',
    icon: ShieldCheck,
    description:
      'Security assessment and implementation, compliance management, and incident response that help organizations protect their digital assets.',
    features: [
      'Security assessment and implementation',
      'Compliance management',
      'Incident response and recovery',
    ],
  },
  {
    id: 'telecom',
    title: 'Telecom',
    shortTitle: 'Telecom',
    icon: RadioTower,
    description:
      'Consultants and delivery support for telecom and network infrastructure initiatives.',
    features: [
      'Telecom project consultants',
      'Network infrastructure support',
    ],
  },
  {
    id: 'enterprise-platforms-and-sap',
    title: 'Enterprise Platforms and SAP',
    shortTitle: 'Enterprise Platforms and SAP',
    icon: Building2,
    description:
      'We help organizations modernize enterprise operations. Our SAP experience spans Human Experience Management (HXM), which puts people at the center of HR processes, and financial transformation with SAP S/4HANA, supporting the shift to real-time financial operations and analytics.',
    features: [
      'SAP S/4HANA implementation and migration',
      'Human Experience Management (HXM)',
      'Financial transformation and analytics',
      'SAP integration and customization',
      'Ongoing support and optimization',
    ],
  },
];

/** Services page, group 3: Delivery Models. */
export interface DeliveryModel {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const deliveryModels: DeliveryModel[] = [
  {
    title: 'Client Site and Remote Consulting',
    description: 'Consultants work on site with your team, remotely, or in a mix that suits the engagement.',
    icon: MapPin,
  },
  {
    title: 'United States Delivery',
    description: 'Consultants and project support based in the United States, coordinated from our Chantilly, Virginia headquarters.',
    icon: Flag,
  },
  {
    title: 'Nearshore and Offshore Support',
    description: 'Delivery support from Peru and India that adds capacity, brings specialized skills, and widens delivery coverage across time zones.',
    icon: Globe2,
  },
  {
    title: 'Managed or Defined Project Support',
    description: 'Support for a defined scope of work, from planning through implementation, with clear responsibilities.',
    icon: ClipboardCheck,
  },
];

export const industries = [
  {
    name: 'Healthcare',
    description:
      'Technology solutions for healthcare providers, payers, and life sciences organizations.',
  },
  {
    name: 'Human Resources Management',
    description:
      'HR technology platforms and talent management solutions for modern workforce needs.',
  },
  {
    name: 'Customer Management',
    description:
      'CRM solutions and customer engagement platforms that improve client relationships.',
  },
  {
    name: 'Logistics',
    description:
      'Supply chain management and logistics technology for operational efficiency.',
  },
  {
    name: 'Insurance',
    description:
      'Insurance technology solutions for policy management, claims processing, and analytics.',
  },
];

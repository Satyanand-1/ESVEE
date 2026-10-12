import {
  Monitor,
  Code2,
  Globe2,
  Users,
  Building2,
  GraduationCap,
  Shield,
  Palette,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  image: string;
  features: string[];
  useCases: string[];
}

export const services: Service[] = [
  {
    id: 'sap-solutions',
    title: 'SAP Solutions',
    shortDescription:
      'Complete SAP solutions from Human Experience Management to Financial Transformation with S/4HANA.',
    fullDescription:
      'We provide end-to-end SAP solutions that help organizations modernize their enterprise operations. Our SAP expertise spans Human Experience Management (HXM), enabling organizations to put people at the center of their HR processes, and Financial Transformation with SAP S/4HANA, supporting the shift to real-time financial operations and analytics.',
    icon: Monitor,
    image: '/images/sap.jpg',
    features: [
      'SAP S/4HANA implementation and migration',
      'Human Experience Management (HXM)',
      'Financial transformation and analytics',
      'SAP integration and customization',
      'Ongoing support and optimization',
    ],
    useCases: [
      'Enterprise resource planning modernization',
      'HR digital transformation',
      'Financial process automation',
      'Real-time business analytics',
    ],
  },
  {
    id: 'application-development',
    title: 'Application Development',
    shortDescription:
      'A holistic approach to application development that ensures practical, scalable outcomes.',
    fullDescription:
      'At Esvee Technologies Inc, our holistic approach to application development ensures a practical view of every project. We work across the full software lifecycle — from requirements analysis and architecture design through implementation, integration, testing, deployment, and ongoing maintenance — to deliver applications that meet real business needs.',
    icon: Code2,
    image: '/images/app-dev.jpg',
    features: [
      'Requirements analysis and architecture design',
      'Full-stack application development',
      'System integration',
      'Quality assurance and testing',
      'Deployment and maintenance',
    ],
    useCases: [
      'Custom enterprise applications',
      'Legacy system modernization',
      'API development and integration',
      'Mobile and web application development',
    ],
  },
  {
    id: 'open-source-solutions',
    title: 'Open Source Solutions',
    shortDescription:
      'Leveraging the skills, experience, and collective expertise of our team to deliver powerful open-source solutions.',
    fullDescription:
      'Our company is built upon the skills, experience, and collective brainpower of its people. We harness the flexibility and innovation of open-source technologies to deliver cost-effective, reliable solutions that give organizations greater control over their technology infrastructure.',
    icon: Globe2,
    image: '/images/open-source.jpg',
    features: [
      'Open-source technology assessment',
      'Custom solution development',
      'Migration from proprietary platforms',
      'Community and enterprise support models',
      'Security and compliance management',
    ],
    useCases: [
      'Reducing technology licensing costs',
      'Increasing platform flexibility',
      'Building on proven community-driven technologies',
      'Custom integrations with open-source tools',
    ],
  },
  {
    id: 'staffing-solutions',
    title: 'Staffing Solutions',
    shortDescription:
      'Industry-leading recruiting practices to connect you with the right technology talent.',
    fullDescription:
      'Our success comes from our industry-leading recruiting practices. We specialize in sourcing, screening, and placing technology professionals who match both the technical requirements and cultural fit of your organization. Whether you need individual contributors or entire project teams, our staffing solutions are designed to deliver.',
    icon: Users,
    image: '/images/staffing.jpg',
    features: [
      'Technical talent sourcing and screening',
      'Contract and contract-to-hire staffing',
      'Permanent placement services',
      'Project-based team augmentation',
      'Specialized technology recruitment',
    ],
    useCases: [
      'Scaling development teams quickly',
      'Filling specialized technology roles',
      'Project-based staffing needs',
      'Long-term technology talent partnerships',
    ],
  },
  {
    id: 'outsourcing',
    title: 'Outsourcing',
    shortDescription:
      'Global delivery capabilities that consistently deliver competitive advantages.',
    fullDescription:
      'ETI works with customers across the globe and consistently delivers competitive benefits through our international delivery capabilities. Our outsourcing services help organizations reduce costs, access global talent, and maintain focus on their core business while we handle technology delivery.',
    icon: Building2,
    image: '/images/outsourcing.jpg',
    features: [
      'Offshore and nearshore delivery models',
      'Dedicated development teams',
      'Managed services',
      'Cost optimization and efficiency',
      'Global talent access',
    ],
    useCases: [
      'Reducing operational technology costs',
      'Accessing specialized global talent pools',
      'Scaling technology operations',
      'Maintaining 24/7 development and support cycles',
    ],
  },
  {
    id: 'consulting-and-training',
    title: 'Consulting and Training',
    shortDescription:
      'Consultants who combine extensive technical experience with strong strategic and business acumen.',
    fullDescription:
      'Our consultants combine extensive technical experience with strong strategic and business acumen. We provide expert guidance to help organizations make informed technology decisions, and our training programs ensure your teams have the skills they need to operate and evolve your technology investments.',
    icon: GraduationCap,
    image: '/images/consulting.jpg',
    features: [
      'Technology strategy consulting',
      'Architecture and design advisory',
      'Technical training programs',
      'Change management support',
      'Best practices implementation',
    ],
    useCases: [
      'Technology roadmap planning',
      'Team upskilling and certification',
      'Architecture decision-making',
      'Digital transformation guidance',
    ],
  },
  {
    id: 'management-and-security',
    title: 'Management and Security',
    shortDescription:
      'Expert guidance on the best monitoring, reporting, and analysis products in the market.',
    fullDescription:
      'We advise on the best monitoring, reporting, and analysis products in the market. Our management and security services help organizations maintain visibility into their technology operations, ensure compliance, and protect their digital assets against emerging threats.',
    icon: Shield,
    image: '/images/security.jpg',
    features: [
      'Infrastructure monitoring and management',
      'Security assessment and implementation',
      'Reporting and analytics',
      'Compliance management',
      'Incident response and recovery',
    ],
    useCases: [
      'IT operations visibility and monitoring',
      'Security posture assessment',
      'Regulatory compliance',
      'Performance reporting and optimization',
    ],
  },
  {
    id: 'web-design-and-development',
    title: 'Web Design and Development',
    shortDescription:
      'Responsive websites with user experience and interface design at the core.',
    fullDescription:
      'We create responsive websites with UX and UI at the core. Our web design and development services focus on building digital experiences that are visually compelling, functionally robust, and optimized for performance across all devices.',
    icon: Palette,
    image: '/images/web-dev.jpg',
    features: [
      'Responsive web design',
      'User experience (UX) research and design',
      'User interface (UI) design',
      'Front-end and back-end development',
      'Performance optimization',
    ],
    useCases: [
      'Corporate website redesign',
      'E-commerce platforms',
      'Web application development',
      'Progressive web apps',
    ],
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

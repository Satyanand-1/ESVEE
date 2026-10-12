export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Clients', href: '/clients' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact' },
];

export const footerNavigation = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Clients', href: '/clients' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact Us', href: '/contact' },
  ],
  services: [
    { label: 'SAP Solutions', href: '/services#sap-solutions' },
    { label: 'Application Development', href: '/services#application-development' },
    { label: 'Open Source Solutions', href: '/services#open-source-solutions' },
    { label: 'Staffing Solutions', href: '/services#staffing-solutions' },
    { label: 'Outsourcing', href: '/services#outsourcing' },
    { label: 'Consulting & Training', href: '/services#consulting-and-training' },
    { label: 'Management & Security', href: '/services#management-and-security' },
    { label: 'Web Design & Development', href: '/services#web-design-and-development' },
  ],
};

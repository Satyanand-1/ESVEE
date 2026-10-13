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
    { label: 'Technology Consulting', href: '/services#technology-consulting' },
    { label: 'Staffing and Team Augmentation', href: '/services#staffing-and-team-augmentation' },
    { label: 'Cloud and Infrastructure', href: '/services#cloud-and-infrastructure' },
    { label: 'Software Engineering', href: '/services#software-engineering' },
    { label: 'Data and Integration', href: '/services#data-and-integration' },
    { label: 'Cybersecurity', href: '/services#cybersecurity' },
    { label: 'Telecom', href: '/services#telecom' },
    { label: 'Enterprise Platforms and SAP', href: '/services#enterprise-platforms-and-sap' },
  ],
};

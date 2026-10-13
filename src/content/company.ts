export const company = {
  name: 'Esvee Technologies Inc',
  shortName: 'ETI',
  tagline: 'Your Desire! Our Passion!',
  description:
    'Esvee Technologies Inc provides technology consulting, workforce solutions, and delivery support across cloud, software engineering, data, cybersecurity, telecom, enterprise platforms, and SAP.',
  about:
    'Esvee Technologies Inc is a technology consulting and workforce solutions company headquartered in Chantilly, Virginia. We help organizations access experienced technology professionals, strengthen project teams, and move important initiatives forward. Our capabilities span cloud, software engineering, data, cybersecurity, telecom, enterprise platforms, and SAP.',
  copyright: `© ${new Date().getFullYear()} Esvee Technologies Inc. All rights reserved.`,
  website: 'https://esveetech.com',
  logo: '/images/logo.svg',
};

export interface Office {
  name: string;
  type: string;
  address: string[];
  email: string;
  phone: string;
  phoneDisplay: string;
}

export const offices: Office[] = [
  {
    name: 'Global Headquarters',
    type: 'headquarters',
    address: [
      'Esvee Technologies Inc',
      '14101 Sullyfield Circle, Suite 400D',
      'Chantilly, VA 20151',
      'USA',
    ],
    email: 'us@esveetech.com',
    phone: '+17033828100',
    phoneDisplay: '+1 703-382-8100',
  },
  {
    name: 'Peru Office',
    type: 'regional',
    address: [
      'Esteban Bentarelli N 256',
      'Urb. Jacaranda, San Borja',
      'Lima',
      'Peru',
    ],
    email: 'peru@esveetech.com',
    phone: '+5117175430',
    phoneDisplay: '+51-1717-5430',
  },
  {
    name: 'Partner Office',
    type: 'partner',
    address: [
      'SPARC CYBERTECH',
      'Trendz Metro, 2nd Floor',
      'Above South Indian Bank',
      'Hospital Road, Madhapur',
      'Hyderabad - 500081',
      'India',
    ],
    email: 'india@esveetech.com',
    phone: '+914042039899',
    phoneDisplay: '+91-040-42039899',
  },
];

export const socialLinks = {
  linkedin: '#',
  twitter: '#',
};

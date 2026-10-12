export const company = {
  name: 'Esvee Technologies Inc',
  shortName: 'ETI',
  tagline: 'Your Desire! Our Passion!',
  description:
    'We are a full life cycle management and Information Technology consulting company. Our competencies span across a wide range of platforms, tools, programming environments, and package-based solutions, from commercial and open-source vendors.',
  about:
    'Esvee Technologies Inc (ETI) is an IT consulting and technology services company that provides end-to-end technology solutions to businesses worldwide. We design, build, deploy, and maintain applications for event-driven and big data businesses, leveraging technologies including the Internet of Things, Artificial Intelligence, and Machine Learning.',
  partner: 'Sparc Group',
  partnerFull: 'SPARC CYBERTECH',
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

module.exports = {
  siteTitle: 'Thain | Blockchain & Web3 Engineer',
  siteDescription: '',
  siteKeywords:
    'Thain, Thain, dansofter, software engineer, front-end engineer, web developer, javascript, malaysia',
  siteUrl: 'https://http://thainnoel.me/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Thain',
  location: 'Victoria BC, Canada',
  email: 'thainnoelb@gmail.com',
  github: 'https://github.com/tmpacifitech',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/tmpacifitech',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/thain-n',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/debi_eth',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

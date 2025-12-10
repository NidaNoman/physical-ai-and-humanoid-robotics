// docs/docusaurus.config.ts
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'Bridging the gap between the digital brain and the physical body',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: '/',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: 'https://github.com/NidaNoman/physical-ai-and-humanoid-robotics',

  // GitHub pages deployment config.
  organizationName: 'NidaNoman',
  projectName: 'physical-ai-and-humanoid-robotics',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    apiUrl: process.env.REACT_APP_API_URL || 'https://ai-rative-book-backend-production.up.railway.app',
    apiKey: process.env.REACT_APP_API_KEY || '',
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/NidaNoman',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true, 
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Physical AI',
      logo: {
        alt: 'Physical AI Logo',
        src: 'img/ai-logo.svg', 
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Start Learning',
        },
        {
          type: 'dropdown',
          label: 'Modules',
          position: 'left',
          items: [
            {
              label: 'Module 1: ROS 2 Fundamentals',
              to: '/docs/module1/week1-intro-physical-ai',
            },
            {
              label: 'Module 2: Gazebo Simulation',
              to: '/docs/module2/week6-gazebo',
            },
            {
              label: 'Module 3: NVIDIA Isaac',
              to: '/docs/module3/week8-isaac',
            },
            {
              label: 'Module 4: Conversational Robotics',
              to: '/docs/module4/week13-conversational-robotics',
            },
          ],
        },
        {
          href: 'https://github.com/NidaNoman',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Course Material',
          items: [
            {
              label: 'Introduction',
              to: '/docs',
            },
            {
              label: 'ROS 2 Setup',
              to: '/docs/module1/week1-intro-physical-ai',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Nida GitHub',
              href: 'https://github.com/NidaNoman',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/nida-noman-bb3a192b5/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/NidaNoman',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Physical AI & Humanoid Robotics. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

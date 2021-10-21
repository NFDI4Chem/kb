/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'NFDI4Chem Knowledge Base',
  tagline: 'A place for all knowledge regarding Research Data Management (RDM) in Chemistry',
  url: 'https://nfdi4chem.chemie.uni-mainz.de/',
  baseUrl: '/knowledge_base/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'NFDI4Chem', // Usually your GitHub org/user name.
  projectName: 'knowledge_base', // Usually your repo name.
  trailingSlash: 'true',
  themeConfig: {
    navbar: {
      title: 'Home',
      logo: {
        alt: 'NFDI4Chem Logo',
        src: 'img/NFDI4Chem-Logo_mehrfarbig_schwarz_nurGraphik.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Knowledge Base',
        },
        {
          label: 'FAQ',
          href: 'https://www.nfdi4chem.de/index.php/frequently-asked-questions/',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              html: `
              <a href="https://www.dfg.de" target="_blank"><img src="/knowledge_base/img/dfg_logo_schriftzug_weiss_foerderung_en.gif" /></a>` 
            }
          ]
        },     
        {
          title: 'Community',
          items: [
           
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/nfdi4chem',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/nfdi4chem',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'NFDI4Chem Website',
              href: 'https://nfdi4chem.de',
            },
            {
              label: 'NFDI4Chem Helpdesk',
              href: 'https://nfdi4chem.de/index.php/helpdesk/'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/NFDI4Chem/knowledge_base',
            },
          ],
        },
        {
          title: ' ',
          items: [
            {
              label: 'About',
              to: 'about',
            },
            {
              label: 'Legal Notice',
              href: 'https://www.uni-mainz.de/eng/102.php'
            },
            {
              label: 'Privacy',
              href: 'https://www.uni-mainz.de/eng/144.php'
            }
          
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NFDI4Chem. Built with Docusaurus.`,
    },
  
    colorMode: {disableSwitch: true,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/NFDI4Chem/knowledge_base/tree/main/',
       
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

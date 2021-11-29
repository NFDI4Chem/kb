/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'NFDI4Chem Knowledge Base',
  tagline: 'A place for all knowledge regarding Research Data Management (RDM) in Chemistry',
  url: 'https://knowledgebase.nfdi4chem.de/',
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
        src: 'img/N4C_logo_navbar.svg',
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
              <a href="https://www.dfg.de" target="_blank"><img src="/knowledge_base/img/dfg_logo_schriftzug_weiss_foerderung_en.gif" /></a>
              <p>NFDI4Chem is funded by DFG<br>Project Number 441958208</p>
              ` 
            },
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
          title: 'Resources',
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
          title: 'Legal information',
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
      copyright: `
        <div class="container" style="width: 60%;">
          <div class="row">
            <div class="cell" style="padding: 1rem;" ><a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"></a>
            </div>
            <div class="cell" style="padding: 0.1rem; text-align: left;" >Licensed under a <a class="footer__link-item" rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License, if not stated otherwise.</a>.<br />
            Copyright © 2021 NFDI4Chem. Built with Docusaurus.
            </div>
          </div>
        </div>
        `,
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

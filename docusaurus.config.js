/** @type {import('@docusaurus/types').DocusaurusConfig} */

const announcementBarActive = false; // set to true to activate the announcement bar
const announcementBar = announcementBarActive
    ? require("./announcementBar.json")
    : {};

const title = "NFDI4Chem Knowledge Base";
const url = "https://knowledgebase.nfdi4chem.de/";
const baseUrl = "/knowledge_base/";

const navbar = require("./navbar.json");
const footerLinks = require("./footer.json");

// Use for stagging:
// const baseUrl = '/staging/knowledge_base_matomo/';
// const baseUrl = '/staging/knowledge_base/';

module.exports = {
    title: title,
    url: url,
    baseUrl: baseUrl,
    onBrokenLinks: "warn",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.png",
    organizationName: "NFDI4Chem", // Usually your GitHub org/user name.
    projectName: "knowledge_base", // Usually your repo name.
    trailingSlash: "true",
    i18n: {
        defaultLocale: "en",
        locales: ["en", "de"],
        localeConfigs: {
            en: {
                htmlLang: "en-GB",
            },
        },
    },
    plugins: ["docusaurus-plugin-matomo"],
    themeConfig: {
        ...(Object.keys(announcementBar).length > 0 && {
            announcementBar: announcementBar,
        }),
        metadata: [
            {name: 'google-site-verification', content: 'wgYVjYSe_T6v6BPPM6fPo1ffl7MYYnuVw-h9RoAYfM0'},
        ],
	matomo: {
            matomoUrl: "https://knowledgebase.nfdi4chem.de/matomo/",
            siteId: "1",
            phpLoader: "matomo.php",
            jsLoader: "matomo.js",
        },
        navbar: navbar,
        footer: {
            style: "dark",
            links: [
                {
                    items: [
                        {
                            html:
                                `
								<a href="https://www.dfg.de" target="_blank">
									<img src="` +
                                baseUrl +
                                `img/dfg_logo_schriftzug_weiss_foerderung_en.png" />
								</a>
								<p>NFDI4Chem is funded by DFG<br>Project Number 441958208</p>
							`,
                        },
                    ],
                },
                ...footerLinks,
            ],
            copyright: `
				<div class="footer__copyright row" style="justify-content: center">
					<div class="cell" style="padding: 1rem;" >
						<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"></a>
					</div>
					<div class="cell" style="padding: 0.1rem; text-align: left;" >
						Licensed under a <a class="footer__link-item" rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons BY-SA 4.0 License</a>, if not stated otherwise.<br />
						Copyright © 2023 NFDI4Chem. Built with Docusaurus.
					</div>
				</div>
        	`,
        },
        colorMode: { disableSwitch: true },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    editUrl:
                        "https://github.com/NFDI4Chem/knowledge_base/tree/main/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
    themes: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                hashed: true,
                highlightSearchTermsOnTargetPage: true,
            },
        ],
    ],
};

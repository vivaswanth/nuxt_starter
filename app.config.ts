export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'The Byte Notes',
      description: 'Learn it all, one byte at a time. Build, and grow with Byte Notes.',
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.5,
    },
    header: {
      title: 'The Byte Notes',
      showTitle: true,
      darkModeToggle: true,
      languageSwitcher: {
        enable: false,
        triggerType: 'icon',
        dropdownType: 'select',
      },
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      nav: [{
        title: 'My Workspace',
        links: [{
          title: 'Full Stack',
          to: '/docs/full-stack',
          description: 'Some useful full stack resources.',
          icon: 'lucide:box',
        }, {
          title: 'Data Science',
          to: '/docs/data-science',
          description: 'Mtech in Data Science and Engineering',
          icon: 'lucide:box',
        }, {
          title: 'Domain Knowledge',
          to: '/docs/banking',
          description: 'My experience in the banking domain',
          target: '_self',
          icon: 'lucide:code',
        }],
      },
      {
        title: 'Projects',
        to: '/projects',
        target: '_self',
        showLinkIcon: false,
      }],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: 'Copyright © 2024',
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
        target: '_blank',
      }],
    },
    toc: {
      enable: true,
      links: [{
        title: 'Star on GitHub',
        icon: 'lucide:star',
        to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
        target: '_blank',
      }, {
        title: 'Create Issues',
        icon: 'lucide:circle-dot',
        to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt/issues',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    }
  }
});
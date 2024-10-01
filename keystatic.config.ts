import { config } from '@keystatic/core';
import { posts, pages } from '@cms/collections';
import { branding, seo, contact, navbar } from '@cms/singletons';

export default config({
  storage: {
    kind: 'local',
    // kind: 'github',
    // repo: `${import.meta.env.REPO_OWNER}/${import.meta.env.REPO_NAME}`
    
  },
  ui: {
    brand: { name: 'Dashboard' },
    navigation: {
      'Content': ['pages',  'posts',  ],
      'Components': ['contact', 'navbar'],
      'Settings': [ 'branding', 'seo' ],
    },
    
  },
  collections: {
    posts,
    pages,
  },
  singletons: {
    navbar,
    branding,
    seo,
    contact
  }
});

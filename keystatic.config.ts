import { config } from '@keystatic/core';
import { posts } from '@cms/collections';
import { pages } from '@cms/collections';
import { navbar } from '@cms/singletons/navbar';
import { settings } from '@cms/singletons';

export default config({
  storage: {
    kind: 'local',
    // kind: 'github',
    // repo: `${import.meta.env.REPO_OWNER}/${import.meta.env.REPO_NAME}`
    
  },
  ui: {
    brand: { name: 'Dashboard' },
    navigation: {
      'Content': ['pages',  'posts' ],
      'Settings': ['navbar', 'settings'],
    },
    
  },
  collections: {
    posts,
    pages
  },
  singletons: {
    navbar,
    settings
  }
});

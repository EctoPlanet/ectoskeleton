import { config, fields, collection } from '@keystatic/core';
import { posts } from 'src/cms/collections';
import { pages } from 'src/cms/collections/pages';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts,
    pages
  },
});

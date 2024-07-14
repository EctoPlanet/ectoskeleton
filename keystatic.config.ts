import { config, fields, collection } from '@keystatic/core';
import { posts } from 'src/cms/collections';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts
  },
});

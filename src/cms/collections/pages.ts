import { collection, fields } from '@keystatic/core';
import { hero } from '../blocks';

export const pages = collection({
    label: 'Pages',
    slugField: 'title',
    path: 'src/content/pages/*',
    schema: {
      title: fields.slug({ name: { label: 'Title' } }),
      blocks: fields.blocks(
        {
            heroBlock: hero,
        },
        { label: 'Blocks'}
      ),
    },
  });
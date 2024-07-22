import { collection, fields } from '@keystatic/core';
import { form, hero, posts } from '@cms/blocks';

export const pages = collection({
    label: 'Pages',
    slugField: 'title',
    path: 'src/content/pages/*',
    schema: {
      title: fields.slug({ name: { label: 'Title' } }),
      draft: fields.checkbox({
        label: 'Draft',
        description: 'Set this page as draft to prevent it from being published'
      }),
      blocks: fields.blocks(
        {
            heroBlock: hero,
            postsBlock: posts,
            formBlock: form,
        },
        { 
          label: 'Blocks',
        }
      ),
    },
    
  });
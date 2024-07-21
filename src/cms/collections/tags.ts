import { fields, collection } from '@keystatic/core';

export const tags = collection({
  label: 'Tags',
  slugField: 'name',
  path: 'src/content/tags/*',
  columns: ['name'],
  schema: {
    name: fields.slug({ name: { label: 'Tag Name', validation: { isRequired: true } } }),
  },
  itemLabel: (props) => props.name, // Correctly set the label to the tag name
});

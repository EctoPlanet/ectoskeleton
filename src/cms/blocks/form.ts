import { fields } from '@keystatic/core';

export const form = {
    label: 'Form',
    schema: fields.object({
        complexArray: fields.array(
            fields.object({
              projects: fields.array(
                fields.relationship({
                  label: 'Projects',
                  collection: 'projects',
                  validation: {
                    isRequired: true,
                  },
                }),
                {
                  label: 'Projects',
                  itemLabel: (props) => props.value ?? 'Select a project',
                }
              ),
            }),
            // Labelling options
            {
              label: 'Complex Array',
              itemLabel: (props) => props.fields.name.value,
            }
          ),
    },
  ),
};
import { fields } from '@keystatic/core';

export const content = {
    label: 'Content',
    schema: fields.object({
        content: fields.markdoc.inline({
            label: "Content",
            options: {
              image: {
                directory: "src/assets/images/content",
                publicPath: "@assets/images/content/",
              },
            },
          }),
    },
  ),
};
import { fields, collection } from '@keystatic/core';

export const posts = collection({
    label: 'Posts',
    slugField: 'title',
    path: 'src/content/posts/*',
    columns: ['title', 'publishedDate'] ,
    entryLayout: 'content',
    format: { contentField: 'content' },
    schema: {
      title: fields.slug({ name: { label: 'Title', validation: { isRequired: true } } }),
      featuredImage: fields.image({
        label: "Featured Image",
        directory: "src/assets/images/posts",
        publicPath: "/src/assets/images/posts/",
        validation: { isRequired: true }
      }),
      imgAlt: fields.text({ label: 'Image Alt', validation: { isRequired: true, length: { min: 1 } } }),
      content: fields.markdoc({
        label: "Content",
        options: {
          image: {
            directory: "src/assets/images/posts",
            publicPath: "@assets/images/posts/",
          },
        },
      }),
      excerpt: fields.text({ label: 'Excerpt', multiline: true, description: 'A brief description of this article' }),
      publishedDate: fields.date({ label: "Published date" }),
    },
  });
import { fields, singleton } from '@keystatic/core';

export const settings = singleton({
    label:  'Site Settings',
    path: "src/content/settings/site",
    schema:{
        site: fields.object({
           siteName: fields.text({ label: 'Site Name' })

        })
    }
});
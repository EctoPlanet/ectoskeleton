import { fields, singleton } from '@keystatic/core';

export const branding = singleton({
    label:  'Branding',
    path: "src/content/settings/branding",
    schema:{
        site: fields.object({
           siteName: fields.text({ label: 'Site Name' })

        })
    }
});
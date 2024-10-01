import { fields, singleton } from '@keystatic/core';

export const contact = singleton({
    label:  'Contact Page',
    path: "src/content/components/contact",
    schema:{
        title: fields.text({ label: 'Title' }),
        description: fields.text({ label: 'Description', multiline: true }),
        contactDetails: fields.blocks(
          {
            phone: {
              label: 'Phone',
              schema:fields.object({
                number: fields.text({ label: 'Number' }),
                name: fields.conditional(
                  fields.checkbox({ label: 'Specify name or department', defaultValue: false, description: 'Is this number for a specific person or department?' }),
                  {
                    true: fields.object({
                      name: fields.text({ label: 'Name / Department' }),
                    }),
                    false: fields.empty(),
                  }
                ),
              }),
            },
            email: {
              label: 'Email',
              schema:fields.object({
                email: fields.text({ label: 'Email' }),
                name: fields.conditional(
                  fields.checkbox({ label: 'Specify name or department', defaultValue: false, description: 'Is this email for a specific person or department?' }),
                  {
                    true: fields.object({
                      name: fields.text({ label: 'Name / Department' }),
                    }),
                    false: fields.empty(),
                  }
                ),
              }),
            },
            address: {
              label: 'Address',
              schema:fields.object({
                address: fields.text({ label: 'Address', multiline: true }),
                
              }),
            },
          },
          { label: 'Contact Details',
            description: 'Add, remove, and reorder contact details.'
           }
        ),
        
        items: fields.array(
            fields.object({
              label: fields.text({ label: 'Field Label' }),
              settings: fields.conditional(
                fields.select({
                  label: 'Input Type',
                  options: [
                    { label: 'text', value: 'text', },
                    { label: 'textarea', value: 'textarea' },
                    { label: 'email', value: 'email' },
                    { label: 'dropdown', value: 'dropdown' },
                    { label: 'radio', value: 'radio' },
                    { label: 'checkbox', value: 'checkbox' },
                  ],
                  defaultValue: 'text',
                }),
                {
                  text: fields.object({
                    required: fields.checkbox({
                      label: 'Required',
                      description: 'Is this field required'
                    })
                  }),
                  textarea: fields.object({
                    required: fields.checkbox({
                      label: 'Required',
                      description: 'Is this field required'
                    })
                  }),
                  email: fields.object({
                    required: fields.checkbox({
                      label: 'Required',
                      description: 'Is this field required'
                    })
                  }),
                  dropdown: fields.object({
                    required: fields.checkbox({
                      label: 'Required',
                      description: 'Is this field required'
                    }),
                    options: fields.array(
                      fields.object({
                        value: fields.text({ label: 'Option Value' }),
                        label: fields.text({ label: 'Option Label' }),
                      }),
                      {
                        label: 'Dropdown Options',
                        itemLabel: props => props.fields.value.value
                      }
                    ),
                  }),
                  radio: fields.object({
                    required: fields.checkbox({
                      label: 'Required',
                      description: 'Is this field required'
                    }),
                    options: fields.array(
                      fields.object({
                        value: fields.text({ label: 'Option Value' }),
                        label: fields.text({ label: 'Option Label' }),
                      }),
                      {
                        label: 'Radio Options',
                        itemLabel: props => props.fields.value.value
                      }
                    ),
                  }),
                  checkbox: fields.object({
                    required: fields.checkbox({
                      label: 'Required',
                      description: 'Is this field required'
                    }),
                    options: fields.array(
                      fields.object({
                        value: fields.text({ label: 'Option Value' }),
                        label: fields.text({ label: 'Option Label' }),
                      }),
                      {
                        label: 'Checkbox Options',
                        itemLabel: props => props.fields.value.value
                      }
                    ),
                  }),
                }
              ),
            }),
            {
              label: 'Contact Form',
              description: 'Add, remove, and reorder form fields.',
              itemLabel: item => item.fields.label.value,
            }
          ),
          recipients: fields.array(
            fields.object({
              email: fields.text({ label: 'Recipient Email' }),
            }),
            // Labelling options
            {
              label: 'Recipient(s)',
              description: 'Who should receive this from data from the contact form',
              itemLabel: props => props.fields.email.value
            }
          ),
    }
});
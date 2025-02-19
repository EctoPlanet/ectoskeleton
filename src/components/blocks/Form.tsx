import { useState } from 'react'
import type { FormEvent } from 'react'

interface Option {
  value: string
  label: string
}

interface FormField {
  label: string
  settings: {
    discriminant: 'text' | 'email' | 'textarea' | 'dropdown' | 'radio' | 'checkbox'
    value?: {
      required?: boolean
      options?: Option[]
    }
  }
}

interface FormProps {
  fields: FormField[]
}

export default function Form({ fields }: FormProps) {
  const [responseMessage, setResponseMessage] = useState('')

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)

    // Convert FormData to URLSearchParams
    const params = new URLSearchParams()
    formData.forEach((value, key) => {
      params.append(key, value as string)
    })

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      body: params,
    })

    const data = await response.json()
    if (response.ok) {
      if (data.message) {
        setResponseMessage(data.message)
      }
    } else {
      setResponseMessage(data.message || 'Error sending email. Please try again later.')
    }
  }

  return (
    <form onSubmit={submit} className="container mx-auto flex flex-col gap-6">
      {fields.map((field) => {
        const { label, settings } = field
        const { discriminant, value } = settings

        switch (discriminant) {
          case 'text':
          case 'email':
            return (
              <label key={label} htmlFor={label}>
                <input
                  type={discriminant}
                  id={label}
                  name={label}
                  autoComplete={discriminant}
                  placeholder={label}
                  required={value?.required || false}
                  className="form-input rounded-2xl px-4 py-3 w-full"
                />
              </label>
            )
          case 'textarea':
            return (
              <label key={label} htmlFor={label}>
                <textarea
                  id={label}
                  name={label}
                  placeholder={label}
                  rows={4}
                  required={value?.required || false}
                  className="form-textarea rounded-2xl py-3 w-full"
                />
              </label>
            )
          case 'dropdown':
            return (
              <label key={label} htmlFor={label}>
                <select
                  id={label}
                  name={label}
                  required={value?.required || false}
                  className="form-select rounded-full px-4 py-3 w-full"
                >
                  {value?.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            )
          case 'radio':
            return (
              <div key={label}>
                {value?.options?.map((option) => (
                  <label key={option.value}>
                    <input type="radio" name={label} value={option.value} required={value?.required || false} />
                    {option.label}
                  </label>
                ))}
              </div>
            )
          case 'checkbox':
            return (
              <div key={label}>
                {label}
                {value?.options?.map((option) => (
                  <label key={option.value}>
                    <input type="checkbox" name={label} value={option.value} required={value?.required || false} />
                    {option.label}
                  </label>
                ))}
              </div>
            )
          default:
            return null
        }
      })}
      <button type="submit" className="btn btn-primary w-fit">
        Send
      </button>
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  )
}

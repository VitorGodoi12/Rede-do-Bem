import React, { useState } from 'react'
import { Icons } from './Icons'

type FormField = {
  id: string
  label: string
  type: 'text' | 'email' | 'textarea'
  placeholder: string
}

type ContactFormProps = {
  title: string
  fields: FormField[]
  submitLabel: string
  successMessage: string
}

export const ContactForm: React.FC<ContactFormProps> = ({
  title,
  fields,
  submitLabel,
  successMessage,
}) => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <div className="bg-white rounded-2xl shadow-md px-8 py-10 border-t-4 border-t-[#1E7A5F]">
      <h2 className="font-[Montserrat,sans-serif] text-2xl font-extrabold text-[#0B2E24] mb-8">
        {title}
      </h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.id} className="mb-6">
            <label
              htmlFor={field.id}
              className="block font-bold text-[#0B2E24] mb-2 text-xs uppercase tracking-[0.1em]"
            >
              {field.label}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                id={field.id}
                name={field.id}
                placeholder={field.placeholder}
                rows={5}
                required
                className="w-full px-4 py-3 border-2 border-[#F4F2EE] rounded-xl font-[Inter,sans-serif] text-base text-[#2D3748] bg-[#FAFAF8] outline-none transition-all duration-150 focus:border-[#1E7A5F] focus:bg-white resize-none min-h-[130px] font-medium"
              />
            ) : (
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                placeholder={field.placeholder}
                required
                className="w-full px-4 py-3 border-2 border-[#F4F2EE] rounded-xl font-[Inter,sans-serif] text-base text-[#2D3748] bg-[#FAFAF8] outline-none transition-all duration-150 focus:border-[#1E7A5F] focus:bg-white font-medium"
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#1E7A5F] text-white font-bold text-base shadow-sm transition-all duration-300 hover:bg-[#0B2E24] hover:shadow-md hover:-translate-y-0.5 border-none cursor-pointer"
        >
          <Icons.Send size={18} />
          {submitLabel}
        </button>
        {submitted && (
          <div className="mt-6 p-4 bg-[#F7EDD8] rounded-xl flex items-center gap-3 text-[#1E7A5F] font-bold animate-fade-in">
            <Icons.Check size={20} />
            <p>{successMessage}</p>
          </div>
        )}
      </form>
    </div>
  )
}

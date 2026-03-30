import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { CheckCircle, Send } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().optional(),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

type FormData = z.infer<typeof schema>

const projectTypes = ['Web App', 'Business Website', 'E-Commerce', 'Other']
const budgetRanges = ['Under $5k', '$5k – $10k', '$10k – $25k', '$25k+']

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (_data: FormData) => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6">
          <CheckCircle size={32} className="text-emerald-400" />
        </div>
        <h3 className="text-2xl font-bold font-mono text-zinc-100 mb-3">Message Sent!</h3>
        <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
          Thanks for reaching out. I'll review your project details and get back to you within 24 hours.
        </p>
      </div>
    )
  }

  const inputClass = (hasError: boolean) =>
    `w-full bg-zinc-900 border rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 transition-all ${
      hasError
        ? 'border-red-500/50 focus:ring-red-500/20'
        : 'border-zinc-800 focus:border-zinc-600 focus:ring-emerald-500/10'
    }`

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-2" htmlFor="name">
            Name <span className="text-emerald-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Jane Smith"
            className={inputClass(!!errors.name)}
            {...register('name')}
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-2" htmlFor="email">
            Email <span className="text-emerald-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="jane@example.com"
            className={inputClass(!!errors.email)}
            {...register('email')}
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-2" htmlFor="projectType">
            Project Type <span className="text-emerald-500">*</span>
          </label>
          <select
            id="projectType"
            className={`${inputClass(!!errors.projectType)} appearance-none cursor-pointer`}
            {...register('projectType')}
            defaultValue=""
          >
            <option value="" disabled>Select a type…</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.projectType && (
            <p className="text-red-400 text-xs mt-1">{errors.projectType.message}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-2" htmlFor="budget">
            Budget Range <span className="text-zinc-600 font-normal">(optional)</span>
          </label>
          <select
            id="budget"
            className={`${inputClass(false)} appearance-none cursor-pointer`}
            {...register('budget')}
            defaultValue=""
          >
            <option value="">Select a range…</option>
            {budgetRanges.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-zinc-400 mb-2" htmlFor="message">
          Message <span className="text-emerald-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell me about your project — what you're building, the problem you're solving, and any timeline or technical details that would be helpful."
          className={`${inputClass(!!errors.message)} resize-none`}
          {...register('message')}
        />
        {errors.message && (
          <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 disabled:cursor-not-allowed text-zinc-950 font-semibold px-6 py-3.5 rounded-lg transition-all duration-200 text-sm"
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-zinc-950/30 border-t-zinc-950 rounded-full animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send size={15} />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}

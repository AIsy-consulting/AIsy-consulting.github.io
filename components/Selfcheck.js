'use client'
import { useState } from 'react'
import Icon from './Icon'

const questions = [
  {
    id: 'time',
    text: 'Where does your team lose the most time?',
    options: [
      { label: 'Finding information in documents, emails or old projects', value: 'documents' },
      { label: 'Repetitive admin: reading PDFs, copying data, sorting requests', value: 'automation' },
      { label: 'Deciding what works, mostly on gut feeling', value: 'data' },
      { label: 'Building the smarter features our customers keep asking for', value: 'product' },
    ],
  },
  {
    id: 'material',
    text: 'What does most of that work involve?',
    options: [
      { label: 'Text, documents or images', value: 'text' },
      { label: 'Numbers and records in spreadsheets or systems', value: 'numbers' },
      { label: 'A mix of both', value: 'mix' },
    ],
  },
  {
    id: 'tech',
    text: 'Do you have technical people in-house?',
    options: [
      { label: 'Yes, a developer or an IT team', value: 'yes' },
      { label: 'Someone handy with tools, but no developers', value: 'some' },
      { label: 'No, nobody technical', value: 'no' },
    ],
  },
  {
    id: 'mood',
    text: 'Where are you with AI right now?',
    options: [
      { label: 'Curious, but cautious', value: 'cautious' },
      { label: 'Under pressure to "do something with AI"', value: 'pressure' },
      { label: 'Already using tools like ChatGPT and want more from them', value: 'using' },
    ],
  },
]

const outcomes = {
  documents: {
    title: 'Answers from your own documents',
    interest: 'Answers from our documents',
    summary:
      'The most likely fit is an assistant that answers questions from your own manuals, policies, contracts and past work, and shows where each answer came from. It usually needs nothing more than the documents you already have.',
  },
  automation: {
    title: 'Taking the repetitive work off your team',
    interest: 'Automating repetitive work',
    summary:
      'The most likely fit is automation: software that reads the incoming PDFs, emails or forms, fills in the right fields, and flags anything it is unsure about for a person to check. Projects like this pay for themselves quickly when the volume is steady.',
  },
  data: {
    title: 'Finding out what actually drives your results',
    interest: 'Understanding our data',
    summary:
      'The most likely fit is a proper analysis of the data you already collect: which factors genuinely move your numbers, which only look like they do, and how confident you can be in each answer. You get findings written in plain language, not just charts.',
  },
  product: {
    title: 'An AI feature in your own product',
    interest: 'An AI feature in our product',
    summary:
      'The most likely fit is designing and building an AI feature on top of your product and its data, with proper testing so it behaves in front of customers. I can work with your developers or deliver it ready to plug in.',
  },
}

const materialNotes = {
  text: 'Text, documents and images are exactly where modern AI is strongest, so this is a good starting point.',
  numbers: 'For numbers and records the right tool is often careful statistics rather than a chatbot. I use whichever answers the question honestly.',
  mix: 'A mix is normal. We would start with the part that costs you the most time and expand from there.',
}

const techNotes = {
  yes: 'I would work alongside your developers and hand over code they can maintain.',
  some: 'You do not need developers on your side. I set everything up, document it, and show your team how to use it.',
  no: 'Nobody on your side needs to be technical. I handle the build, explain it in plain terms, and you own the result.',
}

const moodNotes = {
  cautious: 'Cautious is the right starting point. We would begin with one small, measurable piece of work, and I will tell you if it is not worth doing.',
  pressure: 'Pressure to adopt AI tends to produce expensive projects nobody uses. A short assessment first is far cheaper than the wrong build.',
  using: 'Then you already know what these tools can and cannot do. The next step is connecting them to your own information, safely.',
}

export default function Selfcheck() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const done = step >= questions.length
  const current = questions[step]

  function choose(value) {
    setAnswers((a) => ({ ...a, [current.id]: value }))
    setStep((s) => s + 1)
  }

  function restart() {
    setAnswers({})
    setStep(0)
  }

  function bookCall() {
    const outcome = outcomes[answers.time]
    if (outcome && typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('aisy:interest', { detail: outcome.interest }))
    }
  }

  return (
    <section id="check" className="border-t border-border bg-accent-soft/60">
      <div className="container-x py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:gap-16">
          <div>
            <p className="eyebrow mb-4">Not sure where to start?</p>
            <h2 className="font-serif text-[2rem] font-normal leading-[1.12] tracking-[-0.015em] text-ink md:text-[2.75rem]">
              A two-minute <em className="italic text-accent">check.</em>
            </h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-muted">
              Four quick questions, no email address required, nothing is stored. You get a rough pointer to the
              kind of project that would help, and a sense of how I would approach it.
            </p>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">
              It is a pointer, not a diagnosis. The free 10-minute call is where we work out what actually fits.
            </p>
          </div>

          <div className="card p-7 md:p-9" aria-live="polite">
            {!done ? (
              <fieldset>
                <div className="mb-5 flex items-center justify-between text-sm text-muted">
                  <span>
                    Question {step + 1} of {questions.length}
                  </span>
                  {step > 0 && (
                    <button type="button" onClick={() => setStep((s) => s - 1)} className="text-accent underline underline-offset-4 hover:text-accent-dark">
                      Back
                    </button>
                  )}
                </div>
                <legend className="mb-5 font-serif text-2xl leading-snug">{current.text}</legend>
                <div className="flex flex-col gap-3">
                  {current.options.map((o) => (
                    <button
                      key={o.value}
                      type="button"
                      onClick={() => choose(o.value)}
                      data-option="true"
                      className="flex w-full items-center justify-between gap-4 rounded-xl border border-border bg-paper px-5 py-4 text-left text-[0.95rem] text-ink transition-colors hover:border-accent hover:bg-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      <span>{o.label}</span>
                      <Icon name="arrow" className="h-4 w-4 shrink-0 text-muted" />
                    </button>
                  ))}
                </div>
              </fieldset>
            ) : (
              <div>
                <p className="eyebrow mb-3">Most likely starting point</p>
                <h3 className="mb-4 font-serif text-2xl leading-snug">{outcomes[answers.time].title}</h3>
                <p className="mb-4 leading-relaxed text-muted">{outcomes[answers.time].summary}</p>
                <ul className="mb-6 space-y-3">
                  {[materialNotes[answers.material], techNotes[answers.tech], moodNotes[answers.mood]].map((note) => (
                    <li key={note} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink/85">
                      <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-accent" />
                      {note}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center gap-4">
                  <a href="#contact" onClick={bookCall} className="btn-primary">
                    Book a free 10-minute call
                  </a>
                  <button type="button" onClick={restart} className="text-sm text-muted underline underline-offset-4 hover:text-ink">
                    Start again
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

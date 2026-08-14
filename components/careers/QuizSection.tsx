"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, RotateCcw, Sparkles } from "lucide-react";
import { Reveal } from "../Reveal";

type Discipline =
  | "Technology & AI"
  | "Business & Management"
  | "Finance & Economics"
  | "Business Operations"
  | "Consulting & Problem Solving"
  | "Product & Design"
  | "Growth & Market";

const disciplineInfo: Record<Discipline, string> = {
  "Technology & AI": "You build the things everyone else relies on.",
  "Business & Management": "You see the whole board, not just one square.",
  "Finance & Economics": "You make sure the ambitious plan is also a sound one.",
  "Business Operations": "You turn chaos into something that actually runs.",
  "Consulting & Problem Solving": "You ask the question nobody else thought to ask.",
  "Product & Design": "You care how it feels, not just whether it works.",
  "Growth & Market": "You get the right thing in front of the right people.",
};

type Question = {
  prompt: string;
  options: { label: string; discipline: Discipline }[];
};

const questions: Question[] = [
  {
    prompt: "Which sounds most like your Saturday afternoon?",
    options: [
      { label: "Tinkering with code or a new tool", discipline: "Technology & AI" },
      { label: "Reading about a company's strategy", discipline: "Business & Management" },
      { label: "Building a budget or investment plan", discipline: "Finance & Economics" },
      { label: "Organizing chaos into a system", discipline: "Business Operations" },
    ],
  },
  {
    prompt: "A friend has a problem. You instinctively want to:",
    options: [
      { label: "Ask a lot of questions before suggesting anything", discipline: "Consulting & Problem Solving" },
      { label: "Sketch out how it could look or feel", discipline: "Product & Design" },
      { label: "Figure out how to tell more people about it", discipline: "Growth & Market" },
      { label: "Just start building a fix", discipline: "Technology & AI" },
    ],
  },
  {
    prompt: "Pick a word that describes you best:",
    options: [
      { label: "Curious", discipline: "Technology & AI" },
      { label: "Persuasive", discipline: "Growth & Market" },
      { label: "Analytical", discipline: "Finance & Economics" },
      { label: "Empathetic", discipline: "Product & Design" },
    ],
  },
  {
    prompt: "In a group project, you're usually the one who:",
    options: [
      { label: "Keeps everyone organized and on schedule", discipline: "Business Operations" },
      { label: "Asks 'but why are we doing it this way'", discipline: "Consulting & Problem Solving" },
      { label: "Pitches the big vision", discipline: "Business & Management" },
      { label: "Makes sure the numbers add up", discipline: "Finance & Economics" },
    ],
  },
];

export function QuizSection() {
  const [step, setStep] = useState(0); // 0..3 = questions, 4 = result
  const [scores, setScores] = useState<Partial<Record<Discipline, number>>>({});

  const answer = (discipline: Discipline) => {
    setScores((prev) => ({ ...prev, [discipline]: (prev[discipline] ?? 0) + 1 }));
    setStep((s) => s + 1);
  };

  const restart = () => {
    setScores({});
    setStep(0);
  };

  const result = (() => {
    const entries = Object.entries(scores) as [Discipline, number][];
    if (entries.length === 0) return "Technology & AI" as Discipline;
    return entries.reduce((best, cur) => (cur[1] > best[1] ? cur : best))[0];
  })();

  const handleJoinAsResult = () => {
    window.dispatchEvent(new CustomEvent("syncrio:discipline-match", { detail: result }));
  };

  const isResult = step >= questions.length;

  return (
    <section className="border-t border-rule bg-white py-16">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            60 Seconds
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Find your path
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Four quick questions. No wrong answers — just a starting point.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 rounded-2xl border border-rule p-8">
          {!isResult && (
            <div className="mb-6 flex items-center gap-1.5">
              {questions.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    i < step ? "bg-accent" : i === step ? "bg-accent/40" : "bg-rule"
                  }`}
                />
              ))}
            </div>
          )}

          <AnimatePresence mode="wait">
            {!isResult ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-xs font-semibold text-slate-400">
                  Question {step + 1} of {questions.length}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-ink">{questions[step].prompt}</h3>
                <div className="mt-6 flex flex-col gap-2.5">
                  {questions[step].options.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => answer(opt.discipline)}
                      className="rounded-xl border border-rule px-5 py-3.5 text-left text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-slate-50"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-accent/10 text-accent">
                  <Sparkles size={22} />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  Your match
                </p>
                <h3 className="font-display mt-2 text-2xl font-semibold text-ink">{result}</h3>
                <p className="mt-2 text-sm text-slate-600">{disciplineInfo[result]}</p>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="#join"
                    onClick={handleJoinAsResult}
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                  >
                    Join as a {result.split(" ")[0]} builder
                    <ArrowRight size={15} />
                  </a>
                  <button
                    onClick={restart}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-ink"
                  >
                    <RotateCcw size={14} /> Retake
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}

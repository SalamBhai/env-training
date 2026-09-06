import type { ReactNode } from "react";
import { SlideLayout, Card, Bullet } from "./SlideLayout";

export type SlideDef = {
  id: string;
  title: string;
  notes: string;
  render: (p: { index: number; total: number }) => ReactNode;
};

export const slides: SlideDef[] = [
  /* ==========================================================================
     SLIDE 1: COVER
     ========================================================================== */
  {
    id: "cover",
    title: "Environmental Advocacy & Community Evidence Gathering",
    notes:
      "Welcome the audience. Introduce the core premise: moving from passive environmental concern to proactive community action through empirical evidence.",
    render: () => (
      <div className="slide-content bg-paper text-ink">
        <div className="absolute inset-0 grid-paper" />
        <div className="relative flex h-full flex-col justify-between px-[90px] py-[70px]">
          {/* Top Header Tag */}
          <div className="flex items-center justify-between">
            <span className="slide-kicker brut-flat border-[3px] bg-mint px-6 py-2.5 uppercase tracking-widest text-ink font-bold">
              Community Action · Evidence For Change
            </span>
            <span className="slide-caption font-bold tracking-wider text-forest uppercase">
              Masterclass Presentation
            </span>
          </div>

          {/* Main Title Section */}
          <div className="my-auto max-w-[1600px]">
            <h1 className="slide-title-lg text-ink" style={{ fontSize: 96 }}>
              Environmental Advocacy &amp; Community Evidence Gathering
            </h1>
            <div className="mt-8 inline-block brut bg-forest px-10 py-5 text-paper">
              <p className="slide-subtitle text-paper font-display" style={{ fontSize: 42 }}>
                From Environmental Concern to Community Action: Building Evidence for Change
              </p>
            </div>
            <div className="mt-10 flex items-center gap-5">
              <div className="h-[4px] w-[50px] bg-forest" />
              <p className="slide-body-lg font-bold text-forest-deep tracking-tight" style={{ fontSize: 38 }}>
                Sheriffdeen O. Saula
              </p>
            </div>
          </div>

          {/* Footer Pills */}
          <div className="flex items-end justify-between border-t-[3px] border-ink pt-5">
            <div className="flex gap-4">
              {["IDENTIFY", "INVESTIGATE", "DOCUMENT", "MOBILISE", "ADVOCATE", "SUSTAIN"].map((tag) => (
                <span
                  key={tag}
                  className="slide-badge brut-flat border-[3px] bg-card px-5 py-2 uppercase tracking-widest text-xs font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="slide-caption font-semibold opacity-75">
              Evidence-Based Climate Action
            </span>
          </div>
        </div>
      </div>
    ),
  },

  /* ==========================================================================
     SLIDE 2: WHAT DO WE REALLY MEAN BY ADVOCACY?
     ========================================================================== */
  {
    id: "what-is-advocacy",
    title: "What Do We Really Mean by Environmental Advocacy?",
    notes:
      "Clarify the distinction between carrying out an activity (like a cleanup) and doing genuine advocacy. Emphasize the five core reflective questions.",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="02: Conceptual Foundations">
        <div>
          <h2 className="slide-title" style={{ fontSize: 68 }}>
            What Do We Really Mean by Environmental Advocacy?
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-8 items-stretch flex-1 my-4">
          {/* Core premise & 5 questions */}
          <Card className="col-span-7 p-9 flex flex-col justify-between h-full">
            <div>
              <div className="slide-subtitle text-forest font-display" style={{ fontSize: 34 }}>
                A cleanup can be part of advocacy, but it is not advocacy on its own.
              </div>
              <p className="slide-body mt-5 font-semibold opacity-85" style={{ fontSize: 26 }}>
                We need to look systematically beyond the activity:
              </p>
              <ul className="mt-5 space-y-3.5">
                <Bullet>What problem are we addressing?</Bullet>
                <Bullet>What evidence do we have?</Bullet>
                <Bullet>What needs to change?</Bullet>
                <Bullet>Who can make that change happen?</Bullet>
                <Bullet>What happens after the activity ends?</Bullet>
              </ul>
            </div>
          </Card>

          {/* Disclaimer callout */}
          <Card tone="forest" className="col-span-5 p-9 flex flex-col justify-between h-full">
            <div>
              <div className="slide-kicker text-mint mb-3" style={{ fontSize: 18 }}>Important Clarification</div>
              <h3 className="slide-subtitle text-paper font-display" style={{ fontSize: 36 }}>
                Disclaimer
              </h3>
              <p className="slide-body mt-5 leading-relaxed opacity-95 text-paper" style={{ fontSize: 26 }}>
                This is not about ridiculing cleanups or saying they are unnecessary. Cleanups are important.
              </p>
              <p className="slide-body mt-5 leading-relaxed opacity-95 text-paper" style={{ fontSize: 26 }}>
                The point is to look more closely at how evidence and data can help us achieve more sustained, structural impact.
              </p>
            </div>
            <div className="mt-6 border-t border-paper/20 pt-3 text-mint font-bold uppercase tracking-wider text-xs">
              Activity vs. Systemic Change
            </div>
          </Card>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 3: WHAT DOES AN ADVOCATE DO?
     ========================================================================== */
  {
    id: "what-advocates-do",
    title: "What Does an Environmental Advocate Actually Do?",
    notes:
      "Walk through the 7-stage lifecycle of advocacy from identification to sustaining change.",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="03: The Advocacy Lifecycle" tone="mint">
        <div>
          <h2 className="slide-title" style={{ fontSize: 68 }}>
            From Concern to Change: The 7 Core Responsibilities
          </h2>
        </div>

        <div className="flex flex-col gap-5 my-auto">
          {/* Row 1: Steps 01 to 04 */}
          <div className="grid grid-cols-4 gap-6">
            {[
              { step: "01", name: "Identify", question: "What is the problem?" },
              { step: "02", name: "Investigate", question: "What is actually happening?" },
              { step: "03", name: "Document", question: "What evidence can we gather?" },
              { step: "04", name: "Mobilise", question: "Who needs to be involved?" },
            ].map((item) => (
              <Card key={item.step} className="p-7 flex flex-col justify-between">
                <div>
                  <span className="slide-kicker text-forest font-bold" style={{ fontSize: 20 }}>{item.step}</span>
                  <h3 className="slide-subtitle font-display mt-2" style={{ fontSize: 30 }}>
                    {item.name}
                  </h3>
                </div>
                <div className="mt-5 border-t-[2px] border-ink/20 pt-3">
                  <p className="slide-caption font-semibold opacity-90 leading-snug" style={{ fontSize: 20 }}>
                    {item.question}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Row 2: Steps 05 to 07 + Core Loop Summary */}
          <div className="grid grid-cols-4 gap-6">
            {[
              { step: "05", name: "Advocate", question: "Who needs to hear this?" },
              { step: "06", name: "Hold Accountable", question: "What needs to change?" },
              { step: "07", name: "Sustain", question: "How do we make change last?" },
            ].map((item) => (
              <Card key={item.step} className="p-7 flex flex-col justify-between">
                <div>
                  <span className="slide-kicker text-forest font-bold" style={{ fontSize: 20 }}>{item.step}</span>
                  <h3 className="slide-subtitle font-display mt-2" style={{ fontSize: 30 }}>
                    {item.name}
                  </h3>
                </div>
                <div className="mt-5 border-t-[2px] border-ink/20 pt-3">
                  <p className="slide-caption font-semibold opacity-90 leading-snug" style={{ fontSize: 20 }}>
                    {item.question}
                  </p>
                </div>
              </Card>
            ))}

            <Card tone="forest" className="p-7 flex flex-col justify-center">
              <span className="slide-kicker text-mint font-bold" style={{ fontSize: 16 }}>The Core Loop</span>
              <p className="slide-body font-display text-paper font-bold mt-2 leading-snug" style={{ fontSize: 22 }}>
                Systematic process · Progressive iteration · Long-term accountability
              </p>
            </Card>
          </div>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 4: THE EVIDENCE GAP
     ========================================================================== */
  {
    id: "evidence-gap",
    title: "The Evidence Gap",
    notes:
      "Focus on the contrast between subjective observation ('I saw it') and verifiable proof ('I can demonstrate it').",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="04: The Evidence Gap">
        <div className="grid grid-cols-12 gap-8 items-stretch flex-1 my-3">
          {/* Big Quote Card */}
          <Card tone="forest" className="col-span-5 p-11 flex flex-col justify-between h-full">
            <div>
              <div className="slide-kicker text-mint mb-4" style={{ fontSize: 18 }}>Core Reality</div>
              <blockquote className="slide-title text-paper leading-tight" style={{ fontSize: 56 }}>
                “I saw it” is not the same as “I can demonstrate it.”
              </blockquote>
            </div>
            <div className="mt-8 border-t border-paper/20 pt-4">
              <p className="slide-caption text-mint font-semibold" style={{ fontSize: 22 }}>
                Advocacy requires proof that withstands institutional scrutiny.
              </p>
            </div>
          </Card>

          {/* 4 Pillars */}
          <div className="col-span-7 flex flex-col justify-between gap-4 h-full">
            <Card className="px-8 py-5 flex items-center gap-6 flex-1">
              <span className="text-4xl">📸</span>
              <div>
                <div className="slide-subtitle font-display" style={{ fontSize: 26 }}>Visual Evidence</div>
                <p className="slide-body opacity-85 mt-1" style={{ fontSize: 22 }}>
                  A picture can show a problem.
                </p>
              </div>
            </Card>
            <Card className="px-8 py-5 flex items-center gap-6 flex-1">
              <span className="text-4xl">🗣️</span>
              <div>
                <div className="slide-subtitle font-display" style={{ fontSize: 26 }}>Lived Experience</div>
                <p className="slide-body opacity-85 mt-1" style={{ fontSize: 22 }}>
                  A testimony can tell us what people are experiencing.
                </p>
              </div>
            </Card>
            <Card className="px-8 py-5 flex items-center gap-6 flex-1">
              <span className="text-4xl">📊</span>
              <div>
                <div className="slide-subtitle font-display" style={{ fontSize: 26 }}>Quantitative Data</div>
                <p className="slide-body opacity-85 mt-1" style={{ fontSize: 22 }}>
                  Data can help us understand the scale of the problem.
                </p>
              </div>
            </Card>
            <Card className="px-8 py-5 flex items-center gap-6 flex-1">
              <span className="text-4xl">⏱️</span>
              <div>
                <div className="slide-subtitle font-display" style={{ fontSize: 26 }}>Longitudinal Tracking</div>
                <p className="slide-body opacity-85 mt-1" style={{ fontSize: 22 }}>
                  Documentation helps us track what changes over time.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom Takeaway */}
        <Card tone="accent" className="px-8 py-4 text-center">
          <span className="slide-subtitle font-display text-forest-deep" style={{ fontSize: 30 }}>
            Good advocacy asks questions before making claims.
          </span>
        </Card>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 5: WHAT COUNTS AS ENVIRONMENTAL EVIDENCE?
     ========================================================================== */
  {
    id: "what-counts-as-evidence",
    title: "What Counts as Environmental Evidence?",
    notes:
      "Break down evidence into 4 distinct categories: Community, Physical, Data & Research, and Documentation.",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="05: Evidence Taxonomy">
        <div>
          <h2 className="slide-title" style={{ fontSize: 68 }}>
            What Counts as Environmental Evidence?
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-7 items-stretch flex-1 my-4">
          <Card className="p-7 flex flex-col justify-between h-full">
            <div>
              <span className="slide-kicker text-forest font-bold" style={{ fontSize: 20 }}>Category 01</span>
              <h3 className="slide-subtitle font-display mt-2" style={{ fontSize: 28 }}>
                Community Evidence
              </h3>
              <ul className="mt-5 space-y-3">
                <Bullet>Testimonies</Bullet>
                <Bullet>Interviews</Bullet>
                <Bullet>Surveys</Bullet>
                <Bullet>Community observations</Bullet>
              </ul>
            </div>
            <div className="mt-6 border-t border-ink/20 pt-3 text-xs uppercase tracking-wider text-forest font-bold">
              Qualitative &amp; Ground-level
            </div>
          </Card>

          <Card className="p-7 flex flex-col justify-between h-full">
            <div>
              <span className="slide-kicker text-forest font-bold" style={{ fontSize: 20 }}>Category 02</span>
              <h3 className="slide-subtitle font-display mt-2" style={{ fontSize: 28 }}>
                Physical Evidence
              </h3>
              <ul className="mt-5 space-y-3">
                <Bullet>Photos and videos</Bullet>
                <Bullet>Measurements</Bullet>
                <Bullet>Samples</Bullet>
                <Bullet>Field observations</Bullet>
              </ul>
            </div>
            <div className="mt-6 border-t border-ink/20 pt-3 text-xs uppercase tracking-wider text-forest font-bold">
              Empirical &amp; Verifiable
            </div>
          </Card>

          <Card className="p-7 flex flex-col justify-between h-full">
            <div>
              <span className="slide-kicker text-forest font-bold" style={{ fontSize: 20 }}>Category 03</span>
              <h3 className="slide-subtitle font-display mt-2" style={{ fontSize: 28 }}>
                Data &amp; Research
              </h3>
              <ul className="mt-5 space-y-3">
                <Bullet>Government records</Bullet>
                <Bullet>Existing datasets</Bullet>
                <Bullet>Scientific studies</Bullet>
                <Bullet>Maps and satellite data</Bullet>
              </ul>
            </div>
            <div className="mt-6 border-t border-ink/20 pt-3 text-xs uppercase tracking-wider text-forest font-bold">
              Institutional &amp; Macro
            </div>
          </Card>

          <Card className="p-7 flex flex-col justify-between h-full">
            <div>
              <span className="slide-kicker text-forest font-bold" style={{ fontSize: 20 }}>Category 04</span>
              <h3 className="slide-subtitle font-display mt-2" style={{ fontSize: 28 }}>
                Documentation
              </h3>
              <ul className="mt-5 space-y-3">
                <Bullet>Field reports</Bullet>
                <Bullet>Incident records</Bullet>
                <Bullet>Monitoring records</Bullet>
                <Bullet>Chain of custody logs</Bullet>
              </ul>
            </div>
            <div className="mt-6 border-t border-ink/20 pt-3 text-xs uppercase tracking-wider text-forest font-bold">
              Longitudinal &amp; Legal
            </div>
          </Card>
        </div>

        <Card tone="mint" className="px-8 py-3.5 text-center">
          <span className="slide-body font-bold text-forest-deep" style={{ fontSize: 26 }}>
            Different claims require different kinds of evidence. Match the proof to the objective.
          </span>
        </Card>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 6: WRONG WAY VS EVIDENCE-BACKED WAY
     ========================================================================== */
  {
    id: "wrong-vs-right",
    title: "The Wrong Way vs. The Evidence-Backed Way",
    notes:
      "Contrast the short-term activity-first cycle with the sustainable evidence-backed cycle.",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="06: Methodology Shift">
        <div>
          <h2 className="slide-title" style={{ fontSize: 68 }}>
            The Wrong Way vs. The Evidence-Backed Way
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8 items-stretch flex-1 my-3">
          {/* Activity-first */}
          <Card tone="muted" className="p-9 flex flex-col justify-between h-full">
            <div>
              <span className="slide-kicker text-red-800 font-bold" style={{ fontSize: 20 }}>The Flawed Approach</span>
              <h3 className="slide-subtitle font-display mt-3 text-ink" style={{ fontSize: 34 }}>
                The Activity-First Approach
              </h3>
              <div className="mt-6 brut-flat border-[2px] bg-white p-6">
                <p className="slide-body font-bold text-red-900 tracking-wide" style={{ fontSize: 24 }}>
                  Problem → Activity → Pictures → Publicity → Move on
                </p>
              </div>
              <ul className="mt-7 space-y-4">
                <li className="flex items-start gap-4">
                  <span className="mt-2 h-4 w-4 shrink-0 rounded-full bg-red-600" />
                  <span className="slide-body opacity-90" style={{ fontSize: 24 }}>
                    Focuses entirely on visible output rather than measurable outcome.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-2 h-4 w-4 shrink-0 rounded-full bg-red-600" />
                  <span className="slide-body opacity-90" style={{ fontSize: 24 }}>
                    Fades once cameras leave; underlying conditions remain untouched.
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-6 border-t border-ink/20 pt-3 text-xs font-bold uppercase text-red-800">
              Low Retention · Temporary Relief · Zero Policy Impact
            </div>
          </Card>

          {/* Evidence-backed */}
          <Card tone="forest" className="p-9 flex flex-col justify-between h-full">
            <div>
              <span className="slide-kicker text-mint font-bold" style={{ fontSize: 20 }}>The Sustainable Model</span>
              <h3 className="slide-subtitle font-display mt-3 text-paper" style={{ fontSize: 34 }}>
                The Evidence-Backed Approach
              </h3>
              <div className="mt-6 brut-flat border-[2px] border-paper bg-forest-deep p-6">
                <p className="slide-body font-bold text-mint tracking-wide" style={{ fontSize: 24 }}>
                  Problem → Investigate → Gather evidence → Act → Measure change → Follow up
                </p>
              </div>
              <ul className="mt-7 space-y-4">
                <li className="flex items-start gap-4">
                  <span className="mt-2 h-4 w-4 shrink-0 border-[2px] border-paper bg-mint" />
                  <span className="slide-body opacity-95 text-paper" style={{ fontSize: 24 }}>
                    Diagnoses root causes with verifiable data points.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-2 h-4 w-4 shrink-0 border-[2px] border-paper bg-mint" />
                  <span className="slide-body opacity-95 text-paper" style={{ fontSize: 24 }}>
                    Leverages documentation to hold institutions and policymakers accountable.
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-6 border-t border-paper/20 pt-3 text-xs font-bold uppercase text-mint">
              Sustained Accountability · Systemic Change · Verifiable Impact
            </div>
          </Card>
        </div>

        <Card tone="accent" className="p-4 text-center">
          <p className="slide-subtitle font-display text-forest-deep" style={{ fontSize: 30 }}>
            The question is not only: “What did we do?” It is also: “What changed because we did it?”
          </p>
        </Card>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 7: THE EVIDENCE-BACKED ADVOCACY FRAMEWORK (WIDER & TALLER)
     ========================================================================== */
  {
    id: "framework",
    title: "The Evidence-Backed Advocacy Framework",
    notes:
      "Review the sequential framework from Concern all the way to Sustainability. Each pillar answers a fundamental operational question.",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="07: The Framework" tone="mint">
        <div>
          <h2 className="slide-title" style={{ fontSize: 68 }}>
            The Evidence-Backed Advocacy Framework
          </h2>
          <div className="mt-2 inline-block brut-flat border-[3px] bg-paper px-6 py-1.5">
            <span className="slide-caption font-bold text-forest-deep tracking-wider" style={{ fontSize: 18 }}>
              Concern → Investigate → Evidence → Advocacy → Accountability → Action → Sustainability
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4 my-auto">
          {/* Row 1: Phases 01 to 04 */}
          <div className="grid grid-cols-4 gap-5">
            {[
              {
                step: "01",
                phase: "CONCERN",
                question: "What is happening?",
                desc: "Initial awareness of environmental anomaly or community harm.",
              },
              {
                step: "02",
                phase: "INVESTIGATE",
                question: "What do we know?",
                desc: "Deep-dive inquiry into ground facts, records, and context.",
              },
              {
                step: "03",
                phase: "EVIDENCE",
                question: "What can we demonstrate?",
                desc: "Empirical proof: photos, data, surveys, samples, and logs.",
              },
              {
                step: "04",
                phase: "ADVOCACY",
                question: "Who needs to hear it?",
                desc: "Targeted communication to power holders, regulators & public.",
              },
            ].map((col) => (
              <Card key={col.step} className="p-6 flex flex-col justify-between">
                <div>
                  <span className="slide-kicker text-forest font-bold" style={{ fontSize: 18 }}>{col.step}</span>
                  <h3 className="slide-subtitle font-display mt-1" style={{ fontSize: 24 }}>
                    {col.phase}
                  </h3>
                  <div className="mt-3 brut-flat border-[2px] bg-mint/40 p-2.5">
                    <p className="slide-caption font-extrabold text-forest-deep leading-tight" style={{ fontSize: 18 }}>
                      {col.question}
                    </p>
                  </div>
                </div>
                <p className="slide-caption mt-4 opacity-85 leading-relaxed font-medium" style={{ fontSize: 16 }}>
                  {col.desc}
                </p>
              </Card>
            ))}
          </div>

          {/* Row 2: Phases 05 to 07 + Closed Loop Banner */}
          <div className="grid grid-cols-4 gap-5">
            {[
              {
                step: "05",
                phase: "ACCOUNTABILITY",
                question: "What needs to change?",
                desc: "Identifying responsible parties and formal policy obligations.",
              },
              {
                step: "06",
                phase: "ACTION",
                question: "What can we do?",
                desc: "Direct interventions, cleanups, legal action, and policy lobbying.",
              },
              {
                step: "07",
                phase: "SUSTAINABILITY",
                question: "How does it last?",
                desc: "Continuous monitoring, maintenance, and policy anchoring.",
              },
            ].map((col) => (
              <Card key={col.step} className="p-6 flex flex-col justify-between">
                <div>
                  <span className="slide-kicker text-forest font-bold" style={{ fontSize: 18 }}>{col.step}</span>
                  <h3 className="slide-subtitle font-display mt-1" style={{ fontSize: 24 }}>
                    {col.phase}
                  </h3>
                  <div className="mt-3 brut-flat border-[2px] bg-mint/40 p-2.5">
                    <p className="slide-caption font-extrabold text-forest-deep leading-tight" style={{ fontSize: 18 }}>
                      {col.question}
                    </p>
                  </div>
                </div>
                <p className="slide-caption mt-4 opacity-85 leading-relaxed font-medium" style={{ fontSize: 16 }}>
                  {col.desc}
                </p>
              </Card>
            ))}

            {/* 4th card in row 2: Closed Loop Principle */}
            <Card tone="forest" className="p-6 flex flex-col justify-center">
              <span className="slide-kicker text-mint font-bold" style={{ fontSize: 16 }}>The Framework Goal</span>
              <p className="slide-body font-display text-paper font-bold mt-2 leading-snug" style={{ fontSize: 22 }}>
                Evidence connects initial community concern directly to enforceable, lasting policy change.
              </p>
            </Card>
          </div>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 8: WAVEWISE - PART 1 (THE PROBLEM & EVIDENCE)
     ========================================================================== */
  {
    id: "wavewise-p1",
    title: "WaveWise Climate Resilience Project (Part 1)",
    notes:
      "Case study: WaveWise Climate Resilience Project at Itowolo Community Primary School. How field observation uncovered issues far beyond waste.",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="08: Case Study · WaveWise">
        <div className="flex items-center justify-between">
          <h2 className="slide-title" style={{ fontSize: 66 }}>
            WaveWise Climate Resilience Project: The Problem → The Evidence
          </h2>
          <span className="slide-badge brut-flat border-[2px] bg-mint px-4 py-1.5 text-forest-deep font-bold text-sm">
            Clime With Me × Clean Air 360
          </span>
        </div>

        <div className="grid grid-cols-12 gap-8 items-stretch flex-1 my-4">
          {/* Left card: Context */}
          <Card className="col-span-5 p-9 flex flex-col justify-between h-full">
            <div>
              <span className="slide-kicker text-forest font-bold" style={{ fontSize: 20 }}>Ground Reality</span>
              <h3 className="slide-subtitle font-display mt-3" style={{ fontSize: 34 }}>
                Itowolo Community Primary School
              </h3>
              <ul className="mt-6 space-y-4">
                <Bullet>Located directly beside the Ogun River.</Bullet>
                <Bullet>Severely vulnerable to recurrent seasonal flooding.</Bullet>
                <Bullet>Acute environmental, structural, and infrastructural decay.</Bullet>
                <Bullet>Students and teachers exposed to unsafe learning conditions.</Bullet>
              </ul>
            </div>
            <div className="mt-6 border-t border-ink/20 pt-3">
              <p className="slide-caption font-bold text-forest-deep" style={{ fontSize: 20 }}>
                A frontline public school confronting severe climate and flood vulnerability.
              </p>
            </div>
          </Card>

          {/* Right card: The Discovery */}
          <div className="col-span-7 flex flex-col justify-between gap-6 h-full">
            <Card tone="forest" className="p-8 flex-1 flex flex-col justify-center">
              <span className="slide-kicker text-mint font-bold" style={{ fontSize: 20 }}>Field Observation &amp; Engagement</span>
              <p className="slide-subtitle text-paper mt-3 font-display leading-snug" style={{ fontSize: 36 }}>
                Field observation and community engagement helped reveal the scale of the problem:
              </p>
              <div className="mt-6 brut-flat border-[3px] border-paper bg-forest-deep p-6">
                <p className="slide-body-lg font-bold text-mint" style={{ fontSize: 36 }}>
                  “The issue was far bigger than cleaning up waste.”
                </p>
              </div>
            </Card>

            <Card tone="accent" className="p-8">
              <span className="slide-kicker text-forest-deep font-bold" style={{ fontSize: 20 }}>Integrated Intervention</span>
              <p className="slide-body font-bold text-forest-deep mt-3" style={{ fontSize: 26 }}>
                The project combined community action, rigorous documentation, climate education, and continuous engagement with relevant government stakeholders.
              </p>
            </Card>
          </div>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 9: WAVEWISE - PART 2 (FROM EVIDENCE TO CHANGE)
     ========================================================================== */
  {
    id: "wavewise-p2",
    title: "WaveWise: From Evidence to Change",
    notes:
      "Follow through on the outcome of WaveWise: advocacy pushed beyond cleanup to trigger school demolition and climate-resilient reconstruction.",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="09: Case Study · WaveWise Outcome">
        <div>
          <h2 className="slide-title" style={{ fontSize: 68 }}>
            WaveWise: From Evidence to Change
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-8 items-stretch flex-1 my-4">
          {/* Main Story Card */}
          <Card className="col-span-7 p-9 flex flex-col justify-between h-full">
            <div className="space-y-5">
              <p className="slide-body leading-relaxed" style={{ fontSize: 26 }}>
                The project used community engagement, documentation, cleanup activities, climate education, and sustained government engagement to address the conditions affecting the school.
              </p>
              <div className="brut-flat border-[3px] bg-mint-soft p-6">
                <p className="slide-body font-semibold text-forest-deep" style={{ fontSize: 25 }}>
                  The cleanup helped address an immediate environmental problem, but the advocacy continued beyond it. The project pushed for the underlying environmental and infrastructural issues to be addressed...
                </p>
              </div>
              <p className="slide-body font-bold text-forest leading-relaxed" style={{ fontSize: 26 }}>
                Demolition and reconstruction of the school are now underway, with climate resilience being considered in the rebuilding process.
              </p>
            </div>
            <div className="mt-6 border-t border-ink/20 pt-3">
              <span className="slide-caption font-extrabold uppercase text-forest tracking-wider" style={{ fontSize: 18 }}>
                Concrete Infrastructure Reconstruction Underway
              </span>
            </div>
          </Card>

          {/* Core Philosophy & Video Links with visible accessible URLs */}
          <div className="col-span-5 flex flex-col justify-between gap-6 h-full">
            <Card tone="forest" className="p-8 flex-1 flex flex-col justify-center">
              <span className="slide-kicker text-mint font-bold" style={{ fontSize: 20 }}>The Critical Distinction</span>
              <p className="slide-subtitle text-paper mt-3 leading-snug font-display" style={{ fontSize: 32 }}>
                “The cleanup was an activity. The advocacy was the process that sought to change the conditions that made the cleanup necessary.”
              </p>
            </Card>

            <Card className="p-7">
              <div className="slide-kicker text-forest mb-3 font-bold" style={{ fontSize: 20 }}>Accessible Project Media</div>
              <div className="flex flex-col gap-3">
                <a
                  href="https://youtube.com/shorts/NB2ybNE5ZNU?si=CQiaVeIsidrp9kYp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="deck-ui-btn px-5 py-3 text-left w-full flex flex-col justify-center"
                >
                  <div className="flex items-center justify-between font-bold text-base">
                    <span>▶ Short WaveWise Video</span>
                    <span className="text-forest">↗</span>
                  </div>
                  <span className="text-xs opacity-75 font-mono mt-0.5">
                    youtube.com/shorts/NB2ybNE5ZNU
                  </span>
                </a>
                <a
                  href="https://youtu.be/Xb348ZCMDSc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="deck-ui-btn px-5 py-3 text-left w-full flex flex-col justify-center"
                >
                  <div className="flex items-center justify-between font-bold text-base">
                    <span>▶ Full WaveWise Documentary</span>
                    <span className="text-forest">↗</span>
                  </div>
                  <span className="text-xs opacity-75 font-mono mt-0.5">
                    youtu.be/Xb348ZCMDSc
                  </span>
                </a>
                <a
                  href="https://www.instagram.com/wavewisecrp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="deck-ui-btn px-5 py-3 text-left w-full flex flex-col justify-center"
                >
                  <div className="flex items-center justify-between font-bold text-base">
                    <span>📸 WaveWise on Instagram</span>
                    <span className="text-forest">↗</span>
                  </div>
                  <span className="text-xs opacity-75 font-mono mt-0.5">
                    instagram.com/wavewisecrp
                  </span>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 10: OTHER ADVOCACY CASES
     ========================================================================== */
  {
    id: "other-cases",
    title: "Other Evidence-Backed Advocacy Cases",
    notes:
      "Examine three high-impact institutional case studies: Amnesty in Niger Delta, UNEP in Ogoniland, and the Bayelsa Oil Commission.",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="10: Global & Regional Cases">
        <div>
          <h2 className="slide-title" style={{ fontSize: 68 }}>
            Other Evidence-Backed Advocacy Cases
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-7 items-stretch flex-1 my-3">
          {/* Amnesty Card */}
          <Card className="p-8 flex flex-col justify-between h-full">
            <div>
              <span className="slide-kicker text-forest font-bold" style={{ fontSize: 20 }}>Case 01 · Niger Delta</span>
              <h3 className="slide-subtitle font-display mt-2" style={{ fontSize: 28 }}>
                Amnesty International
              </h3>
              <p className="slide-caption mt-4 leading-relaxed opacity-90" style={{ fontSize: 18 }}>
                Amnesty used community information, photographs, company reports, and crowdsourced satellite analysis. Its <em>Decode Oil Spills</em> project engaged thousands in analysing spill claims, challenging corporate narratives and driving compensation in the landmark Bodo case.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-ink/20">
              <a
                href="https://www.amnesty.org/en/latest/news/2018/03/Niger-Delta-Oil-Spills-Decoders/"
                target="_blank"
                rel="noopener noreferrer"
                className="deck-ui-btn px-4 py-2.5 w-full flex flex-col"
              >
                <div className="flex items-center justify-between font-bold text-sm">
                  <span>Read Decode Oil Spills</span>
                  <span>↗</span>
                </div>
                <span className="text-xs opacity-75 font-mono truncate text-left mt-0.5">
                  amnesty.org/en/latest/news/...
                </span>
              </a>
            </div>
          </Card>

          {/* UNEP Card */}
          <Card className="p-8 flex flex-col justify-between h-full">
            <div>
              <span className="slide-kicker text-forest font-bold" style={{ fontSize: 20 }}>Case 02 · Ogoniland</span>
              <h3 className="slide-subtitle font-display mt-2" style={{ fontSize: 28 }}>
                UNEP Assessment
              </h3>
              <p className="slide-caption mt-4 leading-relaxed opacity-90" style={{ fontSize: 18 }}>
                Involved multi-year field investigations across 200+ locations, community engagement, and thousands of environmental samples. It scientifically established contamination scale, providing the irreplaceable baseline for cleanup and policy action.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-ink/20">
              <a
                href="https://www.unep.org/resources/report/environmental-assessment-ogoniland"
                target="_blank"
                rel="noopener noreferrer"
                className="deck-ui-btn px-4 py-2.5 w-full flex flex-col"
              >
                <div className="flex items-center justify-between font-bold text-sm">
                  <span>Read UNEP Report</span>
                  <span>↗</span>
                </div>
                <span className="text-xs opacity-75 font-mono truncate text-left mt-0.5">
                  unep.org/resources/report/...
                </span>
              </a>
            </div>
          </Card>

          {/* Bayelsa Commission Card */}
          <Card className="p-8 flex flex-col justify-between h-full">
            <div>
              <span className="slide-kicker text-forest font-bold" style={{ fontSize: 20 }}>Case 03 · State-Level</span>
              <h3 className="slide-subtitle font-display mt-2" style={{ fontSize: 28 }}>
                Bayelsa Commission
              </h3>
              <p className="slide-caption mt-4 leading-relaxed opacity-90" style={{ fontSize: 18 }}>
                Combined scientific environmental surveys, spill data, and testimonies from impacted communities. Framed pollution as both an ecological and acute human crisis, formulating legal and economic demands for remediation and accountability.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-ink/20">
              <a
                href="https://report.bayelsacommission.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="deck-ui-btn px-4 py-2.5 w-full flex flex-col"
              >
                <div className="flex items-center justify-between font-bold text-sm">
                  <span>Read Commission Report</span>
                  <span>↗</span>
                </div>
                <span className="text-xs opacity-75 font-mono truncate text-left mt-0.5">
                  report.bayelsacommission.org
                </span>
              </a>
            </div>
          </Card>
        </div>

        <Card tone="forest" className="p-4 text-center">
          <span className="slide-body font-bold text-mint" style={{ fontSize: 26 }}>
            The Lesson: Different methods. Same principle — empirical evidence strengthens environmental advocacy.
          </span>
        </Card>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 11: HOW DO WE GATHER & DOCUMENT EVIDENCE?
     ========================================================================== */
  {
    id: "how-to-gather",
    title: "How Do We Gather & Document Evidence?",
    notes:
      "Deconstruct the evidence gathering methodology into Before, During, and After action phases.",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="11: Operational Methodology" tone="mint">
        <div>
          <h2 className="slide-title" style={{ fontSize: 68 }}>
            How Do We Gather &amp; Document Evidence?
          </h2>
          <div className="mt-2 inline-block brut-flat border-[3px] bg-paper px-6 py-1.5">
            <span className="slide-caption font-bold text-forest-deep tracking-wider" style={{ fontSize: 20 }}>
              Three Continuous Phases: Before · During · After
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-7 items-stretch flex-1 my-4">
          {/* BEFORE */}
          <Card className="p-8 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between border-b-[2px] border-ink pb-3">
                <h3 className="slide-subtitle font-display text-forest" style={{ fontSize: 30 }}>
                  BEFORE
                </h3>
                <span className="slide-badge brut-flat border-[2px] bg-mint px-3.5 py-1 font-bold text-xs">
                  Preparation
                </span>
              </div>
              <ul className="mt-6 space-y-3.5">
                <Bullet>Define the problem precisely</Bullet>
                <Bullet>Decide what you need to prove</Bullet>
                <Bullet>Identify who should be involved</Bullet>
                <Bullet>Establish a rigorous baseline</Bullet>
              </ul>
            </div>
            <div className="mt-6 text-xs uppercase tracking-wider text-forest font-bold border-t border-ink/20 pt-3">
              Research &amp; Scoping
            </div>
          </Card>

          {/* DURING */}
          <Card className="p-8 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between border-b-[2px] border-ink pb-3">
                <h3 className="slide-subtitle font-display text-forest" style={{ fontSize: 30 }}>
                  DURING
                </h3>
                <span className="slide-badge brut-flat border-[2px] bg-forest px-3.5 py-1 font-bold text-xs text-paper">
                  Fieldwork
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                <Bullet>Observe attentively &amp; ask questions</Bullet>
                <Bullet>Interview community members</Bullet>
                <Bullet>Measure physical indicators &amp; take samples</Bullet>
                <Bullet>Capture photos and videos with context</Bullet>
                <Bullet>Record precise dates, coordinates &amp; context</Bullet>
                <Bullet>Cross-check contradictory information</Bullet>
              </ul>
            </div>
            <div className="mt-6 text-xs uppercase tracking-wider text-forest font-bold border-t border-ink/20 pt-3">
              Observation &amp; Verification
            </div>
          </Card>

          {/* AFTER */}
          <Card className="p-8 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between border-b-[2px] border-ink pb-3">
                <h3 className="slide-subtitle font-display text-forest" style={{ fontSize: 30 }}>
                  AFTER
                </h3>
                <span className="slide-badge brut-flat border-[2px] bg-mint px-3.5 py-1 font-bold text-xs">
                  Synthesis
                </span>
              </div>
              <ul className="mt-6 space-y-3.5">
                <Bullet>Organise and digitise the information</Bullet>
                <Bullet>Analyse patterns &amp; evaluate findings</Bullet>
                <Bullet>Verify claims against independent sources</Bullet>
                <Bullet>Document findings into clear reports</Bullet>
                <Bullet>Securely archive and preserve your records</Bullet>
              </ul>
            </div>
            <div className="mt-6 text-xs uppercase tracking-wider text-forest font-bold border-t border-ink/20 pt-3">
              Analysis &amp; Archiving
            </div>
          </Card>
        </div>

        <Card tone="forest" className="px-8 py-3.5 text-center">
          <p className="slide-body font-bold text-paper" style={{ fontSize: 24 }}>
            Evidence-gathering is what makes environmental advocacy move from successful to impactful and sustainable.
          </p>
        </Card>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 12: TOOLS, ETHICS & ACCOUNTABILITY (WIDER & BETTER PROPORTIONS)
     ========================================================================== */
  {
    id: "tools-ethics",
    title: "Tools, Ethics & Accountability",
    notes:
      "Comprehensive toolkit across 5 categories: Spatial mapping, community data collection, public records, research databases, and impact documentation. Plus ethical guardrails and accountability tracking.",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="12: Practical Toolkit">
        <div>
          <h2 className="slide-title" style={{ fontSize: 68 }}>
            Tools, Ethics &amp; Accountability
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-7 items-stretch flex-1 my-3">
          {/* Left Column: 5 Tool Categories (7 cols) */}
          <Card className="col-span-7 p-7 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between border-b-[3px] border-ink pb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🛠️</span>
                  <h3 className="slide-subtitle font-display text-forest" style={{ fontSize: 28 }}>
                    Operational Tools &amp; Data Sources
                  </h3>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-forest-deep bg-mint px-3 py-1 border-2 border-ink">
                  5 Categories
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                {/* 1. Mapping & Spatial Evidence */}
                <div className="brut-flat border-[3px] bg-paper p-4">
                  <div className="text-xs font-extrabold uppercase text-forest tracking-wider mb-2">
                    1. Mapping &amp; Spatial Evidence
                  </div>
                  <ul className="text-sm font-semibold space-y-1 text-ink/90">
                    <li>• Google Maps / Google Earth</li>
                    <li>• OpenStreetMap</li>
                  </ul>
                </div>

                {/* 2. Data Collection & Community Voices */}
                <div className="brut-flat border-[3px] bg-paper p-4">
                  <div className="text-xs font-extrabold uppercase text-forest tracking-wider mb-2">
                    2. Data Collection &amp; Community Voices
                  </div>
                  <ul className="text-sm font-semibold space-y-1 text-ink/90">
                    <li>• KoboToolbox</li>
                    <li>• Google Forms</li>
                    <li>• U-Report</li>
                  </ul>
                </div>

                {/* 3. Government & Public Records */}
                <div className="brut-flat border-[3px] bg-paper p-4">
                  <div className="text-xs font-extrabold uppercase text-forest tracking-wider mb-2">
                    3. Government &amp; Public Records
                  </div>
                  <ul className="text-sm font-semibold space-y-1 text-ink/90">
                    <li>• National Bureau of Statistics (NBS)</li>
                    <li>• Federal / State government data portals</li>
                    <li>• Environmental assessment records</li>
                    <li>• Freedom of Information (FOI) requests</li>
                  </ul>
                </div>

                {/* 4. Research & Existing Data */}
                <div className="brut-flat border-[3px] bg-paper p-4">
                  <div className="text-xs font-extrabold uppercase text-forest tracking-wider mb-2">
                    4. Research &amp; Existing Data
                  </div>
                  <ul className="text-sm font-semibold space-y-1 text-ink/90">
                    <li>• Google Scholar</li>
                    <li>• PubMed</li>
                    <li>• ResearchGate</li>
                    <li>• Google Dataset Search</li>
                  </ul>
                </div>

                {/* 5. Impact Documentation & Advocacy */}
                <div className="col-span-2 brut-flat border-[3px] bg-paper p-4">
                  <div className="text-xs font-extrabold uppercase text-forest tracking-wider mb-2">
                    5. Impact Documentation &amp; Advocacy
                  </div>
                  <div className="flex items-center gap-6 text-sm font-semibold text-ink/90 flex-wrap">
                    <span>• QS Impact</span>
                    <span>• Project impact reports</span>
                    <span>• Field reports</span>
                    <span>• Monitoring records</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 border-t-2 border-ink/20 pt-2 text-xs font-bold uppercase text-forest tracking-wider">
              Comprehensive Ground &amp; Desk Research Framework
            </div>
          </Card>

          {/* Right Column: Ethics & Accountability (5 cols) */}
          <div className="col-span-5 flex flex-col justify-between gap-5 h-full">
            {/* ETHICS Card */}
            <Card tone="forest" className="p-7 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b-2 border-paper/20 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">⚖️</span>
                    <h3 className="slide-subtitle font-display text-paper" style={{ fontSize: 28 }}>
                      Ethics
                    </h3>
                  </div>
                  <span className="text-xs font-bold uppercase text-mint tracking-wider">
                    Core Principles
                  </span>
                </div>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-3 mt-4 text-paper">
                  <li className="flex items-center gap-2.5">
                    <span className="h-2.5 w-2.5 shrink-0 bg-mint" />
                    <span className="text-base font-semibold">Ask for consent</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2.5 w-2.5 shrink-0 bg-mint" />
                    <span className="text-base font-semibold">Be accurate</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2.5 w-2.5 shrink-0 bg-mint" />
                    <span className="text-base font-semibold">Protect people's privacy</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2.5 w-2.5 shrink-0 bg-mint" />
                    <span className="text-base font-semibold">Keep context</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-2.5 w-2.5 shrink-0 bg-mint" />
                    <span className="text-base font-semibold">Give proper attribution</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-3 w-3 shrink-0 bg-mint font-bold" />
                    <span className="text-base font-bold text-mint">Do no harm</span>
                  </li>
                </ul>
              </div>
              <div className="mt-3 border-t border-paper/20 pt-2 text-xs font-bold uppercase text-mint tracking-wider">
                Integrity · Consent · Protection
              </div>
            </Card>

            {/* ACCOUNTABILITY Card */}
            <Card tone="accent" className="p-7 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b-[3px] border-ink pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🎯</span>
                    <h3 className="slide-subtitle font-display text-forest-deep" style={{ fontSize: 28 }}>
                      Accountability
                    </h3>
                  </div>
                  <span className="text-xs font-bold uppercase text-forest-deep tracking-wider">
                    Verification Loop
                  </span>
                </div>
                <p className="text-sm font-semibold text-forest-deep opacity-90 mt-3">
                  Structured chain for measuring progress and sustaining institutional follow-up:
                </p>
                <div className="mt-4 flex items-center justify-between gap-1.5">
                  {["Baseline", "Indicator", "Target", "Timeline", "Follow-up"].map((step, i) => (
                    <div key={step} className="flex items-center gap-1.5">
                      <div className="brut-flat border-[2px] bg-paper px-3 py-2 text-center shadow-sm">
                        <span className="font-display font-bold text-xs text-forest-deep block">
                          {step}
                        </span>
                      </div>
                      {i < 4 ? <span className="text-sm font-black text-forest-deep">→</span> : null}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-3 border-t-2 border-ink/20 pt-2 text-xs font-bold uppercase text-forest-deep tracking-wider">
                Measurable Milestones &amp; Institutional Oversight
              </div>
            </Card>
          </div>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 13: FROM ADVOCATE TO CHANGE AGENT
     ========================================================================== */
  {
    id: "change-agent",
    title: "From Advocate to Change Agent",
    notes:
      "Inspire the shift from being a passive campaigner to an active change agent who builds verifiable evidence.",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="13: Mindset Transformation">
        <div>
          <h2 className="slide-title" style={{ fontSize: 68 }}>
            From Advocate to Change Agent: Two Different Approaches
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8 items-stretch flex-1 my-3">
          <Card tone="muted" className="p-8 flex flex-col justify-between h-full">
            <div>
              <span className="slide-kicker text-slate-700 font-bold" style={{ fontSize: 20 }}>Standard Routine</span>
              <h3 className="slide-subtitle font-display mt-2" style={{ fontSize: 32 }}>
                Activity-Focused
              </h3>
              <div className="mt-5 brut-flat border-[2px] bg-paper p-5 text-center">
                <p className="slide-body font-bold text-ink" style={{ fontSize: 22 }}>
                  Problem → Activity → Photos → Publicity → End
                </p>
              </div>
              <p className="slide-body mt-6 opacity-80 leading-relaxed" style={{ fontSize: 22 }}>
                Produces short-term awareness and feel-good photo ops, but leaves the underlying political, municipal, and institutional drivers untouched.
              </p>
            </div>
            <div className="mt-5 border-t border-ink/20 pt-2.5 text-xs font-bold uppercase tracking-wider text-slate-700">
              Temporary · Event-Bound
            </div>
          </Card>

          <Card tone="forest" className="p-8 flex flex-col justify-between h-full">
            <div>
              <span className="slide-kicker text-mint font-bold" style={{ fontSize: 20 }}>Strategic Power</span>
              <h3 className="slide-subtitle font-display mt-2 text-paper" style={{ fontSize: 32 }}>
                Evidence-Backed
              </h3>
              <div className="mt-5 brut-flat border-[2px] border-paper bg-forest-deep p-5 text-center">
                <p className="slide-body font-bold text-mint" style={{ fontSize: 22 }}>
                  Concern → Evidence → Advocacy → Accountability → Action → Sustainable Change
                </p>
              </div>
              <p className="slide-body mt-6 opacity-95 text-paper leading-relaxed" style={{ fontSize: 22 }}>
                Connects community ground-observations with verifiable data, directly influencing policies, government infrastructure budgets, and enforcement.
              </p>
            </div>
            <div className="mt-5 border-t border-paper/20 pt-2.5 text-xs font-bold uppercase tracking-wider text-mint">
              Transformative · Systemic
            </div>
          </Card>
        </div>

        {/* Hero Callout Quote */}
        <Card tone="accent" className="px-8 py-4 text-center">
          <blockquote className="slide-subtitle font-display text-forest-deep leading-snug" style={{ fontSize: 30 }}>
            “The shift is simple: Don’t just document that a problem exists. Build the evidence that helps change it.”
          </blockquote>
        </Card>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 14: WHERE DO YOU GO FROM HERE?
     ========================================================================== */
  {
    id: "action-plan",
    title: "Where Do You Go From Here?",
    notes:
      "A concrete, actionable 7-step roadmap for participants to deploy into their own communities.",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="14: Call to Action" tone="mint">
        <div>
          <h2 className="slide-title" style={{ fontSize: 68 }}>
            Where Do You Go From Here?
          </h2>
          <p className="slide-caption font-semibold opacity-85 text-forest-deep mt-1" style={{ fontSize: 22 }}>
            Your immediate community advocacy playbook: from finding a problem to driving sustained accountability.
          </p>
        </div>

        <Card className="p-9 flex-1 my-3 flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-x-12 gap-y-6">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border-[3px] border-ink bg-mint font-display font-extrabold text-xl">
                01
              </span>
              <div>
                <h4 className="font-display font-bold text-2xl text-forest">Find it</h4>
                <p className="text-lg opacity-85 leading-relaxed mt-0.5">
                  Identify an acute, tangible environmental challenge in your local neighborhood or community.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border-[3px] border-ink bg-mint font-display font-extrabold text-xl">
                02
              </span>
              <div>
                <h4 className="font-display font-bold text-2xl text-forest">Ask questions</h4>
                <p className="text-lg opacity-85 leading-relaxed mt-0.5">
                  Dig into why it is happening, who is impacted, and who has formal regulatory responsibility.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border-[3px] border-ink bg-mint font-display font-extrabold text-xl">
                03
              </span>
              <div>
                <h4 className="font-display font-bold text-2xl text-forest">Gather evidence</h4>
                <p className="text-lg opacity-85 leading-relaxed mt-0.5">
                  Collect visual documentation, resident testimonies, precise GPS coordinates, and samples.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border-[3px] border-ink bg-mint font-display font-extrabold text-xl">
                04
              </span>
              <div>
                <h4 className="font-display font-bold text-2xl text-forest">Document what you find</h4>
                <p className="text-lg opacity-85 leading-relaxed mt-0.5">
                  Synthesize your findings into a clear, fact-based, undeniable evidence dossier.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border-[3px] border-ink bg-mint font-display font-extrabold text-xl">
                05
              </span>
              <div>
                <h4 className="font-display font-bold text-2xl text-forest">Find the right people</h4>
                <p className="text-lg opacity-85 leading-relaxed mt-0.5">
                  Map community leaders, local regulators, municipal agencies, and civic coalitions to engage.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border-[3px] border-ink bg-mint font-display font-extrabold text-xl">
                06
              </span>
              <div>
                <h4 className="font-display font-bold text-2xl text-forest">Take action</h4>
                <p className="text-lg opacity-85 leading-relaxed mt-0.5">
                  Deploy targeted, constructive advocacy backed by data to demand structural solutions.
                </p>
              </div>
            </div>

            <div className="col-span-2 flex items-start gap-4 border-t border-ink/20 pt-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border-[3px] border-ink bg-forest text-paper font-display font-extrabold text-xl">
                07
              </span>
              <div>
                <h4 className="font-display font-bold text-2xl text-forest">Follow up relentlessly</h4>
                <p className="text-lg opacity-85 leading-relaxed mt-0.5">
                  Track timelines, measure post-intervention change, and hold duty-bearers accountable until lasting change is achieved.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 15: RESOURCES & PROJECT ARCHIVE
     ========================================================================== */
  {
    id: "resources",
    title: "Resources & Reference Materials",
    notes:
      "Complete directory of all external resources, investigations, documentaries, and toolkits referenced in this masterclass.",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="15: Resources & References" tone="paper">
        <div>
          <h2 className="slide-title" style={{ fontSize: 68 }}>
            Key Resources &amp; Reference Materials
          </h2>
          <p className="slide-caption font-semibold opacity-80 mt-1" style={{ fontSize: 20 }}>
            Direct access to all case studies, investigative reports, video documentaries, and toolkits.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-7 items-stretch flex-1 my-3">
          {/* Column 1: WaveWise Media */}
          <Card className="p-7 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 border-b-[2px] border-ink pb-2.5">
                <span className="text-2xl">🌊</span>
                <h3 className="slide-subtitle font-display text-forest" style={{ fontSize: 26 }}>
                  WaveWise Project
                </h3>
              </div>
              <p className="text-sm opacity-80 mt-3 font-medium">
                Itowolo Community Primary School flood resilience &amp; school rebuild documentation.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href="https://youtube.com/shorts/NB2ybNE5ZNU?si=CQiaVeIsidrp9kYp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="deck-ui-btn px-4 py-2.5 text-left w-full flex flex-col"
                >
                  <span className="font-bold text-sm flex justify-between">
                    <span>Short Video Summary</span>
                    <span className="text-forest">↗</span>
                  </span>
                  <span className="text-xs font-mono opacity-70 mt-0.5">youtube.com/shorts/NB2ybNE5ZNU</span>
                </a>

                <a
                  href="https://youtu.be/Xb348ZCMDSc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="deck-ui-btn px-4 py-2.5 text-left w-full flex flex-col"
                >
                  <span className="font-bold text-sm flex justify-between">
                    <span>Full Documentary Video</span>
                    <span className="text-forest">↗</span>
                  </span>
                  <span className="text-xs font-mono opacity-70 mt-0.5">youtu.be/Xb348ZCMDSc</span>
                </a>

                <a
                  href="https://www.instagram.com/wavewisecrp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="deck-ui-btn px-4 py-2.5 text-left w-full flex flex-col"
                >
                  <span className="font-bold text-sm flex justify-between">
                    <span>Instagram Project Archive</span>
                    <span className="text-forest">↗</span>
                  </span>
                  <span className="text-xs font-mono opacity-70 mt-0.5">instagram.com/wavewisecrp</span>
                </a>
              </div>
            </div>
            <div className="mt-5 border-t border-ink/20 pt-2.5 text-xs font-bold uppercase text-forest">
              Grassroots Evidence In Action
            </div>
          </Card>

          {/* Column 2: Institutional Case Studies */}
          <Card tone="forest" className="p-7 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 border-b border-paper/20 pb-2.5">
                <span className="text-2xl">📄</span>
                <h3 className="slide-subtitle font-display text-mint" style={{ fontSize: 26 }}>
                  Case Study Reports
                </h3>
              </div>
              <p className="text-sm text-paper opacity-80 mt-3 font-medium">
                Formal legal, scientific, and community environmental assessments.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href="https://www.amnesty.org/en/latest/news/2018/03/Niger-Delta-Oil-Spills-Decoders/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="deck-ui-btn px-4 py-2.5 text-left w-full flex flex-col bg-paper text-ink"
                >
                  <span className="font-bold text-sm flex justify-between">
                    <span>Amnesty: Decode Oil Spills</span>
                    <span className="text-forest">↗</span>
                  </span>
                  <span className="text-xs font-mono opacity-70 truncate mt-0.5">amnesty.org/.../Niger-Delta-Oil-Spills</span>
                </a>

                <a
                  href="https://www.unep.org/resources/report/environmental-assessment-ogoniland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="deck-ui-btn px-4 py-2.5 text-left w-full flex flex-col bg-paper text-ink"
                >
                  <span className="font-bold text-sm flex justify-between">
                    <span>UNEP Ogoniland Assessment</span>
                    <span className="text-forest">↗</span>
                  </span>
                  <span className="text-xs font-mono opacity-70 truncate mt-0.5">unep.org/.../environmental-assessment</span>
                </a>

                <a
                  href="https://report.bayelsacommission.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="deck-ui-btn px-4 py-2.5 text-left w-full flex flex-col bg-paper text-ink"
                >
                  <span className="font-bold text-sm flex justify-between">
                    <span>Bayelsa Commission Report</span>
                    <span className="text-forest">↗</span>
                  </span>
                  <span className="text-xs font-mono opacity-70 mt-0.5">report.bayelsacommission.org</span>
                </a>
              </div>
            </div>
            <div className="mt-5 border-t border-paper/20 pt-2.5 text-xs font-bold uppercase text-mint">
              Institutional Precedents
            </div>
          </Card>

          {/* Column 3: Toolkits & Connect */}
          <Card tone="accent" className="p-7 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 border-b-[2px] border-ink pb-2.5">
                <span className="text-2xl">🛠️</span>
                <h3 className="slide-subtitle font-display text-forest-deep" style={{ fontSize: 26 }}>
                  Toolkits &amp; Connect
                </h3>
              </div>
              <p className="text-sm font-semibold text-forest-deep opacity-85 mt-3">
                Data collection toolkits and speaker contact link.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <div className="brut-flat border-[2px] bg-paper p-3">
                  <div className="font-bold text-sm text-forest-deep">KoboToolbox &amp; OpenStreetMap</div>
                  <div className="text-xs opacity-75 font-mono mt-0.5">kobotoolbox.org · openstreetmap.org</div>
                </div>

                <div className="brut-flat border-[2px] bg-paper p-3">
                  <div className="font-bold text-sm text-forest-deep">Dattego Circular Platform</div>
                  <div className="text-xs opacity-75 font-mono mt-0.5">dattego.vercel.app</div>
                </div>

                <a
                  href="https://linktr.ee/SheriffdeenSaula"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="deck-ui-btn px-4 py-2.5 text-left w-full flex flex-col bg-mint border-[2px]"
                >
                  <span className="font-bold text-sm flex justify-between text-forest-deep">
                    <span>Sheriffdeen Saula Linktree</span>
                    <span>↗</span>
                  </span>
                  <span className="text-xs font-mono opacity-80 text-forest-deep mt-0.5">linktr.ee/SheriffdeenSaula</span>
                </a>
              </div>
            </div>
            <div className="mt-5 border-t border-ink/20 pt-2.5 text-xs font-bold uppercase text-forest-deep">
              Community Tooling
            </div>
          </Card>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 16: THANK YOU (CONCLUSION & QUESTIONS)
     ========================================================================== */
  {
    id: "thank-you",
    title: "Thank You & Reflections",
    notes:
      "Closing summary slide. Reiterate that evidence turns concern into change. Interactive questions and Linktree QR code.",
    render: () => (
      <div className="slide-content bg-forest-deep text-paper">
        <div className="absolute inset-0 grid-paper opacity-25" />
        <div className="relative flex h-full flex-col justify-between px-[90px] py-[60px]">
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="slide-kicker brut-flat border-[3px] border-paper bg-mint px-5 py-2 uppercase tracking-widest text-ink font-bold">
              Conclusion &amp; Reflections
            </span>
            <span className="slide-page brut-flat border-[3px] border-paper bg-mint px-5 py-2 text-ink font-bold">
              16 / 16
            </span>
          </div>

          {/* Center Message */}
          <div className="my-auto max-w-[1550px] grid grid-cols-12 gap-8 items-center">
            <div className="col-span-7">
              <h1 className="slide-title-lg text-paper" style={{ fontSize: 96 }}>
                Thank You.
              </h1>
              <div className="mt-6 brut-flat border-[3px] border-paper bg-forest p-6">
                <p className="slide-subtitle text-paper font-display leading-snug" style={{ fontSize: 36 }}>
                  “Environmental advocacy starts with concern. Evidence helps us turn that concern into change.”
                </p>
              </div>
              <div className="mt-8 flex items-center gap-5">
                <span className="slide-subtitle font-display text-mint" style={{ fontSize: 32 }}>
                  Sheriffdeen O. Saula
                </span>
                <span className="slide-caption text-paper/75 font-semibold tracking-wider uppercase">
                  Climate Advocate &amp; Software Engineer
                </span>
              </div>
            </div>

            {/* Questions & Feedback Prompt on Closing */}
            <div className="col-span-5 bg-forest/70 brut-flat border-[3px] border-paper p-6 space-y-4">
              <div className="text-mint font-bold uppercase tracking-wider text-sm border-b border-paper/20 pb-2">
                Questions &amp; Discussion
              </div>
              <ul className="space-y-3 text-sm text-paper font-medium">
                <li className="flex items-start gap-2.5">
                  <span className="text-mint font-bold">1.</span>
                  <span>What stood out to you the most in today’s session?</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-mint font-bold">2.</span>
                  <span>What environmental problem in your community would you like to investigate?</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-mint font-bold">3.</span>
                  <span>What is one practical thing you will do differently in your next project?</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer with Linktree and QR Code */}
          <div className="flex items-end justify-between border-t border-paper/20 pt-6">
            <div>
              <div className="slide-kicker text-mint">Connect With Me</div>
              <a
                href="https://linktr.ee/SheriffdeenSaula"
                target="_blank"
                rel="noopener noreferrer"
                className="slide-subtitle mt-1 block text-paper hover:text-mint transition-colors font-display"
                style={{ fontSize: 28 }}
              >
                linktr.ee/SheriffdeenSaula ↗
              </a>
            </div>

            {/* QR Code Card */}
            <div className="flex items-center gap-5">
              <a
                href="https://linktr.ee/SheriffdeenSaula"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center gap-1.5 rounded-lg border-[3px] border-paper bg-paper p-2.5 text-ink shadow-[4px_4px_0px_0px_#82c987] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#82c987] transition-all"
              >
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=https://linktr.ee/SheriffdeenSaula&color=0d2b1d"
                  alt="Sheriffdeen Saula Linktree QR Code"
                  className="h-[105px] w-[105px]"
                />
                <span className="font-display text-[11px] font-bold uppercase tracking-wider text-ink opacity-90 group-hover:text-forest">
                  Scan for Linktree
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

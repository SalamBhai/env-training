import type { ReactNode } from "react";
import { SlideLayout, Card, Kicker, Bullet } from "./SlideLayout";

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
        <div className="relative flex h-full flex-col justify-between px-[110px] py-[90px]">
          {/* Top Header Tag */}
          <div className="flex items-center justify-between">
            <span className="slide-kicker brut-flat border-[3px] bg-mint px-6 py-3 uppercase tracking-widest text-ink font-bold">
              Community Action · Evidence For Change
            </span>
            <span className="slide-caption font-bold tracking-wider text-forest uppercase">
              Masterclass Presentation
            </span>
          </div>

          {/* Main Title Section */}
          <div className="my-auto max-w-[1550px]">
            <h1 className="slide-title-lg text-ink" style={{ fontSize: 92 }}>
              Environmental Advocacy &amp; Community Evidence Gathering
            </h1>
            <div className="mt-8 inline-block brut bg-forest px-10 py-5 text-paper">
              <p className="slide-subtitle text-paper font-display">
                From Environmental Concern to Community Action: Building Evidence for Change
              </p>
            </div>
            <div className="mt-10 flex items-center gap-5">
              <div className="h-[4px] w-[50px] bg-forest" />
              <p className="slide-body-lg font-bold text-forest-deep tracking-tight">
                Sheriffdeen O. Saula
              </p>
            </div>
          </div>

          {/* Footer Pills */}
          <div className="flex items-end justify-between border-t-[3px] border-ink pt-6">
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
        <Kicker>Conceptual Foundations</Kicker>
        <h2 className="slide-title mt-6 max-w-[1500px]">
          Environmental advocacy is more than carrying out environmental activities.
        </h2>
        <div className="mt-10 grid grid-cols-12 gap-8 items-stretch">
          {/* Core premise & 5 questions */}
          <Card className="col-span-7 p-10 flex flex-col justify-between">
            <div>
              <div className="slide-subtitle text-forest font-display" style={{ fontSize: 34 }}>
                A cleanup can be part of advocacy, but it is not advocacy on its own.
              </div>
              <p className="slide-body mt-6 font-semibold opacity-85">
                We need to look systematically beyond the activity:
              </p>
              <ul className="mt-5 space-y-4">
                <Bullet>What problem are we addressing?</Bullet>
                <Bullet>What evidence do we have?</Bullet>
                <Bullet>What needs to change?</Bullet>
                <Bullet>Who can make that change happen?</Bullet>
                <Bullet>What happens after the activity ends?</Bullet>
              </ul>
            </div>
          </Card>

          {/* Disclaimer callout */}
          <Card tone="forest" className="col-span-5 p-10 flex flex-col justify-between">
            <div>
              <div className="slide-kicker text-mint mb-4">Important Clarification</div>
              <h3 className="slide-subtitle text-paper" style={{ fontSize: 36 }}>
                Disclaimer:
              </h3>
              <p className="slide-body mt-6 leading-relaxed opacity-95 text-paper">
                This is not about ridiculing cleanups or saying they are unnecessary. Cleanups are important.
              </p>
              <p className="slide-body mt-6 leading-relaxed opacity-95 text-paper">
                The point is to look more closely at how evidence and data can help us achieve more sustained, structural impact.
              </p>
            </div>
            <div className="mt-8 border-t border-paper/20 pt-4 text-mint font-bold uppercase tracking-wider text-sm">
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
        <Kicker>The Advocacy Lifecycle</Kicker>
        <h2 className="slide-title mt-6">
          From Concern to Change: The 7 Core Responsibilities
        </h2>
        <div className="mt-10 grid grid-cols-7 gap-4 items-stretch">
          {[
            { step: "01", name: "Identify", question: "What is the problem?" },
            { step: "02", name: "Investigate", question: "What is actually happening?" },
            { step: "03", name: "Document", question: "What evidence can we gather?" },
            { step: "04", name: "Mobilise", question: "Who needs to be involved?" },
            { step: "05", name: "Advocate", question: "Who needs to hear this?" },
            { step: "06", name: "Hold Accountable", question: "What needs to change?" },
            { step: "07", name: "Sustain", question: "How do we make change last?" },
          ].map((item, i) => (
            <Card key={item.step} className="p-6 flex flex-col justify-between h-full">
              <div>
                <span className="slide-kicker text-forest font-bold">{item.step}</span>
                <h3 className="slide-subtitle font-display mt-3" style={{ fontSize: 28 }}>
                  {item.name}
                </h3>
              </div>
              <div className="mt-6 border-t-[2px] border-ink/20 pt-4">
                <p className="slide-caption font-semibold opacity-85 leading-snug">
                  {item.question}
                </p>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center gap-6">
          <span className="slide-caption font-bold uppercase tracking-widest text-forest-deep">
            Systematic Process · Progressive Iteration · Long-Term Impact
          </span>
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
        <Kicker>Perception vs. Demonstration</Kicker>
        <div className="mt-8 grid grid-cols-12 gap-8 items-stretch">
          {/* Big Quote Card */}
          <Card tone="forest" className="col-span-5 p-12 flex flex-col justify-between">
            <div>
              <div className="slide-kicker text-mint mb-6">Core Reality</div>
              <blockquote className="slide-title text-paper leading-tight" style={{ fontSize: 58 }}>
                “I saw it” is not the same as “I can demonstrate it.”
              </blockquote>
            </div>
            <div className="mt-8 border-t border-paper/20 pt-6">
              <p className="slide-caption text-mint font-semibold">
                Advocacy requires proof that withstands institutional scrutiny.
              </p>
            </div>
          </Card>

          {/* 4 Pillars */}
          <div className="col-span-7 flex flex-col justify-between gap-5">
            <Card className="px-8 py-5 flex items-center gap-6">
              <span className="slide-title text-forest" style={{ fontSize: 44 }}>📸</span>
              <div>
                <div className="slide-subtitle font-display" style={{ fontSize: 26 }}>Visual Evidence</div>
                <p className="slide-body opacity-85" style={{ fontSize: 22 }}>
                  A picture can show a problem.
                </p>
              </div>
            </Card>
            <Card className="px-8 py-5 flex items-center gap-6">
              <span className="slide-title text-forest" style={{ fontSize: 44 }}>🗣️</span>
              <div>
                <div className="slide-subtitle font-display" style={{ fontSize: 26 }}>Lived Experience</div>
                <p className="slide-body opacity-85" style={{ fontSize: 22 }}>
                  A testimony can tell us what people are experiencing.
                </p>
              </div>
            </Card>
            <Card className="px-8 py-5 flex items-center gap-6">
              <span className="slide-title text-forest" style={{ fontSize: 44 }}>📊</span>
              <div>
                <div className="slide-subtitle font-display" style={{ fontSize: 26 }}>Quantitative Data</div>
                <p className="slide-body opacity-85" style={{ fontSize: 22 }}>
                  Data can help us understand the scale of the problem.
                </p>
              </div>
            </Card>
            <Card className="px-8 py-5 flex items-center gap-6">
              <span className="slide-title text-forest" style={{ fontSize: 44 }}>⏱️</span>
              <div>
                <div className="slide-subtitle font-display" style={{ fontSize: 26 }}>Longitudinal Tracking</div>
                <p className="slide-body opacity-85" style={{ fontSize: 22 }}>
                  Documentation helps us track what changes over time.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom Takeaway */}
        <div className="mt-8">
          <Card tone="accent" className="px-8 py-4 text-center">
            <span className="slide-subtitle font-display text-forest-deep" style={{ fontSize: 32 }}>
              Good advocacy asks questions before making claims.
            </span>
          </Card>
        </div>
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
        <Kicker>Taxonomy of Proof</Kicker>
        <h2 className="slide-title mt-6">
          What Counts as Environmental Evidence?
        </h2>
        <div className="mt-10 grid grid-cols-4 gap-8">
          <Card className="p-8 flex flex-col justify-between h-full">
            <div>
              <span className="slide-kicker text-forest">Category 01</span>
              <h3 className="slide-subtitle font-display mt-3" style={{ fontSize: 30 }}>
                Community Evidence
              </h3>
              <ul className="mt-6 space-y-3">
                <Bullet>Testimonies</Bullet>
                <Bullet>Interviews</Bullet>
                <Bullet>Surveys</Bullet>
                <Bullet>Community observations</Bullet>
              </ul>
            </div>
            <div className="mt-8 border-t border-ink/20 pt-4 text-xs uppercase tracking-wider text-forest font-bold">
              Qualitative &amp; Ground-level
            </div>
          </Card>

          <Card className="p-8 flex flex-col justify-between h-full">
            <div>
              <span className="slide-kicker text-forest">Category 02</span>
              <h3 className="slide-subtitle font-display mt-3" style={{ fontSize: 30 }}>
                Physical Evidence
              </h3>
              <ul className="mt-6 space-y-3">
                <Bullet>Photos and videos</Bullet>
                <Bullet>Measurements</Bullet>
                <Bullet>Samples</Bullet>
                <Bullet>Field observations</Bullet>
              </ul>
            </div>
            <div className="mt-8 border-t border-ink/20 pt-4 text-xs uppercase tracking-wider text-forest font-bold">
              Empirical &amp; Verifiable
            </div>
          </Card>

          <Card className="p-8 flex flex-col justify-between h-full">
            <div>
              <span className="slide-kicker text-forest">Category 03</span>
              <h3 className="slide-subtitle font-display mt-3" style={{ fontSize: 30 }}>
                Data &amp; Research
              </h3>
              <ul className="mt-6 space-y-3">
                <Bullet>Government records</Bullet>
                <Bullet>Existing datasets</Bullet>
                <Bullet>Scientific studies</Bullet>
                <Bullet>Maps and satellite data</Bullet>
              </ul>
            </div>
            <div className="mt-8 border-t border-ink/20 pt-4 text-xs uppercase tracking-wider text-forest font-bold">
              Institutional &amp; Macro
            </div>
          </Card>

          <Card className="p-8 flex flex-col justify-between h-full">
            <div>
              <span className="slide-kicker text-forest">Category 04</span>
              <h3 className="slide-subtitle font-display mt-3" style={{ fontSize: 30 }}>
                Documentation
              </h3>
              <ul className="mt-6 space-y-3">
                <Bullet>Field reports</Bullet>
                <Bullet>Incident records</Bullet>
                <Bullet>Monitoring records</Bullet>
                <Bullet>Chain of custody logs</Bullet>
              </ul>
            </div>
            <div className="mt-8 border-t border-ink/20 pt-4 text-xs uppercase tracking-wider text-forest font-bold">
              Longitudinal &amp; Legal
            </div>
          </Card>
        </div>

        <div className="mt-8">
          <Card tone="mint" className="px-8 py-4 text-center">
            <span className="slide-body font-bold text-forest-deep" style={{ fontSize: 26 }}>
              Different claims require different kinds of evidence. Match the proof to the objective.
            </span>
          </Card>
        </div>
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
        <Kicker>Methodology Shift</Kicker>
        <h2 className="slide-title mt-6">
          The Wrong Way vs. The Evidence-Backed Way
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-10 items-stretch">
          {/* Activity-first */}
          <Card tone="muted" className="p-10 flex flex-col justify-between">
            <div>
              <span className="slide-kicker text-red-800 font-bold">The Flawed Approach</span>
              <h3 className="slide-subtitle font-display mt-4 text-ink" style={{ fontSize: 36 }}>
                The Activity-First Approach
              </h3>
              <div className="mt-8 brut-flat border-[2px] bg-white p-6">
                <p className="slide-body font-bold text-red-900 tracking-wide" style={{ fontSize: 24 }}>
                  Problem → Activity → Pictures → Publicity → Move on
                </p>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-4">
                  <span className="mt-2 h-4 w-4 shrink-0 rounded-full bg-red-600" />
                  <span className="slide-body opacity-90">Focuses entirely on visible output rather than measurable outcome.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-2 h-4 w-4 shrink-0 rounded-full bg-red-600" />
                  <span className="slide-body opacity-90">Fades once cameras leave; underlying conditions remain untouched.</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 border-t border-ink/20 pt-4 text-sm font-bold uppercase text-red-800">
              Low Retention · Temporary Relief · Zero Policy Impact
            </div>
          </Card>

          {/* Evidence-backed */}
          <Card tone="forest" className="p-10 flex flex-col justify-between">
            <div>
              <span className="slide-kicker text-mint font-bold">The Sustainable Model</span>
              <h3 className="slide-subtitle font-display mt-4 text-paper" style={{ fontSize: 36 }}>
                The Evidence-Backed Approach
              </h3>
              <div className="mt-8 brut-flat border-[2px] border-paper bg-forest-deep p-6">
                <p className="slide-body font-bold text-mint tracking-wide" style={{ fontSize: 24 }}>
                  Problem → Investigate → Gather evidence → Act → Measure change → Follow up
                </p>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-4">
                  <span className="mt-2 h-4 w-4 shrink-0 border-[2px] border-paper bg-mint" />
                  <span className="slide-body opacity-95 text-paper">Diagnoses root causes with verifiable data points.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-2 h-4 w-4 shrink-0 border-[2px] border-paper bg-mint" />
                  <span className="slide-body opacity-95 text-paper">Leverages documentation to hold institutions and policymakers accountable.</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 border-t border-paper/20 pt-4 text-sm font-bold uppercase text-mint">
              Sustained Accountability · Systemic Change · Verifiable Impact
            </div>
          </Card>
        </div>

        <div className="mt-8">
          <Card tone="accent" className="p-6 text-center">
            <p className="slide-subtitle font-display text-forest-deep" style={{ fontSize: 32 }}>
              The question is not only: “What did we do?” It is also: “What changed because we did it?”
            </p>
          </Card>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 7: THE EVIDENCE-BACKED ADVOCACY FRAMEWORK
     ========================================================================== */
  {
    id: "framework",
    title: "The Evidence-Backed Advocacy Framework",
    notes:
      "Review the sequential framework from Concern all the way to Sustainability. Each pillar answers a fundamental operational question.",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="07: The Framework" tone="mint">
        <Kicker>Strategic Framework</Kicker>
        <h2 className="slide-title mt-4">
          The Evidence-Backed Advocacy Framework
        </h2>
        <div className="mt-4 inline-block brut-flat border-[2px] bg-paper px-6 py-2">
          <span className="slide-caption font-bold text-forest-deep tracking-wider">
            Concern → Investigate → Evidence → Advocacy → Accountability → Action → Sustainability
          </span>
        </div>

        <div className="mt-8 grid grid-cols-7 gap-4 items-stretch">
          {[
            {
              step: "01",
              phase: "CONCERN",
              question: "What is happening?",
              desc: "Initial awareness of environmental anomaly or harm.",
            },
            {
              step: "02",
              phase: "INVESTIGATE",
              question: "What do we know?",
              desc: "Deep-dive inquiry into ground facts and context.",
            },
            {
              step: "03",
              phase: "EVIDENCE",
              question: "What can we demonstrate?",
              desc: "Empirical proof: photos, data, surveys, samples.",
            },
            {
              step: "04",
              phase: "ADVOCACY",
              question: "Who needs to hear it?",
              desc: "Targeted communication to power holders & public.",
            },
            {
              step: "05",
              phase: "ACCOUNTABILITY",
              question: "What needs to change?",
              desc: "Identifying responsible parties and policy obligations.",
            },
            {
              step: "06",
              phase: "ACTION",
              question: "What can we do?",
              desc: "Direct interventions, cleanups, legal action, lobbying.",
            },
            {
              step: "07",
              phase: "SUSTAINABILITY",
              question: "How does it last?",
              desc: "Continuous monitoring, maintenance, and policy anchoring.",
            },
          ].map((col) => (
            <Card key={col.step} className="p-5 flex flex-col justify-between h-full">
              <div>
                <span className="slide-kicker text-forest font-bold">{col.step}</span>
                <h3 className="slide-subtitle font-display mt-2" style={{ fontSize: 22 }}>
                  {col.phase}
                </h3>
                <div className="mt-4 brut-flat border-[2px] bg-mint/40 p-3">
                  <p className="slide-caption font-extrabold text-forest-deep leading-tight" style={{ fontSize: 18 }}>
                    {col.question}
                  </p>
                </div>
              </div>
              <p className="slide-caption mt-4 opacity-80 leading-relaxed" style={{ fontSize: 16 }}>
                {col.desc}
              </p>
            </Card>
          ))}
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
        <div className="flex items-center gap-4">
          <Kicker>Case Study: WaveWise</Kicker>
          <span className="slide-kicker brut-flat border-[2px] bg-paper px-4 py-1 text-forest font-bold">
            Clime With Me × Clean Air 360
          </span>
        </div>
        <h2 className="slide-title mt-6">
          WaveWise Climate Resilience Project: The Problem → The Evidence
        </h2>

        <div className="mt-10 grid grid-cols-12 gap-8 items-stretch">
          {/* Left card: Context */}
          <Card className="col-span-5 p-10 flex flex-col justify-between">
            <div>
              <span className="slide-kicker text-forest">Ground Reality</span>
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
            <div className="mt-6 border-t border-ink/20 pt-4">
              <p className="slide-caption font-bold text-forest-deep">
                A vulnerable frontline school confronting extreme climate exposure.
              </p>
            </div>
          </Card>

          {/* Right card: The Discovery */}
          <div className="col-span-7 flex flex-col justify-between gap-6">
            <Card tone="forest" className="p-8">
              <span className="slide-kicker text-mint">Field Observation &amp; Engagement</span>
              <p className="slide-subtitle text-paper mt-3" style={{ fontSize: 36 }}>
                Field observation and community engagement helped reveal the scale of the problem:
              </p>
              <div className="mt-6 brut-flat border-[3px] border-paper bg-forest-deep p-6">
                <p className="slide-body-lg font-bold text-mint">
                  “The issue was far bigger than cleaning up waste.”
                </p>
              </div>
            </Card>

            <Card tone="accent" className="p-8">
              <span className="slide-kicker text-forest-deep">Integrated Approach</span>
              <p className="slide-body font-bold text-forest-deep mt-2" style={{ fontSize: 26 }}>
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
        <Kicker tone="forest">When Advocacy Goes Beyond the Activity</Kicker>
        <h2 className="slide-title mt-6">
          WaveWise: From Evidence to Change
        </h2>

        <div className="mt-8 grid grid-cols-12 gap-8 items-stretch">
          {/* Main Story Card */}
          <Card className="col-span-7 p-10 flex flex-col justify-between">
            <div className="space-y-6">
              <p className="slide-body leading-relaxed">
                The project used community engagement, documentation, cleanup activities, climate education, and sustained government engagement to address the conditions affecting the school.
              </p>
              <div className="brut-flat border-[3px] bg-mint-soft p-6">
                <p className="slide-body font-semibold text-forest-deep">
                  The cleanup helped address an immediate environmental problem, but the advocacy continued beyond it. The project pushed for the underlying environmental and infrastructural issues to be addressed...
                </p>
              </div>
              <p className="slide-body font-bold text-forest leading-relaxed">
                Demolition and reconstruction of the school are now underway, with climate resilience being considered in the rebuilding process.
              </p>
            </div>
            <div className="mt-8 border-t border-ink/20 pt-4">
              <span className="slide-caption font-extrabold uppercase text-forest tracking-wider">
                Concrete Infrastructure Reconstruction Achieved
              </span>
            </div>
          </Card>

          {/* Core Philosophy & Video Links */}
          <div className="col-span-5 flex flex-col justify-between gap-6">
            <Card tone="forest" className="p-8">
              <span className="slide-kicker text-mint">The Critical Distinction</span>
              <p className="slide-subtitle text-paper mt-3 leading-snug" style={{ fontSize: 32 }}>
                “The cleanup was an activity. The advocacy was the process that sought to change the conditions that made the cleanup necessary.”
              </p>
            </Card>

            <Card className="p-8">
              <div className="slide-kicker text-forest mb-4">Explore WaveWise Media</div>
              <div className="flex flex-col gap-3">
                <a
                  href="https://youtube.com/shorts/NB2ybNE5ZNU?si=CQiaVeIsidrp9kYp"
                  target="_blank"
                  rel="noreferrer"
                  className="deck-ui-btn px-4 py-3 text-left font-bold text-sm w-full flex items-center justify-between"
                >
                  <span>▶ Short WaveWise Video</span>
                  <span className="text-forest">↗</span>
                </a>
                <a
                  href="https://youtu.be/Xb348ZCMDSc"
                  target="_blank"
                  rel="noreferrer"
                  className="deck-ui-btn px-4 py-3 text-left font-bold text-sm w-full flex items-center justify-between"
                >
                  <span>▶ Full WaveWise Documentary</span>
                  <span className="text-forest">↗</span>
                </a>
                <a
                  href="https://www.instagram.com/wavewisecrp/"
                  target="_blank"
                  rel="noreferrer"
                  className="deck-ui-btn px-4 py-3 text-left font-bold text-sm w-full flex items-center justify-between"
                >
                  <span>📸 WaveWise on Instagram</span>
                  <span className="text-forest">↗</span>
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
        <Kicker>Evidence in Action</Kicker>
        <h2 className="slide-title mt-4">
          Other Evidence-Backed Advocacy Cases
        </h2>

        <div className="mt-8 grid grid-cols-3 gap-8">
          {/* Amnesty Card */}
          <Card className="p-8 flex flex-col justify-between h-full">
            <div>
              <span className="slide-kicker text-forest">Case 01 · Niger Delta</span>
              <h3 className="slide-subtitle font-display mt-2" style={{ fontSize: 30 }}>
                Amnesty International
              </h3>
              <p className="slide-caption mt-4 leading-relaxed opacity-90">
                Amnesty used community information, photographs, company reports, and crowdsourced satellite analysis. Its <em>Decode Oil Spills</em> project engaged thousands in analysing spill claims, challenging corporate narratives and driving compensation in the landmark Bodo case.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-ink/20">
              <a
                href="https://www.amnesty.org/en/latest/news/2018/03/Niger-Delta-Oil-Spills-Decoders/"
                target="_blank"
                rel="noreferrer"
                className="deck-ui-btn px-4 py-2 font-bold text-xs w-full flex items-center justify-between"
              >
                <span>Read Decode Oil Spills</span>
                <span>↗</span>
              </a>
            </div>
          </Card>

          {/* UNEP Card */}
          <Card className="p-8 flex flex-col justify-between h-full">
            <div>
              <span className="slide-kicker text-forest">Case 02 · Ogoniland</span>
              <h3 className="slide-subtitle font-display mt-2" style={{ fontSize: 30 }}>
                UNEP Environmental Assessment
              </h3>
              <p className="slide-caption mt-4 leading-relaxed opacity-90">
                Involved multi-year field investigations across 200+ locations, community engagement, and thousands of environmental samples. It scientifically established contamination scale, providing the irreplaceable baseline for cleanup and policy action.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-ink/20">
              <a
                href="https://www.unep.org/resources/report/environmental-assessment-ogoniland"
                target="_blank"
                rel="noreferrer"
                className="deck-ui-btn px-4 py-2 font-bold text-xs w-full flex items-center justify-between"
              >
                <span>Read UNEP Report</span>
                <span>↗</span>
              </a>
            </div>
          </Card>

          {/* Bayelsa Commission Card */}
          <Card className="p-8 flex flex-col justify-between h-full">
            <div>
              <span className="slide-kicker text-forest">Case 03 · State-Level</span>
              <h3 className="slide-subtitle font-display mt-2" style={{ fontSize: 30 }}>
                Bayelsa Oil Commission
              </h3>
              <p className="slide-caption mt-4 leading-relaxed opacity-90">
                Combined scientific environmental surveys, spill data, and testimonies from impacted communities. Framed pollution as both an ecological and acute human crisis, formulating legal and economic demands for remediation and accountability.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-ink/20">
              <a
                href="https://report.bayelsacommission.org/"
                target="_blank"
                rel="noreferrer"
                className="deck-ui-btn px-4 py-2 font-bold text-xs w-full flex items-center justify-between"
              >
                <span>Read Bayelsa Report</span>
                <span>↗</span>
              </a>
            </div>
          </Card>
        </div>

        <div className="mt-8">
          <Card tone="forest" className="p-5 text-center">
            <span className="slide-body font-bold text-mint" style={{ fontSize: 26 }}>
              The Lesson: Different methods. Same principle — empirical evidence strengthens environmental advocacy.
            </span>
          </Card>
        </div>
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
      <SlideLayout index={index} total={total} label="11: Evidence Methodology" tone="mint">
        <Kicker>Operational Methodology</Kicker>
        <h2 className="slide-title mt-4">
          How Do We Gather &amp; Document Evidence?
        </h2>
        <div className="mt-3 inline-block brut-flat border-[2px] bg-paper px-6 py-2">
          <span className="slide-caption font-bold text-forest-deep tracking-wider">
            Three Continuous Phases: Before · During · After
          </span>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-8 items-stretch">
          {/* BEFORE */}
          <Card className="p-8 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between border-b-[2px] border-ink pb-3">
                <h3 className="slide-subtitle font-display text-forest" style={{ fontSize: 32 }}>
                  BEFORE
                </h3>
                <span className="slide-badge brut-flat border-[2px] bg-mint px-3 py-1 font-bold text-xs">
                  Preparation
                </span>
              </div>
              <ul className="mt-6 space-y-4">
                <Bullet>Define the problem precisely</Bullet>
                <Bullet>Decide what you need to prove</Bullet>
                <Bullet>Identify who should be involved</Bullet>
                <Bullet>Establish a rigorous baseline</Bullet>
              </ul>
            </div>
            <div className="mt-6 text-xs uppercase tracking-wider text-forest font-bold">
              Research &amp; Scoping
            </div>
          </Card>

          {/* DURING */}
          <Card tone="card" className="p-8 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between border-b-[2px] border-ink pb-3">
                <h3 className="slide-subtitle font-display text-forest" style={{ fontSize: 32 }}>
                  DURING
                </h3>
                <span className="slide-badge brut-flat border-[2px] bg-forest px-3 py-1 font-bold text-xs text-paper">
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
            <div className="mt-6 text-xs uppercase tracking-wider text-forest font-bold">
              Observation &amp; Verification
            </div>
          </Card>

          {/* AFTER */}
          <Card className="p-8 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between border-b-[2px] border-ink pb-3">
                <h3 className="slide-subtitle font-display text-forest" style={{ fontSize: 32 }}>
                  AFTER
                </h3>
                <span className="slide-badge brut-flat border-[2px] bg-mint px-3 py-1 font-bold text-xs">
                  Synthesis
                </span>
              </div>
              <ul className="mt-6 space-y-4">
                <Bullet>Organise and digitise the information</Bullet>
                <Bullet>Analyse patterns &amp; evaluate findings</Bullet>
                <Bullet>Verify claims against independent sources</Bullet>
                <Bullet>Document findings into clear reports</Bullet>
                <Bullet>Securely archive and preserve your records</Bullet>
              </ul>
            </div>
            <div className="mt-6 text-xs uppercase tracking-wider text-forest font-bold">
              Analysis &amp; Archiving
            </div>
          </Card>
        </div>

        <div className="mt-8">
          <Card tone="forest" className="p-4 text-center">
            <p className="slide-body font-bold text-paper" style={{ fontSize: 24 }}>
              Evidence-gathering is what makes environmental advocacy move from successful to impactful and sustainable.
            </p>
          </Card>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 12: TOOLS, ETHICS & ACCOUNTABILITY
     ========================================================================== */
  {
    id: "tools-ethics",
    title: "Tools, Ethics & Accountability",
    notes:
      "Equip advocates with accessible digital tools, strict ethical guidelines (Do No Harm), and a structured accountability loop.",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="12: Practical Toolkit">
        <Kicker>Operational Toolkit</Kicker>
        <h2 className="slide-title mt-4">
          Tools, Ethics &amp; Accountability
        </h2>

        <div className="mt-8 grid grid-cols-3 gap-8 items-stretch">
          {/* Tools */}
          <Card className="p-8 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 border-b-[2px] border-ink pb-3">
                <span className="slide-title text-forest" style={{ fontSize: 32 }}>🛠️</span>
                <h3 className="slide-subtitle font-display" style={{ fontSize: 30 }}>
                  Tools
                </h3>
              </div>
              <ul className="mt-6 space-y-3">
                <Bullet>Google Maps / Google Earth</Bullet>
                <Bullet>KoboToolbox (offline surveys)</Bullet>
                <Bullet>Google Forms</Bullet>
                <Bullet>OpenStreetMap</Bullet>
                <Bullet>Government data portals</Bullet>
                <Bullet>Scientific research databases</Bullet>
              </ul>
            </div>
            <div className="mt-6 border-t border-ink/20 pt-3 text-xs uppercase font-bold text-forest">
              Accessible &amp; Open Source
            </div>
          </Card>

          {/* Ethics */}
          <Card tone="forest" className="p-8 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 border-b border-paper/20 pb-3">
                <span className="slide-title text-mint" style={{ fontSize: 32 }}>⚖️</span>
                <h3 className="slide-subtitle font-display text-paper" style={{ fontSize: 30 }}>
                  Ethics
                </h3>
              </div>
              <ul className="mt-6 space-y-3 text-paper">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-3 w-3 shrink-0 bg-mint" />
                  <span className="slide-body opacity-95">Ask for informed consent</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-3 w-3 shrink-0 bg-mint" />
                  <span className="slide-body opacity-95">Be rigorously accurate</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-3 w-3 shrink-0 bg-mint" />
                  <span className="slide-body opacity-95">Protect people's privacy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-3 w-3 shrink-0 bg-mint" />
                  <span className="slide-body opacity-95">Preserve context; don't exaggerate</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-3 w-3 shrink-0 bg-mint" />
                  <span className="slide-body opacity-95">Give proper attribution</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-3 w-3 shrink-0 bg-mint font-bold" />
                  <span className="slide-body text-mint font-bold">Do no harm</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 border-t border-paper/20 pt-3 text-xs uppercase font-bold text-mint">
              Integrity &amp; Protection
            </div>
          </Card>

          {/* Accountability */}
          <Card tone="accent" className="p-8 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 border-b-[2px] border-ink pb-3">
                <span className="slide-title text-forest-deep" style={{ fontSize: 32 }}>🎯</span>
                <h3 className="slide-subtitle font-display text-forest-deep" style={{ fontSize: 30 }}>
                  Accountability
                </h3>
              </div>
              <p className="slide-caption mt-6 font-semibold text-forest-deep">
                Advocacy requires tracking measurable metrics across timelines:
              </p>
              <div className="mt-6 space-y-3">
                {[
                  { k: "Baseline", v: "Where are we starting from?" },
                  { k: "Indicator", v: "What metric will show progress?" },
                  { k: "Target", v: "What specific result is expected?" },
                  { k: "Timeline", v: "By when must it happen?" },
                  { k: "Follow-up", v: "Who checks that it was done?" },
                ].map((item) => (
                  <div key={item.k} className="brut-flat border-[2px] bg-paper p-3">
                    <span className="font-bold text-forest-deep">{item.k}: </span>
                    <span className="text-sm opacity-90">{item.v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 border-t border-ink/20 pt-3 text-xs uppercase font-bold text-forest-deep">
              Measurable Commitments
            </div>
          </Card>
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
        <Kicker>Mindset Transformation</Kicker>
        <h2 className="slide-title mt-6">
          From Advocate to Change Agent: Two Different Approaches
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-10 items-stretch">
          <Card tone="muted" className="p-10 flex flex-col justify-between">
            <div>
              <span className="slide-kicker text-slate-700 font-bold">Standard Routine</span>
              <h3 className="slide-subtitle font-display mt-3" style={{ fontSize: 36 }}>
                Activity-Focused
              </h3>
              <div className="mt-8 brut-flat border-[2px] bg-paper p-6 text-center">
                <p className="slide-body font-bold text-ink" style={{ fontSize: 22 }}>
                  Problem → Activity → Photos → Publicity → End
                </p>
              </div>
              <p className="slide-body mt-8 opacity-80 leading-relaxed">
                Produces awareness and feel-good events, but leaves the underlying political and institutional drivers unaltered.
              </p>
            </div>
            <div className="mt-8 border-t border-ink/20 pt-4 text-xs font-bold uppercase tracking-wider text-slate-700">
              Temporary · Event-Bound
            </div>
          </Card>

          <Card tone="forest" className="p-10 flex flex-col justify-between">
            <div>
              <span className="slide-kicker text-mint font-bold">Strategic Power</span>
              <h3 className="slide-subtitle font-display mt-3 text-paper" style={{ fontSize: 36 }}>
                Evidence-Backed
              </h3>
              <div className="mt-8 brut-flat border-[2px] border-paper bg-forest-deep p-6 text-center">
                <p className="slide-body font-bold text-mint" style={{ fontSize: 22 }}>
                  Concern → Evidence → Advocacy → Accountability → Action → Sustainable Change
                </p>
              </div>
              <p className="slide-body mt-8 opacity-95 text-paper leading-relaxed">
                Connects community observations with verifiable evidence, directly influencing policy, budgets, and enforcement.
              </p>
            </div>
            <div className="mt-8 border-t border-paper/20 pt-4 text-xs font-bold uppercase tracking-wider text-mint">
              Transformative · Systemic
            </div>
          </Card>
        </div>

        {/* Hero Callout Quote */}
        <div className="mt-10">
          <Card tone="accent" className="p-8 text-center">
            <blockquote className="slide-subtitle font-display text-forest-deep leading-snug" style={{ fontSize: 36 }}>
              “The shift is simple: Don’t just document that a problem exists. Build the evidence that helps change it.”
            </blockquote>
          </Card>
        </div>
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
      "A concrete, actionable roadmap for participants to take into their own communities.",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="14: Call to Action" tone="mint">
        <Kicker>Action Roadmap</Kicker>
        <h2 className="slide-title mt-4">
          Where Do You Go From Here?
        </h2>

        <div className="mt-8 grid grid-cols-12 gap-8 items-stretch">
          {/* Action Steps */}
          <Card className="col-span-7 p-10 flex flex-col justify-between">
            <div>
              <span className="slide-kicker text-forest">Your Immediate Playbook</span>
              <h3 className="slide-subtitle font-display mt-2" style={{ fontSize: 32 }}>
                Start with a problem around you.
              </h3>
              <ol className="mt-6 space-y-3 font-semibold list-decimal pl-6 text-xl">
                <li><strong>Find it:</strong> Identify an acute environmental challenge in your neighborhood.</li>
                <li><strong>Ask questions:</strong> Dig into why it is happening and who is responsible.</li>
                <li><strong>Gather evidence:</strong> Collect photos, testimonies, coordinates, and samples.</li>
                <li><strong>Document what you find:</strong> Package your data into an objective, factual brief.</li>
                <li><strong>Find the right people to engage:</strong> Map leaders, regulators, and civic groups.</li>
                <li><strong>Take action:</strong> Build coalitions and deploy targeted advocacy.</li>
                <li><strong>Follow up:</strong> Measure the outcome and demand sustained accountability.</li>
              </ol>
            </div>
          </Card>

          {/* Recommended Communities */}
          <div className="col-span-5 flex flex-col justify-between gap-6">
            <Card tone="forest" className="p-8">
              <span className="slide-kicker text-mint">Get Connected</span>
              <h3 className="slide-subtitle text-paper mt-3" style={{ fontSize: 30 }}>
                Communities to Learn From &amp; Volunteer With
              </h3>
              <p className="slide-caption text-paper opacity-90 mt-4 leading-relaxed">
                Connect with active organizations leveraging data and community action:
              </p>
              <div className="mt-6 space-y-3">
                {[
                  { name: "Clime With Me", role: "Climate advocacy & youth grassroots resilience" },
                  { name: "Clean Air 360", role: "Air quality monitoring & environmental education" },
                  { name: "WaveWise Climate Resilience", role: "Flood adaptation & community school restoration" },
                  { name: "Dattego Ecosystem", role: "Circular economy platform & resource tracking" },
                ].map((org) => (
                  <div key={org.name} className="brut-flat border-[2px] border-paper bg-forest-deep p-3">
                    <div className="font-bold text-mint text-base">{org.name}</div>
                    <div className="text-xs text-paper opacity-80">{org.role}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 15: QUESTIONS & FEEDBACK
     ========================================================================== */
  {
    id: "questions",
    title: "Questions & Feedback",
    notes:
      "Interactive session: encourage participants to share reflections and identify local problems they want to investigate.",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="15: Discussion & Reflection">
        <Kicker>Discussion &amp; Reflection</Kicker>
        <h2 className="slide-title mt-6">
          Questions &amp; Feedback
        </h2>

        <div className="mt-12 grid grid-cols-3 gap-8 items-stretch">
          <Card className="p-10 flex flex-col justify-between h-full">
            <div>
              <span className="slide-title text-forest" style={{ fontSize: 44 }}>💡</span>
              <h3 className="slide-subtitle font-display mt-4" style={{ fontSize: 32 }}>
                Key Takeaway
              </h3>
              <p className="slide-body mt-6 font-semibold opacity-85 leading-relaxed">
                What stood out to you the most in today’s session?
              </p>
            </div>
            <div className="mt-8 border-t border-ink/20 pt-4 text-xs font-bold uppercase text-forest">
              Conceptual Clarity
            </div>
          </Card>

          <Card tone="forest" className="p-10 flex flex-col justify-between h-full">
            <div>
              <span className="slide-title text-mint" style={{ fontSize: 44 }}>🔍</span>
              <h3 className="slide-subtitle font-display mt-4 text-paper" style={{ fontSize: 32 }}>
                Local Investigation
              </h3>
              <p className="slide-body mt-6 font-semibold opacity-95 text-paper leading-relaxed">
                What specific environmental problem in your community would you like to investigate?
              </p>
            </div>
            <div className="mt-8 border-t border-paper/20 pt-4 text-xs font-bold uppercase text-mint">
              Targeted Action
            </div>
          </Card>

          <Card className="p-10 flex flex-col justify-between h-full">
            <div>
              <span className="slide-title text-forest" style={{ fontSize: 44 }}>🚀</span>
              <h3 className="slide-subtitle font-display mt-4" style={{ fontSize: 32 }}>
                Commitment
              </h3>
              <p className="slide-body mt-6 font-semibold opacity-85 leading-relaxed">
                What is one practical thing you will do differently in your next environmental project?
              </p>
            </div>
            <div className="mt-8 border-t border-ink/20 pt-4 text-xs font-bold uppercase text-forest">
              Sustainable Habit
            </div>
          </Card>
        </div>

        <div className="mt-12">
          <Card tone="accent" className="p-6 text-center">
            <span className="slide-subtitle font-display text-forest-deep" style={{ fontSize: 32 }}>
              Questions &nbsp;·&nbsp; Reflections &nbsp;·&nbsp; Feedback
            </span>
          </Card>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 16: THANK YOU (CONCLUSION)
     ========================================================================== */
  {
    id: "thank-you",
    title: "Thank You",
    notes:
      "Closing summary slide. Reiterate that evidence turns concern into change. Invite connection via Linktree.",
    render: ({ index, total }) => (
      <div className="slide-content bg-forest-deep text-paper">
        <div className="absolute inset-0 grid-paper opacity-25" />
        <div className="relative flex h-full flex-col justify-between px-[110px] py-[90px]">
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="slide-kicker brut-flat border-[3px] border-paper bg-mint px-6 py-3 uppercase tracking-widest text-ink font-bold">
              Final Thoughts
            </span>
            <span className="slide-page brut-flat border-[3px] border-paper bg-mint px-5 py-2 text-ink font-bold">
              16 / 16
            </span>
          </div>

          {/* Center Message */}
          <div className="my-auto max-w-[1400px]">
            <h1 className="slide-title-lg text-paper" style={{ fontSize: 110 }}>
              Thank You.
            </h1>
            <div className="mt-8 inline-block brut-flat border-[3px] border-paper bg-forest px-10 py-6">
              <p className="slide-subtitle text-paper font-display" style={{ fontSize: 44 }}>
                “Environmental advocacy starts with concern. Evidence helps us turn that concern into change.”
              </p>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <span className="slide-subtitle font-display text-mint" style={{ fontSize: 38 }}>
                Sheriffdeen O. Saula
              </span>
              <span className="slide-caption text-paper/70 font-semibold tracking-wider uppercase">
                Climate Advocate &amp; Software Engineer
              </span>
            </div>
          </div>

          {/* Footer with Linktree and QR Code */}
          <div className="flex items-end justify-between border-t border-paper/20 pt-8">
            <div>
              <div className="slide-kicker text-mint">Let's Connect</div>
              <a
                href="https://linktr.ee/SheriffdeenSaula"
                target="_blank"
                rel="noopener noreferrer"
                className="slide-subtitle mt-2 block text-paper hover:text-mint transition-colors"
                style={{ fontSize: 32 }}
              >
                linktr.ee/SheriffdeenSaula ↗
              </a>
            </div>

            {/* QR Code Card */}
            <div className="flex items-center gap-6">
              <a
                href="https://linktr.ee/SheriffdeenSaula"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center gap-2 rounded-lg border-[3px] border-paper bg-paper p-3 text-ink shadow-[4px_4px_0px_0px_#82c987] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#82c987] transition-all"
              >
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=https://linktr.ee/SheriffdeenSaula&color=0d2b1d"
                  alt="Sheriffdeen Saula Linktree QR Code"
                  className="h-[120px] w-[120px]"
                />
                <span className="font-display text-[12px] font-bold uppercase tracking-wider text-ink opacity-90 group-hover:text-forest">
                  Scan to connect
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

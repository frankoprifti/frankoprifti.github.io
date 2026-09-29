import { FiCheck, FiChevronsRight, FiUploadCloud } from "react-icons/fi";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { Notification, Phone, Scene } from "./scenes/Phone";

const MINI = { width: 240, ratio: "9 / 16" };

function ChatScene() {
  return (
    <Scene label="Product and design messages arriving in a team chat, followed by a reply">
      <Phone {...MINI}>
        <div className="border-b border-line px-4 pb-3 text-[12px] font-semibold">#repayments</div>
        <div className="flex flex-1 flex-col gap-2.5 p-3 text-[12px] leading-snug">
          <div className="sc-msg1 max-w-[85%] rounded-2xl rounded-bl-md bg-bg px-3 py-2">
            <span className="block text-[10px] font-semibold text-muted">Product</span>
            Users drop off at the repayment step.
          </div>
          <div className="sc-msg2 max-w-[85%] rounded-2xl rounded-bl-md bg-bg px-3 py-2">
            <span className="block text-[10px] font-semibold text-muted">Design</span>
            New flow is ready for review.
            <span className="mt-2 block h-12 rounded-lg bg-line" />
          </div>
          <div className="sc-typing sc-dots ml-auto flex gap-1 rounded-2xl bg-line px-3 py-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-muted" />
            <span className="h-1.5 w-1.5 rounded-full bg-muted" />
            <span className="h-1.5 w-1.5 rounded-full bg-muted" />
          </div>
          <div className="sc-msg3 ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-accent px-3 py-2 text-on-accent">
            On it. Mapping the edge cases today.
          </div>
        </div>
      </Phone>
    </Scene>
  );
}

const tests = ["renders summary", "validates amount", "retries offline", "submits payment"];

function TestsScene() {
  return (
    <Scene label="A test run where four tests pass one after another">
      <Phone {...MINI}>
        <div className="flex items-center justify-between px-4 pb-3">
          <span className="text-[12px] font-semibold">Tests</span>
          <span className="sc-run relative overflow-hidden rounded-full bg-fg px-3 py-1 text-[11px] font-medium text-bg">
            Run
            <span className="sc-run-ripple absolute left-1/2 top-1/2 -ml-6 -mt-6 h-12 w-12 rounded-full bg-bg/50" />
          </span>
        </div>
        <ul className="mx-3 divide-y divide-line rounded-2xl border border-line text-[12px]">
          {tests.map((t, i) => (
            <li key={t} className="flex items-center gap-2.5 px-3 py-3">
              <span className="relative h-5 w-5 shrink-0">
                <span
                  className={`sc-pend${i + 1} absolute inset-0 rounded-full border-2 border-line`}
                >
                  <span className="sc-spin absolute -inset-0.5 rounded-full border-2 border-transparent border-t-muted" />
                </span>
                <span
                  className={`sc-pass${i + 1} absolute inset-0 flex items-center justify-center rounded-full bg-emerald-500 text-white`}
                >
                  <FiCheck size={12} strokeWidth={3} />
                </span>
              </span>
              <span className="font-mono text-[11px]">{t}</span>
            </li>
          ))}
        </ul>
        <div className="sc-summary mx-auto mt-5 inline-flex items-center gap-1.5 self-center rounded-full bg-emerald-500/15 px-3 py-1.5 text-[12px] font-semibold text-emerald-600 dark:text-emerald-400">
          <FiCheck size={13} strokeWidth={3} /> 4 passed
        </div>
      </Phone>
    </Scene>
  );
}

function ShipScene() {
  return (
    <Scene label="Swiping to release an update, then a notification that it is live">
      <Phone {...MINI}>
        <Notification
          className="sc-store-notif"
          icon={<FiUploadCloud size={15} />}
          title="Now live"
          body="Available on iOS and Android"
        />
        <div className="px-4">
          <div className="label text-[10px]">Release</div>
          <div className="text-lg font-semibold tracking-[-0.02em]">v4.8.0</div>
          <ul className="mt-3 space-y-2 text-[12px] text-muted">
            <li className="flex gap-2"><span className="text-accent">+</span> New repayment flow</li>
            <li className="flex gap-2"><span className="text-accent">+</span> Offline retry</li>
            <li className="flex gap-2"><span className="text-accent">~</span> Faster app start</li>
          </ul>
        </div>
        <div className="mt-auto px-4 pb-5">
          <div className="relative h-7 text-center text-[13px] font-semibold">
            <span className="sc-released absolute inset-0 inline-flex items-center justify-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <FiCheck strokeWidth={3} /> Released
            </span>
          </div>
          <div
            className="relative mt-2 h-[52px] rounded-full bg-bg p-1"
            style={{ ["--travel" as string]: "140px" }}
          >
            <div className="sc-fill absolute inset-1 origin-left rounded-full bg-accent/20" />
            <span className="sc-swipe-hint absolute inset-0 flex items-center justify-center pl-8 text-[12px] text-muted">
              Swipe to release
            </span>
            <div className="sc-knob relative flex h-11 w-11 items-center justify-center rounded-full bg-accent text-on-accent">
              <FiChevronsRight size={18} />
            </div>
          </div>
        </div>
      </Phone>
    </Scene>
  );
}

const steps = [
  {
    title: "Understand the problem",
    body: "Before any code, I sit with product and design to agree who it's for, what success looks like, and where the edge cases hide.",
    Scene: ChatScene,
  },
  {
    title: "Build it properly",
    body: "Typed, tested React Native and React. Small PRs, clean architecture, and Jest, Playwright and Maestro tests that catch regressions before users do.",
    Scene: TestsScene,
  },
  {
    title: "Ship and keep it healthy",
    body: "Release to both stores, then watch the numbers. Monitoring, quick fixes, and iterating on what the data says.",
    Scene: ShipScene,
  },
];

export function Process() {
  return (
    <Section
      id="process"
      index="03"
      label="Process"
      title={
        <>
          How I work.{" "}
          <span className="text-muted">The same three steps, whatever the size of the project.</span>
        </>
      }
    >
      <ol className="grid gap-12 lg:grid-cols-3 lg:gap-6">
        {steps.map(({ title, body, Scene: StepScene }, i) => (
          <Reveal as="li" key={title} delay={i * 100}>
            <div className="flex justify-center rounded-3xl border border-line bg-surface/60 px-4 py-8">
              <StepScene />
            </div>
            <div className="mt-6 flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line font-mono text-sm">
                {i + 1}
              </span>
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.02em]">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

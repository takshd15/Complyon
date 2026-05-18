import React from "react";
import {
  ArrowRight,
  CirclePlus,
  Clock3,
  FolderClosed,
  Home,
  ImagePlus,
  Mail,
  RefreshCw,
  Search,
  Settings,
  Sparkles,
  UserRound,
} from "lucide-react";

type NavItemProps = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
};

type PromptCardProps = {
  text: string;
  icon: React.ComponentType<{ className?: string }>;
};

const navItems: NavItemProps[] = [
  { icon: CirclePlus, label: "Create" },
  { icon: Search, label: "Search" },
  { icon: Home, label: "Home" },
  { icon: FolderClosed, label: "Folders" },
  { icon: Clock3, label: "History" },
];

const promptCards: PromptCardProps[] = [
  {
    text: "Write a to-do list for a personal project or task",
    icon: UserRound,
  },
  {
    text: "Generate an email reply to a job offer",
    icon: Mail,
  },
  {
    text: "Summarise this article or text for me in one paragraph",
    icon: Sparkles,
  },
  {
    text: "How does AI work in a technical capacity",
    icon: Settings,
  },
];

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

function SidebarNavItem({ icon: Icon, label }: NavItemProps) {
  return (
    <button
      aria-label={label}
      title={label}
      className="group flex h-10 w-10 items-center justify-center rounded-xl text-zinc-400 transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-700"
    >
      <Icon className="h-[18px] w-[18px]" />
    </button>
  );
}

function PromptCard({ text, icon: Icon }: PromptCardProps) {
  return (
    <button className="group relative flex h-[112px] flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white p-4 text-left shadow-[0_1px_2px_rgba(10,10,10,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(20,20,20,0.08)]">
      <p className="pr-1 text-[13px] font-medium leading-5 text-zinc-700">{text}</p>
      <Icon className="h-4 w-4 text-zinc-400 transition-colors duration-200 group-hover:text-zinc-600" />
    </button>
  );
}

export default function AIDashboardLandingPage() {
  return (
    <div className="min-h-screen w-full bg-[#f5f5f5] p-3 sm:p-5 lg:p-7">
      <div className="mx-auto flex h-[calc(100vh-1.5rem)] max-h-[880px] w-full max-w-[1200px] overflow-hidden rounded-[32px] border border-zinc-200/60 bg-white shadow-[0_28px_70px_rgba(18,18,18,0.08)] sm:h-[calc(100vh-2.5rem)] lg:h-[calc(100vh-3.5rem)]">
        <aside className="flex w-[72px] shrink-0 flex-col items-center justify-between border-r border-zinc-200/80 bg-white px-3 pb-3 pt-4">
          <div className="flex w-full flex-col items-center gap-5">
            <button
              aria-label="Logo"
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white shadow-sm transition-transform duration-200 hover:scale-[1.03]"
            >
              <div className="grid grid-cols-2 gap-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>
            </button>

            <nav className="flex flex-col items-center gap-1.5">
              {navItems.map((item) => (
                <SidebarNavItem key={item.label} icon={item.icon} label={item.label} />
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-center gap-3">
            <button
              aria-label="Settings"
              className="flex h-10 w-10 items-center justify-center rounded-xl text-zinc-400 transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-700"
            >
              <Settings className="h-[18px] w-[18px]" />
            </button>
            <button
              aria-label="Profile"
              className="h-8 w-8 overflow-hidden rounded-full ring-1 ring-zinc-300 transition-transform duration-200 hover:scale-105"
            >
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-300 via-amber-300 to-rose-300 text-[11px] font-semibold text-zinc-700">
                J
              </div>
            </button>
          </div>
        </aside>

        <main className="flex flex-1 items-center justify-center overflow-y-auto px-4 py-8 sm:px-8 md:px-12 md:py-10 lg:px-16">
          <section className="w-full max-w-[860px]">
            <header>
              <h1 className="text-3xl font-semibold tracking-[-0.02em] text-zinc-900 sm:text-4xl sm:leading-[1.05]">
                Hi there, <GradientText>John</GradientText>
              </h1>
              <h2 className="text-3xl font-semibold tracking-[-0.02em] text-zinc-900 sm:text-4xl sm:leading-[1.05]">
                What <GradientText>would I like to know?</GradientText>
              </h2>
              <p className="mt-3 max-w-md text-sm leading-5 text-zinc-400">
                Use one of the most common prompts below or use your own to begin
              </p>
            </header>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {promptCards.map((card) => (
                <PromptCard key={card.text} text={card.text} icon={card.icon} />
              ))}
            </div>

            <button className="mt-3 inline-flex items-center gap-2 rounded-lg px-1 py-1 text-sm text-zinc-400 transition-colors duration-200 hover:text-zinc-600">
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Refresh Prompts</span>
            </button>

            <div className="mt-6 rounded-2xl border border-zinc-200/80 bg-white p-4 shadow-[0_8px_26px_rgba(24,24,24,0.05)]">
              <div className="mb-8">
                <textarea
                  rows={3}
                  placeholder="Ask whatever you want....."
                  className="w-full resize-none bg-transparent text-[15px] leading-6 text-zinc-700 placeholder:text-zinc-400 focus:outline-none"
                />
              </div>

              <div className="flex flex-wrap items-end justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm text-zinc-500 transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-700">
                    <CirclePlus className="h-4 w-4" />
                    <span>Add Attachment</span>
                  </button>
                  <button className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm text-zinc-500 transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-700">
                    <ImagePlus className="h-4 w-4" />
                    <span>Use Image</span>
                  </button>
                </div>

                <div className="ml-auto flex items-center gap-2 sm:gap-3">
                  <button className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-600 transition-colors duration-200 hover:bg-zinc-100">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
                    All Web
                  </button>
                  <span className="text-xs text-zinc-400">0/1000</span>
                  <button
                    aria-label="Submit"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-white shadow-[0_6px_16px_rgba(124,58,237,0.35)] transition-all duration-200 hover:translate-x-0.5 hover:bg-violet-500"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

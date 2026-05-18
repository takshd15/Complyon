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

type ToolbarButtonProps = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
};

const navItems: NavItemProps[] = [
  { icon: CirclePlus, label: "Create" },
  { icon: Search, label: "Search" },
  { icon: Home, label: "Home" },
  { icon: FolderClosed, label: "Folders" },
  { icon: Clock3, label: "History" },
];

const promptCards: PromptCardProps[] = [
  { text: "Write a to-do list for a personal project or task", icon: UserRound },
  { text: "Generate an email reply to a job offer", icon: Mail },
  { text: "Summarise this article or text for me in one paragraph", icon: Sparkles },
  { text: "How does AI work in a technical capacity", icon: Settings },
];

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(139,92,246,0.16)]">
      {children}
    </span>
  );
}

function SidebarNavItem({ icon: Icon, label }: NavItemProps) {
  return (
    <button
      aria-label={label}
      title={label}
      className="group flex h-10 w-10 items-center justify-center rounded-xl text-zinc-400 transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-100 hover:text-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
    >
      <Icon className="h-[18px] w-[18px] transition-transform duration-200 group-hover:scale-[1.04]" />
    </button>
  );
}

function PromptCard({ text, icon: Icon }: PromptCardProps) {
  return (
    <button className="group relative flex min-h-[88px] flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white p-3.5 text-left shadow-[0_1px_2px_rgba(16,16,16,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300/90 hover:shadow-[0_12px_24px_rgba(25,25,25,0.07)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60">
      <p className="pr-1 text-[13px] font-medium leading-[1.35] text-zinc-700">{text}</p>
      <Icon className="h-[15px] w-[15px] text-zinc-400 transition-colors duration-200 group-hover:text-zinc-600" />
    </button>
  );
}

function ToolbarButton({ icon: Icon, label }: ToolbarButtonProps) {
  return (
    <button className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm text-zinc-500 transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60">
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </button>
  );
}

export default function App() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-[#f5f5f5]">
      <div className="flex h-full w-full overflow-hidden border border-zinc-200/70 bg-white shadow-[0_28px_70px_rgba(18,18,18,0.08)]">
        <aside className="flex w-16 shrink-0 flex-col items-center justify-between border-r border-zinc-200/80 bg-zinc-50/35 px-2.5 pb-3 pt-4 sm:w-[72px] sm:px-3">
          <div className="flex w-full flex-col items-center gap-5">
            <button
              aria-label="Logo"
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white shadow-[0_8px_20px_rgba(20,20,20,0.35)] transition-transform duration-200 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
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
              className="flex h-10 w-10 items-center justify-center rounded-xl text-zinc-400 transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
            >
              <Settings className="h-[18px] w-[18px]" />
            </button>
            <button
              aria-label="Profile"
              className="h-8 w-8 overflow-hidden rounded-full ring-1 ring-zinc-300 transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
            >
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-300 via-amber-300 to-rose-300 text-[11px] font-semibold text-zinc-700">
                J
              </div>
            </button>
          </div>
        </aside>

        <main className="flex flex-1 overflow-hidden px-4 py-3 sm:px-8 sm:py-4 md:px-10 lg:px-14">
          <section className="mx-auto flex h-full w-full max-w-[860px] flex-col pb-1">
            <div className="shrink-0">
              <header>
                <h1 className="text-[30px] font-semibold tracking-[-0.03em] text-zinc-900 sm:text-[40px] sm:leading-[0.98]">
                  Hi there, <GradientText>John</GradientText>
                </h1>
                <h2 className="text-[30px] font-semibold tracking-[-0.03em] text-zinc-900 sm:text-[40px] sm:leading-[0.98]">
                  What <GradientText>would I like to know?</GradientText>
                </h2>
                <p className="mt-1.5 max-w-[380px] text-sm leading-5 text-zinc-400">
                  Use one of the most common prompts below or use your own to begin
                </p>
              </header>

              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 xl:grid-cols-4">
                {promptCards.map((card) => (
                  <PromptCard key={card.text} text={card.text} icon={card.icon} />
                ))}
              </div>

              <button className="mt-2 inline-flex items-center gap-2 rounded-lg px-1 py-1 text-sm text-zinc-400 transition-colors duration-200 hover:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60">
                <RefreshCw className="h-3.5 w-3.5" />
                <span>Refresh Prompts</span>
              </button>
            </div>

            <div className="mt-auto rounded-2xl border border-zinc-200/80 bg-white p-3.5 shadow-[0_12px_30px_rgba(24,24,24,0.06)] sm:p-4">
              <div className="mb-3.5">
                <textarea
                  rows={2}
                  placeholder="Ask whatever you want....."
                  className="w-full resize-none bg-transparent text-[15px] leading-6 text-zinc-700 placeholder:text-zinc-400 focus:outline-none"
                />
              </div>

              <div className="flex flex-wrap items-end justify-between gap-x-3 gap-y-2">
                <div className="flex flex-wrap items-center gap-1">
                  <ToolbarButton icon={CirclePlus} label="Add Attachment" />
                  <ToolbarButton icon={ImagePlus} label="Use Image" />
                </div>

                <div className="ml-auto flex items-center gap-2 sm:gap-2.5">
                  <button className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-600 transition-colors duration-200 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
                    All Web
                  </button>
                  <span className="text-xs text-zinc-400">0/1000</span>
                  <button
                    aria-label="Submit"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-white shadow-[0_7px_18px_rgba(124,58,237,0.35)] transition-all duration-200 hover:translate-x-0.5 hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
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

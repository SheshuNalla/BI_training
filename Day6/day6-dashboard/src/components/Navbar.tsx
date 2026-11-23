
interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onToggleSidebar: () => void;
}

function Navbar({
  isDark,
  onToggleTheme,
  onToggleSidebar,
}: NavbarProps) {
  return (
    <header className="flex items-center justify-between border-b border-border bg-surface px-4 py-3 sm:px-6">
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="rounded-lg border border-border px-3 py-2 text-text hover:bg-background"
          aria-label="Toggle sidebar"
        >
          ☰
        </button>

        <h2 className="text-lg font-bold text-text">
          My Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onToggleTheme}
          className="rounded-lg border border-border px-3 py-2 text-sm text-text hover:bg-background"
        >
          {isDark ? "☀️ Light" : "🌙 Dark"}
        </button>

        <span className="rounded-full bg-background px-3 py-2 text-xs text-muted">
          Admin
        </span>
      </div>
    </header>
  );
}

export default Navbar;

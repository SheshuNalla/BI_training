
function Sidebar() {
  return (
    <aside className="w-full shrink-0 border-b border-border bg-surface p-4 md:w-60 md:border-b-0 md:border-r">
      <nav className="space-y-2">
        <p className="cursor-pointer rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white">
          Dashboard
        </p>

        <p className="cursor-pointer rounded-lg px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-background hover:text-text">
          Users
        </p>

        <p className="cursor-pointer rounded-lg px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-background hover:text-text">
          Settings
        </p>
      </nav>
    </aside>
  );
}

export default Sidebar;

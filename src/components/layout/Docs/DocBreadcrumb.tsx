import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export function DocBreadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="flex items-center gap-2 mb-8 py-4 border-b border-outline-900/10">
      <Link to="/" className="text-typography-400/50 hover:text-brand-500 transition-colors">
        <Home className="w-4 h-4" />
      </Link>
      <ChevronRight className="w-3 h-3 text-outline-900" />
      <div className="flex items-center gap-2">
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          return (
            <div key={to} className="flex items-center gap-2">
              {last ? (
                <span className="text-xs font-black text-brand-500 uppercase tracking-widest">
                  {decodeURI(value)}
                </span>
              ) : (
                <Link
                  to={to}
                  className="text-xs font-bold text-typography-400 hover:text-typography-950 transition-colors uppercase tracking-widest"
                >
                  {decodeURI(value)}
                </Link>
              )}
              {!last && <ChevronRight className="w-3 h-3 text-outline-900" />}
            </div>
          );
        })}
      </div>
    </nav>
  );
}

import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const Navbar = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-bg sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/dashboard" className="flex items-center gap-2">
          <span className="font-display font-bold text-xl tracking-tight text-ink">
            SmartHire
          </span>
          <span className="font-mono text-xs text-white bg-accent rounded-full px-2 py-0.5">
            AI
          </span>
        </Link>

        {user && (
          <nav className="flex items-center gap-2 font-body text-sm">
            <Link
              to="/dashboard"
              className="text-ink-soft hover:text-ink px-3 py-2 rounded-full hover:bg-surface transition-colors"
            >
              Dashboard
            </Link>
            <Link
              to="/upload"
              className="text-ink-soft hover:text-ink px-3 py-2 rounded-full hover:bg-surface transition-colors"
            >
              Upload
            </Link>
            <Link
              to="/history"
              className="text-ink-soft hover:text-ink px-3 py-2 rounded-full hover:bg-surface transition-colors"
            >
              History
            </Link>
            <button
              onClick={handleLogout}
              className="ml-2 bg-ink text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Log out
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
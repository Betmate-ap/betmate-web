import { useNavigate } from "react-router-dom";
import { Zap } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const MOCK_USER = {
  userId: "dev-user-001",
  username: "devmaster",
  firstName: "Dev",
  lastName: "User",
  points: 240,
};

export function DevLoginBanner() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="mt-4 flex items-center gap-3 rounded-lg border border-warning/30 bg-warning/5 px-3.5 py-3">
      <Zap className="h-3.5 w-3.5 text-warning shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-warning leading-none">Dev mode</p>
        <p className="text-[11px] text-muted-foreground mt-0.5">Bypass auth with a mock user</p>
      </div>
      <button
        onClick={() => {
          setAuth(MOCK_USER, "dev-token");
          navigate("/home");
        }}
        className="text-xs font-bold text-warning hover:underline shrink-0 cursor-pointer"
      >
        Skip →
      </button>
    </div>
  );
}

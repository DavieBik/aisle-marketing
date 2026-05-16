"use client";

import { useEffect, useState } from "react";
import { APP_URL } from "@/lib/constants";

type SessionState = "loading" | "authenticated" | "guest";

export function useSessionStatus(): SessionState {
  const [state, setState] = useState<SessionState>("loading");

  useEffect(() => {
    let cancelled = false;

    async function check() {
      try {
        const res = await fetch(`${APP_URL}/api/session-status`, {
          credentials: "include",
        });
        if (!cancelled) {
          setState(res.ok ? "authenticated" : "guest");
        }
      } catch {
        if (!cancelled) setState("guest");
      }
    }

    check();
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}

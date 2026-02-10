import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

const FLASH_KEY = "flash_warning";

export default function FlashBanner() {
  const location = useLocation();

  // Route değişince yeniden hesaplanır (remount ile birlikte)
  const initialMessage = useMemo(() => {
    const val = sessionStorage.getItem(FLASH_KEY) || "";
    if (val) sessionStorage.removeItem(FLASH_KEY); // tek seferlik
    return val;
  }, [location.key]);

  const [message, setMessage] = useState(initialMessage);

  if (!message) return null;

  return (
    <div className="flex w-full justify-center px-4 pt-4">
      <div className="flex w-full max-w-5xl items-start justify-between gap-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-900">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold">Warning</p>
          <p className="text-sm">{message}</p>
        </div>

        <button
          type="button"
          onClick={() => setMessage("")}
          className="flex items-center rounded-xl px-3 py-1.5 text-sm font-semibold hover:bg-amber-100"
        >
          Close
        </button>
      </div>
    </div>
  );
}

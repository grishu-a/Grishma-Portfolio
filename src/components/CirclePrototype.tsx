"use client";

import { useState } from "react";

type Screen = "home" | "send" | "request" | "split" | "done";

const MOBILE_RE = /^9\d{9}$/;
const npr = (n: number) =>
  `NPR ${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const friends = ["Deepak", "Sandesh", "Ratna"];

function Field({
  label,
  value,
  onChange,
  error,
  inputMode,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  inputMode?: "numeric" | "decimal" | "text";
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-[11px] font-medium text-slate-500">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        inputMode={inputMode}
        placeholder={placeholder}
        className={`mt-1 w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-red-500/40 ${
          error ? "border-red-500" : "border-slate-300"
        }`}
      />
      {error && <span className="mt-1 block text-[11px] text-red-600">{error}</span>}
    </label>
  );
}

function PrimaryButton({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="mt-auto w-full rounded-lg bg-red-700 py-2.5 text-sm font-semibold text-white transition-opacity disabled:opacity-40"
    >
      {children}
    </button>
  );
}

export default function CirclePrototype() {
  const [screen, setScreen] = useState<Screen>("home");
  const [mobile, setMobile] = useState("");
  const [amount, setAmount] = useState("");
  const [touched, setTouched] = useState(false);
  const [total, setTotal] = useState("2484");
  const [included, setIncluded] = useState<string[]>(friends);
  const [message, setMessage] = useState("");

  const amountNum = Number(amount);
  const mobileError =
    touched && mobile && !MOBILE_RE.test(mobile) ? "Enter a 10-digit mobile number starting with 9" : "";
  const formValid = MOBILE_RE.test(mobile) && amountNum > 0;
  const splitCount = included.length + 1;
  const share = Number(total) > 0 ? Number(total) / splitCount : 0;

  const go = (next: Screen) => {
    setTouched(false);
    setScreen(next);
  };
  const reset = () => {
    setMobile("");
    setAmount("");
    setTotal("2484");
    setIncluded(friends);
    go("home");
  };
  const finish = (text: string) => {
    setMessage(text);
    go("done");
  };

  const title = { home: "Fonepay Circle", send: "Send money", request: "Request to pay", split: "Split new bill", done: "Done" }[screen];

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative h-[560px] w-[290px] rounded-[2.5rem] border-[10px] border-slate-900 bg-slate-100 shadow-2xl">
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-slate-900" aria-hidden="true" />
        <div className="flex h-full flex-col overflow-hidden rounded-[1.8rem]">
          <div className="flex items-center gap-2 bg-white px-4 pb-3 pt-9 text-slate-900 shadow-sm">
            {screen !== "home" && screen !== "done" && (
              <button type="button" onClick={() => go("home")} aria-label="Back" className="text-lg leading-none text-slate-500">
                ←
              </button>
            )}
            <p className="flex-1 text-center text-sm font-semibold">{title}</p>
          </div>

          <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-4 text-slate-900">
            {screen === "home" && (
              <>
                <p className="text-xs text-slate-500">Good afternoon</p>
                <p className="-mt-2 text-base font-semibold">Welcome back</p>
                <div className="mt-2 rounded-2xl bg-gradient-to-br from-red-700 to-red-900 p-4 text-white">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-red-100">fonepay circle</p>
                  <p className="mt-1 text-xs text-red-100">Pay people with just their mobile number</p>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {(["request", "send", "split"] as const).map((action) => (
                      <button
                        key={action}
                        type="button"
                        onClick={() => go(action)}
                        className="rounded-xl bg-black/80 py-3 text-xs font-semibold capitalize transition-transform hover:-translate-y-0.5"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-center text-[11px] text-slate-500">Tap Send, Request or Split to try it</p>
              </>
            )}

            {(screen === "send" || screen === "request") && (
              <>
                <Field
                  label={screen === "send" ? "Receiver's mobile number" : "Mobile number"}
                  value={mobile}
                  onChange={(v) => {
                    setMobile(v.replace(/\D/g, "").slice(0, 10));
                    setTouched(true);
                  }}
                  error={mobileError}
                  inputMode="numeric"
                  placeholder="98XXXXXXXX"
                />
                <Field
                  label="Amount (in NPR)"
                  value={amount}
                  onChange={(v) => setAmount(v.replace(/[^\d.]/g, ""))}
                  inputMode="decimal"
                  placeholder="500"
                />
                <PrimaryButton
                  disabled={!formValid}
                  onClick={() =>
                    finish(
                      screen === "send"
                        ? `${npr(amountNum)} sent to ${mobile}`
                        : `Payment request for ${npr(amountNum)} sent to ${mobile}`,
                    )
                  }
                >
                  {screen === "send" ? "Send" : "Request"}
                </PrimaryButton>
              </>
            )}

            {screen === "split" && (
              <>
                <Field label="Movie ticket - total" value={total} onChange={(v) => setTotal(v.replace(/[^\d.]/g, ""))} inputMode="decimal" />
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold">Split between {splitCount}</p>
                  <p className="text-[11px] font-semibold text-red-700">Split equally</p>
                </div>
                <ul className="divide-y divide-slate-200 rounded-xl bg-white text-sm">
                  <li className="flex justify-between px-3 py-2">
                    <span>You</span>
                    <span className="font-semibold">{npr(share)}</span>
                  </li>
                  {friends.map((name) => {
                    const on = included.includes(name);
                    return (
                      <li key={name} className="flex items-center justify-between px-3 py-2">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={on}
                            onChange={() =>
                              setIncluded((list) => (on ? list.filter((n) => n !== name) : [...list, name]))
                            }
                            className="accent-red-700"
                          />
                          {name}
                        </label>
                        <span className={on ? "font-semibold" : "text-slate-400"}>{on ? npr(share) : "-"}</span>
                      </li>
                    );
                  })}
                </ul>
                <PrimaryButton
                  disabled={included.length === 0 || share <= 0}
                  onClick={() =>
                    finish(`Requests sent to ${included.length} ${included.length === 1 ? "person" : "people"} for ${npr(share)} each`)
                  }
                >
                  Send requests
                </PrimaryButton>
              </>
            )}

            {screen === "done" && (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-2xl text-white">✓</span>
                <p className="text-sm font-semibold">{message}</p>
                <button type="button" onClick={reset} className="mt-2 text-xs font-semibold text-red-700">
                  Try another
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <p className="max-w-xs text-center text-xs text-muted">
        Interactive demo with sample data, recreated from Fonepay Circle&apos;s published app
        screens. No real payments are made.
      </p>
    </div>
  );
}

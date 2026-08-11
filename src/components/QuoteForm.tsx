import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { SITE } from "../config";
import { useLang } from "../i18n/LanguageContext";

type Status = "idle" | "loading" | "success" | "error";

export default function QuoteForm({ compact = false }: { compact?: boolean }) {
  const { t } = useLang();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    cargo: "",
    origin: "",
    destination: "",
    message: "",
  });

  const update = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.phone.trim() || !form.email.trim() || !form.origin.trim() || !form.destination.trim()) {
      setError(t.quote.required);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError(t.quote.required);
      return;
    }

    setStatus("loading");
    try {
      // Simulate secure submission to the CEO office mailbox.
      await new Promise((resolve) => setTimeout(resolve, 1100));
      const subject = `Quote Request — ${form.name}`;
      const body = [
        `Name: ${form.name}`,
        `Phone: ${form.phone}`,
        `Email: ${form.email}`,
        `Cargo Type: ${form.cargo || "—"}`,
        `Origin: ${form.origin}`,
        `Destination: ${form.destination}`,
        "",
        "Message:",
        form.message,
      ].join("\n");
      window.location.href = `mailto:${SITE.emailCeo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setStatus("idle");
    setForm({ name: "", phone: "", email: "", cargo: "", origin: "", destination: "", message: "" });
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50/70 px-6 py-14 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
          <CheckCircle2 size={32} />
        </span>
        <h3 className="mt-5 text-xl font-extrabold text-navy-900">{t.quote.successTitle}</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-500">{t.quote.successText}</p>
        <button onClick={reset} className="btn btn-navy mt-6 px-6 py-3 text-sm">
          {t.nav.quote}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-navy-950/10 sm:p-8 ${compact ? "" : ""}`}
      noValidate
    >
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600">
          <Send size={18} />
        </span>
        <div>
          <h3 className="text-lg font-extrabold text-navy-900">{t.quote.formTitle}</h3>
          <p className="text-xs text-slate-400">{t.quote.note}</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="qf-name">{t.quote.name} *</label>
          <input id="qf-name" className="input" value={form.name} onChange={update("name")} placeholder={t.quote.namePh} required />
        </div>
        <div>
          <label className="label" htmlFor="qf-phone">{t.quote.phone} *</label>
          <input id="qf-phone" className="input" value={form.phone} onChange={update("phone")} placeholder={t.quote.phonePh} dir="ltr" required />
        </div>
        <div>
          <label className="label" htmlFor="qf-email">{t.quote.email} *</label>
          <input id="qf-email" type="email" className="input" value={form.email} onChange={update("email")} placeholder={t.quote.emailPh} dir="ltr" required />
        </div>
        <div>
          <label className="label" htmlFor="qf-cargo">{t.quote.cargo}</label>
          <select id="qf-cargo" className="input" value={form.cargo} onChange={update("cargo")}>
            <option value="">{t.quote.cargoPh}</option>
            {t.quote.cargoTypes.map((c: string) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="label" htmlFor="qf-origin">{t.quote.origin} *</label>
          <input id="qf-origin" className="input" value={form.origin} onChange={update("origin")} placeholder={t.quote.originPh} required />
        </div>
        <div>
          <label className="label" htmlFor="qf-destination">{t.quote.destination} *</label>
          <input id="qf-destination" className="input" value={form.destination} onChange={update("destination")} placeholder={t.quote.destinationPh} required />
        </div>
        <div className="sm:col-span-2">
          <label className="label" htmlFor="qf-message">{t.quote.message}</label>
          <textarea id="qf-message" rows={4} className="input resize-none" value={form.message} onChange={update("message")} placeholder={t.quote.messagePh} />
        </div>
      </div>

      {error && (
        <div className="mt-4 flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-brand-700">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          {error}
        </div>
      )}
      {status === "error" && (
        <div className="mt-4 flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-brand-700">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          {t.quote.errorTitle}: {t.quote.errorText}
        </div>
      )}

      <button type="submit" disabled={status === "loading"} className="btn btn-red mt-6 w-full px-6 py-4 text-sm disabled:cursor-not-allowed disabled:opacity-70">
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            {t.quote.sending}
          </>
        ) : (
          <>
            <Send size={16} />
            {t.quote.submit}
          </>
        )}
      </button>
    </form>
  );
}

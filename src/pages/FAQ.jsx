import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function FAQ() {
  const [questions, setQuestions] = useState([]);
  const [form, setForm] = useState({ nama: "", kode_kelompok: "", pertanyaan: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    async function fetchFAQ() {
      const { data } = await supabase
        .from("questions")
        .select("*")
        .eq("status", "answered")
        .order("created_at", { ascending: false });
      setQuestions(data || []);
    }
    fetchFAQ();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.nama || !form.pertanyaan) return;
    const { error } = await supabase.from("questions").insert({ ...form, status: "pending" });
    if (!error) {
      setSubmitted(true);
      setForm({ nama: "", kode_kelompok: "", pertanyaan: "" });
    }
  }

  return (
    <div className="w-full flex flex-col items-center px-4 md:px-8 py-10 md:py-16" style={{ paddingTop: "calc(76px + 2.5rem)" }}>
      <h1 className="font-tektur font-black text-white text-3xl md:text-5xl text-center">
        QUESTION & FAQ
      </h1>

      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 mt-10">
        {/* Form */}
        <div>
          <h2 className="font-tektur font-semibold text-white text-lg mb-4">Kirim Pertanyaan</h2>
          {submitted ? (
            <p className="font-tektur text-sm text-green-400">
              Pertanyaan kamu terkirim! Admin akan menjawab secepatnya.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Nama"
                value={form.nama}
                onChange={(e) => setForm({ ...form, nama: e.target.value })}
                className="px-4 py-2 rounded-lg text-sm text-black outline-none"
                required
              />
              <input
                type="text"
                placeholder="Kode Kelompok (opsional)"
                value={form.kode_kelompok}
                onChange={(e) => setForm({ ...form, kode_kelompok: e.target.value })}
                className="px-4 py-2 rounded-lg text-sm text-black outline-none"
              />
              <textarea
                placeholder="Pertanyaan kamu..."
                value={form.pertanyaan}
                onChange={(e) => setForm({ ...form, pertanyaan: e.target.value })}
                rows={4}
                className="px-4 py-2 rounded-lg text-sm text-black outline-none resize-none"
                required
              />
              <button
                type="submit"
                className="mt-1 px-5 py-2 rounded-full font-tektur font-semibold text-sm text-black self-start"
                style={{ background: "#FFD900" }}
              >
                KIRIM
              </button>
            </form>
          )}
        </div>

        {/* FAQ list */}
        <div>
          <h2 className="font-tektur font-semibold text-white text-lg mb-4">Pertanyaan Umum</h2>
          <div className="flex flex-col gap-3">
            {questions.length === 0 ? (
              <p className="text-white/50 font-tektur text-sm">Belum ada FAQ tersedia.</p>
            ) : (
              questions.map((q) => (
                <details
                  key={q.id}
                  className="rounded-xl px-4 py-3"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <summary className="font-tektur text-white text-sm cursor-pointer">
                    {q.pertanyaan}
                  </summary>
                  <p className="font-tektur text-white/70 text-xs mt-2">{q.jawaban}</p>
                </details>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
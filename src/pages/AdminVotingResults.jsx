import { useState } from "react";
import { Link } from "react-router-dom";

const API_BASE_URL = `${import.meta.env.VITE_API_URL}/api`;

export default function AdminVotingResults() {
  const [password, setPassword] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}/voting/admin/results`, {
        headers: { "x-admin-password": password },
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.message || "Tidak dapat membuka hasil voting.");
        return;
      }

      setResults(data.results);
      setPassword("");
    } catch (requestError) {
      console.error("Fetch voting results error:", requestError);
      setError("Tidak dapat terhubung ke server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative z-10 min-h-screen px-4 pb-16 pt-28 text-white sm:px-6">
      <section className="mx-auto w-full max-w-3xl rounded-3xl border-4 border-[#ff59fb] bg-[#29363e]/90 p-6 shadow-[0_0_35px_rgba(255,89,251,0.35)] sm:p-10">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <p className="font-['Tektur',sans-serif] text-sm font-bold uppercase tracking-[0.2em] text-[#ffd900]">
              Admin only
            </p>
            <h1 className="mt-2 font-['Londrina_Solid',sans-serif] text-4xl uppercase sm:text-5xl">
              Atmin
            </h1>
          </div>
          <div className="flex gap-4 font-['Tektur',sans-serif] text-sm">
            <Link className="text-white/70 hover:text-white" to="/admin/leaderboard">
              Kelola leaderboard
            </Link>
            <Link className="text-white/70 hover:text-white" to="/">
              Kembali
            </Link>
          </div>
        </div>

        {!results ? (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block font-['Tektur',sans-serif] text-sm font-semibold" htmlFor="admin-password">
              Password admin
            </label>
            <input
              className="w-full rounded-xl border-2 border-white/50 bg-[#182126] px-4 py-3 font-['Tektur',sans-serif] outline-none focus:border-[#ffd900]"
              id="admin-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              required
            />
            {error && <p className="font-['Tektur',sans-serif] text-sm text-red-300">{error}</p>}
            <button
              className="rounded-xl bg-[#ffd900] px-6 py-3 font-['Tektur',sans-serif] font-black text-white shadow-[inset_-3px_-3px_3px_rgba(0,0,0,0.25)] disabled:opacity-60"
              type="submit"
              disabled={loading}
            >
              {loading ? "MEMBUKA..." : "LIHAT HASIL"}
            </button>
          </form>
        ) : (
          <div className="overflow-hidden rounded-xl border border-white/25">
            <table className="w-full border-collapse font-['Tektur',sans-serif]">
              <thead className="bg-[#182126] text-left text-sm uppercase text-[#ffd900]">
                <tr>
                  <th className="px-4 py-3">Peringkat</th>
                  <th className="px-4 py-3">Tim</th>
                  <th className="px-4 py-3 text-right">Vote</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result, index) => (
                  <tr className="border-t border-white/15" key={result.id}>
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3 font-semibold">{result.team_name}</td>
                    <td className="px-4 py-3 text-right text-[#ffd900]">{result.total_votes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}

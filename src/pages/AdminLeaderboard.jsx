import { useState } from "react";
import { Link } from "react-router-dom";

const API_BASE_URL = `${import.meta.env.VITE_API_URL}/api`;

export default function AdminLeaderboard() {
  const [password, setPassword] = useState("");
  const [teams, setTeams] = useState(null);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [loading, setLoading] = useState(false);
  const [savingId, setSavingId] = useState(null);

  async function loadTeams(event) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setNotice("");

    try {
      const response = await fetch(`${API_BASE_URL}/leaderboard/admin/teams`, {
        headers: { "x-admin-password": password },
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.message || "Tidak dapat membuka pengelolaan leaderboard.");
        return;
      }

      setTeams(data.teams);
    } catch (requestError) {
      console.error("Fetch admin leaderboard teams error:", requestError);
      setError("Tidak dapat terhubung ke server.");
    } finally {
      setLoading(false);
    }
  }

  function updateTeam(id, field, value) {
    setTeams((current) =>
      current.map((team) =>
        team.id === id ? { ...team, [field]: value } : team,
      ),
    );
  }

  async function saveTeam(team) {
    setSavingId(team.id);
    setError("");
    setNotice("");

    try {
      const response = await fetch(`${API_BASE_URL}/leaderboard/admin/teams/${team.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": password,
        },
        body: JSON.stringify({
          name: team.name,
          poin: Number(team.poin),
        }),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.message || "Data tim tidak dapat diperbarui.");
        return;
      }

      setNotice(`${team.name} berhasil diperbarui.`);
    } catch (requestError) {
      console.error("Update admin leaderboard team error:", requestError);
      setError("Tidak dapat terhubung ke server.");
    } finally {
      setSavingId(null);
    }
  }

  return (
    <main className="relative z-10 min-h-screen px-4 pb-16 pt-28 text-white sm:px-6">
      <section className="mx-auto w-full max-w-6xl rounded-3xl border-4 border-[#189cf4] bg-[#29363e]/90 p-6 shadow-[0_0_35px_rgba(24,156,244,0.35)] sm:p-10">
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="font-['Tektur',sans-serif] text-sm font-bold uppercase tracking-[0.2em] text-[#ffd900]">
              Admin only
            </p>
            <h1 className="mt-2 font-['Londrina_Solid',sans-serif] text-4xl uppercase sm:text-5xl">
              Kelola Leaderboard
            </h1>
          </div>
          <div className="flex gap-4 font-['Tektur',sans-serif] text-sm">
            <Link className="text-white/70 hover:text-white" to="/admin/voting-results">
              Hasil voting
            </Link>
            <Link className="text-white/70 hover:text-white" to="/">
              Kembali
            </Link>
          </div>
        </div>

        {!teams ? (
          <form className="mx-auto max-w-xl space-y-4" onSubmit={loadTeams}>
            <label className="block font-['Tektur',sans-serif] text-sm font-semibold" htmlFor="leaderboard-admin-password">
              Password admin
            </label>
            <input
              className="w-full rounded-xl border-2 border-white/50 bg-[#182126] px-4 py-3 font-['Tektur',sans-serif] outline-none focus:border-[#189cf4]"
              id="leaderboard-admin-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              required
            />
            {error && <p className="font-['Tektur',sans-serif] text-sm text-red-300">{error}</p>}
            <button
              className="rounded-xl bg-[#189cf4] px-6 py-3 font-['Tektur',sans-serif] font-black text-white disabled:opacity-60"
              type="submit"
              disabled={loading}
            >
              {loading ? "MEMBUKA..." : "KELOLA TIM"}
            </button>
          </form>
        ) : (
          <>
            <p className="mb-6 font-['Tektur',sans-serif] text-sm text-white/70">
              Ubah nama tim dan poin, lalu tekan Simpan pada baris yang sesuai.
            </p>
            {error && <p className="mb-4 font-['Tektur',sans-serif] text-sm text-red-300">{error}</p>}
            {notice && <p className="mb-4 font-['Tektur',sans-serif] text-sm text-green-300">{notice}</p>}
            <div className="overflow-x-auto rounded-xl border border-white/25">
              <table className="w-full min-w-[720px] border-collapse font-['Tektur',sans-serif]">
                <thead className="bg-[#182126] text-left text-sm uppercase text-[#ffd900]">
                  <tr>
                    <th className="px-4 py-3">ID</th>
                    <th className="px-4 py-3">Grup</th>
                    <th className="px-4 py-3">Nama tim</th>
                    <th className="px-4 py-3">Poin</th>
                    <th className="px-4 py-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {teams.map((team) => (
                    <tr className="border-t border-white/15" key={team.id}>
                      <td className="px-4 py-3">{team.id}</td>
                      <td className="px-4 py-3">{team.grup_name}</td>
                      <td className="px-4 py-3">
                        <input
                          className="w-full rounded-lg border border-white/30 bg-[#182126] px-3 py-2 outline-none focus:border-[#189cf4]"
                          value={team.name}
                          onChange={(event) => updateTeam(team.id, "name", event.target.value)}
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          className="w-28 rounded-lg border border-white/30 bg-[#182126] px-3 py-2 outline-none focus:border-[#189cf4]"
                          type="number"
                          min="0"
                          step="1"
                          value={team.poin}
                          onChange={(event) => updateTeam(team.id, "poin", event.target.value)}
                        />
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button
                          className="rounded-lg bg-[#ffd900] px-4 py-2 font-bold text-[#29363e] disabled:opacity-60"
                          type="button"
                          onClick={() => saveTeam(team)}
                          disabled={savingId === team.id}
                        >
                          {savingId === team.id ? "..." : "Simpan"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

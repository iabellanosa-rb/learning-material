export default function Leaderboard({ entries, onClear, onBack }) {
  return (
    <div className="leaderboard-screen">
      <h1>Leaderboard</h1>

      {entries.length === 0 ? (
        <div className="empty-leaderboard">
          <span className="empty-icon">🏜️</span>
          <p>No scores yet. Be the first to play!</p>
        </div>
      ) : (
        <div className="leaderboard-table-wrapper">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Score</th>
                <th>Difficulty</th>
                <th>Time</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, i) => (
                <tr key={entry.id} className={i < 3 ? `rank-${i + 1}` : ""}>
                  <td className="rank">
                    {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : i + 1}
                  </td>
                  <td className="name">{entry.name}</td>
                  <td className="score">
                    {entry.score}/{entry.total} ({Math.round((entry.score / entry.total) * 100)}%)
                  </td>
                  <td className="difficulty capitalize">{entry.difficulty}</td>
                  <td className="time">{entry.timeUsed}s</td>
                  <td className="date">{entry.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="leaderboard-actions">
        <button className="btn-primary" onClick={onBack}>
          Back
        </button>
        {entries.length > 0 && (
          <button className="btn-danger" onClick={onClear}>
            Clear All
          </button>
        )}
      </div>
    </div>
  );
}

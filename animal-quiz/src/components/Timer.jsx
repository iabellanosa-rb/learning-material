export default function Timer({ formatted, seconds }) {
  const urgent = seconds <= 30;
  const critical = seconds <= 10;

  return (
    <div className={`timer ${urgent ? "urgent" : ""} ${critical ? "critical" : ""}`}>
      <span className="timer-icon">⏱</span>
      <span className="timer-value">{formatted}</span>
    </div>
  );
}

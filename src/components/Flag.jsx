export default function Flag({ type, label }) {
  return <div className={`flag ${type}`}>{label}</div>;
}

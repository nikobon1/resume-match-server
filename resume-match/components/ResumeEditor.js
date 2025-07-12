export default function ResumeEditor({ resume, setResume, onAnalyze }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <h2>Resume Editor</h2>
      <textarea
        value={resume}
        onChange={(e) => setResume(e.target.value)}
        rows={16}
        style={{ width: "100%", fontFamily: "Arial, sans-serif" }}
      />
      <button onClick={onAnalyze} style={{ marginTop: 10 }}>Analyze Match</button>
    </div>
  );
}


export default function MatchScore({ matchPercentage, missingKeywords, categoryScores }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 15, borderRadius: 8, marginTop: 20 }}>
      <h3>Match: {matchPercentage}%</h3>
      <div>
        <b>Missing keywords:</b> {missingKeywords.join(", ")}
      </div>
      <div>
        <b>Category scores:</b>
        <ul>
          <li>Skills: {categoryScores.skills}%</li>
          <li>Experience: {categoryScores.experience}%</li>
          <li>Education: {categoryScores.education}%</li>
          <li>Industry: {categoryScores.industry}%</li>
        </ul>
      </div>
    </div>
  );
}

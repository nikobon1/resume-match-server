export default function VacancyForm({ vacancy, setVacancy }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <h2>Job Description</h2>
      <textarea
        value={vacancy}
        onChange={(e) => setVacancy(e.target.value)}
        rows={10}
        style={{ width: "100%", fontFamily: "Arial, sans-serif" }}
      />
    </div>
  );
}

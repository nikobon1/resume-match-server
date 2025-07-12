import React, { useState } from "react";
import ResumeEditor from "../components/ResumeEditor";
import VacancyForm from "../components/VacancyForm";
import MatchScore from "../components/MatchScore";

export default function Home() {
  const [resume, setResume] = useState("Paste your English resume here...");
  const [vacancy, setVacancy] = useState("Paste job description here...");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function analyze() {
    setLoading(true);
    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resume, jobDescription: vacancy }),
    });
    setResult(await res.json());
    setLoading(false);
  }

  return (
    <div style={{ maxWidth: 900, margin: "auto", padding: 24 }}>
      <h1>ResumeMatch</h1>
      <VacancyForm vacancy={vacancy} setVacancy={setVacancy} />
      <ResumeEditor resume={resume} setResume={setResume} onAnalyze={analyze} />
      {loading && <div>Analyzing...</div>}
      {result && <MatchScore {...result} />}
    </div>
  );
}

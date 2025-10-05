import React, { useState } from "react";

function VotingApp() {
  const [age, setAge] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [votes, setVotes] = useState({ Srejon: 0, Kawser: 0 });
  
  const handleAgeSubmit = () => {
    if (!age) {
      alert("Please enter your age.");
      return;
    }
    setIsSubmitted(true);
  };

  const handleVote = (candidate) => {
    setVotes((prev) => ({ ...prev, [candidate]: prev[candidate] + 1 }));
  };

  const eligible = isSubmitted && age >= 18;

  const leading = () => {
    if (votes.Srejon > votes.Kawser) return "Srejon is leading 👀";
    if (votes.Kawser > votes.Srejon) return "Kawser is leading 🏆";
    if (votes.Srejon || votes.Kawser) return "It's a tie! 🙂";
    return "No votes cast yet.";
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>BAIUST Student Council Election </h1>

      <h2>1. Enter Age</h2>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter age"
      />
      <button onClick={handleAgeSubmit} disabled={isSubmitted}>
        Submit
      </button>

      <h2>2. Eligibility</h2>
      {isSubmitted && (
        <p style={{ fontWeight: "bold", color: eligible ? "green" : "red" }}>
          {eligible ? "You can vote 🎉" : "Not eligible "}
        </p>
      )}

      <h2>3. Cast Your Vote</h2>
      {eligible ? (
        <>
          <button onClick={() => handleVote("Srejon")}>Vote Srejon</button>
          <button onClick={() => handleVote("Kawser")}>Vote Kawser</button>
        </>
      ) : (
        <p>You must be eligible to vote.</p>
      )}

      <h2>4. Results</h2>
      <p>Srejon: {votes.Srejon}</p>
      <p>Kawser: {votes.Kawser}</p>
      <h3>{leading()}</h3>
    </div>
  );
}

export default VotingApp;

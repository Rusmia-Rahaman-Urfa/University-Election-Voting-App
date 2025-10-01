import React, { useState } from 'react';

function VotingApp() {
  // 1. useState: To track the voter's age input
  const [age, setAge] = useState('');

  // 1. useState: To track if the age has been submitted for checking
  const [isAgeSubmitted, setIsAgeSubmitted] = useState(false);

  // 1. useState: To track the vote counts
  const [votes, setVotes] = useState({
    candidateA: 0,
    candidateB: 0,
  });

  // 1. Events: Handle changes in the age input field
  const handleAgeChange = (event) => {
    // Ensure only numbers are stored
    const newAge = event.target.value.replace(/\D/, '');
    setAge(newAge);
  };

  // 1. Events: Handle the age submission button click
  const handleSubmitAge = () => {
    // Only submit if an age is entered
    if (age) {
      setIsAgeSubmitted(true);
    } else {
      alert("Please enter your age.");
    }
  };

  // 3. Events: Handle vote casting button click
  const handleVote = (candidate) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [candidate]: prevVotes[candidate] + 1,
    }));
  };

  // Helper variable for eligibility check
  const isEligible = isAgeSubmitted && Number(age) >= 18;

  // 5. Extra Challenge: Determine the leading candidate
  const getLeadingCandidate = () => {
    if (votes.candidateA > votes.candidateB) {
      return "Candidate A is leading 🏆";
    } else if (votes.candidateB > votes.candidateA) {
      return "Candidate B is leading 🏆";
    } else if (votes.candidateA > 0 || votes.candidateB > 0) {
      return "It’s a tie! 🤝";
    }
    return "No votes cast yet.";
  };

  return (
    <div className="voting-container">
      <h1>University Student Council Election 🗳️</h1>

      {/* 1. Voter Input Section */}
      <h2>1. Check Eligibility</h2>
      <div>
        <label htmlFor="age-input">Enter your age: </label>
        <input
          id="age-input"
          type="number"
          value={age}
          onChange={handleAgeChange}
          // Reset submission state if age changes after submission
          onFocus={() => setIsAgeSubmitted(false)}
          placeholder="e.g., 20"
        />
        <button onClick={handleSubmitAge} disabled={isAgeSubmitted}>
          Submit Age
        </button>
      </div>

      <hr />

      {/* 2. Eligibility Check (Conditional Rendering) */}
      <h2>2. Eligibility Status</h2>
      {isAgeSubmitted && (
        <>
          {isEligible ? (
            <p style={{ color: 'green', fontWeight: 'bold' }}>
              Welcome! You are eligible to vote. 🎉
            </p>
          ) : (
            <p style={{ color: 'red', fontWeight: 'bold' }}>
              Sorry, you are not eligible to vote. 😔
            </p>
          )}
        </>
      )}

      <hr />

      {/* 3. Vote Casting (Conditional Rendering + Events) */}
      <h2>3. Cast Your Vote</h2>
      {isEligible ? (
        <div>
          <button onClick={() => handleVote('candidateA')} style={{ marginRight: '10px', padding: '10px' }}>
            Vote for Candidate A
          </button>
          <button onClick={() => handleVote('candidateB')} style={{ padding: '10px' }}>
            Vote for Candidate B
          </button>
        </div>
      ) : (
        <p>You must be eligible to see the voting buttons.</p>
      )}

      <hr />

      {/* 4. Result Display */}
      <h2>4. Current Results</h2>
      <p>Candidate A: **{votes.candidateA}** votes</p>
      <p>Candidate B: **{votes.candidateB}** votes</p>

      {/* 5. Extra Challenge */}
      <h3>{getLeadingCandidate()}</h3>
    </div>
  );
}

export default VotingApp;
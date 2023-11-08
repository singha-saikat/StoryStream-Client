import  { useState } from "react";

const InteractivePolls = () => {
  const [pollOptions, setPollOptions] = useState([
    { id: 1, option: "Option 1", votes: 0 },
    { id: 2, option: "Option 2", votes: 0 },
    { id: 3, option: "Option 3", votes: 0 },
  ]);

  const handleVote = (optionId) => {
    // Update the vote count for the selected option
    const updatedOptions = pollOptions.map((option) =>
      option.id === optionId ? { ...option, votes: option.votes + 1 } : option
    );
    setPollOptions(updatedOptions);
  };

  return (
    <section>
      <h2>Interactive Polls</h2>
      <div className="poll-list">
        {pollOptions.map((option) => (
          <div key={option.id} className="poll-option">
            <p>{option.option}</p>
            <button onClick={() => handleVote(option.id)}>Vote</button>
            <p>Votes: {option.votes}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InteractivePolls;

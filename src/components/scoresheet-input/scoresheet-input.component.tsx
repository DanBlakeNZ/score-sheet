import React from 'react';

const ScoresheetInput: React.FC<{
  inputName: string;
  playerId: number;
  onChange: any;
}> = ({ inputName, playerId, onChange }) => {
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    onChange({
      player: {
        id: playerId,
        playerScoreDetails: {
          [name]: value,
        },
      },
    });
  };

  return (
    <input
      className="scoresheet-input"
      type="number"
      onChange={handleChange}
      name={inputName}
    ></input>
  );
};

export default ScoresheetInput;

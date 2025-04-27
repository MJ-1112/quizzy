import React from 'react';

interface Props{
    question:string;
}
const Question:React.FC<Props> = ({question}) => {
  return (
    <div>
        {/* <span className="qt">{question}</span> */}
    </div>
  )
}

export default Question

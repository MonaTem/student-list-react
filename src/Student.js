import React from 'react';

const Student = ({ student }) => {
  return (
    <p>{student.name} | {student.field}</p>
  );
}

export default Student;

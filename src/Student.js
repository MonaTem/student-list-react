import React from 'react';

const Student = ({ student }) => {
  return (
    <span>{student.name} | {student.field}</span>
  );
}

export default Student;

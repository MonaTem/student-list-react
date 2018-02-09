import React from 'react';
import Student from './Student';

const StudentList = ({ students }) => {
  return (
    <div>
      {students.map((current,index) =>
        (<p key={index}><Student student={current} /></p>)
      )}
    </div>
  )
}

export default StudentList;

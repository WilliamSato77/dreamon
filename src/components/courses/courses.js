function Courses() {
    const courseList = [
      { title: 'Community Development', description: 'Learn how to build stronger communities.' },
      { title: 'Computer Engineering', description: 'Dive into hardware systems and digital electronics.' },
      { title: 'Computing and Information Systems', description: 'Master programming and database systems.' },
    ];
  
    return (
      <div>
        <h1>Our Courses</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
          {courseList.map((course, index) => (
            <div key={index} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Courses;
  
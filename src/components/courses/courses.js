import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Courses() {
  const courseList = [
    { title: 'Community Development', description: 'Learn how to build stronger communities.' },
    { title: 'Computer Engineering', description: 'Dive into hardware systems and digital electronics.' },
    { title: 'Computing and Information Systems', description: 'Master programming and database systems.' },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '20px' }}>
      {courseList.map((course, index) => (
        <Card key={index} style={{ width: '300px', textAlign: 'center' }}>
          <CardContent>
            <Typography variant="h5">{course.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {course.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default Courses;

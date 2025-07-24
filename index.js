const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   res.send('Hello from Render Node.js API!');
// });

// app.get('/api/data', (req, res) => {
//   res.json({ message: 'Here is your data', data: [1, 2, 3] });
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// src/index.ts
import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Mock job data (match your provided data)
const jobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    salary: '$80,000 - $120,000',
    vacancies: 2,
    applications: 45,
    status: 'Open',
    postedDate: '2024-01-15',
    description: 'We are looking for a skilled Frontend Developer to join our team...',
  },
  {
    id: 2,
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$70,000 - $90,000',
    vacancies: 1,
    applications: 32,
    status: 'Open',
    postedDate: '2024-01-10',
    description: 'Lead our marketing initiatives and drive brand growth...',
  },
  {
    id: 3,
    title: 'Data Analyst',
    department: 'Analytics',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$65,000 - $85,000',
    vacancies: 3,
    applications: 28,
    status: 'Open',
    postedDate: '2024-01-08',
    description: 'Analyze data to provide insights for business decisions...',
  },
];

// Define the Job interface
interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  vacancies: number;
  applications: number;
  status: 'Open' | 'Closed' | 'Draft';
  postedDate: string;
  description: string;
}

// API endpoint to get jobs
app.get('/api/jobs', (req: Request, res: Response) => {
  res.json(jobs);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

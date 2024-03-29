// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

function getLearnerData(course, ag, submissions) {
    // Check if input data is provided
    if (!course || !ag || !submissions || !Array.isArray(submissions)) {
        throw new Error("Invalid input data.");
    }

    // Check if assignment group belongs to the specified course
    if (ag.course_id !== course.id) {
        throw new Error("Assignment group does not belong to the specified course.");
    }

    // Process Assignments: Calculate maximum points for each assignment
    const assignmentMaxPoints = {};
    for (let i = 0; i < ag.assignments.length; i++) {
        const assignment = ag.assignments[i];
        assignmentMaxPoints[assignment.id] = assignment.points_possible;
    }

    // Process Submissions: Organize learner submissions by assignment
    const learnerScores = {};
    for (let i = 0; i < submissions.length; i++) {
        const submission = submissions[i];
        const assignmentId = submission.assignment_id;
        const assignment = findAssignmentById(ag.assignments, assignmentId);
        if (!assignment) continue; // Skip if assignment not found
        const dueDate = new Date(assignment.due_at);
        const submittedDate = new Date(submission.submission.submitted_at);
        if (submittedDate > dueDate) {
            submission.submission.score -= 0.1 * assignmentMaxPoints[assignmentId];
        }
        learnerScores[submission.learner_id] = learnerScores[submission.learner_id] || {};
        learnerScores[submission.learner_id][assignmentId] = submission.submission.score;
    }

    // Calculate Learner Averages: Calculate average scores for each learner
    const learnerAverages = [];
    for (const learnerId in learnerScores) {
        const learnerData = { id: parseInt(learnerId), avg: 0 };
        let totalPoints = 0;
        let totalWeightedScore = 0;
        for (const assignmentId in learnerScores[learnerId]) {
            const score = learnerScores[learnerId][assignmentId];
            const maxPoints = assignmentMaxPoints[assignmentId];
            if (maxPoints === 0 || typeof score !== 'number') continue; // Skip if max points is 0 or score is invalid
            const percentage = (score / maxPoints) * 100;
            learnerData[assignmentId] = percentage;
            totalPoints += maxPoints;
            totalWeightedScore += score;
        }
        learnerData.avg = (totalWeightedScore / totalPoints) * 100;
        learnerAverages.push(learnerData);
    }

    return learnerAverages;
}

// function to find assignment by ID
function findAssignmentById(assignments, id) {
    for (let i = 0; i < assignments.length; i++) {
        if (assignments[i].id === id) {
            return assignments[i];
        }
    }
    return null;
}
//   const result = [
//     {
//       id: 125,
//       avg: 0.985, // (47 + 150) / (50 + 150)
//       1: 0.94, // 47 / 50
//       2: 1.0 // 150 / 150
//     },
//     {
//       id: 132,
//       avg: 0.82, // (39 + 125) / (50 + 150)
//       1: 0.78, // 39 / 50
//       2: 0.833 // late: (140 - 15) / 150
//     }
//   ];

//   return result;


const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);

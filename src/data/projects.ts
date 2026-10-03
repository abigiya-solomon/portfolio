import type { Project } from '../types'
const TODO = 'TODO: describe exactly what you built or owned in this project.'

export const projects: Project[] = [
  {
    id: 'internship-system', kind: 'platform', badge: 'Full-stack · AI', title: 'AI-Powered Internship Recommendation & Management System',
    summary: 'A platform connecting students, universities, organizations and administrators around internships, with role-based access and recommendations.',
    tech: ['React', 'Node.js / Express', 'PostgreSQL', 'JWT', 'REST API', 'Recommendation concepts'],
    overview: 'A platform designed to manage internship opportunities and connect students, universities, organizations, and administrators. It includes role-based access, internship management, student profiles, applications, placements, and recommendation capabilities.',
    problem: 'Internship placement involves several parties, and coordinating opportunities, applications and placements across them is hard to track in one place.',
    solution: 'A role-based web application that gives each stakeholder their own workspace around shared internship data, with a recommendation layer to help match students with relevant opportunities.',
    features: ['Role-based access for students, universities, organizations and admins', 'Internship posting and management', 'Student profiles', 'Applications and placements', 'Recommendation capabilities'],
    contribution: TODO,
    challenges: ['Keeping permissions clean across four user roles', 'Modelling applications and placements consistently', 'Introducing recommendation logic into a conventional web stack'],
  },
  {
    id: 'enat-milk-shop', kind: 'inventory', badge: 'Business system', title: 'Enat Milk Shop Management System',
    summary: 'A real business-oriented system replacing manual inventory and sales processes for a milk shop.',
    tech: ['React', 'TypeScript', 'Laravel', 'MySQL', 'Ant Design', 'REST API'],
    overview: 'A management system designed to replace manual inventory and sales processes for a milk shop. It handles products, product types, inventory, stock movements, sales-related records, customer contracts, and role-based access.',
    problem: 'Tracking stock, sales and customer agreements by hand is slow and error-prone, especially for perishable products.',
    solution: 'A web application with a TypeScript/React interface on a Laravel and MySQL backend that records products, stock movements and sales in one system.',
    features: ['Products and product types', 'Inventory and stock movements', 'Sales-related records', 'Customer contracts', 'Role-based access'],
    contribution: TODO,
    challenges: ['Representing stock movements so inventory stays accurate', 'Designing data-heavy screens that stay usable for shop staff'],
  },
  {
    id: 'aml-analysis', kind: 'data', badge: 'Data · ML', title: 'AML Cross-Border Transaction Analysis',
    screenshots: [
      {src: '/screenshots/AML/Dashboard2.png', alt: 'Dashboard of AML Cross-Border Transaction Analysis System', caption: 'Dashboard'},
      {src: '/screenshots/AML/Transaction.png', alt: 'Transaction of AML Cross-Border Transaction Analysis System', caption: 'Transaction'},
      {src: '/screenshots/AML/ModelPerformance.png', alt: 'ModelPerformance of AML Cross-Border Transaction Analysis System', caption: 'ModelPerformance'},
    ],
    summary: 'A data and machine-learning project analysing cross-border financial transactions to identify potentially suspicious patterns.',
    tech: ['Python', 'Pandas', 'Machine Learning', 'LightGBM', 'FastAPI', 'Data Analysis'],
    overview: 'A data and machine-learning project focused on analyzing cross-border financial transactions and identifying potentially suspicious patterns.',
    problem: 'Suspicious activity is rare and hidden inside large volumes of ordinary transactions, so it is difficult to spot manually.',
    solution: 'Analyse the transaction data with Pandas, train a LightGBM model to flag unusual patterns, and expose the results through a FastAPI service.',
    features: ['Exploratory analysis of transaction data', 'Machine-learning model built with LightGBM', 'FastAPI service for model access'],
    contribution: TODO,
    challenges: ['Working with heavily imbalanced data', 'Choosing evaluation measures that fit the problem'],
  },
  {
    id: 'insa-summer-camp', kind: 'camp', badge: 'Experience', title: 'INSA Summer Camp — AI & Big Data',
    summary: 'Selected through a competitive process; worked in the Emerging Technologies environment with a focus on AI and Big Data.',
    tech: ['AI', 'Big Data', 'Data processing', 'PySpark', 'Python'],
    overview: 'I was selected for the INSA Summer Camp after a competitive selection process and worked within the Emerging Technologies environment. My main focus became AI and Big Data.',
    problem: 'I wanted to move beyond classroom theory and learn how AI and data systems are built in practice.',
    solution: 'Learning by doing: practical project work in AI and Big Data, alongside other participants.',
    features: ['AI', 'Big Data', 'Data processing', 'Learning through practical projects', 'Collaboration'],
    contribution: TODO,
    challenges: ['Picking up new tools and concepts quickly', 'Working effectively as part of a team'],
  },
]

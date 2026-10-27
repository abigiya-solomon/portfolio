import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'aml-analysis', kind: 'data', badge: 'Data · ML', title: 'AML Cross-Border Transaction Analysis',
    github: 'https://github.com/abigiya-solomon/AML_cross_boarder_transaction_analysis',
    live: 'https://aml-cross-boarder-transaction-analy-two.vercel.app',
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
    contribution: 'Developed an AI-powered AML cross-border transaction analysis system processing a **31.9-million-transaction dataset**, training and comparing **7 machine-learning models** on **340,000+ transactions**, and achieving **99.87% recall** with LightGBM.',
    challenges: ['Working with heavily imbalanced data', 'Choosing evaluation measures that fit the problem'],
  },
  {
    id: 'ai-predictive-maintenance', kind: 'platform', badge: 'AI / Machine Learning', title: 'AI-Powered Predictive Maintenance',
    github: 'https://github.com/abigiya-solomon/AI-Powered-Predictive-Maintenance',
    live: 'https://ai-powered-predictive-maintenance-35zrb2uy3-abigiya.vercel.app',
    screenshots: [
      {src: '/screenshots/PredictiveMaintenance/AI_Assistant.png', alt: 'Dashboard of AML Cross-Border Transaction Analysis System', caption: 'Dashboard'},
      {src: '/screenshots/PredictiveMaintenance/ModelBenchmark.png', alt: 'Transaction of AML Cross-Border Transaction Analysis System', caption: 'Transaction'},
      {src: '/screenshots/PredictiveMaintenance/Overview.png', alt: 'ModelPerformance of AML Cross-Border Transaction Analysis System', caption: 'ModelPerformance'},
    ],
    summary: 'Detecting abnormal air compressor behavior using machine learning and sensor data.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'One-Class SVM', 'React', 'Flask'],
    overview: 'An ML system that analyzes MetroPT-3 sensor data to detect unusual operating patterns in metro-train air compressors.',
    problem: 'Unexpected compressor faults can disrupt railway operations and maintenance planning.',
    solution: 'Built an anomaly-detection pipeline using One-Class SVM, sensor feature engineering, and persistence-based alerts.',
    features: ['Sensor analysis', 'Anomaly detection', 'Maintenance alerts', 'Time-series visualization'],
    contribution: 'Developed and evaluated the original ML pipeline, engineered time-series sensor features, analyzed anomalies against documented air-leak events, investigated compressor operating states, and designed the frontend–API integration for a deployable monitoring system.',
    challenges: ['Interpreting time-series anomalies', 'Evaluating detections with limited failure labels']
  },
  {
    id: 'customer-fraud-risk-prediction', kind: 'platform', badge: 'AI / Machine Learning', title: 'Customer Fraud Risk Prediction',
    github: 'https://github.com/abigiya-solomon/customer-fraud-risk-prediction',
    live: 'https://customer-fraud-risk-prediction.vercel.app',
    screenshots: [
      {src: '/screenshots/FraudRisk/EDA.png', alt: 'Exploratory data analysis of credit card transaction data', caption: 'Exploratory Data Analysis'},
      {src: '/screenshots/FraudRisk/ModelComparison.png', alt: 'Comparison of seven machine learning models for fraud-risk prediction', caption: 'Model Comparison'},
      {src: '/screenshots/FraudRisk/RiskScoring.png', alt: 'Customer fraud-risk scoring and model evaluation results', caption: 'Fraud-Risk Evaluation'},
    ],
    summary: 'Predicting future customer fraud risk using transaction behavior and machine learning.',
    tech: ['Python','Pandas','NumPy','Scikit-learn','Matplotlib','Seaborn','Jupyter Notebook'],
    overview: 'A machine learning project that analyzes large-scale credit card transaction data to identify customers at elevated risk of future fraud using behavioral feature engineering and predictive modeling.',
    problem: 'Fraud is difficult to detect because fraudulent activity is relatively rare, and transaction-level patterns alone may not reveal customers who are likely to become high-risk.',
    solution: 'Developed a customer-level fraud-risk scoring pipeline using transaction behavior, engineered 63+ behavioral features, and compared seven machine learning models using precision-recall evaluation to identify the strongest-performing approach.',
    features: [
      'Large-scale transaction data analysis',
      'Exploratory data analysis and visualization',
      'Customer behavioral feature engineering',
      'Comparison of seven machine learning models',
      'Future fraud-risk prediction',
      'Precision-recall evaluation',
      'High-risk customer ranking',
      'Fraud-detection lift analysis'
    ],
    contribution: 'Performed exploratory data analysis on 24.4 million+ transactions, engineered 63+ behavioral features, trained and compared seven machine learning models, evaluated performance using PR-AUC, and assessed the practical value of ranking customers by predicted fraud risk.',
    challenges: [
      'Handling large-scale transaction data',
      'Addressing severe class imbalance',
      'Engineering meaningful customer-level behavioral features',
      'Selecting appropriate evaluation metrics for rare fraud events',
      'Translating model predictions into actionable risk rankings'
    ]
  },
]

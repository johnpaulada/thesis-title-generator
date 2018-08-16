import Generatr from './Generatr'

const OBJECTIVES = [
  "Shift Scheduler",
  "Class Scheduler",
  "Facial Recognition",
  "Optical Character Recognition",
  "Text Generation",
  "Data Visualization",
  "Item Recommendation",
  "Malware Detection",
  "Rumor Verification",
  "Fake News Detection",
  "Harassment Detection",
  "Cancer Detection",
  "Cancer Prediction",
  "Fraud Detection",
  "Website Generation"
]

const OBJECTIVE_ADJECTIVES = [
  "Collaborative",
  "Predictive",
  "Distributed",
  "Decentralized",
  "User-based",
  "Delay-tolerant",
  "Mobile-first",
  "Improved",
  "Crowdsourced",
  "Offline-first",
  "High-Performance",
  "Effective",
  "Next-Generation"
]

const METHODS = [
  "Delay-tolerant Network",
  "Blockchain Implementation",
  "Convolutional Neural Network",
  "Recurrent Neural Network",
  "Genetic Algorithm Implementation",
  "Reinforcement Learning",
  "Microservices Architecture",
  "Containerized Architecture",
  "Serverless Architecture",
  "Nature-based Algorithm",
  "Machine Learning",
  "Generative Adversarial Networks",
  "Bayesian Methods",
  "Ensemble Learning",
  "AutoML",
  "Deep Learning"
]

const METHOD_ADJECTIVES = [
  "Distributed",
  "Low-power",
  "Lightweight",
  "Highly-Optimized",
  "Flexible",
  "Fast",
  "Performant",
  "Robust",
  "Time-Efficient",
  "Next-Generation",
  "Memory-Efficient"
]

const grammar = {
  "title": [
    "{{described_objective}} {{preposition}} {{title_method}}",
    "{{described_objective}}: A {{method}} Approach",
    "{{described_method}}: Towards {{described_objective}}",
    "A {{method}} Approach to a {{described_objective}}",
    "A {{study_type}} on {{method}} for {{described_objective}}",
    "A {{method_adjective}} {{method}} for {{described_objective}}",
    "A modern {{study_type}} study on {{method_adjective}} {{method}}",
    "{{use_word}} {{described_method}} for {{described_objective}}"
  ],
  "study_type": ["Experimental", "Comparative"],
  "title_method": ["a {{method_adjective}} {{method}}", "a {{method_adjective}} {{method}} {{connector}} a {{method_adjective}} {{method}}"],
  "described_method": "{{method_adjective}} {{method}}",
  "described_objective": "{{objective_adjective}} {{objective}}",
  "use_word": ["Exploiting", "Using", "Exploring"],
  "create_word": ["Towards", "Creating a", "Engineering a"],
  "objective": OBJECTIVES,
  "method": METHODS,
  "method_adjective": METHOD_ADJECTIVES,
  "objective_adjective": OBJECTIVE_ADJECTIVES,
  "preposition": ["using", "with"],
  "connector": ["and", "with"],
}

const TitleTemplate = Generatr(grammar)

export default TitleTemplate

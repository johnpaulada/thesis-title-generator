import Generatr from './Generatr'

const OBJECTIVES = [
  "Shift Scheduler",
  "Class Scheduler",
  "Facial Recognition",
  "Emotion Recognition",
  "Optical Character Recognition",
  "Text Generation",
  "Data Visualization",
  "Product Recommendation",
  "Malware Detection",
  "Rumor Verification",
  "Fake News Detection",
  "Harassment Detection",
  "Cancer Detection",
  "Cancer Prediction",
  "Fraud Detection",
  "Website Generation",
  "Self-Driving Vehicle Model Creation",
  "Quiz Generator",
  "Text Summarization",
  "Chatbot Generator",
  "Software Bug Detection",
  "Intrusion Detection",
  "Image Compression",
  "Language Translation",
  "Speech-to-Text",
  "Text-to-Speech",
  "Diet Recommendation",
  "Food Recommendation",
  "Depression Heuristics"
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
  "Next-Generation",
  "Efficient",
  "Resilient",
  "Highly-Available"
]

const METHODS = [
  "Delay-tolerant Network",
  "Blockchain Implementation",
  "Convolutional Neural Network",
  "Recurrent Neural Network",
  "Genetic Algorithm Implementation",
  "Evolutionary Algorithm",
  "Reinforcement Learning",
  "Microservices Architecture",
  "Containerized Architecture",
  "Serverless Architecture",
  "Nature-based Algorithm",
  "Machine Learning",
  "Generative Adversarial Network",
  "Bayesian Methods",
  "Ensemble Learning",
  "AutoML",
  "Deep Learning",
  "Swarm Optimization",
  "Supervised Learning",
  "Unsupervised Learning",
  "Artificial Intelligence",
  "Non-Scrum Agile Workflow",
  "Big Data Analysis",
  "Neural Language Understanding",
  "Internet of Things",
  "Virtual Reality",
  "Augmented Reality"
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
  "title": "{{title_notech}} {{tech}}",
  "title_notech": [
    "{{described_objective}} {{preposition}} {{title_method}}",
    "{{described_objective}}: A {{method}} Approach",
    "{{described_method}}: {{create_word}} {{described_objective}}",
    "A {{modern_word}} {{method}} Approach to a {{described_objective}}",
    "A {{study_type}} Study on {{method}} Methods for {{described_objective}}",
    "A {{method_adjective}} {{method}} for {{described_objective}}",
    "A {{modern_word}} {{study_type}} Study on {{described_method}} Methods",
    "{{use_word}} {{described_method}} for {{described_objective}}"
  ],
  "study_type": ["Experimental", "Comparative"],
  "title_method": ["a {{method_adjective}} {{method}}", "a {{method_adjective}} {{method}} {{connector}} a {{method_adjective}} {{method}}"],
  "described_method": "{{method_adjective}} {{method}}",
  "described_objective": "{{objective_adjective}} {{objective}}",
  "use_word": ["Exploiting", "Using", "Exploring", "Employing", "Applying", "Utilizing"],
  "create_word": ["Towards", "Creating a", "Engineering a"],
  "modern_word": ["Modern", "Next-Generation", "New"],
  "objective": OBJECTIVES,
  "method": METHODS,
  "method_adjective": METHOD_ADJECTIVES,
  "objective_adjective": OBJECTIVE_ADJECTIVES,
  "preposition": ["Using", "With"],
  "connector": ["and", "With", "Together With"],
  "tech": ["", "{{preposition}} the {{programming_language}} Programming Language", "{{preposition}} {{software}}"],
  "programming_language": ["Assembly", "AnyaBASIC", "C", "Go", "Julia", "Elixir", "R", "JavaScript", "ReasonML", "Haskell", "F#"],
  "software": [
    "TensorFlow",
    "TensorFlow.js",
    "PyTorch",
    "Keras",
    "Python Data Science Stack",
    "Kubernetes",
    "Serverless Framework",
    "Firebase",
    "Azure ML Studio",
    "Spreadsheets",
    "GraphQL",
    "Apache Thrift",
    "gRPC",
    "Cloud Functions",
    "ML Kit",
    "Arduino",
    "Raspberry Pi"
  ]
}

const TitleTemplate = Generatr(grammar)

export default TitleTemplate

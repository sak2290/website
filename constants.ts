import type { Profile, ResearchProject, Publication, NewsItem } from './types';

export const PROFILE_DATA: Profile = {
  name: "Samuel Klein, Ph.D.",
  title: "(Postdoc) Research Scientist",
  affiliation: "Columbia University",
  profilePicture: "https://picsum.photos/seed/samuel/300/300",
  bio: "My research focuses on creating robust and interpretable NLP models, exploring the intersection of neural networks and symbolic reasoning to push the boundaries of artificial intelligence.",
  longBio: "Dr. Samuel Klein is a Postdoctoral Research Scientist at Columbia University, affiliated with the Data Science Institute. His work is centered on the development of trustworthy AI, with a specific focus on natural language processing. He explores hybrid models that combine the strengths of deep learning with classical symbolic logic to improve model interpretability and reasoning capabilities. Samuel received his Ph.D. from the AI Institute, where his dissertation on computational pragmatics received distinction. He is passionate about mentoring students and making AI more accessible and understandable to the public.",
  email: "s.klein@columbia.edu",
  cvLink: "#",
  interests: [
    "Natural Language Processing",
    "Interpretability & Explainable AI",
    "Neuro-Symbolic Reasoning",
    "Computational Linguistics",
    "Machine Learning"
  ],
  education: [
    { degree: "Ph.D. in Artificial Intelligence", institution: "AI Institute" },
    { degree: "M.S. in Computer Science", institution: "University of Excellence" },
    { degree: "B.S. in Cognitive Science", institution: "Tech University" }
  ],
  links: {
    googleScholar: "#",
    linkedIn: "#",
    twitter: "#"
  }
};

export const RESEARCH_DATA: ResearchProject[] = [
  {
    title: "Neuro-Symbolic Language Models",
    description: "Integrating neural networks with symbolic reasoning to create models that can understand and reason about complex text with greater accuracy and interpretability. This project aims to bridge thegap between connectionist and symbolic AI.",
    image: "https://picsum.photos/seed/research1/600/400"
  },
  {
    title: "Pragmatic Inference in Dialogue Systems",
    description: "Developing conversational AI that can understand implicit meaning, context, and speaker intent. Our goal is to move beyond literal interpretations and create dialogue agents that are more cooperative and socially aware.",
    image: "https://picsum.photos/seed/research2/600/400"
  },
  {
    title: "Low-Resource Language Understanding",
    description: "Creating techniques for building effective NLP models for languages with limited data. This work involves transfer learning, meta-learning, and leveraging typological similarities between languages to overcome data scarcity.",
    image: "https://picsum.photos/seed/research3/600/400"
  }
];

export const PUBLICATIONS_DATA: Publication[] = [
    {
        title: "Causal Reasoning in Large Language Models",
        authors: ["Klein, S.", "Zhang, L.", "Pearl, J."],
        journal: "Advances in Neural Information Processing Systems (NeurIPS)",
        year: 2023,
        link: "#",
        pdfLink: "#",
        thumbnail: "https://picsum.photos/seed/pub1/400/550"
    },
    {
        title: "A Benchmark for Measuring Interpretability of Hybrid NLP Systems",
        authors: ["Klein, S.", "Manning, C."],
        journal: "Proceedings of the Annual Meeting of the Association for Computational Linguistics (ACL)",
        year: 2023,
        link: "#",
        thumbnail: "https://picsum.photos/seed/pub2/400/550"
    },
    {
        title: "Probing for Pragmatic Understanding in Conversational Agents",
        authors: ["Goldberg, Y.", "Klein, S.", "Chen, D."],
        journal: "Conference on Empirical Methods in Natural Language Processing (EMNLP)",
        year: 2022,
        pdfLink: "#",
        thumbnail: "https://picsum.photos/seed/pub3/400/550"
    },
    {
        title: "Learning Symbolic Rules from Neural Network Behavior",
        authors: ["Klein, S.", "Singh, R."],
        journal: "International Conference on Learning Representations (ICLR)",
        year: 2021,
        link: "#",
        pdfLink: "#",
        thumbnail: "https://picsum.photos/seed/pub4/400/550"
    },
    {
        title: "Transfer Learning Strategies for Under-Resourced Languages: A Typological Approach",
        authors: ["Klein, S.", "Nguyen, T."],
        journal: "Transactions of the Association for Computational Linguistics (TACL)",
        year: 2020,
        link: "#",
        thumbnail: "https://picsum.photos/seed/pub5/400/550"
    },
    {
        title: "Attention as a Means of Explanation",
        authors: ["Klein, S."],
        journal: "Journal of Machine Learning Research (JMLR)",
        year: 2019,
        link: "#",
        pdfLink: "#",
        thumbnail: "https://picsum.photos/seed/pub6/400/550"
    }
];

export const NEWS_DATA: NewsItem[] = [
    {
        date: "September 15, 2024",
        content: "Our paper on causal reasoning in LLMs was accepted to NeurIPS 2023. Looking forward to presenting in New Orleans!"
    },
    {
        date: "July 02, 2024",
        content: "I will be serving as a reviewer for ACL 2024. Honored to contribute to the community."
    },
    {
        date: "March 21, 2024",
        content: "Gave an invited talk at the AI research group at Stanford University on our recent work in neuro-symbolic models."
    }
];
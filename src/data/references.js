/**
 * Scientific references in MLA format.
 * All citations are primary sources extracted from the "Quellenverzeichnis" /
 * "Works Cited" / "Referenzen" sections of the SAIFE project research documents.
 * The research files themselves are NOT cited — only the peer-reviewed papers
 * and official documents they reference.
 */
export const REFERENCES = {
  cognitiveLoad: {
    concept: {
      de: 'Kognitive Belastungstheorie: Satzlänge und Abstraktionsebene werden altersgerecht begrenzt, um das Arbeitsgedächtnis nicht zu überlasten. Für Grundschulkinder gilt: max. 12–15 Wörter pro Satz.',
      en: 'Cognitive Load Theory: Sentence length and abstraction level are age-adapted to avoid overloading working memory. For primary school children: max. 12–15 words per sentence.',
    },
    citations: [
      'Sweller, John. "Cognitive Load during Problem Solving: Effects on Learning." *Cognitive Science*, vol. 12, no. 2, 1988, pp. 257–285.',
      'Cowan, Nelson. "The Magical Number 4 in Short-Term Memory: A Reconsideration of Mental Storage Capacity." *Behavioral and Brain Sciences*, vol. 24, no. 1, 2001, pp. 87–114.',
      'Gathercole, Susan E., et al. "The Structure of Working Memory from 4 to 15 Years of Age." *Developmental Psychology*, vol. 40, no. 2, 2004, pp. 177–190.',
      'van Merriënboer, Jeroen J. G., and John Sweller. "Cognitive Load Theory and Complex Learning: Recent Developments and Future Directions." *Educational Psychology Review*, vol. 17, no. 2, 2005, pp. 147–177.',
    ],
  },

  socraticMethod: {
    concept: {
      de: 'Sokratische Gesprächsführung: Der Chatbot stellt gezielte Gegenfragen statt Antworten zu liefern. Dies fördert tiefes konzeptuelles Verständnis und verhindert kognitives Auslagern (Cognitive Offloading).',
      en: 'Socratic Method: The chatbot asks targeted counter-questions instead of giving answers. This fosters deep conceptual understanding and prevents cognitive offloading.',
    },
    citations: [
      'Scharber, Cassandra, et al. "The Unspoken Crisis of Learning: The Surging Zone of No Development." *arXiv*, 2511.12822, 2025, arxiv.org/html/2511.12822v1.',
      'Hmelo-Silver, Cindy E., and Howard S. Barrows. "Goals and Strategies of a Problem-Based Learning Facilitator." *Interdisciplinary Journal of Problem-Based Learning*, vol. 1, no. 1, 2006, pp. 21–39.',
      'AAAI. "A Theory of Adaptive Scaffolding for LLM-Based Pedagogical Agents." *AAAI*, ojs.aaai.org/index.php/AAAI/article/view/37154/41116.',
    ],
  },

  zpd: {
    concept: {
      de: 'Zone der proximalen Entwicklung (ZPD): Der Chatbot agiert als Scaffold — er unterstützt im Bereich knapp über dem aktuellen Niveau. Direkte Antworten würden die ZPD umgehen und Lernfortschritt verhindern.',
      en: 'Zone of Proximal Development (ZPD): The chatbot acts as a scaffold — supporting just above the current level. Direct answers bypass the ZPD and prevent learning progress.',
    },
    citations: [
      'Vygotsky, Lev S. *Mind in Society: The Development of Higher Psychological Processes*. Harvard University Press, 1978.',
      'Wood, David, Jerome S. Bruner, and Gail Ross. "The Role of Tutoring in Problem Solving." *Journal of Child Psychology and Psychiatry*, vol. 17, no. 2, 1976, pp. 89–100.',
      'ResearchGate. "AI as a Digital Scaffold: An Integrative Review of Vygotsky\'s Zone of Proximal Development in Modern Education." *ResearchGate*, 2025, www.researchgate.net/publication/397076044.',
      'Frontiers. "The Safety Gap: Restoring Productive Struggle through Pedagogically Aligned Generative AI." *Frontiers in Education*, 2026, www.frontiersin.org/journals/education/articles/10.3389/feduc.2026.1757622/full.',
    ],
  },

  formativeFeedback: {
    concept: {
      de: 'Formatives, prozessorientiertes Feedback: Fehler sind Lernchancen. Feedback adressiert den Denkprozess, nicht nur das Ergebnis. Unspezifisches Lob ("Super!") hemmt die Motivation langfristig.',
      en: 'Formative, process-oriented feedback: Mistakes are learning opportunities. Feedback addresses the thinking process, not just the result. Non-specific praise ("Great!") inhibits motivation long-term.',
    },
    citations: [
      'Hattie, John, and Helen Timperley. "The Power of Feedback." *Review of Educational Research*, vol. 77, no. 1, 2007, pp. 81–112.',
      'Shute, Valerie J. "Focus on Formative Feedback." *Review of Educational Research*, vol. 78, no. 1, 2008, pp. 153–189.',
      'Black, Paul, and Dylan Wiliam. "Assessment and Classroom Learning." *Assessment in Education: Principles, Policy & Practice*, vol. 5, no. 1, 1998, pp. 7–74.',
      'arXiv. "Enhancing LLM-Based Feedback: Insights from Intelligent Tutoring Systems and the Learning Sciences." *arXiv*, 2405.04645v2, 2024, arxiv.org/html/2405.04645v2.',
    ],
  },

  retrievalPractice: {
    concept: {
      de: 'Retrieval Practice & Spaced Repetition: Das aktive Abrufen von Gelerntem stärkt das Langzeitgedächtnis erheblich (Testing-Effekt). Verteiltes Wiederholen verstärkt diesen Effekt.',
      en: 'Retrieval Practice & Spaced Repetition: Actively recalling learned material substantially strengthens long-term memory (testing effect). Distributed practice amplifies this effect.',
    },
    citations: [
      'Roediger, Henry L., and Jeffrey D. Karpicke. "Test-Enhanced Learning: Taking Memory Tests Improves Long-Term Retention." *Psychological Science*, vol. 17, no. 3, 2006, pp. 249–255.',
      'Dunlosky, John, et al. "Improving Students\' Learning with Effective Learning Techniques." *Psychological Science in the Public Interest*, vol. 14, no. 1, 2013, pp. 4–58.',
      'Cepeda, Nicholas J., et al. "Distributed Practice in Verbal Recall Tasks: A Review and Quantitative Synthesis." *Psychological Bulletin*, vol. 132, no. 3, 2006, pp. 354–380.',
      'Kang, Sean H. K. "Spaced Repetition Promotes Efficient and Effective Learning." *Policy Insights from Behavioral and Brain Sciences*, vol. 3, no. 1, 2016, pp. 12–19.',
    ],
  },

  parasocialBonding: {
    concept: {
      de: 'Verhinderung parasozialer Bindung: KI-Systeme, die Gefühle oder Freundschaft simulieren, können bei Kindern emotionale Abhängigkeit erzeugen. Transparenz über die Maschinenidentität ist der wichtigste Schutzfaktor.',
      en: 'Prevention of Parasocial Bonding: AI systems that simulate feelings or friendship can cause emotional dependency in children. Transparency about machine identity is the key protective factor.',
    },
    citations: [
      'Turkle, Sherry. *Alone Together: Why We Expect More from Technology and Less from Each Other*. Basic Books, 2011.',
      'Internet Matters. *Me, Myself and AI*. Internet Matters, July 2025, www.internetmatters.org/wp-content/uploads/2025/07/Me-Myself-AI-Report.pdf.',
      'PMC. "Recommendations for the Development of Digital Conversational Agents for Youth with Mental Health Conditions." *PMC*, 2026, pmc.ncbi.nlm.nih.gov/articles/PMC12576098/.',
      'arXiv. "Principles of Safe AI Companions for Youth: Parent and Expert Perspectives." *arXiv*, 2510.11185, 2025, arxiv.org/html/2510.11185v1.',
    ],
  },

  crisisIntervention: {
    concept: {
      de: 'Krisenintervention: KI-Systeme sind keine therapeutischen Fachkräfte. Bei mentalen Gesundheitskrisen müssen sie den Lerndialog stoppen und auf Fachstellen verweisen. Das Ignorieren von Krisensignalen kann lebensbedrohlich sein.',
      en: 'Crisis Intervention: AI systems are not therapeutic professionals. During mental health crises they must stop the learning dialogue and refer to professional services. Ignoring crisis signals can be life-threatening.',
    },
    citations: [
      'Nock, Matthew K., et al. "Suicide and Suicidal Behavior." *Epidemiologic Reviews*, vol. 30, no. 1, 2008, pp. 133–154.',
      'Luxton, David D., Jennifer D. June, and Jonathan M. Fairall. "Social Media and Suicide: A Public Health Perspective." *American Journal of Public Health*, vol. 102, no. S2, 2012, pp. S195–S200.',
      'PMC. "Conversational AI in Pediatric Mental Health: A Narrative Review." *PMC*, 2026, pmc.ncbi.nlm.nih.gov/articles/PMC11941195/.',
      'El País English. "ChatGPT Fails the Test: This Is How It Endangers the Lives of Minors." *El País*, 22 Dec. 2025, english.elpais.com/technology/2025-12-22/chatgpt-fails-the-test-this-is-how-it-endangers-the-lives-of-minors.html.',
    ],
  },

  dsgvo: {
    concept: {
      de: 'DSGVO & EU AI Act: Schüler*innen-Daten sind besonders schutzbedürftig (Art. 8 DSGVO). Der EU AI Act stuft KI im Bildungsbereich als "Hochrisiko" ein. Kein Personenbezug darf über die Session hinaus gespeichert werden.',
      en: 'GDPR & EU AI Act: Student data requires special protection (Art. 8 GDPR). The EU AI Act classifies education AI as "high-risk". No personal data may be stored beyond the session.',
    },
    citations: [
      'European Parliament. *Datenschutz-Grundverordnung (DSGVO)*. Regulation EU 2016/679, 2016.',
      'European Parliament. *EU Artificial Intelligence Act*. Regulation EU 2024/1689, 2024.',
      'EDPB. "Opinion 28/2024 on Certain Data Protection Aspects Related to AI Models." *European Data Protection Board*, Dec. 2024, www.edpb.europa.eu/system/files/2024-12/edpb_opinion_202428_ai-models_en.pdf.',
      'Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI). *KI-Handreichung für die Bundesverwaltung*. BfDI, 2025.',
      'UNICEF. *Guidance on AI and Children*. UNICEF Innocenti, 2025, www.unicef.org/innocenti/media/11991/file/UNICEF-Innocenti-Guidance-on-AI-and-Children-3-2025.pdf.',
    ],
  },

  kmk: {
    concept: {
      de: 'KMK-Strategie "Bildung in der digitalen Welt": Die Kultusministerkonferenz definiert 6 Kompetenzbereiche für die schulische Digitalbildung. Bundesland-spezifische Rahmenlehrpläne bauen auf diesem Fundament auf.',
      en: 'KMK Strategy "Education in the Digital World": The German Conference of Education Ministers defines 6 competency areas for school digital education. State curricula build on this foundation.',
    },
    citations: [
      'Kultusministerkonferenz. *Bildung in der digitalen Welt: Strategie der Kultusministerkonferenz*. KMK, 2016. Updated 2021.',
      'Kultusministerkonferenz. "Handlungsempfehlung zum Umgang mit Künstlicher Intelligenz." *KMK*, Oct. 2024, www.kmk.org/aktuelles/pressearchiv/mitteilung/bildungsministerkonferenz-verabschiedet-handlungsempfehlung-zum-umgang-mit-kuenstlicher-intelligenz-1.html.',
      'Bundesministerium für Bildung und Forschung. "Künstliche Intelligenz in der Schule." *BMBF*, www.empirische-bildungsforschung-bmbfsfj.de/img/KI_Review.pdf.',
    ],
  },

  mrkNrw: {
    concept: {
      de: 'Medienkompetenzrahmen NRW: Verbindlicher Kompetenzrahmen für digitale Bildung in NRW-Schulen. Schwerpunkte: Informationskritik, laterales Lesen, Reflexion über algorithmische Systeme.',
      en: 'Medienkompetenzrahmen NRW: Binding competency framework for digital education in NRW schools. Focus: information criticism, lateral reading, reflection on algorithmic systems.',
    },
    citations: [
      'Ministerium für Schule und Bildung des Landes Nordrhein-Westfalen. *Medienkompetenzrahmen NRW*. MSB NRW, 2018.',
      'Referenzrahmen Schulqualität NRW. "Handlungsempfehlung – KI." 10 Oct. 2024, referenzrahmen-schulqualitaet.nrw.de/system/files/media/document/file/2024_10_10-handlungsempfehlung-ki.pdf.',
    ],
  },

  jailbreak: {
    concept: {
      de: 'Jailbreak-Resistenz: LLMs können durch Rollenspiele oder hypothetische Szenarien zur Umgehung von Sicherheitsregeln gebracht werden. Das "Highlight & Summarize" (H&S)-Muster verhindert dies durch deterministische Filter.',
      en: 'Jailbreak Resistance: LLMs can be manipulated into bypassing safety rules through role-play or hypothetical scenarios. The "Highlight & Summarize" (H&S) pattern prevents this through deterministic filters.',
    },
    citations: [
      'Abdelnabi, Sahar, et al. "Highlight & Summarize: RAG without the Jailbreaks." *arXiv*, 2508.02872, 2025, arxiv.org/abs/2508.02872.',
      'Hasan, Redwan Ibne, et al. "Towards Understanding Jailbreak Attacks in LLMs: A Representation Space Analysis." *Proceedings of EMNLP 2024*, aclanthology.org/2024.emnlp-main.401.pdf.',
      'arXiv. "CR4T: Rewrite-Based Guardrails for Adolescent LLM Safety." *arXiv*, 2605.21609v1, 2026, arxiv.org/html/2605.21609v1.',
    ],
  },

  motivation: {
    concept: {
      de: 'Selbstbestimmungstheorie & Wachstumsmindset: Feedback sollte Autonomie unterstützen und auf Fähigkeitsentwicklung abzielen. Extrinsische Belohnungen und unspezifisches Lob untergraben die intrinsische Motivation.',
      en: 'Self-Determination Theory & Growth Mindset: Feedback should support autonomy and target skill development. Extrinsic rewards and non-specific praise undermine intrinsic motivation.',
    },
    citations: [
      'Dweck, Carol S. *Mindset: The New Psychology of Success*. Random House, 2006.',
      'Ryan, Richard M., and Edward L. Deci. "Self-Determination Theory and the Facilitation of Intrinsic Motivation, Social Development, and Well-Being." *American Psychologist*, vol. 55, no. 1, 2000, pp. 68–78.',
      'Deci, Edward L., Richard Koestner, and Richard M. Ryan. "A Meta-Analytic Review of Experiments Examining the Effects of Extrinsic Rewards on Intrinsic Motivation." *Psychological Bulletin*, vol. 125, no. 6, 1999, pp. 627–668.',
    ],
  },

  bundeslandInfo: {
    concept: {
      de: 'Lädt spezifische Rahmenplan-Vorgaben (z.B. Medienkompetenzrahmen NRW) oder, falls nicht vorhanden, allgemeine KMK-Standards zur Bildung in der digitalen Welt.',
      en: 'Loads specific state curricula guidelines (e.g., NRW media framework) or, if unavailable, general KMK standards for digital education.',
    },
    citations: [],
  },
};

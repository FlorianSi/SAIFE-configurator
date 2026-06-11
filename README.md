# SAIFE Configurator (Safe AI Framework for Education)

**A typical use case:** A teacher wants to deploy an AI chatbot in their classroom to help 7th-grade students prepare for a history exam. Instead of providing the students with a generic, unconstrained AI that might simply write essays for them or use overly complex academic language, the teacher uses the SAIFE Configurator. With just a few clicks, they generate a highly specialized system prompt that forces the AI to act strictly as a Socratic tutor, use age-appropriate language, refuse ghostwriting, and adhere to educational data privacy standards. The teacher then pastes this prompt into their school's AI platform, ensuring a safe, pedagogical, and productive learning environment.

---

## What does this tool do?

The SAIFE Configurator is an open-source web application designed to generate specialized system prompts for AI-supported learning companions (chatbots) in educational contexts. 

The generated guidelines strictly constrain the underlying Large Language Model (LLM) to:
* **Prevent Ghostwriting:** The AI is instructed to never solve homework completely. Instead, it acts as a Socratic tutor, guiding students to find the answers themselves.
* **Maintain the Curriculum:** Distractions and off-topic conversations are gracefully intercepted through a deterministic "Gentle Redirecting Protocol".
* **Communicate Age-Appropriately:** Sentence structure, vocabulary, and didactic operators are dynamically adjusted to the selected grade level (e.g., plain language for primary schools).
* **Ensure Data Privacy and Crisis Safety:** The prompts include strict rules regarding the protection of personal data and embedded crisis intervention mechanisms for psychological emergencies (e.g., severe exam stress).

---

## Scientific Basis & Methodology

The configuration of the SAIFE Framework is grounded in an analysis of pedagogical and cognitive psychology research. The prompt architecture is based on the following concepts:

* **Cognitive Load Theory:** Avoiding the overload of working memory by limiting sentence length and abstraction based on age.
* **Socratic Method:** Preventing "cognitive offloading" (the blind copying of AI answers) through process-oriented counter-questions.
* **Zone of Proximal Development:** The AI acts as an adaptive scaffold exactly at the edge of the student's current learning level.
* **European & German Curricula:** Direct integration of GDPR guidelines, the EU AI Act, and state-specific curricula (e.g., the media competence framework of NRW and KMK standards).

A complete list of all underlying primary sources (papers and legal guidelines) is transparently documented and linked in the [SOURCES.md](SOURCES.md) file within this repository.

---

## Development & Transparency

This project was developed using an AI-assisted workflow. While the UX/UI design and the overall architectural decisions were human-developed, the underlying code implementation, the literature research of educational papers, and the abstraction of psychological findings into deterministic prompt engineering rules were created with extensive assistance from artificial intelligence. 

This transparent approach aims to demonstrate how AI systems can be effectively leveraged to build safer and more ethical tools for the educational sector.

---

## Technology & Privacy

* **Frontend:** React 19, Vite, Vanilla CSS.
* **Architecture:** Pure Single-Page Application (SPA). All configurations and prompts are processed 100% locally within the user's browser. There is no backend, no data transmission, and no user tracking, strictly adhering to the highest data protection requirements for educational institutions.

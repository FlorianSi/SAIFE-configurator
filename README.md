# SAIFE Configurator (Safe AI Framework for Education)

**Problem:** Deploying generic AI chatbots in classrooms exposes students to severe risks: cognitive offloading (ghostwriting), age-inappropriate language, and psychological threats like parasocial bonding or unhandled mental health crises. Additionally, standard AI tools typically violate strict data protection laws (GDPR/DSGVO) and child protection regulations (especially in Europe/Germany) by storing and tracking student data.

**Solution:** The SAIFE Configurator generates specialized, curriculum-compliant system prompts that transform standard Large Language Models (LLMs) into safe, Socratic learning companions.

**Outcome:** A highly secure, GDPR-compliant AI tutor. The model is deterministically constrained to act as a Socratic guide (refusing ghostwriting), reject emotional bonding, halt dialogue during psychological crises to refer students to official helplines, and run entirely locally within the browser with zero data transmission.

---

## What does this tool do?

The SAIFE Configurator is an open-source web application designed to generate specialized system prompts for AI-supported learning companions (chatbots) in educational contexts. 

The generated guidelines strictly constrain the underlying Large Language Model (LLM) to:
* **Prevent Ghostwriting:** The AI is instructed to never solve homework completely. Instead, it acts as a Socratic tutor, guiding students to find the answers themselves.
* **Maintain the Curriculum:** Distractions and off-topic conversations are gracefully intercepted through a deterministic "Gentle Redirecting Protocol".
* **Communicate Age-Appropriately:** Sentence structure, vocabulary, and didactic operators are dynamically adjusted to the selected grade level (e.g., plain language for primary schools).
* **Ensure Data Privacy and Crisis Safety:** The prompts include strict rules regarding the protection of personal data and embedded crisis intervention mechanisms for psychological emergencies (e.g., severe exam stress).

---

## Safety, Data Protection & Regulatory Compliance

Deploying AI systems in European and German educational environments requires adhering to strict legal frameworks and addressing psychological safety concerns. The SAIFE Configurator addresses these challenges through both its software architecture and the generated system instructions:

### 1. Data Privacy & GDPR (DSGVO) Compliance
* **The Concern:** Under Article 8 of the GDPR, processing children's personal data requires strict parental consent and high security. Standard AI integrations often log student prompts, chat histories, and metadata on remote servers.
* **The SAIFE Solution:** 
  * **Zero-Retention Client-Side Architecture:** The configurator is a static Single-Page Application (SPA) that runs entirely in the user's web browser. It does not transmit, store, or log any configuration or prompt data to any external server.
  * **Strict Data Constraints in Prompts:** The generated system instructions explicitly forbid the AI from requesting, storing, or echoing back any personally identifiable information (PII) such as student names, schools, or contact details.

### 2. EU AI Act Compliance
* **The Concern:** The EU AI Act classifies AI systems used in education and vocational training as **High-Risk AI Systems** due to their potential to influence children's cognitive development and access to education.
* **The SAIFE Solution:** The generated prompts enforce strict role boundaries, safety auditing rules, and bias mitigations, helping schools configure underlying models to act within the guardrails of high-risk compliance frameworks.

### 3. Psychological Safety & Preventing Parasocial Bonding
* **The Concern:** Children are susceptible to forming emotional attachments (parasocial bonding) to AI systems that simulate feelings, empathy, or friendship, which can lead to emotional dependency.
* **The SAIFE Solution:** The prompts mandate complete transparency about machine identity. The AI must declare it is a software system, cannot use emotional language (e.g., "I am happy to help you" or "We are friends"), and must refuse to simulate human consciousness or emotions.

### 4. Crisis Intervention & Psychological Emergencies
* **The Concern:** Students experiencing academic burnout, severe exam stress, or home-related crises might express distress or self-harm thoughts to an AI chatbot. Generic AI bots may offer unsafe, non-professional medical advice or ignore these signals.
* **The SAIFE Solution:** The generated prompt contains a non-negotiable crisis override. If the bot detects signs of self-harm, depression, or abuse, it immediately halts the educational dialogue and responds with localized emergency contact numbers (such as Germany's "Nummer gegen Kummer" or "Telefonseelsorge") and a clear statement that it cannot provide therapy.

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

---

## License

This project is released under the [MIT License](LICENSE). 
This permissive open-source license allows for free use, modification, distribution, and commercial integration. See the `LICENSE` file for full details.

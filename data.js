/* EDIT THIS FILE for routine updates. See README.md for copy/paste examples.
   Dates: YYYY-MM-DD. Times are Eastern. Empty optional fields are hidden. */
window.GROUP = {
  currentSemester: 'fall-2026',
  // Replace with confirmed public contact details. Example in README.
  organizers: [],
  discussion: { repo: '', repoId: '', category: '', categoryId: '' },
  semesters: [{
    id: 'fall-2026', label: 'Fall 2026', theme: 'Interpretability & AI Safety',
    scheduleNote: 'Future meetings: 1:00 PM – [TBD] ET. We will decide the usual end time and future schedule at our first meeting.',
    meetings: [{
      date: '2026-10-10', start: '13:00', end: '14:00', first: true,
      topic: 'Why Interpretability?',
      description: 'The session will begin with a discussion of logistics and the format of the reading group, followed by an informal discussion of the two introductory readings.',
      notes: 'These readings are a starting point for discussing what interpretability research is trying to accomplish, why it might matter for AI safety, and some potential limitations of interpretability-based approaches.',
      leader: '', location: '', meetingUrl: '',
      readings: [
        {title: 'The Urgency of Interpretability', url: 'https://darioamodei.com/post/the-urgency-of-interpretability'},
        {title: 'Interpretability Will Not Reliably Find Deceptive AI', url: 'https://www.alignmentforum.org/posts/PwnadG4BFjaER3MGf/interpretability-will-not-reliably-find-deceptive-ai'}
      ]
    }],
    readingGroups: [
      {topic: 'Representations and geometry', papers: [
        {title: 'The Linear Representation Hypothesis and the Geometry of Large Language Models', url: 'https://arxiv.org/abs/2311.03658'}]},
      {topic: 'Superposition and feature representations', papers: [
        {title: 'Toy Models of Superposition', url: 'https://arxiv.org/abs/2209.10652'},
        {title: 'Sparse Autoencoders Find Highly Interpretable Features in Language Models', url: 'https://arxiv.org/abs/2309.08600'},
        {title: 'Scaling Monosemanticity', url: 'https://arxiv.org/abs/2605.29358'}]},
      {topic: 'Steering and intervention', papers: [
        {title: 'Steering Language Models With Activation Engineering', url: 'https://arxiv.org/abs/2308.10248'}]},
      {topic: 'Mechanistic interpretability / circuit tracing', papers: [
        {title: 'Circuit Tracing: Revealing Computational Graphs in Language Models', url: 'https://transformer-circuits.pub/2025/attribution-graphs/methods.html'},
        {title: 'On the Biology of a Large Language Model', url: 'https://transformer-circuits.pub/2025/attribution-graphs/biology.html'}]},
      {topic: 'Representations and global workspace', papers: [
        {title: 'Verbalizable Representations Form a Global Workspace in Language Models', url: 'https://arxiv.org/abs/2607.15495'}]},
      {topic: 'Adversarial attacks and AI safety', papers: [
        {title: 'Universal and Transferable Adversarial Attacks on Aligned Language Models', url: 'https://arxiv.org/abs/2307.15043'}]},
      {topic: 'Constitutional classifiers', papers: [
        {title: 'Constitutional Classifiers++: Efficient Production-Grade Defenses against Universal Jailbreaks', url: 'https://arxiv.org/abs/2601.04603'},
        {title: 'Constitutional Classifiers: Defending against Universal Jailbreaks across Thousands of Hours of Red Teaming', url: 'https://arxiv.org/abs/2501.18837'}]},
      {topic: 'Debate and scalable oversight', papers: [
        {title: 'AI Safety via Debate', url: 'https://arxiv.org/abs/1805.00899'},
        {title: 'Debating with More Persuasive LLMs Leads to More Truthful Answers', url: 'https://arxiv.org/abs/2402.06782'}]}
    ]
  }]
};

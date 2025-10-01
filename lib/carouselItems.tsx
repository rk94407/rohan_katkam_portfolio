interface CarouselItem {
    id: number;
    title: string;
    description: string;
    image?: string;
    link?: string;
}

export const DEFAULT_ITEMS: CarouselItem[] = [
  {
    id: 1,
    title: "Movie App",
    description:
      "Movie App built with React, react-router-dom, Tailwind CSS., and TMDB API.",
    image: "/images/movie-app.png",
    link: "https://react-movie-hub-app-github.netlify.app",
  },
  {
    id: 2,
    title: "Bio187.com",
    description:
      "Bio187 is built with React, Next.js, Tailwind CSS, and MySQL.",
    image: "/images/bio187.png",
    link: "https://bio187.com/",
  },
  {
    id: 3,
    title: "Rite2Rule.com",
    description:
      "Rite2Rule is built with React, TypeScript, Next.js, Tailwind CSS, Node.js, Express.js, and MySQL.",
    image: "/images/rite2rule.png",
    link: "https://rite2rule.com/",
  },
  {
    id: 4,
    title: "RAG AI Chatbot",
    description:
      "AI RAG Chatbot built with langchain, clerk, neon(postgres), openai, ai-sdk, and nextjs.",
    image: "/images/ai-rag-chatbot.png",
    link: "https://github.com/rk94407/ai_rag_chatbot",
  },
];

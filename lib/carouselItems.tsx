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
    description: "Explore the app with most recent movies and tv shows.",
    image: "/images/movie-app.png",
    link: "https://react-movie-hub-app-github.netlify.app",
  },
  {
    id: 2,
    title: "Bio187.com",
    description: "An online RFP Form",
    image: "/images/bio187.png",
    link: "https://bio187.com/",
  },
  {
    id: 3,
    title: "Rite2Rule.com",
    description: "A platform for rule-based document generation.",
    image: "/images/rite2rule.png",
    link: "https://rite2rule.com/",
  },
];

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
    image: "/images/passport-photo.jpg",
  },
  {
    id: 3,
    title: "",
    description: "Unwind on the sunny beaches.",
    image: "/images/passport-photo.jpg",
  },
  {
    id: 4,
    title: "Rite2Rule.com",
    description: "https://rite2rule.com/",
    image: "/images/passport-photo.jpg",
  },
];

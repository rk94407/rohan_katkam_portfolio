interface CarouselItem {
    id: number;
    title: string;
    description: string;
    image?: string;
}

export const DEFAULT_ITEMS: CarouselItem[] = [
  {
    id: 1,
    title: "Mountain Adventure",
    description: "Explore the scenic mountains and fresh air.",
    image: "/images/passport-photo.jpg",
  },
  {
    id: 2,
    title: "City Life",
    description: "Experience the vibrant city nightlife.",
    image: "/images/passport-photo.jpg",
  },
  {
    id: 3,
    title: "Beach Relaxation",
    description: "Unwind on the sunny beaches.",
    image: "/images/passport-photo.jpg",
  },
];

// Gallery data — flagship event photo sets.
// Image lists are built from the actual files present in public/images/<event>/,
// so counts are real (no fabricated photo/video numbers). Add a new event by
// dropping its photos in public/images/<slug>/ and appending an entry here.

export interface GalleryEvent {
  id: number;
  eventName: string;
  date: string;
  coverImage: string;
  images: string[];
}

// Helper: build "/images/<dir>/<n>.JPG" for an explicit list of file numbers.
const set = (dir: string, nums: number[]): string[] =>
  nums.map((n) => `/images/${dir}/${n}.JPG`);

export const galleryEvents: GalleryEvent[] = [
  {
    id: 1,
    eventName: "Encode 4.0",
    date: "February 2025",
    coverImage: "/images/ENCODE-4.0/2.JPG",
    images: set("ENCODE-4.0", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  },
  {
    id: 2,
    eventName: "Phantom Flag",
    date: "December 2024",
    coverImage: "/images/POKEDEV/4.JPG",
    images: set("POKEDEV", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  },
  {
    id: 3,
    eventName: "Innovance 3.0",
    date: "November 2024",
    coverImage: "/images/INNOVENCE-3.0/4.JPG",
    images: set("INNOVENCE-3.0", [4, 5, 6, 7, 8, 10]),
  },
];

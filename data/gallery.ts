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

// Helper: prefix each filename with "/images/<dir>/". Filenames carry their own
// extension because folders mix cases (e.g. Innovance has both .jpg and .JPG),
// and the path must match the on-disk file exactly on case-sensitive hosts.
const set = (dir: string, files: string[]): string[] =>
 files.map((f) => `/images/${dir}/${f}`);

// Convenience for the common case: a numeric range of uppercase ".JPG" files.
const jpg = (nums: number[]): string[] => nums.map((n) => `${n}.JPG`);

export const galleryEvents: GalleryEvent[] = [
 {
 id: 1,
 eventName: "Encode 4.0",
 date: "February 2025",
 coverImage: "/images/ENCODE-4.0/2.JPG",
 images: set("ENCODE-4.0", jpg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])),
 },
 {
 id: 2,
 eventName: "Phantom Flag",
 date: "December 2024",
 coverImage: "/images/POKEDEV/4.JPG",
 images: set("POKEDEV", jpg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])),
 },
 {
 id: 3,
 eventName: "Innovance 3.0",
 date: "November 2024",
 coverImage: "/images/INNOVENCE-3.0/4.JPG",
 // Full set of 10: 1-3 and 9 are lowercase .jpg on disk; the rest .JPG.
 images: set("INNOVENCE-3.0", [
 "1.jpg",
 "2.jpg",
 "3.jpg",
 "4.JPG",
 "5.JPG",
 "6.JPG",
 "7.JPG",
 "8.JPG",
 "9.jpg",
 "10.JPG",
 ]),
 },
];

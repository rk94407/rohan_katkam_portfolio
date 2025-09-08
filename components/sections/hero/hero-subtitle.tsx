import TextType from "@/components/animations/TextType";

export default function HeroSubtitle() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <TextType
        text={["Full Stack Developer", "Software Engineer", "UI/UX Designer"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
        className="text-6xl lg:text-9xl font-bold text-center text-black bg-amber-200 px-4 py-12 rounded-lg border-4 border-black dark:border-4 dark:border-white"
      />
    </div>
  );
}

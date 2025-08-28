// import RotatingText from "./animations/rotating-text";
import ScrambledText from "../animations/scramble-text";
// import SplitText from "./animations/splitting-text";
import TextType from "../animations/text-type";
import TiltedCard from "../animations/tilted-card";
// import DecryptedText from "./animations/decrypt-text";

export default function HeroSection() {
  //   const textsForRotation = ["I", "am", "a", "Full Stack Developer"];

  //     const handleAnimationComplete = () => {
  //   console.log('All letters have animated!');
  // };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 w-full max-w-6xl mx-auto px-4 py-8">
      {/* Title */}
      <div className="min-h-screen flex items-center justify-center">
        {/* <div>Rohan Katkam</div> */}
        <TextType
          text={["Full Stack Developer", "Software Engineer", "UI/UX Designer"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="text-6xl lg:text-9xl font-bold text-center text-black dark:text-white"
        />
        {/* <SplitText
          text="Rohan Katkam"
          className="text-4xl md:text-6xl font-bold text-center r"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        /> */}
        {/* Rohan Katkam */}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-6 min-h-screen">
        {/* Left: ScrambledText + RotatingText stacked vertically */}
        <div className="flex flex-col items-center md:items-center text-center md:text-left w-full md:w-1/2">
          {/* <RotatingText
        texts={textsForRotation}
        mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
        staggerFrom={"last"}
        initial={{ y: "100%"}
        animate={{ y: 0 }}
        exit={{ y: "-120%"}}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
      /> */}
          <ScrambledText
            className="scrambled-text-demo text-black dark:text-white text-justify"
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars={".: "}
            style={{ fontSize: "1.5rem" }}
          >
            I am Rohan Katkam, Full Stack Developer with 1.5+ years of
            experience designing and delivering scalable web applications using
            modern JavaScript frameworks. Skilled in building end-to-end
            solutions with React.js, Node.js, and cloud technologies. Adept at
            Agile methodologies, with proven ability to lead cross-functional
            teams and integrate AI-driven features that enhance user engagement
            by up to 30%.
          </ScrambledText>

          {/* Example 1: Defaults (hover to decrypt) */}
          {/* <DecryptedText text="Hover me!" /> */}

          {/* Example 2: Customized speed and characters */}
          {/* <DecryptedText
        text="Customize me"
        speed={100}
        maxIterations={20}
        characters="ABCD1234!?"
        className="revealed"
        parentClassName="all-letters"
        encryptedClassName="encrypted"
      /> */}

          {/* Example 3: Animate on view (runs once) */}
          {/* <div style={{ marginTop: "4rem" }}>
        <DecryptedText
          text="Full Stack Developer with 1.5+ years of experience building scalable
        web applications using modern JavaScript frameworks. Proven track
        record of delivering end-to-end solutions with React.js, Node.js, and
        cloud technologies. Expert in Agile development methodologies with
        demonstrated ability to lead cross-functional teams and integrate
        AI-powered features that increase user engagement by 30%."
          animateOn="view"
          revealDirection="center"
          style={{ fontSize: "1.5rem", width: "85%" , color: "black" }}
        />
      </div> */}
        </div>

        {/* Right: TiltedCard */}
        <div className="flex justify-center md:justify-center w-full md:w-1/2 mt-10 md:mt-0">
          <TiltedCard
            imageSrc="/images/passport-photo.jpg"
            altText="Rohan Katkam"
            captionText="Rohan Katkam"
            containerHeight="350px"
            containerWidth="350px"
            imageHeight="350px"
            imageWidth="350px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">Rohan Katkam</p>
            }
          />
        </div>
      </div>
    </div>
  );
}

import TiltedCard from "@/components/animations/TiltedCard";

export default function HeroImageCard() {
  return (
    <div className="flex justify-center w-full md:w-1/2 mt-10 md:mt-0">
      <TiltedCard
        imageSrc="/images/passport-photo.jpg"
        altText="Rohan Katkam"
        captionText="Rohan Katkam"
        containerHeight="400px"
        containerWidth="400px"
        imageHeight="400px"
        imageWidth="400px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <div className="absolute top-5 left-1/2 -translate-x-1/2">
            <p className="px-4 py-2 rounded-lg bg-white/20 text-white font-bold text-lg shadow-lg">
              Rohan Katkam
            </p>
          </div>
        }
      />
    </div>
  );
}

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
        overlayContent={<p className="tilted-card-demo-text">Rohan Katkam</p>}
      />
    </div>
  );
}

import ThoughtBubbleIllustration from "@/assets/illustrations/ThoughtBubbleIllustration";
import ThoughtPieceIllustration from "@/assets/illustrations/ThoughtPieceIllustration";
import Image from "next/image";

export default function AboutImage() {
    return(
        <div className="w-[80%] sm:w-[unset] relative aspect-square">
            <ThoughtPieceIllustration className="w-5 absolute -left-1 -top-14 sm:-left-16 sm:-top-12 lg:-top-6 text-light-secondary animate-bubble animate animate-delay-1" />
            <ThoughtPieceIllustration className="w-7 absolute -left-10 -top-10 sm:-left-10 lg:-left-9 sm:-top-8 lg:-top-10 text-light-secondary animate-bubble animate-delay-2" />
            <ThoughtPieceIllustration className="w-10 absolute -top-3 -left-5 sm:left-[unset] sm:-top-6 text-light-secondary animate-bubble animate-delay-3" />
            <div className="animate-bubble">
                <ThoughtBubbleIllustration className="scale-[130%] absolute w-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-light-secondary" />
                <Image 
                    className="w-[287px] aspect-square relative rounded-full translate-y-3"
                    src="/imgs/about.png"
                    width={300}
                    height={300}
                    alt=""
                    priority={true}
                />
            </div>
        </div>
    )
}
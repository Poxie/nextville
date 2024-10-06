export default function ThoughtBubbleIllustration({ className }: {
    className?: string;
}) {
    return(
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="368" height="362" viewBox="0 0 368 362" fill="none">
            <g filter="url(#filter0_d_80_10193)">
                <path d="M312.996 82.5818C250.271 6.65175 209.5 11 144.476 22.5051C-5.10907 40.5914 -18.0268 268.75 100.987 312.875C220 357 231.529 336.336 288 295C344.471 253.664 375.721 158.512 312.996 82.5818Z" fill="currentColor"/>
            </g>
            <defs>
                <filter id="filter0_d_80_10193" x="0.89563" y="0.0469971" width="366.686" height="361.509" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="10"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.498039 0 0 0 0 0.607843 0 0 0 0 0.803922 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_80_10193"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_80_10193" result="shape"/>
                </filter>
            </defs>
        </svg>
    )
}
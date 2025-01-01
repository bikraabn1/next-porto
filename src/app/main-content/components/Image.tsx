interface ImageProps {
    src: string;
    alt: string;
}

export default function Image(props: ImageProps) {
    return (
        <div className="bg-white rounded-full p-2">
            <img className="w-10 h-10 p-2" src={props.src} alt={props.alt} />
        </div>
    )
}
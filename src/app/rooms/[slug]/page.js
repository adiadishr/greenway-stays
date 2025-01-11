export default function Room({ params }) {
    const { slug } = params;
    return (
        <div className="mt-[56px]">
            {slug}
        </div>
    )
}
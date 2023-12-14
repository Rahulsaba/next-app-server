export default function Button({ type, name, className, word }) {
    return (
        <>
            <button
                type={type}
                name={name}
                className={className}
            >
                {word}
            </button>
        </>
    )
}
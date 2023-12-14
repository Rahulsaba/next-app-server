export default function Input({id ,name ,type,autoComplete,required,className}) {
    return (
        <>
            <input
                id={id}
                name={name}
                type={type}
                autoComplete={autoComplete == 1 ? 'true' : 'false'}
                required={required}
                className={className}
            />
        </>
    )
}
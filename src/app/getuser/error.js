"use client"


export default function Error({error ,reset}) {
    return (
        <>
            {
                error && error.message
            }
            <button onClick={() => reset()}>Reset</button>
        </>
    )
} 
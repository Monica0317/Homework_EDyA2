export const ShowIncrement = ({incrementFather}) => {

    return (
        <button 
            onClick={() => incrementFather()}  
        >
            Increment
        </button>
    )
}
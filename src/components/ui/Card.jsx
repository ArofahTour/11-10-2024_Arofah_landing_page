

function Card({props}) {
    return (
        <>
            <div className="">
                <h2>{props.h2}</h2>
                <p>{props.p}</p>
            </div>
        </>
    );
}

export default Card;
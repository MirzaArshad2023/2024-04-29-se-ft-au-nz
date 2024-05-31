function Third({textToDisplay, subText="Subtext", children})
{
    return(
        <>
            <div>
                <p>{textToDisplay}</p>
                <p>{subText}</p>
            </div>
            {children}
        </>
    )
}

export default Third
import Third from "./Third"
function HelloWorld(props)
{
    let x = 25
    let y = x * 0
    let UItoShow = <div>Default UI</div>
    function AlertUser()
    {
        alert("Welcome User")
    }
    if(y > 600)
    {
        UItoShow = <div>Result greater than 600</div>
    }
    else
    {
        UItoShow = <div>Not reached the target</div>
    }

    const spiderman = { name: 'Spiderman', alterEgo: 'Peter Parker', catchPhrase: 'With great power comes great responsibility' };
    const spideyJSX = (<>
        <h3>{spiderman.name}</h3>
        <blockquote>{spiderman.catchPhrase}</blockquote><cite>{spiderman.alterEgo}</cite>
    </>);

    return(
        <>
            <h1>Hello {props.userName} {y}</h1>
            <button onClick={AlertUser}>ClickMe!</button>
            {UItoShow}
            <Third textToDisplay="IOD" subText="New Sub Text">
                {spideyJSX}
                <p>Child2</p>
                <p>AnotherParagraph</p>
            </Third>
        </>
    )
}

export default HelloWorld
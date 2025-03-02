

export const Options = (props) => {
    function handleClick(e) {
        let userSelect = ''
        e.target.classList.toggle('active')
        let activeOptions = document.querySelectorAll('.active')
        activeOptions.forEach(el => {
            if (el.classList.contains('active')) {
                userSelect = userSelect + el.innerHTML + ', '
            }
        })
        let aiPrompt = `Generate a cat name which is ${userSelect}. give me the name only. dont send me any other extra texts. give me only and only one word and that is that cats name.`
        localStorage.setItem('prompt', aiPrompt)
        console.log(userSelect);

    }
    let sectionName = props.name
    let list = props.list
    let listItems = list.map((e, index) => <div onClick={handleClick} key={index} className="option">{e}</div>)
    return (
        <section>
            <h2>Select {sectionName}</h2>
            <div className="options">
                {listItems}
            </div>
        </section>
    )
}

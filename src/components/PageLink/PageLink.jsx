import './PageLink.css';

function PageLink(props) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    function handleMouseOver(e) {
        let iterations = 0;

        const interval = setInterval(() => {
            e.target.innerText = e.target.innerText.split("")
                .map((letter, index) => {
                    if (index < iterations) {
                        return e.target.dataset.value[index];
                    }
                    
                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("")

            if (iterations >= e.target.dataset.value.length) clearInterval(interval);

            iterations += 1 / 3;
        }, 30)
    }
    
    return (
        <a href={props.link} target="_blank" data-value={props.name} onMouseOver={handleMouseOver}>{props.name}</a>
    )
}

export default PageLink;
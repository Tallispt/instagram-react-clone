function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.url} />
            </div>
            <div class="usuario">
                {props.name}
            </div>
        </div>
    )
}

const stories = [
    { name: '9gag', url: 'assets/img/9gag.svg' },
    { name: 'meowed', url: 'assets/img/meowed.svg' },
    { name: 'barked', url: 'assets/img/barked.svg' },
    { name: 'nathanwpylestrangeplanet', url: 'assets/img/nathanwpylestrangeplanet.svg' },
    { name: 'wawawicomics', url: 'assets/img/wawawicomics.svg' },
    { name: 'respondeai', url: 'assets/img/respondeai.svg' },
    { name: 'filomoderna', url: 'assets/img/filomoderna.svg' },
    { name: 'memeriagourmet', url: 'assets/img/memeriagourmet.svg' },
]

export default function Stories() {
    return (
        <div class="stories">
            {stories.map(story => <Story name={story.name} url={story.url} />)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}
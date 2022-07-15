export default function Esquerda() {

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

    const posts = [
        { usuarioName: 'meowed', usuarioUrl: 'assets/img/meowed.svg', imageUrl: 'assets/img/gato-telefone.svg', likeName: 'respondeai', likeUrl: 'assets/img/respondeai.svg', numLikes: '101.523' },
        { usuarioName: 'barked', usuarioUrl: 'assets/img/barked.svg', imageUrl: 'assets/img/dog.svg', likeName: 'adorable_animals', likeUrl: 'assets/img/adorable_animals.svg', numLikes: '99.159' }
    ]

    function Post(props) {
        return (
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={props.usuarioUrl} />
                        {props.usuarioName}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    {(props.imageUrl.slice(-3) === 'svg' || props.imageUrl.slice(-3) === 'jpg' || props.imageUrl.slice(-3) === 'png') ?
                        <img src={props.imageUrl} /> :
                        <video src={props.imageUrl} />
                        }

                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={props.likeUrl} />
                        <div class="texto">
                            Curtido por <strong>{props.likeName}</strong> e <strong>outras {props.numLikes} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div class="esquerda">
            <div class="stories">
                {stories.map(story => <Story name={story.name} url={story.url} />)}
                <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>

            <div class="posts">
                {posts.map(post => <Post usuarioName={post.usuarioName} usuarioUrl={post.usuarioUrl} imageUrl={post.imageUrl} likeName={post.likeName} likeUrl={post.likeUrl} numLikes={post.numLikes} />)}

            </div>
        </div>
    );
}
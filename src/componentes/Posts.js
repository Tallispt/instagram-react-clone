import React, { useState } from "react"

function Post(props) {
    const [name, setName] = useState('heart-outline');

    function toggleLiked() {
        setName(name === 'heart-outline' ? 'heart' : 'heart-outline');
    }

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

            <div class="conteudo" onDoubleClick={() => {
                setName('heart')
            }}>
                {(props.imageUrl.slice(-3) === 'svg' || props.imageUrl.slice(-3) === 'jpg' || props.imageUrl.slice(-3) === 'png') ?
                    <img src={props.imageUrl} /> :
                    <video controls src={props.imageUrl} />}

            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={name} onClick={toggleLiked}></ion-icon>
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

const posts = [
    { usuarioName: 'meowed', usuarioUrl: 'assets/img/meowed.svg', imageUrl: 'assets/img/gato-telefone.svg', likeName: 'respondeai', likeUrl: 'assets/img/respondeai.svg', numLikes: '101.523' },
    { usuarioName: 'barked', usuarioUrl: 'assets/img/barked.svg', imageUrl: 'assets/img/dog.svg', likeName: 'adorable_animals', likeUrl: 'assets/img/adorable_animals.svg', numLikes: '99.159' },
    { usuarioName: 'barked', usuarioUrl: 'assets/img/barked.svg', imageUrl: 'assets/video/video.mp4', likeName: 'adorable_animals', likeUrl: 'assets/img/adorable_animals.svg', numLikes: '99.159' }
]


export default function Posts() {

    return (
        <div class="posts">
            {posts.map(post => <Post usuarioName={post.usuarioName} usuarioUrl={post.usuarioUrl} imageUrl={post.imageUrl} likeName={post.likeName} likeUrl={post.likeUrl} numLikes={post.numLikes} />)}

        </div>
    );
}
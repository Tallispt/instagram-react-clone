export default function FundoMobile() {

    let icons = [
        'home',
        'earch-outline',
        'add-circle-outline',
        'eart-outline',
        'person-outline'
    ]
    
    return (
        <div class="fundo-mobile">
            {icons.map(icon => <ion-icon name={icon}></ion-icon>)}
        </div>
    )
}
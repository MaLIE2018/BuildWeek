const showHomepage = () => {
    document.querySelector('.home-section').classList.remove('d-none')
    document.querySelector('.artist-section').classList.add('d-none')
    document.querySelector('.sidebar-footer-with-buttons').classList.remove('d-none')
    document.querySelector('.album-section').classList.add('d-none')
}

const showFavoritArtistpage = (event) => {
    event.preventDefault();
    console.log("test");
    window.open('artistpage.html', '_self')
    setTimeout(() => {
        console.log("test222");
        document.querySelector('.sidebar-footer').classList.remove('d-none')
    }, 200)

}

const login = () => {
    localStorage.setItem("LOGGED", "aosdifuaosdifuasodfi")
}

window.onload = function() {
    const isLogged = Boolean(localStorage.getItem("LOGGED"));
    console.log(isLogged)
}

const showAlbumpage = () => {
    document.querySelector('.artist-section').classList.add('d-none')
    document.querySelector('.album-section').classList.remove('d-none')

}
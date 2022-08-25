const loadAnime = () => {
    //fetch
    fetch('./assets/data/anime.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('data-umbi').innerHTML = ""

        const json = JSON.stringify(data.umbi);
        const result = JSON.parse(json);

        console.log(result);

        for (let i = 0; i < result.length; i++) {
            document.getElementById('data-umbi').innerHTML += `
            <div class="card">
                <img src="${result[i].img}" alt="">
                <div class="card-body">
                    <h4>${result[i].name}</h4>
                    <p>${result[i].skills}</p>
                </div>
            </div>`;
        }
    }).catch(err => {
        console.error(err);
    })
}
loadAnime()
let pokeApi;
(function(){
    const urlQuery = "https://pokeapi.co/api/v2/pokemon/"


    pokeApi = {
        urlQuery,
        call: function (url) {  
            return fetch(url)     
                    .then(res => res.json())
        },

        getPokemons: function () {
            let path = urlQuery
            return this.call(path).then(res =>  res.results )
        }

    }
})()
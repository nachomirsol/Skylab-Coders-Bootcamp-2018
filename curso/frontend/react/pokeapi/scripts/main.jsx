"use strict";
class App extends React.Component{
    constructor(){
        super()
        this.state = {
            pokemons:[],
            pokeInfo:[]

        }
    }

    componentWillMount = () => {// carga la peticion aunque no realicemos ningun evento
        //console.log(pokeApi.getPokemons)
        pokeApi.getPokemons()
        .then(param=>this.setState({pokemons:param}))
    }


    moreInfo = (url) => {
        pokeApi.call(url)
        .then(result => this.setState({pokeInfo:result}))
    }


    
    render(){
       return(
            <div className="container">
                <div className="jumbotron">
                    <span><h1 className="inline"> National Pokedex </h1> <img className="inline" src="https://img00.deviantart.net/efcb/i/2014/151/d/e/8_bit_pokeball_by_gabixlol-d7kg1ab.png" alt="" height="50px" width="50px"/></span>
                    <p>Search your favorite Pokemon and search information!</p>
                </div>
                    <div className="row justify-content-md-center">
                    {this.state.pokemons.map((poke)=> <div className="col-md-4"><div className="card" style={{width: '20rem',marginTop:"5rem"}}>
                    <img className="card-img-top" height="70px" src={`http://www.pokestadium.com/sprites/xy/${poke.name}.gif`} alt="Card image cap" />
                    <div className="card-block">
                    <h4 className="card-title">{poke.name}</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="" className="btn btn-primary" onClick = {(e)=> {e.preventDefault(), this.moreInfo(poke.url)}}>{poke.url}</a>
                    </div>
                </div></div>)}  
                </div>

	        </div>
            )  
        
        }


}
ReactDOM.render(<App />,document.getElementById('root'))

$("#searchButton").click(function(e){
    var name = $("#searchInput").val()
    getData(name)
});

$("#cleanButton").click(e=>{
    limpiar();
  })
  function limpiar(){
    $("#card").empty();
    $("#searchInput").focus();
  }
function getData(name){

    $.ajax({
    type:"GET",
    url: `https://pokeapi.co/api/v2/pokemon/${name}`

    }).done(function(data){
        console.log(data)
       var res = $("#card")
    res.append(`
        <div class="col-sm-12 col-md-3">
      <div class="card" style="width:100%;">
        <img src="${data.sprites.front_default}"  class="card-img-top img-fluid" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <div>experiencia : ${data.base_experience}</div>
          <div>Especie : ${data.types[0].type.name}</div>
        </div>
      </div>
    </div>
        `
    )
    }).fail(function(error){
        console.log(error);
    })
}



function getPokemonByAbilities(){

  $.ajax({
  type:"GET",
  url: `https://pokeapi.co/api/v2/ability/4`

  }).done(function(data){
      
      var ability = document.getElementById("abilityName");
      var table = document.getElementById("pokemonList")
    
        ability.innerText = data.name;
//if (tipo=1){for hacia tabla 1}
//if (tipo=2){for hacia tabla 2}
//if (tipo=3){for hacia tabla 3}
//if (tipo=4){for hacia tabla 4}
//if (tipo=5){for hacia tabla 5}
//if (tipo=6){for hacia tabla 6}
//if (tipo=7){for hacia tabla 7}
//if (tipo=8){for hacia tabla 8}
//for {for } utlizar con contador de for
//tipo 1--->llena tabla--->tipo 2>llena tabla2
      for (let index = 0; index < data.pokemon.length; index++) {
        table.innerHTML+=`
            <tr>
              <td>
                ${data.pokemon[index].pokemon.name}
              </td>
              <td>
                ${data.pokemon[index].pokemon.url}
              </td>
            </tr>
        `; 
      }
  }).fail(function(error){
      alert("Entró en el Fail de la llamada AJAX")
      console.log(error);
  })


}


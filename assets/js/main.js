$.ajax({
    type: "GET",
    dataType: "text",
    url: "https://pokeapi.co/api/v2/type/1",
})
.done(function (data) {
    var tipo = JSON.parse(data);
    var tabla = document.querySelector("#tabla1");
    var name = document.getElementById("name1");
    name.innerHTML = tipo.name;
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><button type="button" class="btn btn-primary" data-toggle="modal" 
        data-target="#pokemodal" data-enlace="${poke.pokemon.url}" 
        onclick="getPokemonDetails(this)">Atrapalo</button></td>
        </tr>
         `}
})
$.ajax({
    type: "GET",
    dataType: "text",
    url: "https://pokeapi.co/api/v2/type/2"
}).done(function (data) {
    var tipo = JSON.parse(data);
    var tabla = document.querySelector("#tabla2");
    var name = document.getElementById("name2");
    name.innerHTML = tipo.name;
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><button type="button" class="btn btn-primary" data-toggle="modal" 
        data-target="#pokemodal" data-enlace="${poke.pokemon.url}" 
        onclick="getPokemonDetails(this)">Atrapalo</button></td>
        </tr>
        `
    }
})
$.ajax({
    type: "GET",
    dataType: "text",
    url: "https://pokeapi.co/api/v2/type/3"
}).done(function (data) {
    var tipo = JSON.parse(data);
    var tabla = document.querySelector("#tabla3");
    var name = document.getElementById("name3");
    name.innerHTML = tipo.name;
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><button type="button" class="btn btn-primary" data-toggle="modal" 
        data-target="#pokemodal" data-enlace="${poke.pokemon.url}" 
        onclick="getPokemonDetails(this)">Atrapalo</button></td>
        </tr>
        `
    }
})
$.ajax({
    type: "GET",
    dataType: "text",
    url: "https://pokeapi.co/api/v2/type/4"
}).done(function (data) {
    var tipo = JSON.parse(data);
    var tabla = document.querySelector("#tabla4");
    var name = document.getElementById("name4");
    name.innerHTML = tipo.name;
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><button type="button" class="btn btn-primary" data-toggle="modal" 
        data-target="#pokemodal" data-enlace="${poke.pokemon.url}" 
        onclick="getPokemonDetails(this)">Atrapalo</button></td>
        </tr>
        `
    }
})
$.ajax({
    type: "GET",
    dataType: "text",
    url: "https://pokeapi.co/api/v2/type/5"
}).done(function (data) {
    var tipo = JSON.parse(data);
    var tabla = document.querySelector("#tabla5");
    var name = document.getElementById("name5");
    name.innerHTML = tipo.name;
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><button type="button" class="btn btn-primary" data-toggle="modal" 
        data-target="#pokemodal" data-enlace="${poke.pokemon.url}" 
        onclick="getPokemonDetails(this)">Atrapalo</button></td>
        </tr>
        `
    }
})
$.ajax({
    type: "GET",
    dataType: "text",
    url: "https://pokeapi.co/api/v2/type/6"
}).done(function (data) {
    var tipo = JSON.parse(data);
    var tabla = document.querySelector("#tabla6");
    var name = document.getElementById("name6");
    name.innerHTML = tipo.name;
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><button type="button" class="btn btn-primary" data-toggle="modal" 
        data-target="#pokemodal" data-enlace="${poke.pokemon.url}" 
        onclick="getPokemonDetails(this)">Atrapalo</button></td>
        </tr>
        `
    }
})
$.ajax({
    type: "GET",
    dataType: "text",
    url: "https://pokeapi.co/api/v2/type/7"
}).done(function (data) {
    var tipo = JSON.parse(data);
    var tabla = document.querySelector("#tabla7");
    var name = document.getElementById("name7");
    name.innerHTML = tipo.name;
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><button type="button" class="btn btn-primary" data-toggle="modal" 
        data-target="#pokemodal" data-enlace="${poke.pokemon.url}" 
        onclick="getPokemonDetails(this)">Atrapalo</button></td>
        </tr>
        `
    }
})
$.ajax({
    type: "GET",
    dataType: "text",
    url: "https://pokeapi.co/api/v2/type/8"
}).done(function (data) {
    var tipo = JSON.parse(data);
    var tabla = document.querySelector("#tabla8");
    var name = document.getElementById("name8");
    name.innerHTML = tipo.name;
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><button type="button" class="btn btn-primary" data-toggle="modal" 
        data-target="#pokemodal" data-enlace="${poke.pokemon.url}" 
        onclick="getPokemonDetails(this)">Atrapalo</button></td>
        </tr>
        `
    }
})
$.ajax({
    type: "GET",
    dataType: "text",
    url: "https://pokeapi.co/api/v2/type/9"
}).done(function (data) {
    var tipo = JSON.parse(data);
    var tabla = document.querySelector("#tabla9");
    var name = document.getElementById("name9");
    name.innerHTML = tipo.name;
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><button type="button" class="btn btn-primary" data-toggle="modal" 
        data-target="#pokemodal" data-enlace="${poke.pokemon.url}" 
        onclick="getPokemonDetails(this)">Atrapalo</button></td>
        </tr>
        `
    }
})
$.ajax({
    type: "GET",
    dataType: "text",
    url: "https://pokeapi.co/api/v2/type/10"
}).done(function (data) {
    var tipo = JSON.parse(data);
    var tabla = document.querySelector("#tabla10");
    var name = document.getElementById("name10");
    name.innerHTML = tipo.name;
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><button type="button" class="btn btn-primary" data-toggle="modal" 
        data-target="#pokemodal" data-enlace="${poke.pokemon.url}" 
        onclick="getPokemonDetails(this)">Atrapalo</button></td>
        </tr>
        `
    }
})
$.ajax({
    type: "GET",
    dataType: "text",
    url: "https://pokeapi.co/api/v2/type/11"
}).done(function (data) {
    var tipo = JSON.parse(data);
    var tabla = document.querySelector("#tabla11");
    var name = document.getElementById("name11");
    name.innerHTML = tipo.name;
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><button type="button" class="btn btn-primary" data-toggle="modal" 
        data-target="#pokemodal" data-enlace="${poke.pokemon.url}" 
        onclick="getPokemonDetails(this)">Atrapalo</button></td>
        </tr>
        `
    }
})
$.ajax({
    type: "GET",
    dataType: "text",
    url: "https://pokeapi.co/api/v2/type/12"
}).done(function (data) {
    var tipo = JSON.parse(data);
    var tabla = document.querySelector("#tabla12");
    var name = document.getElementById("name12");
    name.innerHTML = tipo.name;
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><button type="button" class="btn btn-primary" data-toggle="modal" 
        data-target="#pokemodal" data-enlace="${poke.pokemon.url}" 
        onclick="getPokemonDetails(this)">Atrapalo</button></td>
        </tr>
        `
    }
})
$.ajax({
    type: "GET",
    dataType: "text",
    url: "https://pokeapi.co/api/v2/type/13"
}).done(function (data) {
    var tipo = JSON.parse(data);
    var tabla = document.querySelector("#tabla13");
    var name = document.getElementById("name13");
    name.innerHTML = tipo.name;
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><button type="button" class="btn btn-primary" data-toggle="modal" 
        data-target="#pokemodal" data-enlace="${poke.pokemon.url}" 
        onclick="getPokemonDetails(this)">Atrapalo</button></td>
        </tr>
        `
    }
})
$.ajax({
    type: "GET",
    dataType: "text",
    url: "https://pokeapi.co/api/v2/type/14"
}).done(function (data) {
    var tipo = JSON.parse(data);
    var tabla = document.querySelector("#tabla14");
    var name = document.getElementById("name14");
    name.innerHTML = tipo.name;
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><button type="button" class="btn btn-primary" data-toggle="modal" 
        data-target="#pokemodal" data-enlace="${poke.pokemon.url}" 
        onclick="getPokemonDetails(this)">Atrapalo</button></td>
        </tr>
        `
    }
})
$.ajax({
    type: "GET",
    dataType: "text",
    url: "https://pokeapi.co/api/v2/type/15"
}).done(function (data) {
    var tipo = JSON.parse(data);
    var tabla = document.querySelector("#tabla15");
    var name = document.getElementById("name15");
    name.innerHTML = tipo.name;
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><button type="button" class="btn btn-primary" data-toggle="modal" 
        data-target="#pokemodal" data-enlace="${poke.pokemon.url}" 
        onclick="getPokemonDetails(this)">Atrapalo</button></td>
        </tr>
        `
    }
})
$.ajax({
    type: "GET",
    dataType: "text",
    url: "https://pokeapi.co/api/v2/type/16"
}).done(function (data) {
    var tipo = JSON.parse(data);
    var tabla = document.querySelector("#tabla16");
    var name = document.getElementById("name16");
    name.innerHTML = tipo.name;
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><button type="button" class="btn btn-primary" data-toggle="modal" 
        data-target="#pokemodal" data-enlace="${poke.pokemon.url}" 
        onclick="getPokemonDetails(this)">Atrapalo</button></td>
        </tr>
        `
    }
})
$.ajax({
    type: "GET",
    dataType: "text",
    url: "https://pokeapi.co/api/v2/type/17"
}).done(function (data) {
    var tipo = JSON.parse(data);
    var tabla = document.querySelector("#tabla17");
    var name = document.getElementById("name17");
    name.innerHTML = tipo.name;
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><button type="button" class="btn btn-primary" data-toggle="modal" 
        data-target="#pokemodal" data-enlace="${poke.pokemon.url}" 
        onclick="getPokemonDetails(this)">Atrapalo</button></td>
        </tr>
        `
    }
})
$.ajax({
    type: "GET",
    dataType: "text",
    url: "https://pokeapi.co/api/v2/type/18"
}).done(function (data) {
    var tipo = JSON.parse(data);
    var tabla = document.querySelector("#tabla18");
    var name = document.getElementById("name18");
    name.innerHTML = tipo.name;
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><button type="button" class="btn btn-primary" data-toggle="modal" 
        data-target="#pokemodal" data-enlace="${poke.pokemon.url}" 
        onclick="getPokemonDetails(this)">Atrapalo</button></td>
        </tr>
        `
    }
})

function getPokemonDetails(element){
    let detailUrl = element.getAttribute("data-enlace");
    $.ajax({
      type:"GET",
      url: detailUrl
      }).done(function(data){
        //console.log(data.name);
        document.getElementById("pokeName").innerHTML = data.name;
        document.getElementById("pokeNum").innerHTML = data.id;
        document.getElementById("altura").innerHTML = data.height/10;
        document.getElementById("peso").innerHTML = data.weight/10;
        document.getElementById("expBase").innerHTML = data.base_experience;
        document.getElementById("cantHab").innerHTML = data.abilities.length;
        document.getElementById("pokenum2").innerHTML = data.moves.length;
        var lista = document.querySelector("#listMov") ;
        lista.innerHTML="";
        for (var movimiento of data.moves) {
          //console.log(movimiento.move.name);
             lista.innerHTML +=`
            <tr>
            <td>"${movimiento.move.name}"</td>
            </tr>
            `
        }

        var lista2 = document.querySelector("#listTip") ;
        lista2.innerHTML = " ";
        for (var tip of data.types) {
          //console.log(movimiento.move.name);
          //Te esta sumando a la lista de uno, la del pokemon anterior o:
         
          lista2.innerHTML +=`
            <tr>
            <td>"${tip.type.name}"</td>
            </tr>
            `
        }

        document.getElementById("pokeImg").innerHTML = `
        <img src="${data.sprites.front_default}"  style = "width: 85%; height: 85%;"/>
        `  
      }).fail(function(error){
        alert("Algo va mal");
      })
  }
 
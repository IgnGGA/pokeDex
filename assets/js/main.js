$.ajax({
    type: "GET",
    dataType: "text",
    url: "https://pokeapi.co/api/v2/type/1",
})
.done(function (data) {
    var tipo = JSON.parse(data);
    var tabla = document.querySelector("#tabla1");
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><a href="${poke.pokemon.url}">"atrapalo"</a></td>
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
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><a href="${poke.pokemon.url}">"atrapalo"</a></td>
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
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><a href="${poke.pokemon.url}">"atrapalo"</a></td>
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
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><a href="${poke.pokemon.url}">"atrapalo"</a></td>
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
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><a href="${poke.pokemon.url}">"atrapalo"</a></td>
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
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><a href="${poke.pokemon.url}">"atrapalo"</a></td>
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
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><a href="${poke.pokemon.url}">"atrapalo"</a></td>
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
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><a href="${poke.pokemon.url}">"atrapalo"</a></td>
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
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><a href="${poke.pokemon.url}">"atrapalo"</a></td>
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
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><a href="${poke.pokemon.url}">"atrapalo"</a></td>
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
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><a href="${poke.pokemon.url}">"atrapalo"</a></td>
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
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><a href="${poke.pokemon.url}">"atrapalo"</a></td>
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
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><a href="${poke.pokemon.url}">"atrapalo"</a></td>
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
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><a href="${poke.pokemon.url}">"atrapalo"</a></td>
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
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><a href="${poke.pokemon.url}">"atrapalo"</a></td>
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
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><a href="${poke.pokemon.url}">"atrapalo"</a></td>
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
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><a href="${poke.pokemon.url}">"atrapalo"</a></td>
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
    for (var poke of tipo.pokemon) {
        tabla.innerHTML +=`
        <tr>
        <td>"${poke.pokemon.name}"</td>
        <td><a href="${poke.pokemon.url}">"atrapalo"</a></td>
        </tr>
        `
    }
})
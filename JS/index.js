document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){
    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}










//BUscador de contenido

//ejecucion de funciones
document.getElementById('icon-search').addEventListener('click', mostrar_buscador);
document.getElementById('cover-ctn-search').addEventListener('click', ocultar_buscador);
document.getElementById('inputSearch').addEventListener('keyup', buscar_interno);

//Declaracion de variables

bars_search = document.getElementById('ctn-bars-search');
cover_ctn_search = document.getElementById('cover-ctn-search');
input_search = document.getElementById('inputSearch');
box_search = document.getElementById('box-search');


//Evento de click para mostrar el buscador
function mostrar_buscador(){
    bars_search.style.top = '80px';
    cover_ctn_search.style.display = 'block';
    input_search.focus();
}

//funcion para ocultar el buscador

function ocultar_buscador(){
    bars_search.style.top = '-10px';
    cover_ctn_search.style.display = 'none';
    input_search.value = '';
    box_search.style.display = 'none';
}



//creando filtrado de busqueda

function buscar_interno(){
    filter = input_search.value.toUpperCase();
    li = box_search.getElementsByTagName('li');

    //recorriendo elementos a filtrar mediante los li
    for (i = 0; i < li.length; i++){
        a = li[i].getElementsByTagName('a')[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = '';
            box_search.style.display = 'block';

            if(input_search.value === ''){
                box_search.style.display = 'none';
            }
        }else{
            li[i].style.display = 'none';
        }
    }
}

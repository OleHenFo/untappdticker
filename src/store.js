import { writable } from 'svelte/store';

let storedToken = localStorage.getItem("auth_token");
if (storedToken==null||storedToken==0||storedToken==""){
  storedToken = 0;
}

export let auth_token = writable(storedToken);
auth_token.subscribe(value => {
  localStorage.setItem("auth_token", value );
});


export let code = writable(0);
export let venue = writable(0);

let storedCheckins = JSON.parse(localStorage.getItem("checkins"));
if (storedCheckins==null||storedCheckins==0||storedCheckins==""||storedCheckins==[]||storedCheckins=={}){
  storedCheckins = [];
}
export let checkins = writable(storedCheckins);
checkins.subscribe(value => {
  localStorage.setItem("checkins", JSON.stringify(value) );
});
Object.defineProperty(String.prototype, 'capitalize', {
    value: function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
  });

function mark(word){
    for (let w of [word.toLowerCase(), word.toUpperCase(), word.capitalize()]){
		console.log(w);
        document.body.innerHTML = document.body.innerHTML.replaceAll(w,'<span class="'+ w.toLowerCase() +'">'+w+'</span>');
    }
}


function add_btn(options){
    let btn = document.createElement("button");
    btn.innerHTML = "Highlight Log";
    btn.type = "submit";
    btn.name = "formBtn";
    btn.id = "mark_btn";
    btn.onclick = function(){
		console.log(options); 	
		for ( let opt of options){
			mark(opt);
		}
        // mark('fail')
        //mark('error')
        //mark('complete')
        //mark('success')
    };
    document.body.prepend(btn);
    
}


const options = ['fail', 'error', 'complete', 'success', 'debug', 'warning', 'info', 'critical', 'destroy', 'create'];
add_btn(options);
console.log("mark ext loaded");

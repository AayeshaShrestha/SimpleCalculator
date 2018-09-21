function insert(num){
  document.form.textview.value = document.form.textview.value + num;
}

function equal(){
	document.form.textview.value = eval(document.form.textview.value);
}

function back(){
	var v = document.form.textview.value;
	document.form.textview.value = v.substring(0,v.length-1);
}

function clean(){
	document.form.textview.value = "";
}
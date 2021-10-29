function post (){
  
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    
    e.preventDefault(); //eはeventのe、慣例的にeが使われるが指定はどんな文字列でも問題ない。
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
  });
};

window.addEventListener('load', post);
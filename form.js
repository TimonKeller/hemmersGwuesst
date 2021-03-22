var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var btn = document.getElementById("subBtn")
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Danke für dini Nachricht!";
        btn.style= "display: none";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! Es het wohl es Problem geh!"
      });
    }
    form.addEventListener("submit", handleSubmit)

    function myFunction() {
      var dots = document.getElementById("dots");
      var moreText = document.getElementById("more");
      var btnText = document.getElementById("myBtn");
    
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Meh";
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Weniger";
        moreText.style.display = "inline";
      }
    }
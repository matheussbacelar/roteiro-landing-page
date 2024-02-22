
var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 84,
    sliderPerGroup: 4,
    loop: false,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    

  });

  const form = document.querySelector("form"),
  statusTxt = form.querySelector(".button-area span");
  form.onsubmit = (e)=>{
    e.preventDefault();
    statusTxt.style.display = "block";

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "message.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState == 4 && xhr.status == 200){
        let response = xhr.response;

        if(response.indexOf("Precisa de um e-mail válido.") != -1 || response.indexOf("Sua mensagem não foi enviada.") || response.indexOf("Todos os campos precisam ser preenchidos.")){
          statusTxt.style.color = "red";
        }else{
          form.reset();
          setTimeout(()=>{
            statusTxt.style.display = "none";
          }, 3000);
        }

        statusTxt.innerText = response;
      }
    }
    let formData = new FormData(form);
    xhr.send(formData);
  }
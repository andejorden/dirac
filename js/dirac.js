function onLoad(){
    let details = document.querySelectorAll("details");
// Add the onclick listeners.
details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
      // Close all the details that are not targetDetail.
      details.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute("open");
        }
      });
    });
  });
}

function startTheDance(detaliu){
    let details = document.querySelectorAll("details");
    let index = document.detaliu.getAtribute("href");
    console.log(index);
}
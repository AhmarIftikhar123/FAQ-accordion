const click = document.querySelectorAll(".question img");

let show_animation = (answer) => {
  gsap.from(answer, {
    opacity: 0,
    duration: 0.75,
  });
};

click.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let answer = e.target.parentElement.nextElementSibling;
    answer.classList.toggle("checked");

    show_animation(answer);

    let isQuestion_appear = btn.dataset.appear === "true";

    if (isQuestion_appear) {
      btn.src = "assets/images/icon-plus.svg";
      btn.dataset.appear = "flase";
    } else {
      btn.src = "assets/images/icon-minus.svg";
      btn.dataset.appear = "true";
    }
  });
});

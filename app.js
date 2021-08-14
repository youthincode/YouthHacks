document.getElementById("day1").classList.add("dateButtonActive");

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active"); //enables or disables it depending on what it already is
    burger.classList.toggle("toggle");
  });
};

navSlide();

const displaySchedule = (id) => {
  const buttons = document.getElementsByClassName("dateButton");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("dateButtonActive");
  }
  document.getElementById(id).classList.add("dateButtonActive");

  idNum = id.substring(id.length - 1);

  let eventLists = document.getElementsByClassName("eventList");
  for (let i = 0; i < eventLists.length; i++) {
    eventLists[i].hidden = true;
  }
  document.getElementById(`eventList:${idNum}`).hidden = false;
};

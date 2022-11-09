const roflBtn = document.querySelector(".rfl-btn");
const menuItms = document.querySelectorAll(".menu__item");
const menu = document.querySelector(".menu");
const secretInp = document.querySelector(".modal__secret-inp");
const range = document.querySelector(".range");
const benBtn = document.querySelector(".ben-btn");
const benBtnImg = benBtn.querySelector("img");
const modal = document.querySelector(".modal");
const modalBtns = document.querySelectorAll(".modal__buttons button");
const modalImg = document.querySelector(".modal__content img");
const dialog = modal.querySelector("h1");

// https://pnrtscr.com/4ci90a <- мб поможет?

const createLightSword = () => {
  if (document.querySelector(".sword")) return;
  const sword = document.createElement("div");
  sword.innerHTML = `
	<input id="vader" class="chk" type="checkbox"/>
		<label for="vader" class="vader-saber"> 
				<div class="sword blue">
		</label>`;
  document.body.append(sword);
  const classChangeWatcher = new MutationObserver((mutations, observer) => {
    const classes = mutations[0].target.classList.value.split(" ");
    if (classes.includes("red")) {
      alert("Правильный выбор!");
      benBtn.removeEventListener("click", handleChoiceNotMade);
      benBtn.addEventListener("click", handleBenCall);
    }
  });
  classChangeWatcher.observe(sword.querySelector(".sword"), {
    attributes: true,
  });
};

let counter = 0;
const handleRotate = () => {
  const degs = [0, 180, 360];
  const ranDeg = degs[Math.floor(Math.random() * degs.length)];

  if (counter === 5) {
    menu.style.transform = `rotate(90deg)`;
    range.style.display = "block";
    range.style.opacity = 1;
    benBtn.style.display = "flex";
    counter = 0;
    return;
  }

  range.style.opacity = 0;
  range.style.display = "none";
  benBtn.style.display = "none";
  menu.style.transform = `rotate(${ranDeg}deg)`;
  counter++;
};
menuItms.forEach((item) => item.addEventListener("click", handleRotate));

const phrases = [
  "Да пребудет с тобой Сила.",
  "Используй силу, Люк!",
  "Внимание управляет реальностью.",
  "Переходи на тёмную сторону!",
];
let currentPhrase = 0;
const handleRofl = (e) => {
  const btn = e.target;
  btn.style.position = "absolute";
  btn.style.top = `${Math.random() * 80}%`;
  btn.style.left = `${Math.random() * 80}%`;
  if (currentPhrase == phrases.length - 1) {
    btn.innerText = phrases[currentPhrase];
    createLightSword();
    return;
  }
  btn.innerText = phrases[currentPhrase];
  currentPhrase++;
};
const handleRoflClick = (e) => {
  e.preventDefault();
  const btn = e.target;
  currentPhrase = 3;
  btn.innerText = phrases[currentPhrase];
  alert("sword blue = sword (color)");
  createLightSword();
};
roflBtn.addEventListener("mouseenter", handleRofl);
roflBtn.addEventListener("click", handleRoflClick);

let btnOrder = 0;
const handleRange = (e) => {
  const value = e.target.value;
  btnOrder = value;
  benBtnImg.src = `static/assets/icon/${value}call.png`;
};
range.addEventListener("change", handleRange);

function handleBenCall(e) {
  const order = this.dataset.order;

  if (order == btnOrder) {
    modal.classList.add("modal--active");
  }
}
function handleChoiceNotMade() {
  alert("Ты еще не сделал выбор!");
}
const handleCloseModal = (e) => {
  if (e.target == modal) {
    modal.classList.remove("modal--active");
  }
};
const handleClickYes = () => {
	secretInp.value = "";
  secretInp.style.display = "block";
  modalImg.src = "static/assets/img/ben-ho-ho-ho.gif";
  dialog.innerText = "I KNOW HO-HO-HO";
	modalBtns.forEach(btn => btn.style.display = 'none')
};
benBtn.addEventListener("click", handleChoiceNotMade);
modalBtns[1].addEventListener("click", handleClickYes);
modal.addEventListener("click", handleCloseModal);

const badPhrases = [
  "Боже ты крип крипочек",
  "Кринжанул...",
  "Не повезло не повезло :(",
  "Турбо насрал",
];
const handleKeydown = (e) => {
  if (e.key === "Enter") {
    fetch(`${window.location.href}${secretInp.value.replace("/", "")}`).then(
      (r) => {
        const flag = Object.fromEntries([...r.headers]).login;
        if (flag) {
          secretInp.value = "Чекай ответ с сервера";
					modalImg.src = "static/assets/img/ben-yes.gif"
					dialog.innerText = "YES";
        } else {
          secretInp.value = badPhrases[Math.floor(Math.random() * badPhrases.length)];
					modalImg.src = `static/assets/img/ben-no${Math.floor(Math.random() * 2)+1}.gif`
					dialog.innerText = "NO";
        }
      }
    );
  }
};
secretInp.addEventListener("keydown", handleKeydown);

localStorage.setItem(
  "SecretUrl",
  "https://1drv.ms/w/s!Ak-qouplFmsmgnOyIzwIWtV7vek3?e=UM5vka"
);
document.cookie = "krasava= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";

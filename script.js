/* Iteration 4: Make the Everything Work */
// Wonder Woman - background, hair, body, armour, costume, star, eyes
const bg = document.getElementById('background');
const hair = document.getElementById('hair');
const body = document.getElementById('body');
const armour = document.getElementById('armour');
const costume = document.getElementById('costume');
const star = document.getElementById('star');
const eyes = document.getElementById('eyes');

const bt_bg = document.getElementById('button-background');
const bt_hair = document.getElementById('button-hair');
const bt_body = document.getElementById('button-body');
const bt_armour = document.getElementById('button-armour');
const bt_costume = document.getElementById('button-costume');
const bt_star = document.getElementById('button-star');
const bt_eyes = document.getElementById('button-eyes');

bt_bg.oninput = () => {
  bg.style.fill = bt_bg.value;
};
bt_hair.oninput = () => {
  hair.style.fill = bt_hair.value;
};
bt_body.oninput = () => {
  body.style.fill = bt_body.value;
};
bt_armour.oninput = () => {
  armour.style.fill = bt_armour.value;
};
bt_costume.oninput = () => {
  costume.style.fill = bt_costume.value;
};
bt_star.oninput = () => {
  star.style.fill = bt_star.value;
};
bt_eyes.oninput = () => {
  eyes.style.fill = bt_eyes.value;
};
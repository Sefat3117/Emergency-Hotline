// Heart Icon Functionality
const heartValue = document.getElementById('heart-value');
let convertedHeartValue = parseInt(
  document.getElementById('heart-value').innerText
);

const heartIcons = document.querySelectorAll('.heart-icon');

for (const icon of heartIcons) {
  icon.addEventListener('click', function () {
    convertedHeartValue = convertedHeartValue + 1;
    heartValue.innerText = convertedHeartValue;
  });
}

// Call Button Functionality

let coinValue = document.getElementById('coinValue');
let convertedCoinValue = parseInt(
  document.getElementById('coinValue').innerText
);

const callButtons = document.querySelectorAll('.call-btn');
for (const button of callButtons) {
  button.addEventListener('click', function () {
    let category = button.parentNode.parentNode.childNodes[5].innerText;
    let number = button.parentNode.parentNode.childNodes[7].innerText;

    alert(`Calling ${category} ${number}........`);

    if (convertedCoinValue < 20) {
      alert('Your coin is less than 20, Please recharge');
      return;
    } else {
      convertedCoinValue = convertedCoinValue - 20;
    }

    coinValue.innerText = convertedCoinValue;

    const serviceName = button.parentNode.parentNode.childNodes[3].innerText;
    console.log(serviceName);

    const historyContainer = document.getElementById('call-history-container');

    const history = document.createElement('div');
    history.classList.add(
      'flex',
      'justify-between',
      'items-center',
      'bg-[#FAFAFA]',
      'p-5',
      'rounded-lg'
    );
    let now = new Date();
    history.innerHTML = `
          <div>
            <p class='font-bold font-hind text-[18px]'>${serviceName}</p>
            <p class='font-hind text-[18px] text-[#5C5C5C]'>${number}</p>
          </div> 
        <div class='font-hind text-[18px] text-[#111]'>${now.toLocaleTimeString()}</div>      
    `;

    historyContainer.appendChild(history);

    document.getElementById('clear-btn').addEventListener('click', function () {
      history.innerText = '';
    });
  });
}

// Copy Button Functionality
const copyBtns = document.getElementsByClassName('copy-btn');

for (const btn of copyBtns) {
  btn.addEventListener('click', function () {
    const number = btn.parentNode.parentNode.childNodes[7].innerText;

    navigator.clipboard.writeText(number);
    alert(`নম্বর কপি হয়েছে : ${number}`);

    const copyCount = document.getElementById('copyCountBtn');
    let convertedCopyCount = parseInt(
      document.getElementById('copyCountBtn').innerText
    );

    convertedCopyCount = convertedCopyCount + 1;

    copyCount.innerText = convertedCopyCount;
    console.log(convertedCopyCount);
  });
}

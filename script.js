const currency1 = document.getElementById('curr');
const currency2 = document.getElementById('curr2');
const equal_1 = document.getElementById('equal1');
const equal_2 = document.getElementById('equal2');

const rate1 = document.getElementById('rate');
const convert = document.getElementById('convert');

function calculate() {
    const curr = currency1.value;
    const curr2 = currency2.value;

    fetch('https://api.fastforex.io/fetch-one?api_key=a4dfc01e84-ce4302f583-r6ojcl', curr)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
}

currency1.addEventListener('change', calculate);
currency2.addEventListener('change', calculate);
equal_1.addEventListener('input', calculate);
equal_2.addEventListener('input', calculate);

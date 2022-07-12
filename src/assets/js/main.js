import fetchAdvice from './modules/fetchAdvice';
import '../css/styles.css'

const URL = 'https://api.adviceslip.com/advice';

const contentTitle = document.querySelector('.content h1');
const contentText = document.querySelector('.content p');
const fetchButton = document.querySelector('.circle');

const insertData = ({id, advice}) => {
  contentTitle.innerHTML = `advice #${id}`;
  contentText.innerHTML = advice;
}

const init = async () => {
  const {slip} = await fetchAdvice(URL);
  insertData(slip);
}

document.addEventListener('DOMContentLoaded', init)
fetchButton.addEventListener('click', init)

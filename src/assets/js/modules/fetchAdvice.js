const fetchAdvice = async(URL) => {
  const data = await fetch(URL);
  const json = await data.json();
  return json;
}

export default fetchAdvice;
const firstNames = ["Ali", "Hasan", "Murat", "Naim", "Osman", "Kerem", "Kardelen", "Selin", "Leyla", "Nazlı"];
const lastNames = ["Kaya", "Ateş", "Taş", "Yılmaz", "Temiz", "Çakır", "Bakır", "King", "Uzun", "Kısa"];

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generateRandomName() {
  const randomFirstName = getRandomElement(firstNames);
  const randomLastName = getRandomElement(lastNames);
  const fullName = `${randomFirstName} ${randomLastName}`;
  return fullName;
}

const randomName = generateRandomName();

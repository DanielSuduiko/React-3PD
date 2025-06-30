const firstNames = [
  'Lukas', 'Mantas', 'Gabija', 'Ieva', 'Tomas', 'Austėja', 'Dovydas', 'Emilija', 'Rokas', 'Ugnė',
  'Jonas', 'Karolina', 'Paulius', 'Eglė', 'Dominykas', 'Aistė', 'Dainius', 'Greta', 'Vilius', 'Justė'
];

const lastNames = [
  'Petrauskas', 'Kazlauskas', 'Jankauskas', 'Stankevičius', 'Vasiliauskas',
  'Butkus', 'Žukauskas', 'Balčiūnas', 'Savickas', 'Kavaliauskas',
  'Barauskas', 'Gailius', 'Bagdonas', 'Rimkus', 'Pocius', 'Rutkauskas',
  'Brazas', 'Urbonas', 'Malinauskas', 'Sakalauskas'
];

const cities = [
  'Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai', 'Panevėžys',
  'Alytus', 'Marijampolė', 'Mažeikiai', 'Jonava', 'Utena'
];

const users = Array.from({ length: 100 }, (_, index) => {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const name = `${firstName} ${lastName}`;

  return {
    id: index + 1,
    name,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${index + 1}@example.com`,
    address: {
      city: cities[Math.floor(Math.random() * cities.length)]
    }
  };
});

export default users;

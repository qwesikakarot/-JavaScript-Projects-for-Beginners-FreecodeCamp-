
//Generates Password from a given sentence
const genPass = () => {
  let words = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!$%^&*()_-+'
  let result = [];
  let pass = words.replace(/\s+/g, '');
  let passLength = pass.length;

  for (let i = 0; i < passLength; i++) {
      result += words.charAt(Math.floor(Math.random() * passLength));

      if (i === 10) {
          break
      }


  }

  document.getElementById('Password').innerHTML = `${result}`;
  return result;




}
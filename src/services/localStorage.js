const save = (key, data) => {
  try {
    const result = JSON.stringify(data);
    localStorage.setItem(key, result);
  } catch (error) {
    console.log(error);
  }
};

const load = key => {
  try {
    const result = localStorage.getItem(key);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const localStor = { save, load };
export default localStor;

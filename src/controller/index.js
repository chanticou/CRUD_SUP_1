//LOGICA

let characters = [];

module.exports = {
  handleCreate: function ({
    name,
    lastname,
    dateOfBirth,
    yearOfBirth,
    isMuggle,
  }) {
    const houseId = characters.length
      ? characters[characters.length - 1].houseId + 1
      : 1;

    let find = characters.find((el) => el.lastname === lastname);

    if (find) throw new Error("Usuario ya existente");

    characters.push({
      houseId,
      name,
      lastname,
      dateOfBirth,
      yearOfBirth,
      isMuggle,
      wand: {},
    });

    return "user created";
  },

  handleRead: function (id) {
    id = parseInt(id);
    if (id) {
      const persona = characters.find((el) => el.houseId === id);
      if (!persona) throw new Error("ERROR PEROSNA NO ENCONTRDA");
      console.log(persona);
      return persona;
    }

    console.log("no entro al if");
    return characters;
  },

  handleUpdate: function () {},
};

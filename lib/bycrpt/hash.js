import bcrypt from "bcrypt";

const bcryptHash = async (PlaintextPassword) => {
  const saltRounds = 12;
  try {
    const hash = await bcrypt.hash(PlaintextPassword, saltRounds);
    return hash;
  } catch (err) {
    console.log(err);
  }
};
export default bcryptHash;

import bcrypt from "bcrypt";

const bcryptCompare = async (PlaintextPassword, hash) => {
  try {
    const compare = bcrypt.compareSync(PlaintextPassword, hash);
    return compare;
  } catch (err) {
    console.log(err);
  }
};
export default bcryptCompare;

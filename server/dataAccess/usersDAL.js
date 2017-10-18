import User from './models/user';

async function save(model) {
  const user = new User({
    ...model,
  });

  const savedUser = await user.save();
  return savedUser;
}

async function findAndUpdatePassword(model) {
  const { authId, password } = model;

  const user = await User.findOneAndUpdate(
    {
      authId,
    },
    {
      $set: {
        password,
      },
    },
    { returnNewDocument: true },
  );

  return user;
}

export default {
  save,
  findAndUpdatePassword,
};

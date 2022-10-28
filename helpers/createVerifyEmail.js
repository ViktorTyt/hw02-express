const { BASE_URL } = process.env;

const createVerifyEmail = (email, verificationToken) => {
  const mail = {
    to: email,
    subject: "Підтвердження рестрації на сайті",
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">Please, confirm your email</a>`,
  };

  return mail;
};

module.exports = createVerifyEmail;

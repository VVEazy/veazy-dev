im.mask(selector);
const validation = new JustValidate(".form__valid");
validation
  .addField("#name", [
    {
      rule: "minLength",
      value: 2,
      errorMessage: "Минимальное количество 2 символа!",
    },
    {
      rule: "required",
      errorMessage: "Вы не ввели телефон",
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Вы не ввели e-mail",
    },
    {
      rule: "email",
      errorMessage: "Неверный email адрес!",
    },
  ]);

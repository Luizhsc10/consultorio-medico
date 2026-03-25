import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

const TOKEN = "6e33bea3af21ed681057abe7b0e870a6";

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Luiz Henrique Silveira Campos",
};

const recipients = [
  {
    email: "codexxagency@gmail.com",
  },
];

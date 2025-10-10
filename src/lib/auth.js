import { Account,ID } from "appwrite";

import { client } from "./appwrite";

const account = new Account(client);


const result = await account.create({
    userId:ID.unique(),
})

export { account ,result};

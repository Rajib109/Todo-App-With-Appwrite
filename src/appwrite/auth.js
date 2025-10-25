import { Client, Account, ID } from 'appwrite';

import conf from '../conf/conf.js';

export class AuthService {
    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.projectid);
            this.account = new Account(this.client);
    }

    async createAccount(email, password, name) {
       try {
         const user = await this.account.create({
             userId: ID.unique(),
             email,
             password,
             name
         });
         if(user){
            return await this.login(email, password);
         }
         else{
                console.log('Account creation failed');
         }
       } catch (error) {
        console.error('Error creating account: in createAccount()::', error);
        throw error;
       }
    }

    async login(email, password) {
        try {
            const session = await this.account.createEmailSession(email, password);
            if (session) {
                return session;
            } else {
                console.log('Login failed');
            }
        } catch (error) {
            console.error('Error logging in: in login() ::', error);
            throw error;
        }
    }
    async getAccount() {
        try {
            const account = await this.account.get();
            if (account) {
                return account;
            } else {
                console.log('No account found');
            }
        } catch (error) {
            console.log('Error getting account: in getAccount()::', error);
            throw error;
        }
        return null;
    }
    async logout() {
        try {
            const response = await this.account.deleteSession('current');
            if (response) {
                console.log('Logout successful:', response);
            } else {
                console.log('Logout failed');
            }
        } catch (error) {
            console.error('Error logging out: in logout()::', error);
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;
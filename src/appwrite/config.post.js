import { Client, ID, TablesDB } from "appwrite";

import conf from "../conf/conf.js";

export class ConfigService {
  client = new Client();
  databases;

  constructor() {
    this.client.setEndpoint(conf.appwriteurl).setProject(conf.projectid);
    this.databases = new TablesDB(this.client);
  }

  async createRow(title, description, isComplete) {
    try {
      const row = await this.databases.createRow({
        databaseId: conf.databaseid,
        tableId: conf.tableid,
        rowID: ID.unique(),
        data: {
          title,
          description,
          isComplete,
        },
      });
      if (row) {
        return row;
      } else {
        console.log("Row creation failed");
      }
    } catch (error) {
      console.error("Error creating row: in createRow()::", error);
      throw error;
    }
  }
  async getRows() {
    try {
      const rows = await this.databases.listRows({
        databaseId: conf.databaseid,
        tableId: conf.tableid,
      });
      if (rows) {
        return rows;
      } else {
        console.log("No rows found");
      }
    } catch (error) {
      console.error("Error fetching rows: in getRows()::", error);
      throw error;
    }
  }
}

const configService = new ConfigService();

export default configService;

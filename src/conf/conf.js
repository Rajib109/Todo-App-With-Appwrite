const conf = {
    appwriteurl: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    projectid: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    databaseid: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    collectionid: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    bucketid: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    projectname: String(import.meta.env.VITE_APPWRITE_PROJECT_NAME)
}

export default conf;

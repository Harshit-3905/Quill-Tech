const config = {
  appwriteURL: String(import.meta.env.VITE_APP_APPWRITE_URL),
  appwriteProjectID: String(import.meta.env.VITE_APP_APPWRITE_PROJECT_ID),
  appwriteDatabaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  tinymceAPIKey: String(import.meta.env.VITE_APP_TINYMCE_API_KEY),
};

export default config;

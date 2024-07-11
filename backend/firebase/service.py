import firebase_admin
from firebase_admin import firestore, credentials

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

def get_firestore_data(collection_name):
    try:
        docs = db.collection(collection_name).get()
        data = [doc.to_dict() for doc in docs]
        return data
    except Exception as e:
        raise Exception(f"Error getting data from Firestore: {str(e)}")

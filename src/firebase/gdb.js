import { getFirestore, collection, getDocs, query, where, getDoc, doc, addDoc } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getItems = async () =>{
const querySnapshot = await getDocs(collection(db, "item"))
const items = []
querySnapshot.forEach((doc) => {
    items.push({...doc.data(), id: doc.id})
})

return items
}

export const getItemCat = async(category) =>{
const q = query(collection(db, "item"), where("category", "==", category))
const querySnapshot = await getDocs(q)
const items =[]
querySnapshot.forEach((doc) => {
    items.push({...doc.data(), id: doc.id})
});

return items
}

export const getItem = async (id) =>{

    const docRef = doc(db, "item", id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    return {...docSnap.data(), id: docSnap.id}
} else {
    return undefined
}
}

export const clientOrder = async (orden) => {

await addDoc(collection(db, "orders"), orden)
}


export const getAllCategories = async () => {
  const col = collection(db, "item")
  const querySnapshot = await getDocs(col)

  const categorias = new Set()

  querySnapshot.forEach((doc) => {
    const data = doc.data()
    if (data.category) {
      categorias.add(data.category)
    }
  })

  return [...categorias]
}
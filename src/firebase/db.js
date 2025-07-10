import { getFirestore, collection, getDocs, doc, getDoc, addDoc } from "firebase/firestore"
import { app } from './config'

const db= getFirestore(app)

export const getProducts = async () => {
    const documentos= await getDocs(collection(db, "productos"))
    const productos = []

    documentos.forEach((doc) => {
        productos.push({...doc.data(), id: doc.id})
    })

    return productos
}

export const getProduct = async (id) => {
    const docRef = doc(db, "productos", id)
    const documento = await getDoc(docRef)

    if (documento.exists()) {
        return {...documento.data(), id: documento.id}
    } else {
        return null
    }
}

export const getCategories = async () => {
    const documentos = await getDocs(collection(db, "productos"))
    const categoriasSet = new Set()

    documentos.forEach(doc => {
        const data = doc.data()
        if (data.category) {
            categoriasSet.add(data.category)
        }
    })

    return Array.from(categoriasSet)
}

export const createOrder = async (orden) => {
    return await addDoc(collection(db, "orders"), orden)
}
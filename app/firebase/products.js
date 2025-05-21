// lib/fetchProducts.js
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

export async function fetchProducts() {
  const querySnapshot = await getDocs(collection(db, 'products'));
  const products = {};
  querySnapshot.forEach((doc) => {
    products[doc.id] = doc.data();
  });
  return products;
}

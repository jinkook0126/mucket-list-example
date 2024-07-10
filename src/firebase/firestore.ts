import firebasedb from './index'
import {getFirestore} from 'firebase/firestore'

const firestore = getFirestore(firebasedb)

export default firestore;
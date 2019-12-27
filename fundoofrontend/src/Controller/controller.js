import firebaseData from '../configuration/config';
let db=firebaseData.firestore()
export async function userFire (user){
    let data={
        notes :user.notes,
        currentUser: firebaseData.auth().currentUser.uid
    }
    let res
    await db.collection('notes').add(data)
    .then((value) =>{
        res = value.id
    })
    return res

}

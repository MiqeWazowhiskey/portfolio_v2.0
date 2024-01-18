import React, {useEffect, useState} from 'react'
import db, {auth} from '../../firebase'
import Login from './Login'
import Note from './Note'
import {
    collection,
    deleteDoc,
    onSnapshot,
    query,
    doc,
    getDoc,
    updateDoc,
    increment,
    arrayUnion,
    arrayRemove
} from 'firebase/firestore';
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {TiDeleteOutline} from 'react-icons/ti'
import {FcLike} from 'react-icons/fc'
import {Layout} from '../../components/common';

function Wall() {

    const [user, setUser] = useState(null)
    const [values, setValues] = useState([]);


    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                setUser(authUser)
            } else {
                setUser(null)
            }
            console.log(authUser)
        })
    }, [])
    useEffect(() => {
        const q = query(collection(db, 'scripts'))
        const unsub = onSnapshot(q, (snapshot) => {
            let temp = []
            snapshot.forEach(doc => {
                temp.push({...doc.data(), id: doc.id})
            })
            setValues(temp)
        })
        return () => unsub()

    }, [])


    return (
        <>
            <div className='flex flex-col items-start ml-10 '>
                <p className="text-4xl font-mono font-bold w-full">Wall</p>
                <div>{user ? <Note user={user}/> : <Login/>}</div>
                <div className='flex flex-col gap-y-10 mt-10 mb-10 items-start w-96 lg:w-[600px] md:w-[400px]'>
                    {values.map((value) => {
                        return (
                            <div key={value.id}
                                 className="flex flex-col px-4 py-1 w-full border border-amber-100 rounded-xl">
                                <div className='flex flex-row mt-2 gap-x-5 text-2xl w-fit'>
                                    <div className='static'><BsFillArrowRightCircleFill/></div>
                                    <div>{value.message.substring(0, 1).toUpperCase() + value.message.substring(1)}</div>
                                </div>
                                <div className='text-xs flex flex-col items-end gap-x-5 justify-end'>
                                    {value.name}
                                    <div className="flex flex-row gap-2">

                                        <button className='flex flex-row items-center w-fit ' onClick={async () => {
                                            const get = (await getDoc(doc(db, 'scripts', value.id))).data()
                                            try {
                                                if (!get.likedUser.includes(user.email)) {
                                                    await updateDoc(doc(db, 'scripts', value.id), {
                                                        like: increment(1),
                                                        likedUser: arrayUnion(user.email)
                                                    })
                                                } else if (get.likedUser.includes(user.email)) {
                                                    await updateDoc(doc(db, 'scripts', value.id), {
                                                        like: increment(-1),
                                                        likedUser: arrayRemove(user.email)
                                                    })
                                                }
                                            } catch (e) {
                                                console.log(e)
                                            }

                                        }}><span className="mr-2">{value.like}</span><span><FcLike/></span>

                                        </button>
                                        <button className='flex w-fit text-amber-300' onClick={async () => {
                                            try {
                                                const q = (await getDoc(doc(db, 'scripts', value.id))).data()
                                                if (q.mail === user.email)

                                                    await deleteDoc(doc(db, 'scripts', value.id))
                                            } catch (e) {
                                                console.log(e)
                                            }
                                        }
                                        }><span><TiDeleteOutline size={15}/></span>
                                        </button>
                                    </div>
                                </div>


                            </div>

                        )
                    })}

                </div>

            </div>
        </>
    )
}

export default Wall
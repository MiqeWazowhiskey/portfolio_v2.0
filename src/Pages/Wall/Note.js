import React, {  useState } from 'react';
import db, { auth } from '../../firebase';
import { collection , doc  , getDoc, getDocs, onSnapshot, query, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
function Note({ user }) {
  const [script, setScript] = useState('');
 
  const res = async (script) => {
    const id = uuidv4()
    await setDoc(doc(db, '/scripts',id), {
      id:id,
      message: script,
      name : user.displayName,
      mail : user.email,
      like : 0,
      likedUser: ["example@gmail.com"]
    }).then(() => {
      setScript('');
    });
  };
  
  
  
  return (
    <div className="flex flex-col  justify-center items-center gap-y-8 md:justify-center md:items-center md:gap-y-4">
      <div className="flex flex-col items-center">
        <h4 className="font-bold">Welcome... </h4>
        {user.displayName}
      </div>
      <div>
        <button
          className="bg-blue-600 rounded-lg hover:bg-blue-300"
          onClick={() => auth.signOut()}
        >
          <p className="px-2 py-2">Logout</p>
        </button>
      </div>
      <div className="flex justify-center h-16 border p-2 gap-x-2">
        <input
          placeholder="Type Something..."
          size={28}
          className="underline"
          value={script}
          onChange={(e) => setScript(e.target.value)}
        />
        <button
          className="px-5  rounded-lg border bg-gray-100 text-black"
          onClick={() => {
            res(script);
          }}
        >
          Submit
        </button>
      </div>
      
    </div>
  );
}

export default Note;

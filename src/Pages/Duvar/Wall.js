import React, { useEffect, useState } from 'react';
import db, { auth } from '../../firebase';
import {
  collection,
  doc,
  QuerySnapshot,
  setDoc
} from 'firebase/firestore/lite';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
function Wall({ user }) {
  const [script, setScript] = useState('');
  const [values, setValues] = useState([]);
  const res = async (script) => {
    await setDoc(doc(db, '/scripts', uuidv4()), {
      kullanıcı: script
    }).then(() => {
      setScript('');
    });
  };
  return (
    <div className="flex flex-col  justify-center items-center gap-y-8 md:justify-center md:items-center md:gap-y-4">
      <div className="flex flex-col items-center">
        <h4 className="font-bold">Hoşgeldiniz... </h4>
        {user.displayName}
      </div>
      <div>
        <button
          className="bg-blue-600 rounded-lg hover:bg-blue-300"
          onClick={() => auth.signOut()}
        >
          <p className="text-white px-2 py-2">Logout</p>
        </button>
      </div>
      <div className="flex justify-center h-16 border p-2 gap-x-2">
        <input
          placeholder="Buraya bir not bırak..."
          size={40}
          className="underline"
          value={script}
          onChange={(e) => setScript(e.target.value)}
        />
        <button
          className="px-5  rounded-lg border bg-gray-100"
          onClick={() => {
            res(script);
          }}
        >
          Submit
        </button>
      </div>
      <div className="flex"></div>
    </div>
  );
}

export default Wall;

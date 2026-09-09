'use client';
import {useState} from 'react';
export default function AddToBag({slug}:{slug:string}){const [message,setMessage]=useState('');return <><button className="button" onClick={()=>{try{const old=JSON.parse(sessionStorage.getItem('hcs-bag')||'[]');const bag=Array.isArray(old)?old:[];sessionStorage.setItem('hcs-bag',JSON.stringify([...new Set([...bag,slug])]));setMessage('Added to your bag.')}catch{setMessage('Your browser could not save this item. Please enable session storage.')}}}>Add to bag</button><span role="status" style={{fontSize:14}}>{message}</span></>}

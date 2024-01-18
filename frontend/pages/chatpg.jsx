import React from 'react';
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';

function Chatpg() {
    // Define fetchChats function outside useEffect
    const [datas,setdatas]=useState([]);
    const fetchChats = async () => {
        console.log("Fetching chats...");
        try {
            const {data} = await axios.get("/api/chats");
            console.log(data);
            setdatas(data);
        } catch (error) {
            console.error("Error fetching chats:", error);
        }
    };

    // Call fetchChats inside useEffect
    useEffect(() => {
        fetchChats();
    }, []);

    return (
        <>
            <h1>Chat Page</h1>
            {
            datas.map((ele)=>{
                return <h1 key={ele._id}>{ele.chatName}</h1>
            })}
        </>
    );
}

export default Chatpg;

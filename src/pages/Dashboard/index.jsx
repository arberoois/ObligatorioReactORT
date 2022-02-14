import React from 'react'
import Top5 from "../../components/Top5";
import GrafCiudad from "../../components/GrafCiudad";
import GrafCategoria from "../../components/GrafCategoria";
import toast, { Toaster } from "react-hot-toast";

const Index = () => {
    return (
        <div>
            <Top5 />
            <hr />
            <GrafCiudad />
            <hr />
            <GrafCategoria />
            <hr />
            <Toaster />
        </div>
    )
}

export default Index

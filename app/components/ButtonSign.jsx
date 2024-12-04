'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'


const ButtonSign = () => {

    const router = useRouter()
    const handleClickLogin = () => {
        router.push('/sign-in')
    }
    const handleClicksignup = () => {
        router.push('/sign-up')
    }

    return (

        <div className=" place-items-center gap-4 flex">


            <div className=' mx-5 scale-150'>
                <UserButton></UserButton>
            </div>


            <button onClick={handleClickLogin} className=" font-Abrial text-4xl bg-primary2 p-2 rounded-xl shadow-xl shadow-primary2/40  text-white ">login</button>
            <button onClick={handleClicksignup} className=" font-Abrial text-4xl bg-primary5 p-2 rounded-xl shadow-xl shadow-primary5/40  text-white ">Sign Up</button>

        </div>

    )
}

export default ButtonSign
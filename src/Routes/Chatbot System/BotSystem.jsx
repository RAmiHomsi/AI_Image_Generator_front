import React from 'react'
import { Card } from '../../Components/Cards/Card'


export const BotSystem = () => {
  return (
    <div className='flex flex-col relative top-52'>
    <p className='m-auto mb-10 text-2xl'>Choose your Bot</p>
    <div className='w-8/12 m-auto flex justify-center'>
        <Card 
        src={"https://avatarfiles.alphacoders.com/262/262104.jpg"}
        name={"Programmer Ninja"}
        description={"Your helpful Coder Bot"}/>
        <Card 
        src={"https://i.pinimg.com/736x/a6/18/16/a618162dbc7e381d40c2d6d8230f5b13.jpg"}
        name={"Trivia and Quiz Bot"}
        description={"Are you up for Challenges ? "}/>
        <Card 
        src={"https://ae01.alicdn.com/kf/S71bbb6efac904480b69a308aee040dcaa.jpg_640x640q90.jpg"}
        name={"Educational Bot"}
        description={"This bot will hold your hands till you finish the topic"}/>
    </div>
    </div>
  )
}

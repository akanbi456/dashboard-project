import { GoGoal } from "react-icons/go";
import { GrPlan } from "react-icons/gr";
import {IoIosStats,IoIosSettings,IoIosPerson,IoIosPersonAdd, IoIosEyeOff,IoIosLogIn,IoIosLogOut} from "react-icons/io"
import { FaChartBar,FaCalendarAlt,FaUsersCog,FaListAlt,FaFacebookMessenger,  } from "react-icons/fa";
import user05 from "../assets/user05.jpg"
import user02 from "../assets/user02.jpg"
import user03 from "../assets/user03.jpg"
import user04 from "../assets/user04.jpg"
import { href } from "react-router-dom";
export const links =[
    {
        href:"#",
        icon:FaChartBar,
        text:"Dashboard",
        
    },{
        href:"#",
        icon:FaCalendarAlt,
        text:"kanban",
        badge:{
            text:"pro",
            color:"bg-gray-100 text-gray-800",
            darkColor:"dark:bg-gray-700 dark:text-gray-300"
        },
    },
    {
            href:"#",
            icon:FaFacebookMessenger,
            text:"inbox",
             badge:{
            text:4,
            color:"bg-gray-100 text-gray-800",
            darkColor:"dark:bg-gray-700 dark:text-gray-300"
        },
    },
    {
        href:"#",
        icon:FaUsersCog,
        text:"Users"
    },{

        href:"#",
        icon:FaListAlt,
        text:"Products",
        },
        {
            href:"#",
            icon:IoIosLogIn,
            text:"Sign In",
        },{
            href:"#",
            icon:IoIosLogOut,
            text:"Sign up",
        },
        
]
export const employeesData = [
    {
        title:"Total Employees",
        icon:IoIosPerson,
        count:200,
        bgColor:"bg-gray-100",
    },
    {
        title: "on Leave",
        icon: IoIosEyeOff,  
        count: 15,
        bgColor: "bg-blue-100",
    },
    {
        title: "New Joinee",
        icon: IoIosPersonAdd,
        count: 25,
        bgColor: "bg-yellow-100",
    },
]
export  const ShortcutLink= [
    {
       
        icon: GoGoal,
        title: "Goals",
    },
    {
        
        icon: GrPlan,
        title: "Plans",
    },
    {
       
        icon: IoIosStats,
        title: "Statistics",
    },
    {
        
        icon: IoIosSettings,
        title: "Settings",
    },
    
]


export const users = [
  {
    name: "Samuel",
    role: "Python Developer",
    image: user03,           
    bgColor: "bg-yellow-100",
    country: "USA",         
  },
  {
    name: "Qudus",
    role: "Graphic Designer",
    image: user02,
    bgColor: "bg-blue-100",
    country: "UK",
  },
  {
    name: "Aisha",
    role: "Frontend Developer",
    image: user05,
    bgColor: "bg-green-100",
    country: "Nigeria",
  },
  {
    name: "Soffy",
    role: "Product Manager",
    image: user04,
    bgColor: "bg-red-100",
    country: "Dubai",
  },
]

export const events = [
    {
        title: "Upcoming Meeting",
        date: "1 August",
        time: "10:00 AM",
        description: "Discuss project updates and next steps.",
    },
    {
        title: "Client Presentation",
        date: "10 April",
        time: "2:00 PM",
        description: "Present the new product features to the client.",
        
    },
    {
        title: "Team Building Activity",
        date: "10 March",
        time: "1:00 PM",
        
        description: "Fun activities to strengthen team bonds.",
    }

]

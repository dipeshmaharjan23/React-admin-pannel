import image from './assets/mine.jpg'

export const userColumn = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "user", headerName: "User", width: 230,
        renderCell:(params) => {
            return (
               <div className='cellImage'>
                 <img className="cellImg" src={params.row.img} alt="avatar"  />
                {params.row.username}
               </div>
            )
        }
    },
    {
        field :"email" ,headerName :"Email" , width :270,
    },
    {
        field :"age" ,headerName :"Age" , width :150,
    },
    {
        field :"status" ,headerName :"Status" , width :150,
        renderCell:(params)=>{
            return(
                <div className={`cellWithStatus ${params.row.status}`} >{params.row.status}</div>
            )
        
        }
    },
]

export const userRow = [
    {
        id: 1,
        username: "Dipesh Maharjan",
        img: image,
        status: "active",
        email: "mhr.dipesh.2022@gmail.com",
        age: 28,
    },
    {
        id: 2,
        username: "John Snow",
        img: require('./assets/mine.jpg'),
        status: "pending",
        email: "snow@gmail.com",
        age: 45,
    },
    {
        id: 3,
        username: "Jamie Lannister",
        img: require('./assets/mine.jpg'),
        status: "passive",
        email: "lannister@gmail.com",
        age: 28,
    },
    {
        id: 4,
        username: "Cerrsie Lannister",
        img: require('./assets/mine.jpg'),
        status: "active",
        email: "Cerrsie.2022@gmail.com",
        age: 28,
    },
    {
        id: 5,
        username: "Cerrsie Lannister",
        img: require('./assets/mine.jpg'),
        status: "active",
        email: "Cerrsie.2022@gmail.com",
        age: 28,
    },
    {
        id: 6,
        username: "Cerrsie Lannister",
        img: require('./assets/mine.jpg'),
        status: "active",
        email: "Cerrsie.2022@gmail.com",
        age: 28,
    }
]
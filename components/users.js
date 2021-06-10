import Link from 'next/link';

const Users = (props)=>{
    return (
        <ul>
            {props.users.map(i=> (
                <li key={i.id}>
                    <h5>{i.first_name}</h5>
                    <h6>Email: {i.email}</h6>
                    <Link href={`/users/${i.id}`}>
                        <a>Ver más</a>
                    </Link>
                </li>
            ))
            }
        </ul>
    )
};

export default  Users;

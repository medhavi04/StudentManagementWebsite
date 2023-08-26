import './table.css'

export default function StudentDetails(props){
    return(
    <>
      <tr>
        <td className='cell'>
            {props.name}
        </td>
        <td className='cell'>
            {props.roll}
        </td>
        <td className='cell'>
            {props.branch}
        </td>
        <td className='cell'>
            {props.gender}
        </td>
        <td className='cell'>
            <img src="https://i.redd.it/6vhqbfthb9c11.jpg" alt="" style={{width:'2.5rem',height:'3rem', padding: '0.2em 0px', objectFit:'contain'}}/>
        </td>
        <td className='cell'>
            <a href="#">More Details</a>
        </td>
      </tr>
    </>
    )
}
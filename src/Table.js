import React from 'react'

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Message</th>
                <th></th>
            </tr>
        </thead>
    ) 
}
const TableBody = (props) => {
    const {dataCharacter} = props;
    let rows = dataCharacter.map((item, index)=> {
        return (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.job}</td>
                <td><button onClick={()=>props.removeCharacter(index)}>remove</button></td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    return (
        <table>
            <TableHeader />
            <TableBody dataCharacter={props.dataCharacter} removeCharacter={props.removeCharacter} />
        </table>
    )
}
  
export default Table
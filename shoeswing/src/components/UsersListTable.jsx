import React from "react";

function UsersListTable(props) {
    return (
        <>
            <tr>
                <td>{props.id}</td>
                <td>{props.first_name}</td>
                <td>{props.last_name}</td>
                <td className="email">{props.email}</td>
            </tr>
        </>
    )
}
export default UsersListTable;
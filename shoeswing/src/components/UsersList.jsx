import React from "react";

function UsersList(props) {
    return (
        <>
            <li>{props.first_name} {props.last_name}</li>
        </>
    )
}
export default UsersList;
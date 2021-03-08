import React from "react";

const ResourcesTable = () => {
    return (
        <div className="resources-table">
            <table className="striped">
                <thead className="">
                    <tr>
                        <th className="center" style={{ width: '5%' }}>Id</th>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        [1, 2, 3, 4, 5, 6, 7].map((i) => (
                            <tr>
                                <td className="center" style={{ width: '5%' }}>{i}</td>
                                <td>Lollipop</td>
                                <td>$7.00</td>
                                <td>Jonathan</td>
                                <td>Lollipop</td>
                                <td>$7.00</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ResourcesTable;

import React from 'react';

const PlantRow = ({plant}) => {
    return (
        <div>
            <table className='border'>
                <tbody>
                    <tr>
                        <td className='border'>{plant.name}</td>
                        <td>{plant.name}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PlantRow;
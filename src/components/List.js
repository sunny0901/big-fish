import React from 'react';
import Seperator from './Seperator';

//decontructor props
export default function List({ data, renderRow, renderEmpty = () => null }) {
    if (!!data) {
        return data.map((item, index) =>
            <>
                {renderRow(item, index)}
                {index != data.length - 1 && <Seperator />}
            </>)
    } else {
        // about how to handle no data
        return renderEmpty();
    }
} 
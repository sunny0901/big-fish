import React from 'react';
import { Fragment } from 'react'
import Seperator from './Seperator'

//decontructor props
export default function List({ data, renderRow, renderEmpty = () => null }) {
    if (!!data) {
        return data.map((item, index) =>
            <Fragment key={item.id}>
                {renderRow(item, index, data.length)}
                {index != data.length - 1 && <Seperator />}
            </Fragment>
        )
    } else {
        // about how to handle no data
        return renderEmpty();
    }
} 
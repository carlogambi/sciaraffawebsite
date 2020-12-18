import React from 'react'

const Text = ({content}) =>  
    (<>
        {
            content
                .split('!*!acapo!*!')
                .map(
                    (item, index, array) => 
                        (index === array.length -1)
                        ?
                        [item]
                        :
                        [item,<br/>]
                )
                .flat()
        }
    </>)


export default Text

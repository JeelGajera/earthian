import React from 'react'

function BgObjects() {
    return (
        <>
            <div className="fixed">
                <div className="sm:flex md:flex lg:flex">
                    <div className="overflow-visible opacity-40 animate-ping">
                        <div className="w-[350px] h-[400px] sm:w-[500px] sm:h-[700px] rounded-[40rem] circle-obj1"></div>
                    </div>
                    <div className="overflow-visible opacity-20 animate-ping">
                        <div className="w-[250px] h-[250px] sm:w-[600px] sm:h-[600px] rounded-[40rem] circle-obj2"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BgObjects;
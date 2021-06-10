import React from 'react'
import MaterialTable from 'material-table';
import './table.css'

const Table=()=>{

const data=[
        {event:"New Year 2021",date:"Fri,1 Jan,2021"},
        {event:"Makar Sankranti/Pongal",date:"Thu,14 Jan 2021"},
        {event:"Republic Day",date:"Tue, 26 Jan, 2021"},
        {event:"Mahashivratri",date:"Thu, 11 Mar, 2021"},
        {event:"Holi",date:"Mon,29,Mar,2021"},
        {event:"Good Friday",date:"Fri, 2 Apr, 2021"},
        {event:"Ugadi (Gudi Padwa)",date:"Tue, 13 Apr, 2021"},
        {event:"Rama Navami",date:"Wed,21,Apr,2021"},
        {event:"Labour Day",date:"Sat, 1 May, 2021"},
        {event:"Eid al-Fitr",date:"Thu,13 May 2021"},
        {event:"Independence Day",date:"Sun, 15 Aug, 2021"},
        {event:"Gandhi Jayanti",date:"Sat, 2 Oct, 2021"},
        {event:"MahaNavami, Dussehra",date:"Thu, 14 Oct, 2021/Fri, 15 Oct, 2021"},
        {event:"Karnataka Rajyostava",date:"Mon, 1 Nov, 2021"},
        {event:"Diwali",date:"Thu, 4 Nov, 2021"},
        {event:"Christmas",date:"Sat, 25 Dec, 2021"},

    ]
    const columns = [
        {
            title:"Event",field:"event"
        },
        {
            title:"Date",field:"date"
        },
      
    
    ]

    return(
            <div className='holiday-table'>
                <MaterialTable title="Holiday List"
                data={data}
                columns={columns}
                options={{
                    search:false,
                    paging:false,
                    exportButton:false
                }}
                
                />
            </div>

    )
}

export default Table;
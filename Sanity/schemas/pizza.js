export default{
    name:'pizza',
    title:"pizza",
    type:"document",
    fields: [
         {  
            name:'image',
            title:"image",
            type:"image",
            Options: {
                hotspot:true
            }
        },
        {
            name:'name',
            title:"name",
            type:"string",
        },
        {
            name:'slug',
            title:"slug",
            type:"slug",
            Options: {
                source:'name',
                maxLength:90
            }
        },
        {
            name:'price',
            title:"price",
            type: "array",
            of :[{type:'number'}]

        },
        {
            name:'details',
            title:'Details',
            type: 'string',

        }    
    ]
}
const initialData = {
   datas: [
    {
        isApproved: false,
        isRejected: false,
        basic:{
            sku:"TRVAL28726",
            productName: "George Mens Shorts ",
            productIdType: "GTIN",
            productId:"X13422345",
            productIdentifiers:"1212493883133",
            shortDescription:"Clothing",
            keyFeatures:"Won't shrink in wash. Stylish.",
            unitsPerConsumerUnit:"1",
            brand:"Wrangler",
            manufacturer:"Wrangler India Ltd",
            manufacturerPartNumber:"506102567",
            modelNumber:"MFADP002BBQN"
        }
    },
    {
        isApproved: false,
        isRejected: false,
        basic:{
            sku:"TRVAL28726",
            productName: "George Girls' Short-Sleeve Polo",
            productIdType: "GTIN",
            productId:"X12456345",
            productIdentifiers:"1212493883133",
            shortDescription:"Clothing",
            keyFeatures:"Wicks away moisture; Looks fabulous with wedge heels; Won't shrink in wash",
            unitsPerConsumerUnit:"1",
            brand:"Levis",
            manufacturer:"Levis Pvt Ltd.",
            manufacturerPartNumber:"5061025",
            modelNumber:"MFP00112BBQN"
        }
    }
]
}

const tasks = (state = initialData, action) => {
    switch (action.type) {
        case "ADD": {
            let data = action.payload;
            let datas = state.datas;
            datas.unshift(data);
            return {
                ...state,
                datas: datas
            }
            break;
        }

        case "UPDATE": {
            let data = action.payload;
            let datas = state.datas;
            for(let i = 0; i < datas.length; i++ ){
                if(datas[i].basic["productId"] == data.data.basic.productId){
                    datas[i] = data.data;
                    break;
                }
            }
            return {
                ...state,
                datas: datas
            }
            break;
        }
        case "DELETE":{ 
            let data = action.payload;
            let datas = state.datas;
            let index;
            for(let i = 0; i < datas.length; i++ ){
                if(datas[i].basic["productId"] == data.basic.id){
                    index = i;
                    break;
                }
            }
            datas.splice(index, 1);
            return {
                ...state,
                datas: datas
            }
            break;
        }
        default:
            return {
                ...state,
                user: null
            }
            break;
    }
}

module.exports = tasks;
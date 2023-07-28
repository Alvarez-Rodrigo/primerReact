const list = [
    {id:'01', categoria:'hogar' ,nombre:'mesa', stock:10, precio: 1000, descricion:'Mesa de 10x10 de pino', img:'../assent/images.png'},
    {id:'02', categoria:'hogar' ,nombre:'silla', stock:10, precio: 1000, descricion:'silla de pino', img:'../assent/images.png'},
    {id:'03', categoria:'hogar' ,nombre:'alfombra', stock:10, precio: 1000, descricion:'alfombra de 10x10', img:'../assent/images.png'},
    {id:'04', categoria:'hogar' ,nombre:'cortinas', stock:10, precio: 1000, descricion:'cortinas de baño', img:'../assent/images.png'},
    {id:'05', categoria:'jardineria' ,nombre:'macetas', stock:10, precio: 1000, descricion:'Macetas de material', img:'../assent/images.png'},
    {id:'06', categoria:'jardineria' ,nombre:'mangeras', stock:10, precio: 1000, descricion:'Mangeras de 2 metros', img:'../assent/images.png'},
    {id:'07', categoria:'jardineria' ,nombre:'plantas', stock:10, precio: 1000, descricion:'plantas variadas', img:'../assent/images.png'},
    {id:'08', categoria:'jardineria' ,nombre:'piedras', stock:10, precio: 1000, descricion:'piedras decorativas', img:'../assent/images.png'}
]

export const getProducto = () =>{
    return new Promise((resolve, reject)=>{
        let error =false;
        setTimeout(()=>{
            if(error){
                reject('No hay datos, intente más tarde.')
            }else{
                resolve(list);
            }
        },1000)
    })
}

export const getItem = (id) => {
    return new Promise((resolve)=>{
        setTimeout (()=>{
            resolve(list.find((item)=> item.id === id))
        },1000)
    })
} 
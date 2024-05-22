import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


export const getReadBooks = ()=>{
    let readBooks=[]
    const storedReadBooks = localStorage.getItem('readBooks')
    if(storedReadBooks){
        readBooks =JSON.parse(storedReadBooks)
    }
    return readBooks
}


export const saveReadBooks = (book)=>{
    let readBooks = getReadBooks()
    const isExist = readBooks.find(rb => rb.id === book.id)
    if(isExist){
        toast.warning("You added this book to your READ list already ")
    }else{

        readBooks.push(book)
        localStorage.setItem('readBooks', JSON.stringify(readBooks))
        toast.info('You have successfully added this book to your READ list')
    }
}


export const getWishlist = ()=>{
    let wishlistBooks =[]
    const storedWishlist = localStorage.getItem('wishlistBooks')
    if (storedWishlist){
        wishlistBooks=JSON.parse(storedWishlist)
    }
    return wishlistBooks
}

export const saveWishlist = (book)=>{

    let readBooks = getReadBooks()
    const isReadBookExist = readBooks.find(rb => rb.id === book.id)
    if(isReadBookExist){
        toast.warning("You added this book to your READ list already ")
        return
    }

    let wishlistBooks = getWishlist()

    const isExist = wishlistBooks.find(wb => wb.id === book.id)
    if(isExist){
        toast.warning("You added this book to your Wishlist already ")
    }else{

        wishlistBooks.push(book)
        localStorage.setItem('wishlistBooks', JSON.stringify(wishlistBooks))
        toast.info('You have successfully added this book to your Wishlist')
    }
}

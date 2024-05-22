import { useContext, useEffect, useState } from "react";
import { SortContext } from "../../pages/ListedBooks/ListedBooks";
import { getWishlist } from "../../utilities/utilities";
import WishlistCard from "../WishlistCard/WishlistCard";


const Wishlist = () => {
  const [wishlists, setWishlists] = useState([]);

  const sortValue = useContext(SortContext);

  useEffect(() => {
    const storedWishlist = getWishlist();
    setWishlists(storedWishlist);
  }, []);

  const sortedBooks = wishlists.sort((a, b) => b[sortValue] - a[sortValue]);

  return (
    <div className="mt-8">
      {sortedBooks.length > 0 ? (
        sortedBooks.map((wishlist) => (
          <WishlistCard key={wishlist.id} wishlist={wishlist}></WishlistCard>
        ))
      ) : (
        <div className="text-center mt-20 text-4xl text-red-500 font-bold">
          <p>You do not have any books in your wishlist</p>
        </div>
      )}
    </div>
  );
};

export default Wishlist;

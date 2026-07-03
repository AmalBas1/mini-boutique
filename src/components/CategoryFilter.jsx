function CategoryFilter ({products, setCategory}){
    const categories = ["Tous", ...new Set(products.map((p)=>p.categorie))];


    return(
        <div className="category-filter">
            {categories.map((cat) =>(
                <button key={cat} onClick={() =>setCategory(cat)}>
                    {cat}
                </button>
            )
            )}
            

        </div>
    )
}
export default CategoryFilter;
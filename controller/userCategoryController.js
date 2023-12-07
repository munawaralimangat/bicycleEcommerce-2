const Product = require('../model/schema/productSchema')
const Category = require('../model/schema/categorySchema')

module.exports.viewMountain = async (req, res) => {
    try {
        const mountainBikesCategories = await Category.find({ category_name: 'Mountain Bikes' });

        if (!mountainBikesCategories || mountainBikesCategories.length === 0) {
            return res.status(404).json({ message: 'Category not found' });
        }
        const categoryIds = mountainBikesCategories.map(category => category._id);
        const mountainBikesProducts = await Product.find({ category_name: { $in: categoryIds } });

        console.log("Mountain Bikes Products:", mountainBikesProducts);
        res.render('user/mountainBikes', { mountainBikesProducts });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports.viewRoadBikes = async (req,res)=>{
    try{
        const roadBikesCategories = await Category.find({category_name:"Road Bikes"});

        if(!roadBikesCategories || roadBikesCategories.length === 0){
            return res.status(404).json({ message: 'Category not found' });
        }
        const categoryIds = roadBikesCategories.map(category => category._id);
        const roadBikesProducts = await Product.find({category_name:{$in:categoryIds}})
        console.log(roadBikesProducts)
        res.render('user/roadBikes',{roadBikesProducts})

    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal server error"})
    }
}

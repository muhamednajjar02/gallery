/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemCard = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = product.images.slice(0, 4); // نأخذ فقط أول 4 صور

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500); // تغيير الصورة كل 1.5 ثانية
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="card shadow-sm" style={{ width: "18rem" }}>
      <img
        src={images[currentImageIndex]}
        alt={product.title}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover", transition: "transform 0.5s ease-in-out" }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text text-muted">{product.description}</p>
        <p className="text-primary fw-bold">${product.price}</p>
        <div className="d-flex gap-2">
          <button className="btn btn-primary w-100">Add To Cart</button>
          <button className="btn btn-secondary w-100">Show Details</button>
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]); // لعرض 4 منتجات فقط

  // تحميل جميع المنتجات عند بداية التحميل 
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products); // تخزين جميع المنتجات
        setDisplayedProducts(data.products.slice(0, 4)); // عرض أول 4 منتجات
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // تحديث الصورة والمعلومات عند التنقل
  const changeProductImage = async () => {
    try {
      // اختيار منتج عشوائي من المنتجات المخزنة
      const randomIndex = Math.floor(Math.random() * products.length);
      const productId = products[randomIndex].id; // أخذ id المنتج العشوائي
      const response = await fetch(`https://dummyjson.com/products/${productId}`);
      const data = await response.json();

      // التأكد من أن الواجهة تحتوي دائمًا على 4 منتجات فقط
      setDisplayedProducts((prevProducts) => {
        const updatedProducts = [...prevProducts];
        updatedProducts.shift(); // إزالة المنتج الأول
        updatedProducts.push(data); // إضافة المنتج الجديد
        return updatedProducts.slice(0, 4); // التأكد من أن العدد لا يتجاوز 4
      });
    } catch (error) {
      console.error("Error fetching product image:", error);
    }
  };

  // استخدام setInterval لتوليد صورة جديدة بشكل دوري
  useEffect(() => {
    const interval = setInterval(() => {
      changeProductImage(); // توليد صورة جديدة بشكل دوري
    }, 5000); // التحديث كل 5 ثوانٍ

    return () => clearInterval(interval); // تنظيف الـ interval عند الخروج
  }, [products]);

  return (
    <div className="d-flex align-items-center justify-content-between p-3">
      <div className="d-flex gap-3 overflow-auto">
        {displayedProducts.map((product) => (
          <ItemCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

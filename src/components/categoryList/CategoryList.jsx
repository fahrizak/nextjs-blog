import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";

const categories = [
  "Education",
  "Kids",
  "Economy",
  "Technology",
  "AI",
  "Teenager",
];

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Post Categories</h1>
      <div className={styles.categories}>
        {categories.map((category) => (
          <Link
            key={category}
            href={`/blog?cat=${category}`}
            className={`${styles.category} ${styles[category.toLowerCase()]}`}
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;

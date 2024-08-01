"use client";
import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";

const Comments = () => {
  const isAuthenticated = true; // Hardcoded authentication status

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {isAuthenticated ? (
        <div className={styles.write}>
          <textarea placeholder="write a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {[
          {
            _id: "1",
            user: {
              name: "John Doe",
              image: "/p1.jpeg",
            },
            createdAt: "2024-01-01",
            desc: "This is a hardcoded comment. Great post!",
          },
          {
            _id: "2",
            user: {
              name: "Jane Smith",
              image: "/p1.jpeg",
            },
            createdAt: "2024-01-02",
            desc: "Another hardcoded comment. I learned a lot from this.",
          },
        ].map((item) => (
          <div className={styles.comment} key={item._id}>
            <div className={styles.user}>
              {item.user.image && (
                <Image
                  src={item.user.image}
                  alt=""
                  width={50}
                  height={50}
                  className={styles.image}
                />
              )}
              <div className={styles.userInfo}>
                <span className={styles.username}>{item.user.name}</span>
                <span className={styles.date}>{item.createdAt}</span>
              </div>
            </div>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;

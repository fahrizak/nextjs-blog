import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          {/* tanggal post */}
          <span className={styles.date}>2023-10-01 - </span>
          {/* slug category */}
          <span className={styles.category}>TEKNOLOGI</span>
        </div>
        {/* judul */}
        <Link href={`/posts/teknologi-terkini`}>
          <h1>Inovasi Teknologi Terkini</h1>
        </Link>
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        {/* descripsi singkat artikel */}
        <div
          className={styles.desc}
          dangerouslySetInnerHTML={{
            __html:
              "Inovasi teknologi terkini telah membawa perubahan signifikan dalam berbagai sektor. Dari pengembangan AI hingga revolusi dalam teknologi kesehatan, kita melihat banyak perkembangan yang menjanjikan.",
          }}
        />
        {/* read more link */}
        <Link href={`/posts/teknologi-terkini`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;

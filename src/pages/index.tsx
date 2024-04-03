import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ShelterCard from "@/components/cards/ShelterCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <ShelterCard />
      </main>
    </>
  );
}

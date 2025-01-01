import Header from "@/components/Header/Header";
import pageStyles from './page.module.scss';

export default function Home() {
  return (
    <div className={pageStyles.home_container}>
      <Header />
    </div>
  )
}

import Header from "./HeaderFooter/components/Header";
import CardImg from "./HeaderFooter/components/card-img";
import CardText from "./HeaderFooter/components/card-text";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>QWIC Website</h1>
        <CardText 
          bcolor="dark-pink" 
          fcolor="light-pink" 
          title="Title" 
          body="Fostering community for all women, underrepresented minorities, and anyone passionate about technology."
        />
        <CardImg/>
      </main>
    </div>
  );
}
